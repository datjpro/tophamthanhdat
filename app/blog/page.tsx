import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Quay về trang chủ
          </Link>
        </Button>
        <h1 className="section-title text-3xl md:text-4xl">Blog</h1>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.slug} className="bg-card/65">
            <CardHeader className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {new Date(post.date).toLocaleDateString("vi-VN")} · {post.readingTime}
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.summary}</CardDescription>
              <Button asChild variant="outline" size="sm" className="w-fit">
                <Link href={`/blog/${post.slug}`}>
                  Đọc full
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
