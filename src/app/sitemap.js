import { ENV } from "@/src/lib/env";
import { getAllPosts } from "@/src/lib/posts";

export default function sitemap() {
  const base = ENV.siteUrl.replace(/\/$/, "");

  const staticRoutes = ["", "/services", "/blog", "/contact"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...posts];
}
