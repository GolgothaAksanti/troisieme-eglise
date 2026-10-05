"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { EventStatus } from "@/data/events";

interface EventItem {
  id: string;
  title: string;
  description: string;
  location: string;
  image?: string;
  startDate: string;
  endDate?: string;
  status: EventStatus;
}

type FilterTab = "all" | EventStatus;

export default function Evenements() {
  const params = useParams();
  const locale = (params.locale as string) || "fr";
  const [events, setEvents] = useState<EventItem[]>([]);
  const [dict, setDict] = useState<Record<string, string>>({});
  const [homeDict, setHomeDict] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import(`@/i18n/dictionaries/${locale}.json`).then((mod) => {
      setDict(mod.default.events);
      setHomeDict(mod.default.home);
    });
    import("@/lib/data").then(async (mod) => {
      const data = await mod.getEvents(locale as "fr" | "sw" | "en");
      setEvents(data);
    });
  }, [locale]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setFilterOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const filtered = activeTab === "all" ? events : events.filter((e) => e.status === activeTab);

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: dict.all || "All" },
    { key: "ongoing", label: dict.ongoing || "Ongoing" },
    { key: "upcoming", label: dict.upcoming || "Upcoming" },
    { key: "past", label: dict.past || "Past" },
  ];

  const activeLabel = tabs.find((t) => t.key === activeTab)?.label || "";

  function statusLabel(status: EventStatus) {
    if (status === "ongoing") return homeDict.eventOngoing || "Ongoing";
    if (status === "upcoming") return homeDict.eventUpcoming || "Upcoming";
    return homeDict.eventPast || "Past";
  }

  function statusColor(status: EventStatus) {
    if (status === "ongoing") return "bg-green-mid text-white";
    if (status === "upcoming") return "bg-green-pale text-green-deep";
    return "bg-grey-light/20 text-grey";
  }

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">
            {dict.title || "Events"}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">
            {dict.subtitle || ""}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Filter — custom select dropdown */}
          <div className="mb-8 sm:mb-10">
            <div className="relative inline-block" ref={filterRef}>
              <button
                type="button"
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center gap-6 rounded-xl border bg-off-white py-3 pl-4 pr-3.5 text-sm transition-all ${
                  filterOpen
                    ? "border-green-mid ring-2 ring-green-mid/10"
                    : "border-green-mid/15 hover:border-green-mid/30"
                }`}
                aria-haspopup="listbox"
                aria-expanded={filterOpen}
              >
                <span className={activeTab === "all" ? "text-grey" : "text-text"}>
                  {activeLabel}
                </span>
                <svg
                  className={`h-4 w-4 text-grey-light transition-transform duration-200 ${filterOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <ul
                role="listbox"
                className={`absolute left-0 z-20 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-green-mid/10 bg-white py-1 shadow-lg transition-all duration-200 ${
                  filterOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.key}
                    role="option"
                    aria-selected={activeTab === tab.key}
                    onClick={() => { setActiveTab(tab.key); setFilterOpen(false); }}
                    className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                      activeTab === tab.key
                        ? "bg-green-pale text-green-mid font-medium"
                        : "text-grey hover:bg-off-white hover:text-text"
                    }`}
                  >
                    {activeTab === tab.key && (
                      <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                    <span className={activeTab === tab.key ? "" : "pl-6"}>{tab.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Events grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event) => (
                <Link
                  key={event.id}
                  href={`/${locale}/evenements/${event.id}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-2xl border border-green-mid/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-green-mid/10 to-green-mid/5">
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <svg
                            className="h-10 w-10 text-green-mid/25"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            />
                          </svg>
                        </div>
                      )}
                      <span className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusColor(event.status)}`}>
                        {statusLabel(event.status)}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2 text-xs text-grey">
                        <svg className="h-3.5 w-3.5 shrink-0 text-green-mid/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span>
                          {new Date(event.startDate).toLocaleDateString(locale === "sw" ? "sw-TZ" : locale, { year: "numeric", month: "long", day: "numeric" })}
                          {event.endDate && event.endDate !== event.startDate && (
                            <> — {new Date(event.endDate).toLocaleDateString(locale === "sw" ? "sw-TZ" : locale, { year: "numeric", month: "long", day: "numeric" })}</>
                          )}
                        </span>
                      </div>
                      <h3 className="mb-2 text-base font-medium leading-snug text-text group-hover:text-green-mid transition-colors sm:text-lg">
                        {event.title}
                      </h3>
                      <p className="mb-3 text-sm leading-relaxed text-grey line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-grey-light">
                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-grey">{dict.empty || ""}</p>
          )}
        </div>
      </section>
    </>
  );
}
