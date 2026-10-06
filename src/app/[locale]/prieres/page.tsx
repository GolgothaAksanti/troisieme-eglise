import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getPrayers } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Prieres({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, prayersData] = await Promise.all([getDictionary(loc), getPrayers(loc)]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.prayers.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.prayers.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {prayersData.length > 0 ? (
            <div className="space-y-16">
              {prayersData.map((prayer) => (
                <article key={prayer.id}>
                  <div className="mb-4 h-px w-12 bg-green-mid/30" />
                  <h2 className="mb-2 text-xl font-normal text-text sm:text-2xl">{prayer.title}</h2>
                  <p className="mb-6 text-xs text-grey-light">{dict.prayers.source} : {prayer.source}</p>

                  <div className="mb-6">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-mid">{dict.prayers.originalText}</h3>
                    <blockquote className="border-l-4 border-green-mid/30 bg-off-white px-5 py-4">
                      {prayer.text.split("\n").map((line, i) => (
                        <p key={i} className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-text sm:text-lg">
                          {line}
                        </p>
                      ))}
                    </blockquote>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-grey-light">{dict.prayers.translation}</h3>
                    <div className="space-y-2">
                      {prayer.translation.split("\n").map((line, i) => (
                        <p key={i} className="text-sm leading-relaxed text-grey">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.prayers.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
