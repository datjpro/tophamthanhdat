"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Download, FileUp, RefreshCcw, Save } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getDefaultManagedContent,
  getManagedContent,
  isManagedContent,
  type ManagedContent,
} from "@/lib/content-data";
import { clearContentOverrides, writeContentOverrides } from "@/lib/content-storage";
import { normalizeLocale, withLocale } from "@/lib/i18n";

const COPY = {
  vi: {
    title: "Quan Ly Noi Dung",
    desc: "Chinh sua noi dung va anh duoc hien thi tren website. Du lieu duoc luu local.",
    back: "Ve Trang Chu",
    imageTitle: "Anh Hien Thi",
    imageDesc: "Nhap URL anh trong /public hoac URL ben ngoai.",
    jsonTitle: "JSON Noi Dung",
    jsonDesc: "Toan bo noi dung song ngu va du lieu hien thi tren trang.",
    save: "Luu",
    reset: "Khoi Phuc Mac Dinh",
    applyJson: "Ap Dung JSON",
    exportJson: "Xuat JSON",
    importJson: "Nhap JSON",
    saveOk: "Da luu noi dung thanh cong.",
    resetOk: "Da khoi phuc noi dung mac dinh.",
    applyOk: "Da ap dung JSON vao bo sua.",
    invalidJson: "JSON khong hop le hoac sai cau truc.",
    importOk: "Da nhap JSON thanh cong.",
  },
  en: {
    title: "Content Manager",
    desc: "Edit content and images displayed across the website. Data is stored locally.",
    back: "Back Home",
    imageTitle: "Display Images",
    imageDesc: "Use a path under /public or an external image URL.",
    jsonTitle: "Content JSON",
    jsonDesc: "Complete bilingual content and display data for the site.",
    save: "Save",
    reset: "Reset Defaults",
    applyJson: "Apply JSON",
    exportJson: "Export JSON",
    importJson: "Import JSON",
    saveOk: "Content saved successfully.",
    resetOk: "Defaults restored.",
    applyOk: "JSON applied to editor.",
    invalidJson: "Invalid JSON or incompatible structure.",
    importOk: "JSON imported successfully.",
  },
} as const;

function toPrettyJson(value: ManagedContent) {
  return JSON.stringify(value, null, 2);
}

function parseManagedContent(text: string) {
  const parsed = JSON.parse(text) as unknown;
  if (!isManagedContent(parsed)) return null;
  return parsed;
}

export default function ContentAdminPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const locale = normalizeLocale(searchParams.get("lang"));
  const copy = COPY[locale];

  const [draft, setDraft] = useState<ManagedContent>(() => getManagedContent());
  const [jsonText, setJsonText] = useState<string>(() => toPrettyJson(getManagedContent()));
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  function updateDraft(next: ManagedContent) {
    setDraft(next);
    setJsonText(toPrettyJson(next));
    setError("");
  }

  function updateImageField(field: keyof ManagedContent["imageMap"], value: string) {
    updateDraft({
      ...draft,
      imageMap: {
        ...draft.imageMap,
        [field]: value,
      },
    });
  }

  function updateGalleryImage(index: number, value: string) {
    const nextGallery = [...draft.imageMap.aboutGallery];
    nextGallery[index] = value;
    updateDraft({
      ...draft,
      imageMap: {
        ...draft.imageMap,
        aboutGallery: nextGallery,
      },
    });
  }

  function applyJsonText() {
    try {
      const parsed = parseManagedContent(jsonText);
      if (!parsed) {
        setError(copy.invalidJson);
        return;
      }
      setDraft(parsed);
      setStatus(copy.applyOk);
      setError("");
    } catch {
      setError(copy.invalidJson);
    }
  }

  function saveChanges() {
    writeContentOverrides(draft);
    setStatus(copy.saveOk);
    setError("");
    router.refresh();
  }

  function resetDefaults() {
    const defaults = getDefaultManagedContent();
    clearContentOverrides();
    updateDraft(defaults);
    setStatus(copy.resetOk);
    router.refresh();
  }

  function exportJson() {
    const blob = new Blob([toPrettyJson(draft)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "content-overrides.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function openImportDialog() {
    fileInputRef.current?.click();
  }

  async function importJsonFile(file: File | null) {
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseManagedContent(text);
      if (!parsed) {
        setError(copy.invalidJson);
        return;
      }
      updateDraft(parsed);
      setStatus(copy.importOk);
    } catch {
      setError(copy.invalidJson);
    }
  }

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="mono-label text-accent">{locale === "vi" ? "Admin" : "Admin"}</p>
        <h1 className="section-title">{copy.title}</h1>
        <p className="text-muted-foreground">{copy.desc}</p>
        <div>
          <Button asChild variant="outline" size="sm">
            <Link href={withLocale("/", locale)}>{copy.back}</Link>
          </Button>
        </div>
      </section>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle>{copy.imageTitle}</CardTitle>
          <CardDescription>{copy.imageDesc}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <Input
            value={draft.imageMap.homeHero}
            onChange={(event) => updateImageField("homeHero", event.target.value)}
            placeholder="/portfolio/profile/home-hero.jpg"
          />
          <Input
            value={draft.imageMap.aboutSticky}
            onChange={(event) => updateImageField("aboutSticky", event.target.value)}
            placeholder="/portfolio/profile/about-sticky.jpg"
          />
          <Input
            value={draft.imageMap.resumeProfile}
            onChange={(event) => updateImageField("resumeProfile", event.target.value)}
            placeholder="/portfolio/profile/resume-profile.jpg"
          />
          <Input
            value={draft.imageMap.achievementHero}
            onChange={(event) => updateImageField("achievementHero", event.target.value)}
            placeholder="/portfolio/awards/hutech-code-war-2024.jpg"
          />
          <Input
            value={draft.imageMap.aboutGallery[0] ?? ""}
            onChange={(event) => updateGalleryImage(0, event.target.value)}
            placeholder="/portfolio/profile/gallery-1.jpg"
          />
          <Input
            value={draft.imageMap.aboutGallery[1] ?? ""}
            onChange={(event) => updateGalleryImage(1, event.target.value)}
            placeholder="/portfolio/profile/gallery-2.jpg"
          />
          <Input
            value={draft.imageMap.fallback}
            onChange={(event) => updateImageField("fallback", event.target.value)}
            placeholder="/avatar.svg"
          />
        </CardContent>
      </Card>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle>{copy.jsonTitle}</CardTitle>
          <CardDescription>{copy.jsonDesc}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            className="min-h-[28rem] font-mono text-xs"
            value={jsonText}
            onChange={(event) => setJsonText(event.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            <Button onClick={saveChanges} className="bg-primary text-primary-foreground">
              <Save className="size-4" />
              {copy.save}
            </Button>
            <Button onClick={resetDefaults} variant="outline">
              <RefreshCcw className="size-4" />
              {copy.reset}
            </Button>
            <Button onClick={applyJsonText} variant="outline">
              {copy.applyJson}
            </Button>
            <Button onClick={exportJson} variant="outline">
              <Download className="size-4" />
              {copy.exportJson}
            </Button>
            <Button onClick={openImportDialog} variant="outline">
              <FileUp className="size-4" />
              {copy.importJson}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".json,application/json"
              onChange={(event) => importJsonFile(event.target.files?.[0] ?? null)}
            />
          </div>

          {status && <p className="text-sm text-emerald-400">{status}</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
