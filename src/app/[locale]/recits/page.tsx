import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getStories } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Recits({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, stories] = await Promise.all([getDictionary(loc), getStories(loc)]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.stories.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.stories.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {stories.length > 0 ? (
            <div className="space-y-10 sm:space-y-12">
              {stories.map((story) => (
                <Link key={story.id} href={`/${locale}/recits/${story.slug}`} className="group block">
                  <article className="border-b border-green-mid/8 pb-10 sm:pb-12">
                    <p className="mb-2 text-xs text-grey-light">
                      {new Date(story.date).toLocaleDateString(locale === "sw" ? "sw-TZ" : locale, { year: "numeric", month: "long", day: "numeric" })}
                      {story.author && ` · ${story.author}`}
                    </p>
                    <h2 className="mb-2 text-xl font-normal text-text transition-colors group-hover:text-green-mid sm:mb-3 sm:text-2xl">{story.title}</h2>
                    <p className="text-sm leading-relaxed text-grey sm:text-base">{story.summary}</p>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.stories.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
