import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getHistoryEvents } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Histoire({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, events] = await Promise.all([getDictionary(loc), getHistoryEvents(loc)]);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.history.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.history.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {events.length > 0 ? (
            <div className="space-y-10 sm:space-y-12">
              {events.map((event, i) => (
                <div key={event.id} className="flex gap-4 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <span className="text-base font-light text-green-mid sm:text-lg">{event.year}</span>
                    {i < events.length - 1 && <div className="mt-3 h-full w-px bg-green-mid/15" />}
                  </div>
                  <div className="pb-4">
                    <h2 className="mb-2 text-lg font-normal text-text sm:mb-3 sm:text-xl">{event.title}</h2>
                    <p className="text-sm leading-relaxed text-grey sm:text-base">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-grey">{dict.history.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
