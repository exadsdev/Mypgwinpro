import { ENV } from "@/src/lib/env";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${ENV.siteUrl.replace(/\/$/, "")}/sitemap.xml`,
    host: ENV.siteUrl.replace(/\/$/, "")
  };
}
