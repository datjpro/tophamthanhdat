import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-5xl px-1 py-3">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back Home
          </Link>
        </Button>
        <p className="mono-label text-accent">Lab Notes</p>
      </div>

      <h1 className="section-title mb-9">Research and Build Notes</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="glass-panel">
            <CardHeader className="space-y-3">
              <p className="mono-label text-muted-foreground">
                {new Date(post.date).toLocaleDateString("vi-VN")} / {post.readingTime}
              </p>
              <CardTitle className="display-text text-4xl leading-none">{post.title}</CardTitle>
              <CardDescription>{post.summary}</CardDescription>
              <Button asChild variant="link" size="sm" className="w-fit px-0 text-primary">
                <Link href={`/blog/${post.slug}`}>
                  Read Full
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
