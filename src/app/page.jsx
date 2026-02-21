// FILE: src/app/page.jsx

import Hero from "@/src/components/Hero";
import Section from "@/src/components/Section";
import Card from "@/src/components/Card";
import CTA from "@/src/components/CTA";
import ButtonLink from "@/src/components/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import { ENV } from "@/src/lib/env";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        title="ทำไมต้องเลือกทีมรับยิงแอดสายเทาที่ “วัดผลจริง”"
        subtitle="เราทำงานแบบเอเจนซี่สายเทาที่เน้นระบบ: โครงสร้างแคมเปญที่อ่านง่าย + Tracking ชัด + Optimize รายวัน เพื่อให้ต้นทุนคุมได้และสเกลได้จริง"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="โครงสร้างที่คุมความเสี่ยง"
            desc="แยกเป้าหมายและกลุ่มให้ชัด ลดข้อมูลปนกัน ทำให้ Optimize แม่นขึ้น และลดความเสี่ยงจากการตั้งค่ามั่ว"
          />
          <Card
            title="Tracking + Report ที่ตัดสินใจได้"
            desc="ตั้งค่า Conversion/UTM และสรุปผลแบบอ่านง่าย ให้คุณเห็นว่าเงินไปอยู่ตรงไหน และอะไรทำเงินจริง"
          />
          <Card
            title="Optimize เพื่อ Conversion ไม่ใช่แค่คลิก"
            desc="เราวัดจาก Cost ต่อผลลัพธ์และคุณภาพลีด/ยอดขาย ไม่เอาแต่ทราฟฟิกที่ไม่ปิดยอด"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
            <div className="text-lg font-bold text-zinc-50">บริการหลัก</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• รับยิงแอดสายเทา: วางโครงสร้าง + ตั้งค่า Conversion + Optimize รายวัน</li>
              <li>• รับทำโฆษณาสายเทา: ทำครีเอทีฟ/แลนดิ้ง + Tracking + รายงาน</li>
              <li>• Scale Plan: เพิ่มงบแบบมีข้อมูล ไม่ใช่เพิ่มแบบเดา</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <ButtonLink href="/services">ดูแพ็กเกจ</ButtonLink>
              <ButtonLink href="/blog" variant="ghost">
                อ่านบทความ
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
            <div className="text-lg font-bold text-zinc-50">ภาพรวมกระบวนการ (สั้นแต่ชัด)</div>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-zinc-800/70 bg-black/40 p-4">
                <div className="text-xs text-zinc-500">Step 1</div>
                <div className="font-semibold text-zinc-100">Audit & Plan</div>
                <div className="text-sm text-zinc-300">
                  เช็กสินทรัพย์ (เพจ/เว็บ/ฟันเนล) แล้ววางแผนโครงสร้างแคมเปญ
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-800/70 bg-black/40 p-4">
                <div className="text-xs text-zinc-500">Step 2</div>
                <div className="font-semibold text-zinc-100">Build & Track</div>
                <div className="text-sm text-zinc-300">
                  ตั้งค่า Conversion + UTM + รายงาน เพื่อให้เห็นผลแบบวัดได้
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-800/70 bg-black/40 p-4">
                <div className="text-xs text-zinc-500">Step 3</div>
                <div className="font-semibold text-zinc-100">Optimize & Scale</div>
                <div className="text-sm text-zinc-300">
                  Optimize รายวัน และสเกลจากข้อมูลจริง ไม่เพิ่มงบแบบสุ่ม
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="text-lg font-bold text-zinc-50">ภาพประกอบการทำงานจริง (ตัวอย่าง)</div>
              <p className="mt-2 text-sm text-zinc-300">
                เราใช้ Dashboard เพื่อสรุปผลให้เห็นชัดว่าแคมเปญไหนทำยอด แคมเปญไหนควรหยุด
                เพื่อให้งาน <strong className="text-zinc-100">รับยิงแอดสายเทา</strong> ของคุณเดินไปข้างหน้าอย่างมีทิศทาง
              </p>
              <div className="mt-3 text-xs text-zinc-500">Source: In-house vector illustration</div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-black/40 p-4">
              <Image
                src="/images/mini-report.svg"
                alt="รายงานผล รับทำโฆษณาสายเทา แบบสรุปตัวเลขสำคัญ"
                width={900}
                height={520}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="คำถามที่พบบ่อย (FAQ) — รับยิงแอดสายเทา"
        subtitle="คำตอบแบบตรงประเด็น เพื่อให้คุณตัดสินใจได้เร็ว"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="รับยิงแอดสายเทาคืออะไร?"
            desc="คือการวางแผนและยิงโฆษณาให้ธุรกิจที่มีข้อจำกัด/ความเสี่ยงสูง โดยเน้นโครงสร้างที่คุมความเสี่ยง + วัดผลชัด + Optimize ต่อเนื่อง เพื่อให้ได้ Conversion ที่คุมต้นทุนได้"
          />
          <Card
            title="ใช้เวลานานแค่ไหนถึงเห็นผล?"
            desc="โดยทั่วไปถ้าสินทรัพย์พร้อม (เว็บ/ฟันเนล/ข้อเสนอ) เราจะเริ่มเห็นสัญญาณภายใน 3–7 วัน แล้วค่อย Optimize ให้ต้นทุนดีขึ้นในสัปดาห์ถัดไป"
          />
          <Card
            title="ทำไมต้องมี Tracking?"
            desc="เพราะถ้าไม่วัดผล คุณจะเดาว่าอะไรทำเงิน—และจะสเกลจากสิ่งที่ผิด การตั้งค่า Tracking ช่วยให้ Optimize แม่น และลดการเผางบ"
          />
          <Card
            title="ควรเริ่มด้วยงบเท่าไหร่?"
            desc="เริ่มจากงบที่พอเก็บข้อมูลได้จริง (ไม่ใช่ยิงวันละนิดแล้วสรุป) เราจะช่วยวางแผนงบทดลอง และเกณฑ์ตัดสินใจให้ชัด"
          />
        </div>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      <Section
        title="Internal Linking ที่พาคนไปจุดปิดยอด"
        subtitle="เราออกแบบเส้นทางผู้ใช้ให้ไหล: Home → Services → Blog → Contact เพื่อให้ SEO และ Conversion ทำงานร่วมกัน"
      >
        <div className="grid gap-4 md:grid-cols-4">
          <Link
            className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-5 shadow-neon hover:bg-zinc-950/70"
            href="/services"
          >
            <div className="text-xs text-zinc-500">Next</div>
            <div className="text-base font-semibold text-zinc-100">Services</div>
            <div className="mt-2 text-sm text-zinc-300">
              ดูแพ็กเกจรับทำโฆษณาสายเทาแบบครบระบบ
            </div>
          </Link>

          <Link
            className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-5 shadow-neon hover:bg-zinc-950/70"
            href="/blog"
          >
            <div className="text-xs text-zinc-500">Learn</div>
            <div className="text-base font-semibold text-zinc-100">Blog</div>
            <div className="mt-2 text-sm text-zinc-300">
              อ่านกลยุทธ์รับยิงแอดสายเทาแบบมืออาชีพ
            </div>
          </Link>

          <Link
            className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-5 shadow-neon hover:bg-zinc-950/70"
            href="/contact"
          >
            <div className="text-xs text-zinc-500">Convert</div>
            <div className="text-base font-semibold text-zinc-100">Contact</div>
            <div className="mt-2 text-sm text-zinc-300">ส่งเคสของคุณเพื่อประเมินและเสนอแผน</div>
          </Link>

          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-5 shadow-neon">
            <div className="text-xs text-zinc-500">Hotline</div>
            <div className="text-base font-semibold text-zinc-100">Call Now</div>
            <div className="mt-2 text-sm text-zinc-300">
              <a href={`tel:${ENV.phone}`}>{ENV.phone}</a>
              <br />
              LINE: {ENV.lineId}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}