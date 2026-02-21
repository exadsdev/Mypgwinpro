export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-zinc-300">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
