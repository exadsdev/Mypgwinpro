import { ENV } from "./env";

/** Absolute URL helper */
export function absUrl(path = "/") {
  try {
    const base = ENV.siteUrl.endsWith("/") ? ENV.siteUrl : `${ENV.siteUrl}/`;
    return new URL(path.replace(/^\//, ""), base).toString();
  } catch {
    return path;
  }
}

export function siteTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${ENV.siteName}` : `${ENV.siteName} | ${ENV.tagline}`;
}

export function keywordPack(extra = []) {
  const core = ["รับยิงแอดสายเทา", "รับทำโฆษณาสายเทา"];
  const safe = [...new Set([...core, ...extra])];
  return safe.join(", ");
}
