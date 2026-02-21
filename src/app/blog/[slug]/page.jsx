import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/src/components/Section";
import CTA from "@/src/components/CTA";
import JsonLd from "@/src/components/JsonLd";
import { getPostBySlug } from "@/src/lib/posts";
import { POST_BODIES } from "@/src/content/post-bodies";
import { ENV } from "@/src/lib/env";
import { absUrl, keywordPack, siteTitle } from "@/src/lib/seo";
import { professionalServiceSchema } from "@/src/lib/schema";

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: siteTitle(post.title),
    description: post.description,
    keywords: keywordPack(post.tags),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: absUrl(`/blog/${post.slug}`),
      title: siteTitle(post.title),
      description: post.description,
      images: [{ url: absUrl(ENV.ogImagePath), width: 1200, height: 630, alt: `บทความรับยิงแอดสายเทา: ${post.title}` }]
    }
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const blocks = POST_BODIES[post.slug] || [];
  const schema = professionalServiceSchema({ pagePath: `/blog/${post.slug}`, pageName: post.title });

  return (
    <>
      <JsonLd data={schema} />

      <Section title={post.title} subtitle={post.description}>
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <article className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-black/40 p-4 shadow-neon">
              <Image
                src={post.coverImage}
                alt={`ภาพประกอบ ${post.title} รับทำโฆษณาสายเทา`}
                width={1200}
                height={675}
              />
              <div className="mt-3 text-xs text-zinc-500">{post.coverSource}</div>
            </div>

            {blocks.map((b, idx) => (
              <section key={idx} className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
                <h2 className="text-xl font-bold text-zinc-50">{b.h2}</h2>
                {b.p?.map((t, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {t}
                  </p>
                ))}
                {b.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    {b.bullets.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
              <div className="text-lg font-bold text-zinc-50">ไปต่อเพื่อทำให้เกิดยอด</div>
              <p className="mt-2 text-sm text-zinc-300">
                ถ้าคุณอยากให้ทีมรับยิงแอดสายเทาช่วยประเมินเคสจริง ให้ไปดู Services เพื่อเลือกแนวทาง
                หรือไปหน้า Contact เพื่อส่งรายละเอียด แล้วเราจะจัดแผนให้ชัด
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60" href="/services">
                  ไปหน้า Services
                </a>
                <a className="rounded-xl border border-zinc-800/70 bg-black/40 px-4 py-2 text-sm text-zinc-100 hover:bg-black/60" href="/contact">
                  ไปหน้า Contact
                </a>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
              <div className="text-sm font-semibold text-zinc-50">Tags</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full border border-zinc-800/70 bg-black/40 px-3 py-1 text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <CTA />
          </aside>
        </div>
      </Section>
    </>
  );
}
