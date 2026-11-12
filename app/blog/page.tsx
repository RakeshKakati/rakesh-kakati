import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "D2C revenue notes for Shopify stores: conversion, product pages, AOV, checkout, and the leaks that hide 40–60% of potential revenue.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">Writing</p>
      <h1 className="mt-4 font-serif text-5xl leading-tight">
        Shopify revenue, then the demand system.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        The D2C pillar is live. B2B posts — one channel before a second, hiring
        after the motion repeats, earning the meeting — are next. Every piece
        ends on the same 30-minute call.
      </p>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block py-6 hover:text-accent">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                {formatDate(post.date)} · D2C
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-snug text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 text-muted">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
