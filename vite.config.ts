import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

// Standalone Vite config — no build-time dependency on Lovable.
// Wires up the same plugin set the app needs directly:
//   - Tailwind CSS v4
//   - tsconfig path aliases (@/*)
//   - TanStack Start (SSR; server entry redirected to src/server.ts)
//   - Nitro (build only) targeting Vercel — emits the .vercel/output
//     Build Output API bundle that Vercel serves natively
//   - React
// CSS uses Lightning CSS in dev and build so the dev preview matches the
// built output (Vite otherwise uses PostCSS in dev, Lightning CSS at build).
export default defineConfig(({ command }) => ({
  css: { transformer: "lightningcss" },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  server: {
    port: 8080,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
    }),
    // Nitro is a build-time deploy plugin; it must not load into the dev server.
    ...(command === "build" ? [nitro({ preset: "vercel" })] : []),
    viteReact(),
  ],
}));
