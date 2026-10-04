import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getStoryBySlug, getAllStorySlugs } from "@/lib/data";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function StoryPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const [dict, story] = await Promise.all([getDictionary(loc), getStoryBySlug(slug, loc)]);

  if (!story) notFound();

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link href={`/${locale}/recits`} className="mb-4 inline-block text-sm text-green-deep/60 transition-colors hover:text-green-deep sm:mb-6">{dict.stories.back}</Link>
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{story.title}</h1>
          <p className="text-sm text-green-deep/60">
            {new Date(story.date).toLocaleDateString(locale === "sw" ? "sw-TZ" : locale, { year: "numeric", month: "long", day: "numeric" })}
            {story.author && ` · ${story.author}`}
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-sm leading-relaxed text-grey sm:space-y-6 sm:text-base">
            {story.content.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div>
      </section>
    </>
  );
}
