import Link from "next/link";
import { BookLink } from "@/components/book-link";
import type { Track } from "@/lib/site";

export function PostCta({ track }: { track: Track }) {
  const offer = track === "dtc" ? "/#dtc" : "/#b2b";
  return (
    <aside className="mt-12 border border-line bg-surface p-6 sm:p-8">
      <p className="font-serif text-3xl leading-tight text-foreground">
        If this is the leak, bring it to the call.
      </p>
      <p className="mt-3 max-w-xl text-muted">
        Thirty minutes. The channel that already works, and the number you want
        to move.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <BookLink track={track} />
        <Link
          href={offer}
          className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-foreground"
        >
          See the offer
        </Link>
      </div>
    </aside>
  );
}
