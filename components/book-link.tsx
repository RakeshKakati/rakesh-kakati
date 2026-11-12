"use client";

import { useMemo } from "react";
import { bookingHref, type Track } from "@/lib/site";

type Props = {
  track?: Track;
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function BookLink({
  track,
  children = "Book a 30-min call",
  variant = "solid",
  className = "",
}: Props) {
  const finalHref = useMemo(() => {
    const baseHref = bookingHref(track);

    if (typeof window === "undefined") return baseHref;

    const url = new URL(baseHref);

    const gclid = sessionStorage.getItem("gclid");
    const gbraid = sessionStorage.getItem("gbraid");
    const wbraid = sessionStorage.getItem("wbraid");

    if (gclid) url.searchParams.set("gclid", gclid);
    if (gbraid) url.searchParams.set("gbraid", gbraid);
    if (wbraid) url.searchParams.set("wbraid", wbraid);

    return url.toString();
  }, [track]);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11080640559/uoATCMX9nbcdEK_Q1KMp",
      });
    }
  };

  const styles =
    variant === "solid"
      ? "bg-accent text-ink hover:bg-white"
      : "border border-line text-foreground hover:border-foreground";

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
