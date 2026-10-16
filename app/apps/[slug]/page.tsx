import type { Metadata } from "next";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getAllApps, getAppById } from "@/lib/apps-data";
import { AppDetailClient } from "./app-detail-client";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({ slug: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppById(slug);
  if (!app) return { title: "Không tìm thấy ứng dụng | Not Found" };
  return {
    title: `${app.name} | Tô Đạt`,
    description: app.tagline.vi,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppById(slug);
  if (!app) notFound();

  return (
    <Suspense fallback={null}>
      <AppDetailClient app={app} />
    </Suspense>
  );
}
