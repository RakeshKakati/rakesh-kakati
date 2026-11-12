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
  }, []);

  return null;
}
