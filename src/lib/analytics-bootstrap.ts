/** Self-contained browser bootstrap, serialized in the root head. */
export function analyticsBootstrap(id: string) {
  if (window.location.hostname !== "upliftmedicalms.com") return;
  const state = window as unknown as Record<string, unknown>;
  if (state.upliftAnalyticsInitialized) return;
  state.upliftAnalyticsInitialized = true;
  function safe(path: string) {
    return (
      ["/", "/about", "/services", "/resources"].includes(path.replace(/\/$/, "") || "/") ||
      /^\/locations\/[a-z-]+$/.test(path)
    );
  }
  function update(url: string | URL | null | undefined = window.location.href) {
    try {
      const target = new URL(String(url || window.location.href), window.location.origin);
      state[`ga-disable-${id}`] =
        target.origin !== window.location.origin || !safe(target.pathname);
    } catch {
      state[`ga-disable-${id}`] = true;
    }
  }
  update();
  // Suppress collection before SPA history changes, not after a route effect.
  for (const method of ["pushState", "replaceState"] as const) {
    const original = window.history[method].bind(window.history);
    window.history[method] = function (data, unused, url) {
      update(url);
      return original(data, unused, url);
    };
  }
  window.addEventListener("popstate", () => update());
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element | null)?.closest?.("a")?.getAttribute("href");
      if (link?.startsWith("/")) update(link);
    },
    true,
  );
  const queue = (state.dataLayer ??= []) as IArguments[];
  function gtag(..._args: unknown[]) {
    // Google’s documented gtag queue consumes the arguments object.
    // eslint-disable-next-line prefer-rest-params
    queue.push(arguments);
  }
  state.gtag = gtag;
  let referrer = "";
  try {
    const ref = new URL(document.referrer);
    if (/(^|\.)(google\.[a-z.]+|bing\.com)$/.test(ref.hostname)) referrer = ref.origin + "/";
  } catch {
    /* Empty referrer is normal. */
  }
  state.upliftSearchReferrer = referrer;
  gtag("js", new Date());
  gtag("config", id, {
    send_page_view: false,
    page_location: window.location.origin + window.location.pathname,
    page_title: "Uplift Medical",
    page_referrer: referrer,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}
