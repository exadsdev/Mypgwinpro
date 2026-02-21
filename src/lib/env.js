/**
 * Centralized ENV access (server-side).
 * IMPORTANT:
 * - ห้าม hard-code ชื่อบริษัท/โดเมน/เบอร์/ไลน์ในโค้ด
 * - ควรอ่านจาก process.env ผ่านไฟล์นี้เสมอ
 */
function required(name) {
  const v = process.env[name];
  if (!v) throw new Error(`[env] Missing required variable: ${name}`);
  return v;
}

function optional(name, fallback = "") {
  const v = process.env[name];
  return v ?? fallback;
}

export const ENV = {
  siteUrl: required("NEXT_PUBLIC_SITE_URL"),
  siteName: required("NEXT_PUBLIC_SITE_NAME"),
  companyName: required("NEXT_PUBLIC_COMPANY_NAME"),
  companyLegalName: optional("NEXT_PUBLIC_COMPANY_LEGAL_NAME", required("NEXT_PUBLIC_COMPANY_NAME")),
  tagline: required("NEXT_PUBLIC_COMPANY_TAGLINE"),
  phone: required("NEXT_PUBLIC_PHONE"),
  lineId: required("NEXT_PUBLIC_LINE_ID"),
  email: required("NEXT_PUBLIC_EMAIL"),
  addressLine1: required("NEXT_PUBLIC_ADDRESS_LINE1"),
  country: required("NEXT_PUBLIC_COUNTRY"),
  region: required("NEXT_PUBLIC_REGION"),
  city: required("NEXT_PUBLIC_CITY"),
  postal: required("NEXT_PUBLIC_POSTAL"),
  facebookUrl: optional("NEXT_PUBLIC_FACEBOOK_URL"),
  telegramUrl: optional("NEXT_PUBLIC_TELEGRAM_URL"),
  youtubeUrl: optional("NEXT_PUBLIC_YOUTUBE_URL"),
  logoPath: required("NEXT_PUBLIC_LOGO_PATH"),
  ogImagePath: required("NEXT_PUBLIC_OG_IMAGE_PATH"),
  googleMapsUrl: optional("NEXT_PUBLIC_GOOGLE_MAPS_URL")
};
