import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24">
      <h1 className="font-serif text-5xl">That page is not here.</h1>
      <Link
        href="/"
        className="mt-6 inline-block text-sm underline decoration-line underline-offset-4 hover:decoration-accent"
      >
        Back home
      </Link>
    </div>
  );
}
