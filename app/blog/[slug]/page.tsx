import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Button asChild variant="outline" size="sm" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="size-4" />
          Quay về Blog
        </Link>
      </Button>

      <article className="rounded-3xl border border-border/70 bg-card/65 p-6 md:p-10">
        <div className="mb-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {new Date(post.date).toLocaleDateString("vi-VN")} · {post.readingTime}
          </p>
          <h1 className="section-title text-3xl md:text-4xl">{post.title}</h1>
          <p className="text-muted-foreground">{post.summary}</p>
        </div>
        <div className="mdx-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
