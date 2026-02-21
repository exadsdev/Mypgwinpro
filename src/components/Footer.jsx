import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { ENV } from "@/src/lib/env";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 bg-black">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src={ENV.logoPath}
                alt={`โลโก้ ${ENV.companyName} รับทำโฆษณาสายเทา`}
                width={34}
                height={34}
              />
              <div>
                <div className="text-sm font-semibold text-zinc-50">{ENV.companyName}</div>
                <div className="text-xs text-zinc-400">{ENV.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-300">
              โฟกัสงาน <strong className="text-zinc-100">รับยิงแอดสายเทา</strong> แบบวัดผล:
              วางโครงสร้างแคมเปญ, ตั้งค่า Tracking, ปรับคุณภาพทราฟฟิก และ Optimize รายวัน
              เพื่อให้ได้ Cost ต่อผลลัพธ์ที่คุมได้และขยายสเกลได้จริง
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold text-zinc-50">Internal Links</div>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold text-zinc-50">Contact</div>
            <div className="text-sm text-zinc-300">
              <div>
                Phone: <a href={`tel:${ENV.phone}`}>{ENV.phone}</a>
              </div>
              <div>Line: {ENV.lineId}</div>
              <div>
                Email: <a href={`mailto:${ENV.email}`}>{ENV.email}</a>
              </div>
              <div className="pt-2 text-xs text-zinc-500">
                Address: {ENV.addressLine1}, {ENV.city}, {ENV.region} {ENV.postal}, {ENV.country}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-zinc-800/60 py-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {ENV.companyLegalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {ENV.facebookUrl ? (
              <a href={ENV.facebookUrl} target="_blank" rel="noreferrer">
                Facebook
              </a>
            ) : null}
            {ENV.telegramUrl ? (
              <a href={ENV.telegramUrl} target="_blank" rel="noreferrer">
                Telegram
              </a>
            ) : null}
            {ENV.youtubeUrl ? (
              <a href={ENV.youtubeUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
