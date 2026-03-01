export function SiteFooter() {
  return (
    <footer className="mx-auto mb-6 mt-12 w-[min(95%,76rem)] rounded-3xl border border-border/70 bg-card/50 px-6 py-6 text-sm text-muted-foreground">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © {new Date().getFullYear()} To Dat. All rights reserved.</p>
        <p className="font-mono">Made with love & Next.js</p>
      </div>
    </footer>
  );
}
