import React, { Suspense } from "react";
import { getAllPosts } from "@/lib/blog";
import { BlogPageClient } from "./blog-client";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Suspense fallback={null}>
      <BlogPageClient posts={posts} />
    </Suspense>
  );
}
