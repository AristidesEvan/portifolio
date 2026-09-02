import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const title = `${site.name} — ${site.role}`;
const description = site.metaDescription;
const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.nameFull, url: site.linkedin }],
  creator: site.nameFull,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var dark=localStorage.getItem("theme")==="lousa";if(dark){document.documentElement.setAttribute("data-theme","lousa")}document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",dark?"#2A3328":"#F4EFE6")})}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a href="#conteudo" className="skip-link">
          Ir ao conteúdo
        </a>
        <JsonLd />
        <ScrollProgress />
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
