export type { Locale } from "@/i18n/config";

// Re-export data types from their source files
export type { Story } from "@/data/stories";
export type { HistoryEvent } from "@/data/history";
export type { Leader } from "@/data/leaders";

export interface Church {
  id: string;
  name: string;
  city: string;
  province?: string;
  country: string;
  description?: string;
  leaderId?: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  reestablishedDate: string;
  headquarters: {
    city: string;
    province: string;
    country: string;
  };
}
