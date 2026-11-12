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

    const fireConversion = () => {
      if (typeof window.gtag === "function") {
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
      } else if (window.dataLayer) {
        window.dataLayer.push({
          event: "conversion",
          send_to: "AW-11080640559/uoATCMX9nbcdEK_Q1KMp",
          ...(bookingUid && { transaction_id: bookingUid }),
        });
        sessionStorage.setItem(storageKey, "1");
      }
    };

    if (typeof window.gtag === "function") {
      fireConversion();
    } else {
      const checkGtag = setInterval(() => {
        if (typeof window.gtag === "function") {
          clearInterval(checkGtag);
          fireConversion();
        }
      }, 100);

      setTimeout(() => clearInterval(checkGtag), 5000);
    }
  }, []);

  return null;
}
