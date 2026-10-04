import type { Locale } from "@/i18n/config";

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  reestablishedDate: string;
  headquarters: { city: string; province: string; country: string };
}

const siteByLocale: Record<Locale, SiteInfo> = {
  fr: {
    name: "Troisième Église Malkia wa Ubembe",
    tagline: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda.",
    description: "L'Église du Saint-Esprit Tata Wahiseelelwa — fondée en 1923, rétablie le 3 novembre 1983 à Bi'esse-Baraka, Fizi, Sud-Kivu, RDC.",
    foundedYear: 1923,
    reestablishedDate: "1983-11-03",
    headquarters: { city: "Bi'esse-City, Baraka", province: "Sud-Kivu", country: "République Démocratique du Congo" },
  },
  sw: {
    name: "Kanisa la Tatu Malkia wa Ubembe",
    tagline: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda.",
    description: "Kanisa la Roho Mtakatifu Tata Wahiseelelwa — lilianzishwa mwaka 1923, likaanzishwa upya tarehe 3 Novemba 1983 huko Bi'esse-Baraka, Fizi, Sud-Kivu, DRC.",
    foundedYear: 1923,
    reestablishedDate: "1983-11-03",
    headquarters: { city: "Bi'esse-City, Baraka", province: "Sud-Kivu", country: "Jamhuri ya Kidemokrasia ya Kongo" },
  },
  en: {
    name: "Third Church Malkia wa Ubembe",
    tagline: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda.",
    description: "The Church of the Holy Spirit Tata Wahiseelelwa — founded in 1923, reestablished on November 3, 1983 in Bi'esse-Baraka, Fizi, Sud-Kivu, DRC.",
    foundedYear: 1923,
    reestablishedDate: "1983-11-03",
    headquarters: { city: "Bi'esse-City, Baraka", province: "Sud-Kivu", country: "Democratic Republic of the Congo" },
  },
};

export function getSiteData(locale: Locale): SiteInfo {
  return siteByLocale[locale];
}
