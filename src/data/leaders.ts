import type { Locale } from "@/i18n/config";

export interface Leader {
  id: string;
  name: string;
  title: Record<Locale, string>;
  bio: Record<Locale, string>;
  image?: string;
  churchId?: string;
  order: number;
}

export const leaders: Leader[] = [
  {
    id: "1",
    name: "Bakwalufu Tshiyombo Tshilobo",
    title: { fr: "Fondateur — Baba Mtukufu", sw: "Mwanzilishi — Baba Mtukufu", en: "Founder — Baba Mtukufu" },
    bio: {
      fr: "Bakwalufu Tshiyombo Tshilobo est le fondateur de la Troisième Église Malkia wa Ubembe. Il représente la première personne de la Trinité divine — le Père. Il a transmis l'autorité spirituelle à son disciple Alimasi Bulangi.",
      sw: "Bakwalufu Tshiyombo Tshilobo ndiye mwanzilishi wa Kanisa la Tatu Malkia wa Ubembe. Anawakilisha nafsi ya kwanza ya Utatu wa Mungu — Baba. Alihamisha mamlaka ya kiroho kwa mwanafunzi wake Alimasi Bulangi.",
      en: "Bakwalufu Tshiyombo Tshilobo is the founder of the Third Church Malkia wa Ubembe. He represents the first person of the divine Trinity — the Father. He transferred spiritual authority to his disciple Alimasi Bulangi.",
    },
    order: 1,
  },
  {
    id: "2",
    name: "Alimasi Bulangi Esse — Tata Wahiseelelwa Neno",
    title: { fr: "2ème Prophète de Dieu vivant et vrai", sw: "Nabii wa 2 wa Mungu aliye hai na wa kweli", en: "2nd Prophet of the living and true God" },
    bio: {
      fr: "Disciple de Bakwalufu Tshiyombo Tshilobo, Alimasi Bulangi est devenu Tata Wahiseelelwa Neno — le 2ème Prophète de Dieu vivant et vrai. Il a rétabli l'Église le 3 novembre 1983 à Bi'esse-Baraka et a transmis les Communications spirituelles qui guident la vie de tous les croyants.",
      sw: "Mwanafunzi wa Bakwalufu Tshiyombo Tshilobo, Alimasi Bulangi alikuwa Tata Wahiseelelwa Neno — Nabii wa 2 wa Mungu aliye hai na wa kweli. Alianzisha upya Kanisa tarehe 3 Novemba 1983 huko Bi'esse-Baraka na kutoa Communications za kiroho zinazooongoza maisha ya waamini wote.",
      en: "Disciple of Bakwalufu Tshiyombo Tshilobo, Alimasi Bulangi became Tata Wahiseelelwa Neno — the 2nd Prophet of the living and true God. He reestablished the Church on November 3, 1983 in Bi'esse-Baraka and transmitted the spiritual Communications that guide the life of all believers.",
    },
    order: 2,
  },
  {
    id: "3",
    name: "Asende Atombo Sinahi Mpendwa",
    title: { fr: "Successeur et guide spirituel", sw: "Mrithi na kiongozi wa kiroho", en: "Successor and spiritual guide" },
    bio: {
      fr: "Après le décès de Tata Wahiseelelwa, Asende Atombo Sinahi Mpendwa a été choisi comme successeur pour continuer à guider l'Église dans sa mission spirituelle et veiller à l'application des Communications.",
      sw: "Baada ya kifo cha Tata Wahiseelelwa, Asende Atombo Sinahi Mpendwa alichaguliwa kama mrithi wake kuendelea kuongoza Kanisa katika utume wake wa kiroho na kusimamia utekelezaji wa Communications.",
      en: "After the death of Tata Wahiseelelwa, Asende Atombo Sinahi Mpendwa was chosen as successor to continue guiding the Church in its spiritual mission and oversee the implementation of the Communications.",
    },
    order: 3,
  },
];
