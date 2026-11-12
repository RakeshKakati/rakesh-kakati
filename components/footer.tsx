import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Rakesh Kakati</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/blog" className="hover:text-foreground">
            Writing
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            className="hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
