import { ENV } from "./env";
import { absUrl } from "./seo";

/**
 * ProfessionalService JSON-LD (baseline for all pages)
 * ใช้ @id เพื่อเชื่อม entity ให้เป็นกราฟเดียวกันทั้งเว็บ
 */
export function professionalServiceSchema({ pagePath = "/", pageName = "" } = {}) {
  const orgId = absUrl("#organization");
  const serviceId = absUrl("#professionalservice");
  const webpageId = absUrl(`${pagePath}#webpage`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        "name": ENV.companyLegalName,
        "url": ENV.siteUrl,
        "logo": absUrl(ENV.logoPath),
        "sameAs": [ENV.facebookUrl, ENV.youtubeUrl, ENV.telegramUrl].filter(Boolean),
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": ENV.phone,
            "contactType": "customer support",
            "areaServed": ENV.country,
            "availableLanguage": ["th", "en"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": ENV.addressLine1,
          "addressLocality": ENV.city,
          "addressRegion": ENV.region,
          "postalCode": ENV.postal,
          "addressCountry": ENV.country
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        "name": ENV.companyName,
        "url": ENV.siteUrl,
        "image": absUrl(ENV.ogImagePath),
        "description": ENV.tagline,
        "telephone": ENV.phone,
        "email": ENV.email,
        "areaServed": ENV.country,
        "provider": { "@id": orgId },
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "บริการรับยิงแอดสายเทา และรับทำโฆษณาสายเทา",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "แพ็กเกจเริ่มต้น: วางโครงสร้างแคมเปญ + ตั้งค่า Conversion",
              "description": "เหมาะสำหรับเริ่มทดสอบตลาดและพิสูจน์ผลลัพธ์แบบวัดได้",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "แพ็กเกจ Scale: เพิ่มงบ + Optimize รายวัน",
              "description": "เหมาะสำหรับทีมที่ต้องการขยายยอดขายและลดต้นทุนต่อผลลัพธ์",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "แพ็กเกจ Full-Funnel: Creative + Landing + Tracking",
              "description": "เหมาะสำหรับการทำโฆษณาสายเทาแบบครบลูป ตั้งแต่คลิกจนถึงยอด",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        "url": absUrl(pagePath),
        "name": pageName || ENV.tagline,
        "isPartOf": { "@id": absUrl("#website") },
        "about": { "@id": serviceId }
      },
      {
        "@type": "WebSite",
        "@id": absUrl("#website"),
        "url": ENV.siteUrl,
        "name": ENV.siteName,
        "publisher": { "@id": orgId }
      }
    ]
  };
}
