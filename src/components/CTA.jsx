import ButtonLink from "./ButtonLink";
import { ENV } from "@/src/lib/env";

export default function CTA() {
  return (
    <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/60 p-8 shadow-neon">
      <div className="text-2xl font-extrabold text-zinc-50">
        ต้องการทีม <span className="text-cyan-200">รับทำโฆษณาสายเทา</span> ที่คุยรู้เรื่องและทำงานเป็นระบบ?
      </div>
      <p className="mt-3 max-w-3xl text-zinc-300">
        ส่งข้อมูลธุรกิจ/สินค้า/เป้าหมาย + งบประมาณคร่าว ๆ เราจะประเมินโครงสร้างแคมเปญ,
        ประเมิน Tracking และเสนอแผน Optimize ที่ชัดเจนสำหรับงาน <strong className="text-zinc-100">รับยิงแอดสายเทา</strong>
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact">เริ่มคุยเคส</ButtonLink>
        <ButtonLink href="/services" variant="ghost">
          ดูบริการทั้งหมด
        </ButtonLink>
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        ติดต่อ: <a className="text-cyan-200" href={`tel:${ENV.phone}`}>{ENV.phone}</a> • LINE: {ENV.lineId}
      </div>
    </div>
  );
}
