import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { withLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ slug: string }>;
};

const BLOG_DETAIL_COPY = {
  vi: {
    back: "Ve Blog",
  },
  en: {
    back: "Back to Blog",
  },
} as const;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const locale = "vi" as const;
  const copy = BLOG_DETAIL_COPY[locale];
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-4xl px-2 py-4">
      <Button asChild variant="outline" size="sm" className="mb-8">
        <Link href={withLocale("/blog", locale)}>
          <ArrowLeft className="size-4" />
          {copy.back}
        </Link>
      </Button>

      <article className="glass-panel rounded-3xl p-6 md:p-10">
        <header className="mb-8 space-y-3">
          <p className="mono-label text-muted-foreground">
            {new Date(post.date).toLocaleDateString("vi-VN")} / {post.readingTime}
          </p>
          <h1 className="section-title">{post.title}</h1>
          <p className="text-muted-foreground">{post.summary}</p>
        </header>
        <div className="mdx-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
