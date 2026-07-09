import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { TopUtilityBar } from "@/components/site/TopUtilityBar";
import { SITE } from "@/components/site/site-data";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import { Link as TLink } from "@tanstack/react-router";
import logoPrimary from "@/assets/logo-primary.png";
import heroImage from "@/assets/kenny-injection.jpg";

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
  head: ({ matches }) => {
    // Canonical URL for the current page, emitted site-wide from the root.
    const rawPath = matches[matches.length - 1]?.pathname ?? "/";
    const path = rawPath !== "/" && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;
    const canonical = SITE.url + path;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS" },
        {
          name: "description",
          content:
            "Personalized hormone therapy and peptide treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
        },
        { name: "author", content: "Uplift Medical" },
        {
          property: "og:title",
          content: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS",
        },
        {
          property: "og:description",
          content:
            "Personalized hormone therapy and peptide treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:site_name", content: "Uplift Medical" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS",
        },
        {
          name: "twitter:description",
          content:
            "Personalized hormone therapy and peptide treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
        },
        { property: "og:image", content: SITE.url + heroImage },
        { name: "twitter:image", content: SITE.url + heroImage },
        { name: "theme-color", content: "#0e2a47" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Uplift Medical",
            description:
              "Concierge hormone therapy and peptide treatments in Tupelo, Mississippi. In-person and telehealth across MS and TN.",
            telephone: "+1-662-584-4958",
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 S Thomas St, Suite 102, B",
              addressLocality: "Tupelo",
              addressRegion: "MS",
              postalCode: "38801",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "16:00",
              },
            ],
            sameAs: ["https://www.facebook.com/profile.php?id=61558283480368"],
            image: SITE.url + logoPrimary,
            url: SITE.url,
            priceRange: "$$",
            geo: { "@type": "GeoCoordinates", latitude: 34.2545, longitude: -88.7089 },
            areaServed: [
              "Tupelo MS",
              "Saltillo MS",
              "Pontotoc MS",
              "Amory MS",
              "New Albany MS",
              "Oxford MS",
              "Mississippi",
              "Tennessee",
            ].map((name) => ({ "@type": "Place", name })),
          }),
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "canonical", href: canonical },
        { rel: "icon", href: logoPrimary, type: "image/png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Runs before first paint: reveal animations only hide content when JS is on. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js','')",
          }}
        />
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
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <div className="pb-20 lg:pb-0">
          <Footer />
        </div>
        <MobileCTABar />
      </div>
    </QueryClientProvider>
  );
}
