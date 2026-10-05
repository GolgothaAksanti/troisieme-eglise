import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLeaders, getChurches } from "@/lib/data";
import OrgChart from "@/components/OrgChart";

type Props = { params: Promise<{ locale: string }> };

export default async function Dirigeants({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, leadersData, churches] = await Promise.all([getDictionary(loc), getLeaders(loc), getChurches()]);

  function getChurchName(churchId?: string) {
    if (!churchId) return null;
    return churches.find((c) => c.id === churchId)?.name ?? null;
  }

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.leaders.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.leaders.subtitle}</p>
        </div>
      </section>

      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-2xl font-light text-text sm:text-3xl">{dict.leaders.structureTitle}</h2>
          <p className="mb-10 text-sm text-grey sm:mb-12">{dict.leaders.structureSubtitle}</p>
          <OrgChart locale={loc} dict={dict} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-light text-text sm:mb-12 sm:text-3xl">{dict.leaders.spiritualTitle}</h2>
          {leadersData.length > 0 ? (
            <div className="space-y-12 sm:space-y-16">
              {leadersData.map((leader) => {
                const churchName = getChurchName(leader.churchId);
                return (
                  <article key={leader.id} className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                    <div className="shrink-0">
                      <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-gradient-to-br from-green-mid/10 to-green-mid/5 sm:h-32 sm:w-32">
                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <svg
                              className="h-12 w-12 text-green-mid/30"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4 h-px w-12 bg-green-mid/30" />
                      <p className="mb-1 text-xs text-green-mid">{leader.title}</p>
                      <h3 className="mb-3 text-xl font-normal text-text sm:mb-4 sm:text-2xl">{leader.name}</h3>
                      <p className="text-sm leading-relaxed text-grey sm:text-base">{leader.bio}</p>
                      {churchName && <p className="mt-3 text-xs text-grey-light">{dict.leaders.churchLabel} : {churchName}</p>}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-grey">{dict.leaders.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
