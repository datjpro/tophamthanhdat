import type { Metadata } from "next";
import { Crimson_Pro, Inter, JetBrains_Mono } from "next/font/google";
import { SiteChrome } from "@/components/layout/site-chrome";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To Dat Portfolio",
  description: "Hybrid editorial portfolio inspired by stitch layouts.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg" rel="stylesheet" type="text/css"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const clean = (el) => {
                  if (el && el.removeAttribute) {
                    if (el.hasAttribute('bis_skin_checked')) el.removeAttribute('bis_skin_checked');
                    const elements = el.querySelectorAll('[bis_skin_checked]');
                    for (let i = 0; i < elements.length; i++) {
                      elements[i].removeAttribute('bis_skin_checked');
                    }
                  }
                };
                const observer = new MutationObserver((mutations) => {
                  for (let i = 0; i < mutations.length; i++) {
                    const addedNodes = mutations[i].addedNodes;
                    for (let j = 0; j < addedNodes.length; j++) {
                      clean(addedNodes[j]);
                    }
                  }
                });
                observer.observe(document.documentElement, { childList: true, subtree: true });
                if (typeof window !== 'undefined') {
                  window.addEventListener('DOMContentLoaded', () => clean(document.body));
                  window.addEventListener('load', () => clean(document.body));
                }
              })();
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${crimson.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
