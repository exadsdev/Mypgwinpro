import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition shadow-neon";
  const styles =
    variant === "ghost"
      ? "border border-zinc-700 bg-zinc-900/30 text-zinc-100 hover:bg-zinc-900/60"
      : "border border-cyan-300/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
