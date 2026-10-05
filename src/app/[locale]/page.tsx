import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getSiteInfo, getStories, getHistoryEvents, getChurches, getEvents } from "@/lib/data";
import EventsCarousel from "@/components/EventsCarousel";
import Logo3 from "@/components/Logo3";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, site, storiesData, history, churches, eventsData] = await Promise.all([
    getDictionary(loc),
    getSiteInfo(loc),
    getStories(loc),
    getHistoryEvents(loc),
    getChurches(),
    getEvents(loc),
  ]);

  const latestStories = storiesData.slice(0, 3);
  const latestHistory = history.slice(-2);

  return (
    <>
      {/* ── Hero with events carousel ── */}
      <section className="bg-green-mid px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — branding */}
            <div className="text-center lg:text-left">
              <Logo3 size="xl" className="mb-4 text-white/90" />
              <p className="mb-4 text-xs tracking-[0.25em] text-green-deep/70 sm:text-sm">{dict.hero.subtitle}</p>
              <h1 className="mb-5 text-4xl font-light leading-tight text-white sm:mb-6 sm:text-5xl md:text-6xl">Malkia wa Ubembe</h1>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-green-deep/80 sm:text-base lg:mx-0">{dict.hero.tagline}</p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start sm:gap-4">
                <Link href={`/${locale}/histoire`} className="inline-block w-full bg-green-deep px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-green-dark sm:w-auto">{dict.hero.cta1}</Link>
                <Link href={`/${locale}/recits`} className="inline-block w-full border border-green-deep/30 px-8 py-3 text-sm font-medium text-green-deep transition-colors hover:border-green-deep/60 sm:w-auto">{dict.hero.cta2}</Link>
              </div>
            </div>

            {/* Right — events carousel */}
            {eventsData.length > 0 && (
              <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <EventsCarousel
                  events={eventsData}
                  locale={locale}
                  labels={{
                    past: dict.home.eventPast,
                    ongoing: dict.home.eventOngoing,
                    upcoming: dict.home.eventUpcoming,
                    details: dict.events.details,
                    allEvents: dict.home.eventsLink,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-light text-text sm:mb-8 sm:text-3xl md:text-4xl">{dict.home.aboutTitle}</h2>
          <div className="space-y-4 text-sm leading-relaxed text-grey sm:text-base">
            <p>{dict.home.aboutP1.replace("{year}", String(site.foundedYear))}</p>
            <p>{dict.home.aboutP2}</p>
          </div>
        </div>
      </section>

      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-light text-text sm:mb-12 sm:text-3xl md:text-4xl">{dict.home.timelineTitle}</h2>
          <div className="space-y-8">
            {latestHistory.map((event) => (
              <div key={event.id} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-green-mid">{event.year}</span>
                  <div className="mt-2 h-full w-px bg-green-mid/20" />
                </div>
                <div className="pb-8">
                  <h3 className="mb-2 text-base font-normal text-text sm:text-lg">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-grey">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={`/${locale}/histoire`} className="mt-4 inline-block text-sm text-green-mid transition-colors hover:text-green-dark">{dict.home.timelineLink}</Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-light text-text sm:mb-12 sm:text-3xl md:text-4xl">{dict.home.storiesTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestStories.map((story) => (
              <Link key={story.id} href={`/${locale}/recits/${story.slug}`} className="group block">
                <article>
                  <p className="mb-2 text-xs text-grey-light">{new Date(story.date).toLocaleDateString(locale === "sw" ? "sw-TZ" : locale, { year: "numeric", month: "long", day: "numeric" })}</p>
                  <h3 className="mb-2 text-base font-normal text-text transition-colors group-hover:text-green-mid sm:text-lg">{story.title}</h3>
                  <p className="text-sm leading-relaxed text-grey">{story.summary}</p>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <Link href={`/${locale}/recits`} className="text-sm text-green-mid transition-colors hover:text-green-dark">{dict.home.storiesLink}</Link>
          </div>
        </div>
      </section>

      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-light text-text sm:text-3xl md:text-4xl">{dict.home.churchesTitle}</h2>
          <p className="mb-8 text-sm text-grey sm:mb-12">{dict.home.churchesCount.replace("{count}", String(churches.length))}</p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {churches.slice(0, 6).map((church) => (
              <div key={church.id} className="flex items-center gap-3 rounded-lg border border-green-mid/10 bg-white px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-mid/10 text-[11px] font-semibold text-green-mid">{church.id}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text">{church.name}</p>
                  <p className="truncate text-xs text-grey">{church.city}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <Link href={`/${locale}/eglises`} className="text-sm text-green-mid transition-colors hover:text-green-dark">{dict.home.churchesLink.replace("{count}", String(churches.length))}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
