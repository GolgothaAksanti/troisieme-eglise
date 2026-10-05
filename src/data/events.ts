import type { Locale } from "@/i18n/config";

export type EventStatus = "past" | "ongoing" | "upcoming";

export interface ChurchEvent {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  location: string;
  image?: string;
  startDate: string; // ISO date string (YYYY-MM-DD)
  endDate?: string;  // ISO date string — omit for single-day events
}

export const events: ChurchEvent[] = [
  {
    id: "1",
    title: {
      fr: "Commémoration du rétablissement de l'Église",
      sw: "Ukumbusho wa kuanzishwa upya kwa Kanisa",
      en: "Commemoration of the Church's reestablishment",
    },
    description: {
      fr: "Célébration annuelle du 3 novembre 1983, date du rétablissement de la Troisième Église Malkia wa Ubembe à Bi'esse-Baraka par Tata Wahiseelelwa Neno.",
      sw: "Sherehe ya kila mwaka ya tarehe 3 Novemba 1983, tarehe ya kuanzishwa upya kwa Kanisa la Tatu Malkia wa Ubembe huko Bi'esse-Baraka na Tata Wahiseelelwa Neno.",
      en: "Annual celebration of November 3, 1983, the date of the reestablishment of the Third Church Malkia wa Ubembe in Bi'esse-Baraka by Tata Wahiseelelwa Neno.",
    },
    location: "Bi'esse-Baraka, Fizi, Sud-Kivu, RDC",
    startDate: "2026-11-03",
    endDate: "2026-11-03",
  },
  {
    id: "2",
    title: {
      fr: "Retraite spirituelle des Mahelo",
      sw: "Faragha ya kiroho ya Mahelo",
      en: "Mahelo spiritual retreat",
    },
    description: {
      fr: "Rassemblement des responsables des Mahelo pour une semaine de prière, d'enseignement et de communion fraternelle.",
      sw: "Mkutano wa waongozi wa Mahelo kwa wiki moja ya maombi, mafundisho na ushirika wa kindugu.",
      en: "Gathering of Mahelo leaders for a week of prayer, teaching and fellowship.",
    },
    location: "Bi'esse Central, RDC",
    startDate: "2026-10-01",
    endDate: "2026-10-08",
  },
  {
    id: "3",
    title: {
      fr: "Conférence de la jeunesse",
      sw: "Mkutano wa vijana",
      en: "Youth conference",
    },
    description: {
      fr: "Rencontre annuelle des jeunes de toutes les Mahelo autour du thème de la foi et de l'engagement communautaire.",
      sw: "Mkutano wa kila mwaka wa vijana wa Mahelo zote kuhusu mada ya imani na kujitolea kwa jamii.",
      en: "Annual gathering of youth from all Mahelo around the theme of faith and community engagement.",
    },
    location: "Uvira, Sud-Kivu, RDC",
    startDate: "2026-08-15",
    endDate: "2026-08-17",
  },
];
