"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface CarouselEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  image?: string;
  startDate: string;
  endDate?: string;
  status: "past" | "ongoing" | "upcoming";
}

interface Props {
  events: CarouselEvent[];
  locale: string;
  labels: {
    past: string;
    ongoing: string;
    upcoming: string;
    details: string;
    allEvents: string;
  };
}

export default function EventsCarousel({ events, locale, labels }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = events.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  // Auto-advance every 6s
  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next, total]);

  if (total === 0) return null;

  const event = events[current];
  const statusLabel =
    event.status === "ongoing" ? labels.ongoing : event.status === "upcoming" ? labels.upcoming : labels.past;
  const statusColor =
    event.status === "ongoing"
      ? "bg-white text-green-deep"
      : event.status === "upcoming"
        ? "bg-green-deep/80 text-white"
        : "bg-white/20 text-white";

  const dateStr = new Date(event.startDate).toLocaleDateString(
    locale === "sw" ? "sw-TZ" : locale,
    { year: "numeric", month: "long", day: "numeric" },
  );
  const endDateStr =
    event.endDate && event.endDate !== event.startDate
      ? new Date(event.endDate).toLocaleDateString(
          locale === "sw" ? "sw-TZ" : locale,
          { year: "numeric", month: "long", day: "numeric" },
        )
      : null;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide content */}
      <div className="relative flex min-h-[200px] flex-col justify-end sm:min-h-[240px]">
        {/* Background image or gradient */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {event.image ? (
            <>
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/50 to-transparent" />
            </>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-green-deep/60 to-green-dark/40" />
          )}
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${statusColor}`}>
            {statusLabel}
          </span>
        </div>

        {/* Text overlay */}
        <div className="relative z-10 p-5 sm:p-7">
          <div className="mb-2 flex items-center gap-2 text-xs text-white/70">
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span>
              {dateStr}
              {endDateStr && <> — {endDateStr}</>}
            </span>
          </div>
          <h3 className="mb-1.5 text-lg font-medium leading-snug text-white sm:text-xl">
            {event.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-white/60">
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Controls bar */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Arrows */}
          <div className="flex gap-1.5">
            <button
              onClick={prev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              aria-label="Previous"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              aria-label="Next"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <Link
          href={`/${locale}/evenements`}
          className="text-xs text-white/60 transition-colors hover:text-white"
        >
          {labels.allEvents} →
        </Link>
      </div>
    </div>
  );
}
