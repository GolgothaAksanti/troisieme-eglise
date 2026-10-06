import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getCeremonies } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Ceremonies({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, ceremoniesData] = await Promise.all([getDictionary(loc), getCeremonies(loc)]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.ceremonies.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.ceremonies.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {ceremoniesData.length > 0 ? (
            <div className="space-y-20">
              {ceremoniesData.map((ceremony) => (
                <article key={ceremony.id}>
                  <div className="mb-4 h-px w-12 bg-green-mid/30" />
                  <h2 className="mb-2 text-xl font-normal text-text sm:text-2xl">{ceremony.title}</h2>
                  <p className="mb-6 text-xs text-grey-light">{dict.ceremonies.source} : {ceremony.source}</p>
                  <p className="mb-8 text-sm leading-relaxed text-grey sm:text-base">{ceremony.description}</p>

                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-mid">{dict.ceremonies.steps}</h3>
                    <ol className="space-y-4">
                      {ceremony.steps.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-mid/10 text-xs font-semibold text-green-mid">
                            {i + 1}
                          </span>
                          <p className="pt-0.5 text-sm leading-relaxed text-grey">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.ceremonies.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
