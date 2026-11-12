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
  const styles =
    variant === "solid"
      ? "bg-accent text-ink hover:bg-white"
      : "border border-line text-foreground hover:border-foreground";

  return (
    <a
      href={bookingHref(track)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
