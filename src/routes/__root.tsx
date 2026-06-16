import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { TopUtilityBar } from "@/components/site/TopUtilityBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { Link as TLink } from "@tanstack/react-router";
import logoPrimary from "@/assets/logo-primary.png.asset.json";
import heroImage from "@/assets/kenny-injection.jpg.asset.json";

function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-24">
      <div className="max-w-lg text-center">
        <span className="eyebrow">Page not found</span>
        <h1 className="mt-4 font-display text-6xl text-primary md:text-7xl">404</h1>
        <p className="mx-auto mt-4 max-w-sm text-base text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <TLink
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium tracking-wide text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Return home
          </TLink>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS" },
      {
        name: "description",
        content:
          "Personalized hormone therapy, medical weight loss, peptide, and IV treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
      },
      { name: "author", content: "Uplift Medical" },
      {
        property: "og:title",
        content: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS",
      },
      {
        property: "og:description",
        content:
          "Personalized hormone therapy, medical weight loss, peptide, and IV treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS",
      },
      {
        name: "twitter:description",
        content:
          "Personalized hormone therapy, medical weight loss, peptide, and IV treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
      },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: logoPrimary.url, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <TopUtilityBar />
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <MobileCTABar />
      </div>
    </QueryClientProvider>
  );
}
