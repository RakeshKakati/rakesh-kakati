"use client";

import { useEffect } from "react";

export function GclidCapture() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    const gbraid = params.get("gbraid");
    const wbraid = params.get("wbraid");

    if (gclid && !sessionStorage.getItem("gclid")) {
      sessionStorage.setItem("gclid", gclid);
    }
    if (gbraid && !sessionStorage.getItem("gbraid")) {
      sessionStorage.setItem("gbraid", gbraid);
    }
    if (wbraid && !sessionStorage.getItem("wbraid")) {
      sessionStorage.setItem("wbraid", wbraid);
    }

    if (!sessionStorage.getItem("landing_page")) {
      sessionStorage.setItem("landing_page", window.location.href);
    }

    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ] as const;

    for (const param of utmParams) {
      const value = params.get(param);
      if (value && !sessionStorage.getItem(param)) {
        sessionStorage.setItem(param, value);
      }
    }
  }, []);

  return null;
}
