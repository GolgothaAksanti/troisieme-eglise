import type { Locale } from "@/i18n/config";

export interface Hymn {
  id: string;
  order: number;
  title: string;
  source: string;
  language: string;
  refrain?: string;
  verses: string[];
  translation?: Record<Locale, string>;
}

export const hymns: Hymn[] = [
  {
    id: "1", order: 1,
    title: "Je Suis Fort",
    source: "Communication n° 006",
    language: "Français",
    refrain: "Je suis fort, fort\nOui plus que Vainqueur\nPar le sang du Sauveur\nPar le sang de Jésus\nMon Sauveur (×2)",
    verses: [
      "Qui est celui, qui m'a rendu libre\nJésus Sauveur, Jésus Sauveur\nLa grande puissance, je l'ai eue de qui ?\nPar le sang de Jésus, Mon Sauveur",
      "Comment j'ai pu détruire les forces\nLe sang du Christ, le sang du Christ\nJ'ai approché la source de vie\nLa source du sang de Jésus",
      "Comment j'ai pu être lavé d'Esprit\nLe sang du Christ, le sang du Christ\nPurification, je l'ai eue de qui ?\nPuissance du sang de Christ",
    ],
    translation: {
      fr: "À chanter après les prières quotidiennes du matin et du soir.",
      sw: "Kuimba baada ya sala za kila siku za asubuhi na jioni.",
      en: "To be sung after daily morning and evening prayers.",
    },
  },
  {
    id: "2", order: 2,
    title: "Mbingu Mpya na Dunia Mpya",
    source: "Communication n° 007",
    language: "Swahili",
    refrain: "Watu wanatafuta kweli kweli,\nNeno la Baba Mungu",
    verses: [
      "Tunaishi mbingu mpya na dunia mpya\nShetani amefungwa na kuangamizwa (×2)",
      "Dunia mpya tulimo, dunia ya Wahisee\nWa Malkia wafurai na wanamsifu (×2)",
    ],
    translation: {
      fr: "Nous vivons dans de nouveaux cieux et une nouvelle terre. Satan est enchaîné et détruit. Le nouveau monde dans lequel nous sommes, le monde de Wahisee, les Malkia se réjouissent et le louent.",
      sw: "Tunaishi mbingu mpya na dunia mpya. Shetani amefungwa na kuangamizwa. Dunia mpya tulimo, dunia ya Wahisee, wa Malkia wafurai na wanamsifu.",
      en: "We live in new heavens and a new earth. Satan is bound and destroyed. The new world we are in, the world of Wahisee, the Malkia rejoice and praise him.",
    },
  },
  {
    id: "3", order: 3,
    title: "Wote ni Wazima",
    source: "Communication n° 021",
    language: "Swahili",
    refrain: "Mtoto wa Tshiyombo — Hakasirikake\nMtoto wa Wahisee — Hakasirikake\nMtoto wa Olengo — Hakasirikake\nMtoto wa Mulenda — Hakasirikake\nMtoto wa Matshimbo — Hakasirikake\nMtoto wa Chirezi — Hakasirikake\nMtoto wa Mangala — Hakasirikake\nMtoto wa Apendeki — Hakasirikake\nMtoto wa Tatu — Hakasirikake\nMtoto wa Mahelo — Hakasirikake",
    verses: [
      "Wote ni wazima? — Wote ni wazima!\nBaba ni muzima? — Yeye ni muzima!\nMama ni muzima? — Yeye ni muzima!\nWatoto ni wazima? — Wote ni wazima!",
    ],
    translation: {
      fr: "Cantique chanté lors de la cérémonie de guérison des malades à la Mahelo. « Tous sont-ils en bonne santé ? — Tous sont en bonne santé ! »",
      sw: "Wimbo unaoimbiwa wakati wa ibada ya kuombea wagonjwa katika Mahelo. « Wote ni wazima? — Wote ni wazima! »",
      en: "Hymn sung during the healing ceremony for the sick at the Mahelo. 'Are all well? — All are well!'",
    },
  },
  {
    id: "4", order: 4,
    title: "Wokovu ni wa Mungu Wetu",
    source: "Communication n° 058 — Funguo la Azina Mpya",
    language: "Swahili",
    refrain: "",
    verses: [
      "Wokovu ni wa Mungu wetu\nAkaaye katika kiti cha Enzi\nNa wa Mwana Kondoo\nImefanyika.",
      "Iwe kwa Mungu wetu\nSifa, utukufu,\nHekima, Shukrani, heshima,\nUwezo na Nguvu\nKwa Milele na Milele!\nImefanyika, imefanyika.",
    ],
    translation: {
      fr: "Le salut appartient à notre Dieu, qui siège sur le trône, et à l'Agneau. C'est fait. Que soient à notre Dieu la louange, la gloire, la sagesse, l'action de grâce, l'honneur, la puissance et la force, aux siècles des siècles !",
      sw: "Wokovu ni wa Mungu wetu akaaye katika kiti cha Enzi na wa Mwana Kondoo. Imefanyika. Iwe kwa Mungu wetu sifa, utukufu, hekima, shukrani, heshima, uwezo na nguvu kwa milele na milele!",
      en: "Salvation belongs to our God, who sits on the throne, and to the Lamb. It is done. May praise, glory, wisdom, thanksgiving, honor, power and strength be to our God forever and ever!",
    },
  },
  {
    id: "5", order: 5,
    title: "Ufalme wa Ulimwengu",
    source: "Communication n° 058 — Funguo la Azina Mpya",
    language: "Swahili",
    refrain: "",
    verses: [
      "Ufalme wa ulimwengu\nUmepewa Bwana wetu\nNawa Malkia wake\nNaye atatawala milele na milele.",
      "Tunakushukuru Bwana Mungu Mwenyenzi,\nUliye na uliyekuako\nKwa ginsi ulivyochukuwa\nUwezo wako mkuu\nNa kujichukulia utawala wako.",
      "Mataifa walichemka, na hasira yako ikaja,\nWakati umekuja wa kuwahukumu wafu,\nMa Nabii na watakatifu\nNa ya kuharibu wao\nWanao haribu Dunia.\nImefanyika, imefanyika, imefanyika.",
    ],
    translation: {
      fr: "Le royaume du monde a été donné à notre Seigneur et à son Église, et il régnera aux siècles des siècles. Nous te rendons grâce, Seigneur Dieu Tout-Puissant, qui es et qui étais, car tu as pris ta grande puissance et tu as établi ton règne.",
      sw: "Ufalme wa ulimwengu umepewa Bwana wetu nawa Malkia wake, naye atatawala milele na milele. Tunakushukuru Bwana Mungu Mwenyenzi, uliye na uliyekuako, kwa ginsi ulivyochukuwa uwezo wako mkuu na kujichukulia utawala wako.",
      en: "The kingdom of the world has been given to our Lord and to his Church, and he shall reign forever and ever. We thank you, Lord God Almighty, who is and who was, for you have taken your great power and established your reign.",
    },
  },
  {
    id: "6", order: 6,
    title: "Malkia wa Ubembe (Hymne)",
    source: "Communication n° 036",
    language: "Swahili",
    refrain: "",
    verses: [
      "Hymne officiel de l'Église, remplaçant « Leo ni siku ya furaha... »",
    ],
    translation: {
      fr: "L'hymne officiel de l'Église, institué par la Communication n° 036. Il remplace l'ancien hymne « Leo ni siku ya furaha » (Aujourd'hui est un jour de joie).",
      sw: "Wimbo rasmi wa Kanisa, uliowekwa na Communication n° 036. Unachukua nafasi ya wimbo wa zamani « Leo ni siku ya furaha ».",
      en: "The official hymn of the Church, established by Communication No. 036. It replaces the former hymn 'Leo ni siku ya furaha' (Today is a day of joy).",
    },
  },
];
