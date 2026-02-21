import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { ENV } from "@/src/lib/env";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={ENV.logoPath}
              alt={`โลโก้ ${ENV.companyName} รับยิงแอดสายเทา`}
              width={34}
              height={34}
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-50">{ENV.siteName}</div>
              <div className="text-[11px] text-zinc-400">รับทำโฆษณาสายเทาแบบวัดผล</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((it) => (
              <Link key={it.href} href={it.href} className="text-sm text-zinc-200 hover:text-cyan-200">
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact">ขอใบเสนอราคา</ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              ดูแพ็กเกจ
            </ButtonLink>
          </div>
        </div>

        <nav className="flex items-center gap-4 pb-3 md:hidden">
          {nav.map((it) => (
            <Link key={it.href} href={it.href} className="text-xs text-zinc-300 hover:text-cyan-200">
              {it.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
