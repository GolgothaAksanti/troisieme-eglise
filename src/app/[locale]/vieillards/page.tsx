import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getElders } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Vieillards({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, eldersData] = await Promise.all([getDictionary(loc), getElders()]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">
            {dict.elders.title}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">
            {dict.elders.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          {eldersData.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {eldersData.map((elder) => (
                <article
                  key={elder.id}
                  className="group overflow-hidden rounded-xl border border-green-mid/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-green-mid/10 to-green-mid/5">
                    {elder.image ? (
                      <img
                        src={elder.image}
                        alt={elder.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-mid/15">
                            <svg
                              className="h-8 w-8 text-green-mid/40"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="text-sm font-medium leading-snug text-text group-hover:text-green-mid transition-colors">
                      {elder.name}
                    </h3>
                    {elder.title && (
                      <p className="mt-1 text-xs text-grey">{elder.title[loc]}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.elders.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
