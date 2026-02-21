export default function Card({ title, desc, children }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
      <div className="text-base font-semibold text-zinc-50">{title}</div>
      {desc ? <p className="mt-2 text-sm text-zinc-300">{desc}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
