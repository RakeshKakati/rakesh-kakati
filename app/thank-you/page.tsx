import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouConversion } from "@/components/thank-you-conversion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Details received",
  robots: { index: false, follow: false },
};

const prep = [
  "Company and stage.",
  "The one channel that already produces anything.",
  "The number you want to move: ROAS, contribution margin, or qualified pipeline.",
];

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20">
      <ThankYouConversion />
      <p className="text-xs uppercase tracking-[0.22em] text-accent">Received</p>
      <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
        I have your details.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        I&apos;ll read them and write back to set the 30 minutes.
      </p>
      <h2 className="mt-10 text-sm uppercase tracking-[0.18em] text-muted">
        Have this ready
      </h2>
      <ol className="mt-4 space-y-3">
        {prep.map((item, index) => (
          <li key={item} className="flex gap-3">
            <span className="font-serif text-accent">0{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-col gap-3 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="text-muted underline decoration-line underline-offset-4 hover:text-foreground"
        >
          Or email {site.email}
        </a>
        <Link
          href="/"
          className="text-muted underline decoration-line underline-offset-4 hover:text-foreground"
        >
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
