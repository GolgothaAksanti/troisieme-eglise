/**
 * Data service layer.
 *
 * Currently reads from local data files. When the CMS dashboard is ready,
 * replace these functions with fetch calls to your CMS API:
 *
 *   const API = process.env.CMS_API_URL;
 *   export async function getStories(locale: Locale) {
 *     const res = await fetch(`${API}/stories?lang=${locale}`, { next: { revalidate: 60 } });
 *     return res.json();
 *   }
 */

import { stories } from "@/data/stories";
import { historyEvents } from "@/data/history";
import { leaders } from "@/data/leaders";
import { elders } from "@/data/elders";
import { events } from "@/data/events";
import type { EventStatus } from "@/data/events";
import { churches, maheloLeaders } from "@/data/churches";
import { getSiteData } from "@/data/site";
import type { Locale } from "@/i18n/config";

// ── Site info ──────────────────────────────────────────────

export async function getSiteInfo(locale: Locale) {
  return getSiteData(locale);
}

// ── Stories ────────────────────────────────────────────────

export async function getStories(locale: Locale) {
  return stories
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title[locale],
      summary: s.summary[locale],
      content: s.content[locale],
      date: s.date,
      author: s.author,
    }));
}

export async function getStoryBySlug(slug: string, locale: Locale) {
  const story = stories.find((s) => s.slug === slug);
  if (!story) return undefined;
  return {
    id: story.id,
    slug: story.slug,
    title: story.title[locale],
    summary: story.summary[locale],
    content: story.content[locale],
    date: story.date,
    author: story.author,
  };
}

export async function getAllStorySlugs() {
  return stories.map((s) => s.slug);
}

// ── History ───────────────────────────────────────────────

export async function getHistoryEvents(locale: Locale) {
  return historyEvents
    .sort((a, b) => a.year - b.year)
    .map((e) => ({
      id: e.id,
      year: e.year,
      title: e.title[locale],
      description: e.description[locale],
    }));
}

// ── Leaders ───────────────────────────────────────────────

export async function getLeaders(locale: Locale) {
  return leaders
    .sort((a, b) => a.order - b.order)
    .map((l) => ({
      id: l.id,
      name: l.name,
      title: l.title[locale],
      bio: l.bio[locale],
      image: l.image,
      churchId: l.churchId,
      order: l.order,
    }));
}

// ── Events ───────────────────────────────────────────────

function getEventStatus(startDate: string, endDate?: string): EventStatus {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : start;
  if (now > end) return "past";
  if (now >= start && now <= end) return "ongoing";
  return "upcoming";
}

export async function getEvents(locale: Locale) {
  return events
    .map((e) => ({
      id: e.id,
      title: e.title[locale],
      description: e.description[locale],
      location: e.location,
      image: e.image,
      startDate: e.startDate,
      endDate: e.endDate,
      status: getEventStatus(e.startDate, e.endDate),
    }))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export async function getEventById(id: string, locale: Locale) {
  const event = events.find((e) => e.id === id);
  if (!event) return undefined;
  return {
    id: event.id,
    title: event.title[locale],
    description: event.description[locale],
    location: event.location,
    image: event.image,
    startDate: event.startDate,
    endDate: event.endDate,
    status: getEventStatus(event.startDate, event.endDate),
  };
}

export async function getAllEventIds() {
  return events.map((e) => e.id);
}

// ── Elders (24 vieillards) ────────────────────────────────

export async function getElders() {
  return [...elders].sort((a, b) => a.order - b.order);
}

// ── Churches ──────────────────────────────────────────────

export async function getChurches() {
  return churches;
}

export async function getMaheloLeaders() {
  return maheloLeaders;
}
