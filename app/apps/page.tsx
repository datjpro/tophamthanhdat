import { Suspense } from "react";
import type { Metadata } from "next";
import { AppsClientPage } from "./apps-client";

export const metadata: Metadata = {
  title: "Kho Phần Mềm & Công Cụ Tuyển Chọn | Tô Đạt",
  description:
    "Bộ sưu tập các ứng dụng, phần mềm lập trình, thiết kế và công cụ hỗ trợ năng suất cao do Tô Đạt tuyển chọn và khuyên dùng.",
};

export default function AppsPage() {
  return (
    <Suspense fallback={null}>
      <AppsClientPage />
    </Suspense>
  );
}
