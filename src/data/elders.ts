import type { Locale } from "@/i18n/config";

export interface Elder {
  id: string;
  order: number;
  name: string;
  title?: Record<Locale, string>;
  image?: string;
}

export const elders: Elder[] = [
  { id: "1", order: 1, name: "Wahiseelelwa Alimasi Bulangi-Esse" },
  { id: "2", order: 2, name: "Kasindi Matchumbi" },
  { id: "3", order: 3, name: "Asende Idi Lotembo" },
  { id: "4", order: 4, name: "Asende Mbolwa" },
  { id: "5", order: 5, name: "Mkendelelwa Mshinganwa" },
  { id: "6", order: 6, name: "Luundo Alimasi Matumaini" },
  { id: "7", order: 7, name: "Assumani Ekyoci" },
  { id: "8", order: 8, name: "Selemani Mwenebolongo" },
  { id: "9", order: 9, name: "Musikana Alimasi" },
  { id: "10", order: 10, name: "Asende Msebengi" },
  { id: "11", order: 11, name: "Alimasi Wilondja" },
  { id: "12", order: 12, name: "Ishiabule Eca Abeli" },
  { id: "13", order: 13, name: "Lucibela Sungula" },
  { id: "14", order: 14, name: "Mnyomoelwa Machumbe" },
  { id: "15", order: 15, name: "Ishiabwe Mto Abeli" },
  { id: "16", order: 16, name: "Abwe Mwenebenga" },
  { id: "17", order: 17, name: "Myenga Ishielubeca" },
  { id: "18", order: 18, name: "Wilondja Pala" },
  { id: "19", order: 19, name: "Alimasi Bilombele" },
  { id: "20", order: 20, name: "Matshimbo" },
  { id: "21", order: 21, name: "Mulenda" },
  { id: "22", order: 22, name: "Olengo" },
  { id: "23", order: 23, name: "Bakwalufu Tshiyombo Tshilobo" },
  { id: "24", order: 24, name: "Chirezi" },
];
