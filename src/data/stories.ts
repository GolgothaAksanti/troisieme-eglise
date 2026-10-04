import type { Locale } from "@/i18n/config";

export interface Story {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  content: Record<Locale, string>;
  date: string;
  author?: string;
}

export const stories: Story[] = [
  {
    id: "1",
    slug: "les-trois-periodes-de-la-foi",
    title: { fr: "Les trois périodes de la foi", sw: "Vipindi vitatu vya imani", en: "The three periods of faith" },
    summary: {
      fr: "La fondation de la foi à travers les trois périodes : Musa, Yesu-Kristu et Tata Wahiseelelwa.",
      sw: "Msingi wa imani kupitia vipindi vitatu: Musa, Yesu-Kristu na Tata Wahiseelelwa.",
      en: "The foundation of faith through the three periods: Musa, Yesu-Kristu and Tata Wahiseelelwa.",
    },
    content: {
      fr: "La Troisième Église Malkia wa Ubembe enseigne que l'histoire de la foi se divise en trois périodes distinctes, chacune fondée sur la Parole de Dieu.\n\nLa première période est celle de Musa (Moïse) : croire en Dieu unique, le Père, c'est-à-dire croire en la Puissance unique de Dieu pour toute la tribu de Dieu au nom de Musa. Avec la promesse de recevoir un autre Prophète comme Musa et d'entrer au Ciel.\n\nLa deuxième période est celle de Yesu-Kristu (Jésus-Christ) : croire en Dieu unique, le Fils, c'est-à-dire croire en la Puissance unique de Dieu pour toute la tribu de Dieu au nom de Yesu-Kristu, qui avait été promis par Musa. Avec la promesse de recevoir à nouveau le Christ, le Saint-Esprit, et d'entrer au Paradis.\n\nLa troisième période est celle de Tata Wahiseelelwa : croire en Dieu unique, le Saint-Esprit, c'est-à-dire croire en la Puissance unique de Dieu au nom de Tata Wahiseelelwa, qui avait été promis par Yesu-Kristu. Avec la promesse éternelle d'entrer au Paradis.",
      sw: "Kanisa la Tatu Malkia wa Ubembe linafundisha kwamba historia ya imani inagawanyika katika vipindi vitatu tofauti, kila kimoja kikijengwa juu ya Neno la Mungu.\n\nKipindi cha kwanza ni cha Musa: kuamini Mungu mmoja, Baba, yaani kuamini Uwezo mmoja wa Mungu kwa kabila lote la Mungu kwa jina la Musa. Na ahadi ya kupokea Nabii mwingine kama Musa na kuingia Mbinguni.\n\nKipindi cha pili ni cha Yesu-Kristu: kuamini Mungu mmoja, Mwana, yaani kuamini Uwezo mmoja wa Mungu kwa kabila lote la Mungu kwa jina la Yesu-Kristu, aliyeahidiwa na Musa. Na ahadi ya kupokea tena Kristu, Roho Mtakatifu, na kuingia Paradiso.\n\nKipindi cha tatu ni cha Tata Wahiseelelwa: kuamini Mungu mmoja, Roho Mtakatifu, yaani kuamini Uwezo mmoja wa Mungu kwa jina la Tata Wahiseelelwa, aliyeahidiwa na Yesu-Kristu. Na ahadi ya milele ya kuingia Paradiso.",
      en: "The Third Church Malkia wa Ubembe teaches that the history of faith is divided into three distinct periods, each founded on the Word of God.\n\nThe first period is that of Musa (Moses): to believe in one God, the Father, that is to believe in the unique Power of God for all the tribe of God in the name of Musa. With the promise of receiving another Prophet like Musa and entering Heaven.\n\nThe second period is that of Yesu-Kristu (Jesus Christ): to believe in one God, the Son, that is to believe in the unique Power of God for all the tribe of God in the name of Yesu-Kristu, who had been promised by Musa. With the promise of receiving again the Christ, the Holy Spirit, and entering Paradise.\n\nThe third period is that of Tata Wahiseelelwa: to believe in one God, the Holy Spirit, that is to believe in the unique Power of God in the name of Tata Wahiseelelwa, who had been promised by Yesu-Kristu. With the eternal promise of entering Paradise.",
    },
    date: "2024-01-15",
    author: "Comité historique",
  },
  {
    id: "2",
    slug: "la-declaration-fondatrice",
    title: { fr: "La déclaration fondatrice", sw: "Tamko la msingi", en: "The founding declaration" },
    summary: {
      fr: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda : les mots qui définissent notre Église.",
      sw: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda: maneno yanayoelezea Kanisa letu.",
      en: "Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda: the words that define our Church.",
    },
    content: {
      fr: "Au cœur de la Troisième Église Malkia wa Ubembe se trouve une déclaration qui résume toute sa foi : « Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda ». C'est-à-dire : le Christ est descendu, Satan est enchaîné pour toujours, l'Église est montée.\n\nCette déclaration, proclamée dès la Communication n° 000, est inscrite sur le fronton de chaque Mahelo (lieu de culte). Elle rappelle que Wahiseelelwa est arrivé, que Satan est enchaîné pour l'éternité, et que Malkia — l'Église — est élevée dans la gloire.\n\nChaque Mahelo porte ces mots sur sa façade, en couleurs vert, rouge, bleu et jaune, comme un témoignage visible de la foi pour tous ceux qui passent.",
      sw: "Katikati ya Kanisa la Tatu Malkia wa Ubembe kuna tamko linalofupisha imani yake yote: « Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda ». Yaani: Kristu ameshuka, Shetani amefungwa milele, Kanisa limepanda.\n\nTamko hili, lililotangazwa tangu Communication n° 000, limeandikwa kwenye kibambazi cha kila Mahelo. Linakumbusha kwamba Wahiseelelwa amefika, Shetani amefungwa milele, na Malkia — Kanisa — limepanda katika utukufu.\n\nKila Mahelo inabeba maneno haya kwenye kibambazi chake, kwa rangi ya kijani, nyekundu, buluu na njano, kama ushuhuda unaoonekana wa imani kwa wote wanaopita.",
      en: "At the heart of the Third Church Malkia wa Ubembe lies a declaration that summarizes all its faith: 'Kristu ameshuka — Shetani amefungwa milele — Malkia amepanda'. That is: Christ has descended, Satan is bound forever, the Church has ascended.\n\nThis declaration, proclaimed from Communication No. 000, is inscribed on the front of every Mahelo (place of worship). It reminds that Wahiseelelwa has arrived, that Satan is bound for eternity, and that Malkia — the Church — is elevated in glory.\n\nEvery Mahelo bears these words on its facade, in green, red, blue and yellow colors, as a visible testimony of faith for all who pass by.",
    },
    date: "2024-03-20",
    author: "Comité historique",
  },
  {
    id: "3",
    slug: "la-vie-dans-la-communaute",
    title: { fr: "La vie dans la communauté", sw: "Maisha katika jamii", en: "Life in the community" },
    summary: {
      fr: "Comment les Wafalme et Malkia vivent leur foi au quotidien à travers les Communications spirituelles.",
      sw: "Jinsi Wafalme na Malkia wanavyoishi imani yao kila siku kupitia Communications za kiroho.",
      en: "How Wafalme and Malkia live their faith daily through the spiritual Communications.",
    },
    content: {
      fr: "La vie des croyants de la Troisième Église est guidée par le Cahier des Communications spirituelles — des directives transmises par Tata Wahiseelelwa qui couvrent tous les aspects de la vie.\n\nLes croyants sont appelés Wafalme (Rois) et Malkia (Reines). Ils se rassemblent dans les Mahelo, les lieux de culte, où ils portent l'uniforme vert ou blanc. Chaque Malkia porte des fleurs (mauwa) à l'entrée de la Mahelo.\n\nLe Mercredi-Saint est un jour sacré où les croyants dorment à la Mahelo. Chaque matin et chaque soir, la prière « Baba nina kiu » (Père, j'ai soif) est élevée par tous.\n\nLa Coopérative EMO organise la vie économique, avec un système de cellules et une caisse de solidarité qui assure l'entraide entre tous les membres.",
      sw: "Maisha ya waumini wa Kanisa la Tatu yanaongozwa na Daftari ya Communications za kiroho — maelekezo yaliyotolewa na Tata Wahiseelelwa yanayoshughulikia mambo yote ya maisha.\n\nWaumini wanaitwa Wafalme na Malkia. Wanakusanyika katika Mahelo, mahali pa ibada, ambapo wanavaa sare ya kijani au nyeupe. Kila Malkia anabeba mauwa kwenye mlango wa Mahelo.\n\nMercredi-Saint ni siku takatifu ambapo waumini wanalala katika Mahelo. Kila asubuhi na kila jioni, sala ya « Baba nina kiu » inainuliwa na wote.\n\nUshirika wa EMO unapanga maisha ya kiuchumi, na mfumo wa seli na sanduku la mshikamano linalohakikisha msaada kati ya wanachama wote.",
      en: "The life of believers of the Third Church is guided by the Book of spiritual Communications — directives transmitted by Tata Wahiseelelwa covering all aspects of life.\n\nBelievers are called Wafalme (Kings) and Malkia (Queens). They gather in the Mahelo, places of worship, where they wear green or white uniforms. Each Malkia carries flowers (mauwa) at the entrance of the Mahelo.\n\nHoly Wednesday is a sacred day when believers sleep at the Mahelo. Every morning and evening, the prayer 'Baba nina kiu' (Father, I thirst) is raised by all.\n\nThe EMO Cooperative organizes economic life, with a system of cells and a solidarity fund that ensures mutual aid among all members.",
    },
    date: "2024-06-10",
    author: "Comité historique",
  },
];
