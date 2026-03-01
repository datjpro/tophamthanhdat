import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

type RawFrontmatter = {
  title?: string;
  summary?: string;
  date?: string;
  readingTime?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const readPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(source);
    const frontmatter = data as RawFrontmatter;

    return {
      slug,
      title: frontmatter.title ?? "Untitled",
      summary: frontmatter.summary ?? "",
      date: frontmatter.date ?? "1970-01-01",
      readingTime: frontmatter.readingTime ?? "5 phút",
      content,
    };
  } catch {
    return null;
  }
});

export const getAllPosts = cache(async () => {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        return readPostBySlug(slug);
      }),
  );

  return posts
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export async function getPostBySlug(slug: string) {
  return readPostBySlug(slug);
}
