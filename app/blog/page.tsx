import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { withLocale } from "@/lib/i18n";

const BLOG_COPY = {
  vi: {
    backHome: "Ve Trang Chu",
    tag: "Ghi Chu Ky Thuat",
    title: "Nhat Ky Nghien Cuu va Xay Dung",
    readFull: "Doc Bai Viet",
  },
  en: {
    backHome: "Back Home",
    tag: "Lab Notes",
    title: "Research and Build Notes",
    readFull: "Read Full",
  },
} as const;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const locale = "vi" as const;
  const copy = BLOG_COPY[locale];

  return (
    <main className="mx-auto max-w-5xl px-1 py-3">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href={withLocale("/", locale)}>
            <ArrowLeft className="size-4" />
            {copy.backHome}
          </Link>
        </Button>
        <p className="mono-label text-accent">{copy.tag}</p>
      </div>

      <h1 className="section-title mb-9">{copy.title}</h1>

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
                <Link href={withLocale(`/blog/${post.slug}`, locale)}>
                  {copy.readFull}
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
