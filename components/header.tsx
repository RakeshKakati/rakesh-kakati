import Link from "next/link";
import { BookLink } from "@/components/book-link";

const links = [
  { href: "/#offers", label: "Offers" },
  { href: "/#work", label: "Work" },
  { href: "/blog", label: "Writing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="min-w-0">
          <span className="block text-sm font-medium tracking-tight">
            Rakesh Kakati
          </span>
          <span className="hidden text-xs text-muted sm:block">
            D2C performance · B2B pipeline
          </span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Primary">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookLink className="px-3 py-2 sm:px-4">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book a 30-min call</span>
          </BookLink>
        </nav>
      </div>
    </header>
  );
}
