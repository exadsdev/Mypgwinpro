// FILE: src/app/contact/page.jsx

import Link from "next/link";
import Section from "@/src/components/Section";
import Card from "@/src/components/Card";
import CTA from "@/src/components/CTA";
import JsonLd from "@/src/components/JsonLd";
import { ENV } from "@/src/lib/env";
import { absUrl, keywordPack, siteTitle } from "@/src/lib/seo";
import { professionalServiceSchema } from "@/src/lib/schema";

export const metadata = {
  title: siteTitle("Contact: ปรึกษางานรับยิงแอดสายเทา"),
  description:
    "ติดต่อเพื่อปรึกษางานรับยิงแอดสายเทาและรับทำโฆษณาสายเทา: ส่งข้อมูลธุรกิจ เป้าหมาย และงบประมาณ เพื่อประเมินและเสนอแผนยิง",
  keywords: keywordPack(["ติดต่อยิงแอดสายเทา", "ปรึกษาโฆษณาสายเทา", "เอเจนซี่สายเทา"]),
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: absUrl("/contact"),
    title: siteTitle("Contact: ปรึกษางานรับยิงแอดสายเทา"),
    description: "ส่งรายละเอียดเคสเพื่อรับแผนยิงแบบวัดผล",
    images: [
      {
        url: absUrl(ENV.ogImagePath),
        width: 1200,
        height: 630,
        alt: `ติดต่อรับทำโฆษณาสายเทา โดย ${ENV.companyName}`
      }
    ]
  }
};

export default function ContactPage() {
  const schema = professionalServiceSchema({ pagePath: "/contact", pageName: metadata.title });

  return (
    <>
      <JsonLd data={schema} />

      <Section
        title="Contact — คุยเคสรับยิงแอดสายเทา"
        subtitle="ส่งข้อมูลให้ครบ เราจะประเมินและเสนอแผนที่ทำได้จริง (เน้นวัดผลและคุมต้นทุน)"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="ข้อมูลติดต่อ" desc="ช่องทางที่แนะนำคือ LINE เพื่อคุยรายละเอียดและส่งไฟล์ได้สะดวก">
            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <div>
                Phone: <a href={`tel:${ENV.phone}`}>{ENV.phone}</a>
              </div>
              <div>
                LINE: <span className="text-cyan-200">{ENV.lineId}</span>
              </div>
              <div>
                Email: <a href={`mailto:${ENV.email}`}>{ENV.email}</a>
              </div>
              {ENV.googleMapsUrl ? (
                <div>
                  Map:{" "}
                  <a href={ENV.googleMapsUrl} target="_blank" rel="noreferrer">
                    เปิดแผนที่
                  </a>
                </div>
              ) : null}
              <div className="pt-2 text-xs text-zinc-500">
                Address: {ENV.addressLine1}, {ENV.city}, {ENV.region} {ENV.postal}, {ENV.country}
              </div>
            </div>
          </Card>

          <Card title="ส่งรายละเอียดเคส (Copy แล้วส่งในไลน์ได้เลย)" desc="ยิ่งข้อมูลชัด แผนยิ่งตรง และลดเวลาลองผิดลองถูก">
            <div className="mt-4 rounded-2xl border border-zinc-800/70 bg-black/40 p-4 text-sm text-zinc-200">
              <div className="font-semibold text-zinc-50">Template</div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-zinc-300">
                <li>ประเภทธุรกิจ/สินค้า: …</li>
                <li>เป้าหมาย: Lead / Purchase / Message (ระบุ KPI ที่อยากได้)</li>
                <li>งบต่อวัน/ต่อเดือน: …</li>
                <li>ช่องทางปิดการขาย: LINE / โทร / เว็บไซต์ / แชท</li>
                <li>มีเว็บ/แลนดิ้งหรือยัง: มี/ไม่มี (ถ้ามี ส่งลิงก์)</li>
                <li>จุดแข็ง/ข้อเสนอ: โปร/ราคา/จุดต่าง</li>
              </ol>
              <div className="mt-3 text-xs text-zinc-500">
                หมายเหตุ: เราเน้นงานรับทำโฆษณาสายเทาแบบวัดผล และปรับปรุงต่อเนื่อง ไม่ใช่งานยิงครั้งเดียวแล้วจบ
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <CTA />
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
          <div className="text-lg font-bold text-zinc-50">Internal Linking</div>
          <p className="mt-2 text-sm text-zinc-300">
            ถ้ายังไม่แน่ใจแพ็กเกจ → ไป Services / ถ้าอยากเรียนรู้ระบบก่อน → ไป Blog
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60"
              href="/services"
            >
              ไปหน้า Services
            </Link>
            <Link
              className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60"
              href="/blog"
            >
              ไปหน้า Blog
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}