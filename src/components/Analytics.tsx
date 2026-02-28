import { useEffect } from "react";

const GTM_ID = "AW-17501252072";

function loadAnalytics() {
  if (document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", GTM_ID);
}

export default function Analytics() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;

    const onLoad = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadAnalytics(), { timeout: 2500 });
      } else {
        globalThis.setTimeout(loadAnalytics, 1500);
      }
    };

    if (document.readyState === "complete") {
      onLoad();
      return;
    }

    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
