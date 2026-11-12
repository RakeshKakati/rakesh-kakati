import fs from "node:fs";
import path from "node:path";
import type { Track } from "@/lib/site";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  pillar: Track;
  body: string;
};

function parsePost(raw: string, filename: string): Post {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${filename}`);

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  if (data.pillar !== "dtc" && data.pillar !== "b2b") {
    throw new Error(`Post ${filename} needs pillar dtc or b2b`);
  }

  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    date: data.date,
    pillar: data.pillar,
    body: match[2].trim(),
  };
}

export function getAllPosts(): Post[] {
  const dir = path.join(process.cwd(), "content/posts");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parsePost(fs.readFileSync(path.join(dir, file), "utf8"), file))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
