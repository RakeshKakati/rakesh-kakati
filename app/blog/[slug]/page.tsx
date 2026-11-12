import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCta } from "@/components/post-cta";
import { Markdown } from "@/lib/markdown";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Writing" };
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">
        <Link href="/blog" className="hover:text-foreground">
          Writing
        </Link>
        <span className="mx-2">/</span>
        {formatDate(post.date)} · D2C
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{post.description}</p>
      <div className="mt-10">
        <Markdown source={post.body} />
      </div>
      <PostCta track={post.pillar} />
    </article>
  );
}
