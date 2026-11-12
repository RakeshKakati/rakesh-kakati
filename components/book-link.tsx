"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/app/lead";
import type { Track } from "@/lib/site";

type Props = {
  track?: Track;
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  {
    name: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "website",
    label: "Company website",
    type: "text",
    autoComplete: "url",
    placeholder: "https://",
  },
] as const;

export function BookLink({
  track,
  children = "Book a 30-min call",
  variant = "solid",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const styles =
    variant === "solid"
      ? "bg-accent text-ink hover:bg-white"
      : "border border-line text-foreground hover:border-foreground";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
      >
        {children}
        <span aria-hidden="true">→</span>
      </button>
      {open ? <BookDialog track={track} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function BookDialog({
  track,
  onClose,
}: {
  track?: Track;
  onClose: () => void;
}) {
  const router = useRouter();
  const titleId = useId();
  const firstField = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  const pendingRef = useRef(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const [attribution] = useState(() => {
    if (typeof window === "undefined") {
      return {
        gclid: "",
        gbraid: "",
        wbraid: "",
        landing_page: "",
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
      };
    }
    return {
      gclid: sessionStorage.getItem("gclid") || "",
      gbraid: sessionStorage.getItem("gbraid") || "",
      wbraid: sessionStorage.getItem("wbraid") || "",
      landing_page: sessionStorage.getItem("landing_page") || "",
      utm_source: sessionStorage.getItem("utm_source") || "",
      utm_medium: sessionStorage.getItem("utm_medium") || "",
      utm_campaign: sessionStorage.getItem("utm_campaign") || "",
      utm_term: sessionStorage.getItem("utm_term") || "",
      utm_content: sessionStorage.getItem("utm_content") || "",
    };
  });

  useLayoutEffect(() => {
    onCloseRef.current = onClose;
    pendingRef.current = pending;
  });

  useEffect(() => {
    firstField.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !pendingRef.current) onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/70"
        onClick={() => {
          if (!pending) onClose();
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg border border-line bg-surface p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              30 minutes
            </p>
            <h2 id={titleId} className="mt-2 font-serif text-3xl leading-tight">
              Book a call
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={pending}
            className="px-2 text-2xl leading-none text-muted hover:text-foreground disabled:opacity-40"
            aria-label="Close form"
          >
            ×
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Send the basics. I&apos;ll write back to set the time.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setError("");
            const formData = new FormData(event.currentTarget);
            startTransition(async () => {
              const result = await submitLead(formData);
              if (result.ok) {
                router.push("/thank-you");
                return;
              }
              setError(result.error);
            });
          }}
        >
          {track ? <input type="hidden" name="track" value={track} /> : null}
          <input type="hidden" name="gclid" value={attribution.gclid} />
          <input type="hidden" name="gbraid" value={attribution.gbraid} />
          <input type="hidden" name="wbraid" value={attribution.wbraid} />
          <input type="hidden" name="landing_page" value={attribution.landing_page} />
          <input type="hidden" name="utm_source" value={attribution.utm_source} />
          <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
          <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
          <input type="hidden" name="utm_term" value={attribution.utm_term} />
          <input type="hidden" name="utm_content" value={attribution.utm_content} />
          <input
            type="text"
            name="company_fax"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          {fields.map((field, index) => (
            <label key={field.name} className="block text-sm">
              <span className="text-muted">{field.label}</span>
              <input
                ref={index === 0 ? firstField : undefined}
                name={field.name}
                type={field.type}
                required
                autoComplete={field.autoComplete}
                placeholder={"placeholder" in field ? field.placeholder : undefined}
                className="mt-1.5 w-full border border-line bg-background px-3 py-3 text-foreground outline-none focus:border-accent"
              />
            </label>
          ))}
          {error ? (
            <p role="alert" className="text-sm text-accent">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
          >
            {pending ? "Sending…" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
