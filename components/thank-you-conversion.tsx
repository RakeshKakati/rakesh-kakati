"use client";

import { useEffect } from "react";

export function ThankYouConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const bookingUid =
      params.get("uid") ||
      params.get("bookingUid") ||
      params.get("bookingId") ||
      params.get("booking_uid");

    const storageKey = bookingUid
      ? `ads_conversion_${bookingUid}`
      : "ads_conversion_thankyou";

    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    if (typeof window.gtag !== "function") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
    }

    const conversionData: {
      send_to: string;
      transaction_id?: string;
    } = {
      send_to: "AW-11080640559/uoATCMX9nbcdEK_Q1KMp",
    };

    if (bookingUid) {
      conversionData.transaction_id = bookingUid;
    }

    window.gtag("event", "conversion", conversionData);
    sessionStorage.setItem(storageKey, "1");
  }, []);

  return null;
}
