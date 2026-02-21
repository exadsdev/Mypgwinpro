// FILE: src/app/services/page.jsx

import Image from "next/image";
import Link from "next/link";
import Section from "@/src/components/Section";
import Card from "@/src/components/Card";
import CTA from "@/src/components/CTA";
import JsonLd from "@/src/components/JsonLd";
import { ENV } from "@/src/lib/env";
import { absUrl, keywordPack, siteTitle } from "@/src/lib/seo";
import { professionalServiceSchema } from "@/src/lib/schema";

export const metadata = {
  title: siteTitle("Services: รับยิงแอดสายเทา & รับทำโฆษณาสายเทา"),
  description:
    "รวมบริการรับยิงแอดสายเทาและรับทำโฆษณาสายเทาแบบเป็นระบบ: โครงสร้างแคมเปญ, Tracking, Creative/LP, Optimize และแผน Scale",
  keywords: keywordPack(["แพ็กเกจยิงแอดสายเทา", "เอเจนซี่ยิงแอด", "โฆษณา Performance"]),
  alternates: { canonical: "/services" },
  openGraph: {
    type: "article",
    url: absUrl("/services"),
    title: siteTitle("Services: รับยิงแอดสายเทา & รับทำโฆษณาสายเทา"),
    description: "บริการครบ: วางระบบโฆษณาสายเทา + วัดผล + Optimize เพื่อ Conversion",
    images: [
      {
        url: absUrl(ENV.ogImagePath),
        width: 1200,
        height: 630,
        alt: `บริการรับยิงแอดสายเทา โดย ${ENV.companyName}`
      }
    ]
  }
};

export default function ServicesPage() {
  const schema = professionalServiceSchema({ pagePath: "/services", pageName: metadata.title });

  return (
    <>
      <JsonLd data={schema} />

      <Section
        title="Services — รับยิงแอดสายเทา & รับทำโฆษณาสายเทา"
        subtitle="เลือกแพ็กเกจตามเป้าหมาย: เริ่มทดสอบตลาด, ลดต้นทุน, หรือขยายสเกลแบบมีข้อมูล"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="แพ็กเกจเริ่มต้น (Start)"
            desc="เหมาะสำหรับเริ่มทดสอบตลาด: วางโครงสร้าง + ตั้งค่า Tracking + ชุดครีเอทีฟเริ่มต้น"
          >
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• วางโครงสร้าง Campaign/Ad Set/Ad ให้ Optimize ง่าย</li>
              <li>• ตั้งค่า Conversion + UTM เพื่อวัดผลแบบชัดเจน</li>
              <li>• ทำชุดครีเอทีฟเริ่มต้นเพื่อทดสอบ Hook/มุมขาย</li>
              <li>• รายงานสรุปผล + แนวทาง Optimize รอบถัดไป</li>
            </ul>
          </Card>

          <Card
            title="แพ็กเกจ Scale (Growth)"
            desc="เหมาะสำหรับลดต้นทุนและเพิ่มยอด: Optimize รายวัน + ขยายชุดครีเอทีฟ + ขยายกลุ่มเป้าหมาย"
          >
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Optimize รายวันตาม KPI ที่ตกลงร่วมกัน</li>
              <li>• แตกชุดครีเอทีฟเพื่อหาตัวทำเงิน (Winner)</li>
              <li>• ขยายกลุ่มเป้าหมายแบบเป็นระบบ (Segment/Intent)</li>
              <li>• สรุปผลรายสัปดาห์ + แผนเพิ่มงบแบบมีเหตุผล</li>
            </ul>
          </Card>

          <Card
            title="แพ็กเกจ Full-Funnel (Elite)"
            desc="เหมาะสำหรับงานรับทำโฆษณาสายเทาแบบครบระบบ: Creative + Landing + Tracking + Scale Plan"
          >
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• วางข้อเสนอ (Offer) และฟันเนลแบบลดการหลุด</li>
              <li>• สร้าง/ปรับ Landing ให้ตอบคำถามใน 10 วินาทีแรก</li>
              <li>• Tracking ครบ + Dashboard สรุปตัวเลขสำคัญ</li>
              <li>• Scale Plan ที่ทำได้จริง และควบคุมความเสี่ยง</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
            <div className="text-lg font-bold text-zinc-50">ตัวอย่างไฟล์/ภาพประกอบ</div>
            <p className="mt-2 text-sm text-zinc-300">
              ภาพประกอบในหน้านี้เป็นไฟล์ภายในทีม เพื่อสื่อสารกระบวนการทำงานของบริการรับยิงแอดสายเทาแบบวัดผล
            </p>
            <div className="mt-3 text-xs text-zinc-500">Source: In-house vector illustration</div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-black/40 p-4 shadow-neon">
            <Image
              src="/images/services-funnel.svg"
              alt="แผนผังฟันเนล รับทำโฆษณาสายเทา ตั้งแต่คลิกถึง Conversion"
              width={1000}
              height={600}
            />
          </div>
        </div>

        <div className="mt-10">
          <CTA />
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
          <div className="text-lg font-bold text-zinc-50">Internal Linking</div>
          <p className="mt-2 text-sm text-zinc-300">
            เพื่อให้ผู้ใช้ไหลต่อไปจุดปิดยอด: อ่านบทความเชิงกลยุทธ์ → เข้าใจระบบ → ทักคุยเคส
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60"
              href="/blog"
            >
              ไปหน้า Blog (บทความรับยิงแอดสายเทา)
            </Link>
            <Link
              className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60"
              href="/contact"
            >
              ไปหน้า Contact (คุยเคส)
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}