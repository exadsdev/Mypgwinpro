import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <article className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-5 shadow-neon">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-black/40">
        <Image
          src={post.coverImage}
          alt={`ภาพประกอบบทความ ${post.title} รับยิงแอดสายเทา`}
          width={1200}
          height={675}
        />
      </div>

      <div className="mt-4">
        <div className="text-xs text-zinc-500">{post.date}</div>
        <h3 className="mt-2 text-lg font-bold text-zinc-50">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-zinc-300">{post.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-800/70 bg-black/40 px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 text-xs text-zinc-500">{post.coverSource}</div>
      </div>
    </article>
  );
}
