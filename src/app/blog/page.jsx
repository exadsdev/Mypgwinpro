import Section from "@/src/components/Section";
import BlogCard from "@/src/components/BlogCard";
import CTA from "@/src/components/CTA";
import JsonLd from "@/src/components/JsonLd";
import { getAllPosts } from "@/src/lib/posts";
import { ENV } from "@/src/lib/env";
import { absUrl, keywordPack, siteTitle } from "@/src/lib/seo";
import { professionalServiceSchema } from "@/src/lib/schema";

export const metadata = {
  title: siteTitle("Blog: ความรู้รับยิงแอดสายเทา & รับทำโฆษณาสายเทา"),
  description:
    "บทความกลยุทธ์สำหรับรับยิงแอดสายเทาและรับทำโฆษณาสายเทา: โครงสร้างแคมเปญ, Tracking, Creative, Landing และการ Optimize เพื่อ Conversion",
  keywords: keywordPack(["บทความยิงแอดสายเทา", "กลยุทธ์โฆษณา", "Performance Marketing"]),
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: absUrl("/blog"),
    title: siteTitle("Blog: ความรู้รับยิงแอดสายเทา & รับทำโฆษณาสายเทา"),
    description: "อ่านเพื่อทำงานแบบเป็นระบบ: โครงสร้าง + วัดผล + Optimize",
    images: [{ url: absUrl(ENV.ogImagePath), width: 1200, height: 630, alt: `Blog รับยิงแอดสายเทา โดย ${ENV.companyName}` }]
  }
};

export default function BlogPage() {
  const posts = getAllPosts();
  const schema = professionalServiceSchema({ pagePath: "/blog", pageName: metadata.title });

  return (
    <>
      <JsonLd data={schema} />

      <Section
        title="Blog — ความรู้สำหรับงานรับยิงแอดสายเทา"
        subtitle="อ่านเพื่อเข้าใจระบบ: โครงสร้างแคมเปญ, การวัดผล, และการทำครีเอทีฟที่ช่วยปิดยอด"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="mt-10">
          <CTA />
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-neon">
          <div className="text-lg font-bold text-zinc-50">Internal Linking</div>
          <p className="mt-2 text-sm text-zinc-300">
            อ่านบทความแล้วไปต่อที่ Services เพื่อดูแพ็กเกจ หรือไป Contact เพื่อคุยเคสจริง
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
      </Section>
    </>
  );
}
