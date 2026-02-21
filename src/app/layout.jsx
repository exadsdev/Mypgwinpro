import "./globals.css";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import JsonLd from "@/src/components/JsonLd";
import { ENV } from "@/src/lib/env";
import { absUrl, keywordPack, siteTitle } from "@/src/lib/seo";
import { professionalServiceSchema } from "@/src/lib/schema";

export const metadata = {
  metadataBase: new URL(ENV.siteUrl),
  title: {
    default: siteTitle(),
    template: `%s | ${ENV.siteName}`
  },
  description: ENV.tagline,
  keywords: keywordPack(["รับยิงแอด", "ยิงแอดสายเทา", "ทำโฆษณาสายเทา", "เอเจนซี่สายเทา"]),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: ENV.siteUrl,
    title: siteTitle(),
    description: ENV.tagline,
    images: [{ url: absUrl(ENV.ogImagePath), width: 1200, height: 630, alt: `รับยิงแอดสายเทา โดย ${ENV.companyName}` }],
    siteName: ENV.siteName,
    locale: "th_TH"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle(),
    description: ENV.tagline,
    images: [absUrl(ENV.ogImagePath)]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }) {
  const schema = professionalServiceSchema({ pagePath: "/", pageName: siteTitle() });

  return (
    <html lang="th">
      <body>
        <JsonLd data={schema} />
        <NavBar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
