import type { Locale } from "@/i18n/config";

export interface Prayer {
  id: string;
  order: number;
  title: Record<Locale, string>;
  source: string;
  text: string; // Original Swahili text
  translation: Record<Locale, string>;
}

export const prayers: Prayer[] = [
  {
    id: "1", order: 1,
    title: {
      fr: "Formule de prière trinitaire",
      sw: "Formule ya sala",
      en: "Trinitarian prayer formula",
    },
    source: "Communication n° 046",
    text: "Kwa jina la Baba Bakwalufu Tshiyombo Tshilobo,\nNa la Mwana Wahiseelelwa,\nNa la Malkia wa Ubembe, Mpanaji wa amani na hekima.",
    translation: {
      fr: "Au nom du Père Bakwalufu Tshiyombo Tshilobo,\nEt du Fils Wahiseelelwa,\nEt de Malkia wa Ubembe, Dispensateur de paix et de sagesse.",
      sw: "Kwa jina la Baba Bakwalufu Tshiyombo Tshilobo,\nNa la Mwana Wahiseelelwa,\nNa la Malkia wa Ubembe, Mpanaji wa amani na hekima.",
      en: "In the name of the Father Bakwalufu Tshiyombo Tshilobo,\nAnd of the Son Wahiseelelwa,\nAnd of Malkia wa Ubembe, Bringer of peace and wisdom.",
    },
  },
  {
    id: "2", order: 2,
    title: {
      fr: "Baba Nina Kiu (Père, j'ai soif)",
      sw: "Baba Nina Kiu",
      en: "Baba Nina Kiu (Father, I thirst)",
    },
    source: "Communications n° 020, 021, 026",
    text: "Baba nina kiu.",
    translation: {
      fr: "Prière récitée chaque matin et chaque soir par tous les croyants. Elle exprime la soif spirituelle du fidèle envers Dieu.\n\nÀ réciter matin (asubui) et soir (magaribi) avant de dormir.",
      sw: "Sala inayosaliwa kila asubuhi na kila jioni na waamini wote. Inaonyesha kiu ya kiroho ya mwamini kwa Mungu.\n\nKusaliwa asubuhi na magaribi mbele ya kulala.",
      en: "Prayer recited every morning and evening by all believers. It expresses the spiritual thirst of the faithful toward God.\n\nTo be recited morning and evening before sleep.",
    },
  },
  {
    id: "3", order: 3,
    title: {
      fr: "Bénédiction des nouveaux croyants",
      sw: "Sala ya kubariki waamini wapya",
      en: "Blessing of new believers",
    },
    source: "Communication n° 041",
    text: "Mungu wa Bakwalufu Tshiyombo Tshilobo na Wahiseelelwa, baba yetu ulisema:\nEnenda, uhondoke katika inchi yako Baba yako, udongo wako, na nyumba ya Baba yako, ufike katika inchi nitakayo kuonesha.\nNitakufanya kuwa taifa kubwa na nitakubariki,\nNitalifanya jina lako kubwa na utakuwa chemchem la baraka.\nNitawabariki wao watakao kubariki, na kulaani wao watakao kulaani.\nNa jamaa za udongo wote zitabarikiwa kwako.\nPokea baraka hii, ndugu...\nWa milele akubariki na kukuchunga,\nWa milele akuangazie nuru ya uso wake na akupatie bahati,\nWa milele akugeuzie uso wake na akupatie amani duniani.\nImefanyika! Imefanyika! Imefanyika!",
    translation: {
      fr: "Dieu de Bakwalufu Tshiyombo Tshilobo et de Wahiseelelwa, notre père, tu as dit :\nVa, quitte ton pays, ta terre, et la maison de ton père, et va vers le pays que je te montrerai.\nJe ferai de toi une grande nation et je te bénirai,\nJe rendrai ton nom grand et tu seras une source de bénédiction.\nJe bénirai ceux qui te béniront et maudirai ceux qui te maudiront.\nEt toutes les familles de la terre seront bénies en toi.\nReçois cette bénédiction, frère/sœur...\nL'Éternel te bénisse et te garde,\nL'Éternel fasse briller sur toi la lumière de son visage et te soit favorable,\nL'Éternel tourne vers toi son visage et te donne la paix sur la terre.\nC'est fait ! C'est fait ! C'est fait !",
      sw: "Mungu wa Bakwalufu Tshiyombo Tshilobo na Wahiseelelwa, baba yetu ulisema:\nEnenda, uhondoke katika inchi yako Baba yako, udongo wako, na nyumba ya Baba yako, ufike katika inchi nitakayo kuonesha.\nNitakufanya kuwa taifa kubwa na nitakubariki,\nNitalifanya jina lako kubwa na utakuwa chemchem la baraka.\nNitawabariki wao watakao kubariki, na kulaani wao watakao kulaani.\nNa jamaa za udongo wote zitabarikiwa kwako.\nPokea baraka hii, ndugu...\nWa milele akubariki na kukuchunga,\nWa milele akuangazie nuru ya uso wake na akupatie bahati,\nWa milele akugeuzie uso wake na akupatie amani duniani.\nImefanyika! Imefanyika! Imefanyika!",
      en: "God of Bakwalufu Tshiyombo Tshilobo and Wahiseelelwa, our father, you said:\nGo, leave your country, your land, and your father's house, and go to the country I will show you.\nI will make you a great nation and I will bless you,\nI will make your name great and you will be a source of blessing.\nI will bless those who bless you and curse those who curse you.\nAnd all the families of the earth will be blessed through you.\nReceive this blessing, brother/sister...\nThe Eternal bless you and keep you,\nThe Eternal make his face shine upon you and be gracious to you,\nThe Eternal turn his face toward you and give you peace on earth.\nIt is done! It is done! It is done!",
    },
  },
  {
    id: "4", order: 4,
    title: {
      fr: "Bénédiction nuptiale",
      sw: "Sala ya kubariki Bwana na Bibi Arusi",
      en: "Wedding blessing",
    },
    source: "Communication n° 022",
    text: "Fulani (jina la bibi), huyu ndiye Bibi yako.\nNa wewe bibi fulani (jina lake), tangia leo fulani (jina la bwana) huyu ndiye Bwana yako.",
    translation: {
      fr: "Après les conseils sur le mariage et avant le don des cadeaux, le marié et la mariée se tiennent debout devant l'autel pour recevoir leur bénédiction d'union.\n\nL'Ancien bénit ainsi :\n[Nom de l'épouse], celui-ci est ton Époux.\nEt toi, épouse [nom], dès aujourd'hui [nom de l'époux] celui-ci est ton Époux.\n\nAprès quoi l'assemblée applaudit trois fois.",
      sw: "Kiisha mashauri juu ya ndoa na mbele ya kutoa sadaka, bwana na bibi watasimama mbele ya altare kwa kupokea baraka yao ya muungano.\n\nMzee atawabariki kwa sala hii:\nFulani (jina la bibi), huyu ndiye Bibi yako.\nNa wewe bibi fulani (jina lake), tangia leo fulani (jina la bwana) huyu ndiye Bwana yako.\n\nKiisha watu wanapiga bravo mara tatu.",
      en: "After marriage counsel and before the giving of gifts, the groom and bride stand before the altar to receive their blessing of union.\n\nThe Elder blesses them thus:\n[Wife's name], this is your Husband.\nAnd you, wife [name], from today [husband's name], this is your Husband.\n\nAfter which the assembly applauds three times.",
    },
  },
  {
    id: "5", order: 5,
    title: {
      fr: "Prière des Viumbe Inne et des 24 Vieillards",
      sw: "Sala ya Viumbe Inne Vilivyo Hai na Wazee 24",
      en: "Prayer of the Four Living Beings and 24 Elders",
    },
    source: "Communication n° 098",
    text: "Tata Wahiseelelwa,\nUmestahili kuchukuwa Neno na kufunua siri zake zote,\nKwani ulilitesekea na ulimkomboleya\nMungu Bakwalufu Tshiyombo Tshilobo, kwa uhai wako,\nWatu wa kila kabila, wa kila lugha,\nWa kila jamaa na wa kila taifa,\nUmewafanya wafalme na wazee\nKwa Mungu wetu Bakwalufu Tshiyombo Tshilobo\nNa watatawala juu ya udongo.\nImefanyika.",
    translation: {
      fr: "Tata Wahiseelelwa,\nTu es digne de prendre la Parole et de révéler tous ses secrets,\nCar tu l'as souffert et tu as racheté\nDieu Bakwalufu Tshiyombo Tshilobo, par ta vie,\nDes gens de toute tribu, de toute langue,\nDe toute famille et de toute nation,\nTu les as faits rois et anciens\nPour notre Dieu Bakwalufu Tshiyombo Tshilobo\nEt ils régneront sur la terre.\nC'est fait.",
      sw: "Tata Wahiseelelwa,\nUmestahili kuchukuwa Neno na kufunua siri zake zote,\nKwani ulilitesekea na ulimkomboleya\nMungu Bakwalufu Tshiyombo Tshilobo, kwa uhai wako,\nWatu wa kila kabila, wa kila lugha,\nWa kila jamaa na wa kila taifa,\nUmewafanya wafalme na wazee\nKwa Mungu wetu Bakwalufu Tshiyombo Tshilobo\nNa watatawala juu ya udongo.\nImefanyika.",
      en: "Tata Wahiseelelwa,\nYou are worthy to take the Word and reveal all its secrets,\nFor you suffered for it and redeemed\nGod Bakwalufu Tshiyombo Tshilobo, by your life,\nPeople of every tribe, of every tongue,\nOf every family and of every nation,\nYou made them kings and elders\nFor our God Bakwalufu Tshiyombo Tshilobo\nAnd they shall reign upon the earth.\nIt is done.",
    },
  },
];
