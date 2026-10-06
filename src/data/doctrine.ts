import type { Locale } from "@/i18n/config";

export interface FaithPeriod {
  id: string;
  order: number;
  name: Record<Locale, string>;
  figure: string;
  description: Record<Locale, string>;
  promise: Record<Locale, string>;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: Record<Locale, string>;
}

export interface VipajiSaba {
  id: string;
  order: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const faithPeriods: FaithPeriod[] = [
  {
    id: "1", order: 1,
    name: { fr: "Première période — Musa (Moïse)", sw: "Kipindi cha kwanza — Musa", en: "First period — Musa (Moses)" },
    figure: "Musa",
    description: {
      fr: "Croire en Dieu unique, le Père, c'est-à-dire croire en la Puissance unique de Dieu pour toute la tribu de Dieu au nom de Musa.",
      sw: "Kuamini Mungu mmoja, Baba, yaani kuamini Uwezo mmoja wa Mungu kwa kabila lote la Mungu kwa jina la Musa.",
      en: "To believe in one God, the Father, that is to believe in the unique Power of God for all the tribe of God in the name of Musa.",
    },
    promise: {
      fr: "Avec la promesse de recevoir un autre Prophète comme Musa et d'entrer au Ciel.",
      sw: "Na ahadi ya kupokea Nabii mwingine kama Musa na kuingia Mbinguni.",
      en: "With the promise of receiving another Prophet like Musa and entering Heaven.",
    },
  },
  {
    id: "2", order: 2,
    name: { fr: "Deuxième période — Yesu-Kristu", sw: "Kipindi cha pili — Yesu-Kristu", en: "Second period — Yesu-Kristu (Jesus Christ)" },
    figure: "Yesu-Kristu",
    description: {
      fr: "Croire en Dieu unique, le Fils, c'est-à-dire croire en la Puissance unique de Dieu pour toute la tribu de Dieu au nom de Yesu-Kristu, qui avait été promis par Musa.",
      sw: "Kuamini Mungu mmoja, Mwana, yaani kuamini Uwezo mmoja wa Mungu kwa kabila lote la Mungu kwa jina la Yesu-Kristu, aliyeahidiwa na Musa.",
      en: "To believe in one God, the Son, that is to believe in the unique Power of God for all the tribe of God in the name of Yesu-Kristu, who had been promised by Musa.",
    },
    promise: {
      fr: "Avec la promesse de recevoir à nouveau le Christ, le Saint-Esprit, et d'entrer au Paradis.",
      sw: "Na ahadi ya kupokea tena Kristu, Roho Mtakatifu, na kuingia Paradiso.",
      en: "With the promise of receiving again the Christ, the Holy Spirit, and entering Paradise.",
    },
  },
  {
    id: "3", order: 3,
    name: { fr: "Troisième période — Tata Wahiseelelwa", sw: "Kipindi cha tatu — Tata Wahiseelelwa", en: "Third period — Tata Wahiseelelwa" },
    figure: "Tata Wahiseelelwa",
    description: {
      fr: "Croire en Dieu unique, le Saint-Esprit, c'est-à-dire croire en la Puissance unique de Dieu au nom de Tata Wahiseelelwa, qui avait été promis par Yesu-Kristu.",
      sw: "Kuamini Mungu mmoja, Roho Mtakatifu, yaani kuamini Uwezo mmoja wa Mungu kwa jina la Tata Wahiseelelwa, aliyeahidiwa na Yesu-Kristu.",
      en: "To believe in one God, the Holy Spirit, that is to believe in the unique Power of God in the name of Tata Wahiseelelwa, who had been promised by Yesu-Kristu.",
    },
    promise: {
      fr: "Avec la promesse éternelle d'entrer au Paradis.",
      sw: "Na ahadi ya milele ya kuingia Paradiso.",
      en: "With the eternal promise of entering Paradise.",
    },
  },
];

export const trinitarianFormula: Record<Locale, string[]> = {
  fr: [
    "Kwa jina la Baba Bakwalufu Tshiyombo Tshilobo,",
    "Na la Mwana Wahiseelelwa,",
    "Na la Malkia wa Ubembe, Mpanaji wa amani na hekima.",
  ],
  sw: [
    "Kwa jina la Baba Bakwalufu Tshiyombo Tshilobo,",
    "Na la Mwana Wahiseelelwa,",
    "Na la Malkia wa Ubembe, Mpanaji wa amani na hekima.",
  ],
  en: [
    "In the name of the Father Bakwalufu Tshiyombo Tshilobo,",
    "And of the Son Wahiseelelwa,",
    "And of Malkia wa Ubembe, Bringer of peace and wisdom.",
  ],
};

export const vipajiSaba: VipajiSaba[] = [
  {
    id: "1", order: 1,
    title: { fr: "Bénédiction du Roi de Dieu", sw: "Baraka ya Mfalme wa Mungu", en: "Blessing of the King of God" },
    description: {
      fr: "Tout croyant de Malkia wa Ubembe est appelé Roi de Dieu. Il doit respecter le Mahelo, demeurer dans les prières, se réjouir par des danses et des cantiques, lire la Bible et les Communications.",
      sw: "Kila mwamini wa Malkia wa Ubembe anaitwa Mfalme wa Mungu. Anapaswa kuheshimu Mahelo, kukaa katika maombi, kufurahi kwa ngoma na nyimbo, kusoma Biblia na Communications.",
      en: "Every believer of Malkia wa Ubembe is called King of God. They must respect the Mahelo, remain in prayer, rejoice through dances and hymns, read the Bible and the Communications.",
    },
  },
  {
    id: "2", order: 2,
    title: { fr: "Travaux communautaires", sw: "Kazi za jamii", en: "Community work" },
    description: {
      fr: "Le fondement de la vie matérielle du Roi. Chaque croyant participe aux travaux collectifs de la communauté.",
      sw: "Msingi wa maisha ya kimwili ya Mfalme. Kila mwamini anashiriki katika kazi za pamoja za jamii.",
      en: "The foundation of the King's material life. Every believer participates in the collective work of the community.",
    },
  },
  {
    id: "3", order: 3,
    title: { fr: "Confirmation", sw: "Uthibitisho", en: "Confirmation" },
    description: {
      fr: "L'approbation du zèle dans l'Évangile éternel et dans la participation aux travaux communautaires. Trois jours à Bi'esse-Central.",
      sw: "Uthibitisho wa bidii katika Injili ya milele na katika kushiriki kazi za jamii. Siku tatu huko Bi'esse-Central.",
      en: "The approval of zeal in the eternal Gospel and in participation in community work. Three days at Bi'esse-Central.",
    },
  },
  {
    id: "4", order: 4,
    title: { fr: "Ordination des Vieillards", sw: "Kuwekwa Wazee", en: "Ordination of Elders" },
    description: {
      fr: "Être vêtu de la responsabilité de diriger les assemblées cérémoniales. Le vieillard doit posséder une Bible neuve et un cahier des Communications.",
      sw: "Kuvikwa wajibu wa kuongoza mikutano ya sherehe. Mzee lazima awe na Biblia mpya na daftari ya Communications.",
      en: "To be vested with the responsibility of leading ceremonial assemblies. The elder must possess a new Bible and a book of Communications.",
    },
  },
  {
    id: "5", order: 5,
    title: { fr: "Muhongozi de Mahelo", sw: "Muhongozi wa Mahelo", en: "Muhongozi of Mahelo" },
    description: {
      fr: "Le responsable de Mahelo. Il fait appliquer les Communications et travaille en collaboration avec Koko et Mama Mahelo.",
      sw: "Mkuu wa Mahelo. Anasimamia utekelezaji wa Communications na anafanya kazi kwa ushirikiano na Koko na Mama Mahelo.",
      en: "The head of the Mahelo. They enforce the Communications and work in collaboration with Koko and Mama Mahelo.",
    },
  },
  {
    id: "6", order: 6,
    title: { fr: "Les 24 Vieillards", sw: "Wazee 24", en: "The 24 Elders" },
    description: {
      fr: "Les représentants des 24 sièges autour de Neno. Ils surveillent l'application des Communications dans toutes les Mahelo.",
      sw: "Wawakilishi wa viti 24 vinavyozunguka Neno. Wanasimamia utekelezaji wa Communications katika Mahelo zote.",
      en: "The representatives of the 24 seats around Neno. They oversee the implementation of Communications across all Mahelo.",
    },
  },
  {
    id: "7", order: 7,
    title: { fr: "NENO", sw: "NENO", en: "NENO" },
    description: {
      fr: "Le titre à vie du Représentant Légal de l'Église Malkia wa Ubembe. C'est lui qui, par sa signature, promulgue les Communications.",
      sw: "Cheo cha maisha cha Mwakilishi wa Kisheria wa Kanisa Malkia wa Ubembe. Ndiye anayetangaza Communications kwa sahihi yake.",
      en: "The lifetime title of the Legal Representative of the Church Malkia wa Ubembe. It is they who, by their signature, promulgate the Communications.",
    },
  },
];

export const glossary: GlossaryTerm[] = [
  { id: "1", term: "Mahelo", definition: { fr: "Lieu saint de culte. Chaque communauté locale se rassemble dans sa Mahelo.", sw: "Mahali patakatifu pa ibada. Kila jamii ya mtaa inakusanyika katika Mahelo yake.", en: "Holy place of worship. Each local community gathers in its Mahelo." } },
  { id: "2", term: "Malkia", definition: { fr: "Reine — titre donné à chaque croyante de l'Église. Aussi le nom de l'Église elle-même.", sw: "Malkia — cheo kinachopewa kila mwamini wa kike wa Kanisa. Pia jina la Kanisa lenyewe.", en: "Queen — title given to every female believer of the Church. Also the name of the Church itself." } },
  { id: "3", term: "Mfalme / Wafalme", definition: { fr: "Roi / Rois — titre donné à chaque croyant de l'Église.", sw: "Mfalme / Wafalme — cheo kinachopewa kila mwamini wa Kanisa.", en: "King / Kings — title given to every believer of the Church." } },
  { id: "4", term: "Neno", definition: { fr: "La Parole — titre du Représentant Légal suprême de l'Église.", sw: "Neno — cheo cha Mwakilishi Mkuu wa Kisheria wa Kanisa.", en: "The Word — title of the supreme Legal Representative of the Church." } },
  { id: "5", term: "Koko Mahelo", definition: { fr: "Le père spirituel d'une Mahelo locale.", sw: "Baba wa kiroho wa Mahelo ya mtaa.", en: "The spiritual father of a local Mahelo." } },
  { id: "6", term: "Mama Mahelo", definition: { fr: "La mère spirituelle d'une Mahelo locale.", sw: "Mama wa kiroho wa Mahelo ya mtaa.", en: "The spiritual mother of a local Mahelo." } },
  { id: "7", term: "Mauwa", definition: { fr: "Fleurs — chaque croyant porte des fleurs en entrant à la Mahelo et décore sa maison de fleurs.", sw: "Mauwa — kila mwamini anabeba mauwa akiingia Mahelo na kupamba nyumba yake kwa mauwa.", en: "Flowers — every believer carries flowers when entering the Mahelo and decorates their home with flowers." } },
  { id: "8", term: "Mercredi-Saint", definition: { fr: "Le mercredi sacré — jour de rassemblement et de prière communautaire à la Mahelo.", sw: "Jumatano Takatifu — siku ya kukusanyika na maombi ya pamoja katika Mahelo.", en: "Holy Wednesday — day of gathering and communal prayer at the Mahelo." } },
  { id: "9", term: "EMO", definition: { fr: "La Coopérative EMO — système d'entraide économique et de solidarité entre les croyants, organisé en cellules.", sw: "Ushirika wa EMO — mfumo wa msaada wa kiuchumi na mshikamano kati ya waumini, unaopangwa katika seli.", en: "The EMO Cooperative — system of economic mutual aid and solidarity among believers, organized in cells." } },
  { id: "10", term: "Communication", definition: { fr: "Directive spirituelle émise par Tata Wahiseelelwa. L'ensemble des Communications forme le guide de vie de l'Église.", sw: "Maelekezo ya kiroho yaliyotolewa na Tata Wahiseelelwa. Communications zote zinaunda mwongozo wa maisha wa Kanisa.", en: "Spiritual directive issued by Tata Wahiseelelwa. All Communications together form the Church's guide to life." } },
];
