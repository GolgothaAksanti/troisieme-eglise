import type { Locale } from "@/i18n/config";

export interface HistoryEvent {
  id: string;
  year: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const historyEvents: HistoryEvent[] = [
  {
    id: "1", year: 1923,
    title: { fr: "Fondation de l'Église", sw: "Kuanzishwa kwa Kanisa", en: "Founding of the Church" },
    description: {
      fr: "La Troisième Église Malkia wa Ubembe est fondée dans l'est du Kasaï par Bakwalufu Tshiyombo Tshilobo, Baba Mtukufu.",
      sw: "Kanisa la Tatu Malkia wa Ubembe lilianzishwa mashariki mwa Kasaï na Bakwalufu Tshiyombo Tshilobo, Baba Mtukufu.",
      en: "The Third Church Malkia wa Ubembe is founded in eastern Kasaï by Bakwalufu Tshiyombo Tshilobo, Baba Mtukufu.",
    },
  },
  {
    id: "2", year: 1983,
    title: { fr: "Rétablissement à Bi'esse-Baraka", sw: "Kuanzishwa upya huko Bi'esse-Baraka", en: "Reestablishment at Bi'esse-Baraka" },
    description: {
      fr: "Le 3 novembre 1983, l'Église est rétablie à Bi'esse-Baraka, territoire de Fizi, Sud-Kivu, sous la direction du 2ème Prophète Tata Wahiseelelwa Neno. La déclaration fondatrice est proclamée : « Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda ».",
      sw: "Tarehe 3 Novemba 1983, Kanisa linaanzishwa upya huko Bi'esse-Baraka, wilaya ya Fizi, Sud-Kivu, chini ya uongozi wa Nabii wa 2 Tata Wahiseelelwa Neno. Tamko la msingi linatangazwa: « Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda ».",
      en: "On November 3, 1983, the Church is reestablished in Bi'esse-Baraka, Fizi territory, Sud-Kivu, under the leadership of the 2nd Prophet Tata Wahiseelelwa Neno. The founding declaration is proclaimed: 'Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda'.",
    },
  },
  {
    id: "3", year: 1986,
    title: { fr: "Premiers grands rassemblements", sw: "Mikutano mikubwa ya kwanza", en: "First major gatherings" },
    description: {
      fr: "Les premiers mkutano (rassemblements) sont organisés à Bi'esse et Sinaï-Bi'esse, rassemblant les Wafalme et Malkia de toutes les Mahelo.",
      sw: "Mikutano ya kwanza mikubwa inafanyika huko Bi'esse na Sinaï-Bi'esse, ikikusanya Wafalme na Malkia kutoka Mahelo zote.",
      en: "The first major mkutano (gatherings) are organized in Bi'esse and Sinaï-Bi'esse, bringing together Wafalme and Malkia from all Mahelo.",
    },
  },
  {
    id: "4", year: 1987,
    title: { fr: "Création de la Coopérative EMO", sw: "Kuundwa kwa Ushirika wa EMO", en: "Creation of the EMO Cooperative" },
    description: {
      fr: "La Coopérative EMO est structurée avec des cellules dans chaque communauté, instaurant un système d'entraide économique et de solidarité entre les croyants.",
      sw: "Ushirika wa EMO unapangwa na seli katika kila jamii, ukianzisha mfumo wa msaada wa kiuchumi na mshikamano kati ya waumini.",
      en: "The EMO Cooperative is structured with cells in each community, establishing a system of economic mutual aid and solidarity among believers.",
    },
  },
  {
    id: "5", year: 1988,
    title: { fr: "Expansion des Mahelo", sw: "Upanuzi wa Mahelo", en: "Expansion of the Mahelo" },
    description: {
      fr: "De nouvelles Mahelo sont établies : Eden-Bi'esse (Uvira), Amani-Bi'esse (Bukavu), Majengo Mapya-Bi'esse, et d'autres à travers le Sud-Kivu.",
      sw: "Mahelo mpya zinaanzishwa: Eden-Bi'esse (Uvira), Amani-Bi'esse (Bukavu), Majengo Mapya-Bi'esse, na nyingine katika Sud-Kivu.",
      en: "New Mahelo are established: Eden-Bi'esse (Uvira), Amani-Bi'esse (Bukavu), Majengo Mapya-Bi'esse, and others across Sud-Kivu.",
    },
  },
  {
    id: "6", year: 1990,
    title: { fr: "Expansion régionale", sw: "Upanuzi wa kikanda", en: "Regional expansion" },
    description: {
      fr: "L'Église s'étend au-delà des frontières congolaises, établissant des communautés au Burundi, au Rwanda et en Tanzanie.",
      sw: "Kanisa linapanuka nje ya mipaka ya Kongo, likianzisha jamii nchini Burundi, Rwanda na Tanzania.",
      en: "The Church extends beyond Congolese borders, establishing communities in Burundi, Rwanda and Tanzania.",
    },
  },
  {
    id: "7", year: 2010,
    title: { fr: "Présence aux États-Unis", sw: "Uwepo nchini Marekani", en: "Presence in the United States" },
    description: {
      fr: "La diaspora congolaise porte la foi outre-Atlantique avec l'établissement d'une communauté à Bowling Green, Kentucky.",
      sw: "Diaspora ya Kongo inabeba imani ng'ambo ya Atlantiki kwa kuanzisha jamii huko Bowling Green, Kentucky.",
      en: "The Congolese diaspora carries the faith across the Atlantic with the establishment of a community in Bowling Green, Kentucky.",
    },
  },
];
