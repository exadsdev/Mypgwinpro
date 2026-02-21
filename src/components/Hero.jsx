import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import ButtonLink from "./ButtonLink";
import { ENV } from "@/src/lib/env";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-dark">
      <Container>
        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="space-y-5">
            <Badge>คีย์เวิร์ดหลัก: รับยิงแอดสายเทา • รับทำโฆษณาสายเทา</Badge>

            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-50 md:text-5xl">
              {ENV.companyName}: ทีม <span className="text-cyan-200">รับยิงแอดสายเทา</span> ที่เน้น “ผลลัพธ์” มากกว่า “ลมปาก”
            </h1>

            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              ถ้าคุณต้องการ <strong className="text-zinc-100">รับทำโฆษณาสายเทา</strong> แบบเป็นระบบ
              เราจะเริ่มจากวางโครงสร้างแคมเปญที่คุมความเสี่ยง, ทำ Tracking ให้ชัด,
              แล้ว Optimize รายวันเพื่อให้ได้ Cost ต่อผลลัพธ์ที่คุมได้ — พร้อมแผน Scale แบบไม่มั่ว
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services">ดูบริการและแพ็กเกจ</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                คุยเคสของคุณ
              </ButtonLink>
            </div>

            <div className="text-xs text-zinc-500">
              ภาพประกอบ: Source: In-house vector illustration (ไฟล์ SVG ในโปรเจกต์)
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-500/5 blur-2xl" />
            <div className="relative rounded-3xl border border-zinc-800/70 bg-zinc-950/60 p-6 shadow-neon">
              <Image
                src="/images/hero-dashboard.svg"
                alt="แดชบอร์ดวัดผล รับยิงแอดสายเทา และรับทำโฆษณาสายเทา"
                width={800}
                height={520}
                priority
              />
              <div className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800/70 bg-black/40 p-4">
                  <div className="text-xs text-zinc-500">Focus</div>
                  <div className="font-semibold text-zinc-100">Conversion & ROI</div>
                  <div className="text-xs text-zinc-400">ตั้งค่าเหตุการณ์ + รายงานให้ดูง่าย</div>
                </div>
                <div className="rounded-2xl border border-zinc-800/70 bg-black/40 p-4">
                  <div className="text-xs text-zinc-500">Control</div>
                  <div className="font-semibold text-zinc-100">Risk Management</div>
                  <div className="text-xs text-zinc-400">ลดโอกาสโดนจำกัดด้วยโครงสร้างที่ถูก</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-800/70 bg-black/40 p-4 text-xs text-zinc-400">
                ติดต่อด่วน: <a href={`tel:${ENV.phone}`} className="text-cyan-200">{ENV.phone}</a> • LINE: {ENV.lineId}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
