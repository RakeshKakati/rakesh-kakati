import { BookLink } from "@/components/book-link";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 p-3 backdrop-blur md:hidden">
      <BookLink className="w-full">Book a 30-min call</BookLink>
    </div>
  );
}
