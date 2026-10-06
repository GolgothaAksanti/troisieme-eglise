import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getHymns } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Cantiques({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, hymnsData] = await Promise.all([getDictionary(loc), getHymns(loc)]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.hymns.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.hymns.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {hymnsData.length > 0 ? (
            <div className="space-y-16">
              {hymnsData.map((hymn) => (
                <article key={hymn.id}>
                  <div className="mb-4 h-px w-12 bg-green-mid/30" />
                  <h2 className="mb-2 text-xl font-normal text-text sm:text-2xl">{hymn.title}</h2>
                  <div className="mb-6 flex flex-wrap gap-3 text-xs text-grey-light">
                    <span>{dict.hymns.source} : {hymn.source}</span>
                    <span>·</span>
                    <span>{dict.hymns.language} : {hymn.language}</span>
                  </div>

                  {hymn.refrain && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-mid">{dict.hymns.refrain}</h3>
                      <blockquote className="border-l-4 border-green-mid/30 bg-off-white px-5 py-4">
                        {hymn.refrain.split("\n").map((line, i) => (
                          <p key={i} className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-text sm:text-lg">
                            {line}
                          </p>
                        ))}
                      </blockquote>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-grey-light">{dict.hymns.verses}</h3>
                    <div className="space-y-4">
                      {hymn.verses.map((verse, i) => (
                        <div key={i} className="pl-4 sm:pl-6">
                          <span className="mb-1 block text-xs font-medium text-green-mid/60">{i + 1}.</span>
                          {verse.split("\n").map((line, j) => (
                            <p key={j} className="text-sm leading-relaxed text-grey">{line}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {hymn.translation && (
                    <div className="rounded-lg border border-green-mid/10 bg-off-white px-5 py-4">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-grey-light">{dict.hymns.note}</h3>
                      <p className="text-sm leading-relaxed text-grey">{hymn.translation}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.hymns.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
