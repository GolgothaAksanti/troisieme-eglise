import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getEventById, getAllEventIds } from "@/lib/data";

type Props = { params: Promise<{ locale: string; id: string }> };

export async function generateStaticParams() {
  const ids = await getAllEventIds();
  return ids.map((id) => ({ id }));
}

export default async function EventDetail({ params }: Props) {
  const { locale, id } = await params;
  const loc = locale as Locale;
  const [dict, event] = await Promise.all([getDictionary(loc), getEventById(id, loc)]);

  if (!event) notFound();

  const statusLabel =
    event.status === "ongoing"
      ? dict.home.eventOngoing
      : event.status === "upcoming"
        ? dict.home.eventUpcoming
        : dict.home.eventPast;
  const statusColor =
    event.status === "ongoing"
      ? "bg-green-mid text-white"
      : event.status === "upcoming"
        ? "bg-green-pale text-green-deep"
        : "bg-grey-light/20 text-grey";

  const dateStr = new Date(event.startDate).toLocaleDateString(
    locale === "sw" ? "sw-TZ" : locale,
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );
  const endDateStr =
    event.endDate && event.endDate !== event.startDate
      ? new Date(event.endDate).toLocaleDateString(
          locale === "sw" ? "sw-TZ" : locale,
          { weekday: "long", year: "numeric", month: "long", day: "numeric" },
        )
      : null;

  return (
    <>
      {/* Hero image / gradient */}
      <section className="relative bg-green-mid pt-20">
        <div className="relative aspect-[21/9] max-h-[400px] w-full overflow-hidden sm:aspect-[3/1]">
          {event.image ? (
            <>
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-green-deep/30 to-transparent" />
            </>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-green-mid to-green-dark">
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-20 w-20 text-white/15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href={`/${locale}/evenements`}
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-green-mid transition-colors hover:text-green-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            {dict.events.back}
          </Link>

          {/* Status */}
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor}`}>
            {statusLabel}
          </span>

          {/* Title */}
          <h1 className="mt-4 mb-6 text-3xl font-light text-text sm:text-4xl md:text-5xl">
            {event.title}
          </h1>

          {/* Meta info */}
          <div className="mb-8 flex flex-col gap-4 rounded-xl border border-green-mid/10 bg-off-white p-5 sm:flex-row sm:gap-8 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-mid/10">
                <svg className="h-4.5 w-4.5 text-green-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-grey-light">{dict.events.date}</p>
                <p className="text-sm text-text">
                  {dateStr}
                  {endDateStr && <><br />{endDateStr}</>}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-mid/10">
                <svg className="h-4.5 w-4.5 text-green-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-grey-light">{dict.events.location}</p>
                <p className="text-sm text-text">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose-sm text-base leading-relaxed text-grey sm:text-lg sm:leading-relaxed">
            <p>{event.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
