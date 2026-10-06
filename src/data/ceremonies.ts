import type { Locale } from "@/i18n/config";

export interface Ceremony {
  id: string;
  order: number;
  title: Record<Locale, string>;
  source: string;
  description: Record<Locale, string>;
  steps: Record<Locale, string[]>;
}

export const ceremonies: Ceremony[] = [
  {
    id: "1", order: 1,
    title: {
      fr: "Ordination des Vieillards",
      sw: "Kuhamuru Wazee Wapya",
      en: "Ordination of Elders",
    },
    source: "Communications n° 027, 035, 051, 063",
    description: {
      fr: "La cérémonie d'ordination des nouveaux vieillards (anciens) se tient le 1er Août à Bi'esse-Central. Les candidats doivent avoir été confirmés, avoir dormi trois jours à la Mahelo Bi'esse-Central, et posséder une Bible neuve et un cahier des Communications.",
      sw: "Sherehe ya kuwekwa wazee wapya inafanyika tarehe 1 Agosti huko Bi'esse-Central. Wagombea lazima wawe wamethibitishwa, wamelala siku tatu katika Mahelo Bi'esse-Central, na kuwa na Biblia mpya na daftari ya Communications.",
      en: "The ordination ceremony for new elders takes place on August 1st at Bi'esse-Central. Candidates must have been confirmed, have slept three days at the Mahelo Bi'esse-Central, and possess a new Bible and a book of Communications.",
    },
    steps: {
      fr: [
        "Le candidat prépare : uniforme blanc-blanc avec kofia noire (hommes) ou sina makosa avec kitambaa noir (femmes), une Bible neuve (la sienne) et 7 bougies.",
        "La Bible est fermée et placée au sol devant le siège de Mwana-Kondoo (devant l'autel).",
        "Chaque nouveau vieillard se tient debout sur la Bible, tenant son cahier des Communications dans la main droite, main levée et bouche ouverte.",
        "Le vieillard qui dirige la cérémonie tourne autour du candidat trois fois.",
        "Le candidat descend et retourne à sa place. Le suivant prend sa place, et ainsi de suite.",
      ],
      sw: [
        "Mgombea anajitayarisha: sare nyeupe-nyeupe na kofia nyeusi (wanaume) au sina makosa na kitambaa cheusi (wanawake), Biblia mpya (yake) na mishumaa 7.",
        "Biblia inafungwa na kuwekwa chini mbele ya kiti cha Mwana-Kondoo (mbele ya altare).",
        "Kila mzee mpya anasimama juu ya Biblia, akishika daftari ya Communications katika mkono wake wa kuume, mkono juu na kinywa wazi.",
        "Mzee anayeongoza sherehe anazunguka mgombea mara tatu.",
        "Mgombea anashuka na kurudi mahali pake. Mwingine anafuata, na kadhalika.",
      ],
      en: [
        "The candidate prepares: white-white uniform with black kofia (men) or sina makosa with black kitambaa (women), a new Bible (their own) and 7 candles.",
        "The Bible is closed and placed on the ground before the seat of Mwana-Kondoo (before the altar).",
        "Each new elder stands on the Bible, holding their book of Communications in the right hand, hand raised and mouth open.",
        "The elder leading the ceremony walks around the candidate three times.",
        "The candidate steps down and returns to their place. The next one follows, and so on.",
      ],
    },
  },
  {
    id: "2", order: 2,
    title: {
      fr: "Bénédiction nuptiale",
      sw: "Baraka ya Ndoa",
      en: "Wedding Blessing",
    },
    source: "Communication n° 022",
    description: {
      fr: "Après les conseils sur le mariage et avant le don des cadeaux, le marié et la mariée se tiennent debout et s'approchent de l'autel du Seigneur pour recevoir leur bénédiction d'union.",
      sw: "Kiisha mashauri juu ya ndoa na mbele ya kutoa sadaka, bwana na bibi watasimama na kusogelea altare ya Bwana kwa kupokea baraka yao ya muungano.",
      en: "After marriage counsel and before the giving of gifts, the groom and bride stand and approach the Lord's altar to receive their blessing of union.",
    },
    steps: {
      fr: [
        "L'Ancien donne les conseils maritaux au couple.",
        "Le marié et la mariée se lèvent et s'approchent de l'autel.",
        "L'Ancien prononce la bénédiction : « [Nom], celui-ci est ton Époux / celle-ci est ton Épouse. »",
        "L'assemblée applaudit trois fois (bravo ! bravo ! bravo !).",
        "Le couple est invité à retourner à sa place.",
      ],
      sw: [
        "Mzee anatoa mashauri ya ndoa kwa wanandoa.",
        "Bwana na bibi wanasimama na kusogea altare.",
        "Mzee anatamka baraka: « Fulani (jina la bibi), huyu ndiye Bibi yako. Na wewe bibi fulani, tangia leo fulani huyu ndiye Bwana yako. »",
        "Watu wanapiga bravo mara tatu.",
        "Wanandoa wanarudi kukaa mahali pao.",
      ],
      en: [
        "The Elder gives marriage counsel to the couple.",
        "The groom and bride stand and approach the altar.",
        "The Elder pronounces the blessing: '[Name], this is your Husband / this is your Wife.'",
        "The assembly applauds three times.",
        "The couple is invited to return to their seats.",
      ],
    },
  },
  {
    id: "3", order: 3,
    title: {
      fr: "Cérémonie des Watoto wa Agano (Enfants de l'Alliance)",
      sw: "Sherehe ya Watoto wa Agano",
      en: "Ceremony of the Children of the Covenant",
    },
    source: "Communication n° 042",
    description: {
      fr: "Les enfants de l'alliance (watoto wa agano) — enfants nés de croyants — passent une cérémonie spéciale à Bi'esse-Central. Ils doivent dormir trois jours à la Mahelo avant la cérémonie.",
      sw: "Watoto wa agano — watoto waliozaliwa na waamini — wanapitia sherehe maalum huko Bi'esse-Central. Lazima walale siku tatu katika Mahelo kabla ya sherehe.",
      en: "The children of the covenant (watoto wa agano) — children born to believers — undergo a special ceremony at Bi'esse-Central. They must sleep three days at the Mahelo before the ceremony.",
    },
    steps: {
      fr: [
        "Les enfants de l'alliance arrivent à Bi'esse-Central.",
        "Ils dorment trois nuits à la Mahelo (le 9, le 10, le 11 du mois spirituel).",
        "Le 12, la cérémonie a lieu.",
        "La cérémonie se tient uniquement à Bi'esse, la Nouvelle, à la fin du mois spirituel.",
      ],
      sw: [
        "Watoto wa agano wanafika Bi'esse-Central.",
        "Wanalala usiku tatu katika Mahelo (le 9, le 10, le 11 ya mwezi wa kiroho).",
        "Le 12, sherehe inafanyika.",
        "Sherehe inafanyika tu pa Bi'esse, la Nouvelle, mwisho wa mwezi wa kiroho.",
      ],
      en: [
        "The children of the covenant arrive at Bi'esse-Central.",
        "They sleep three nights at the Mahelo (the 9th, 10th, 11th of the spiritual month).",
        "On the 12th, the ceremony takes place.",
        "The ceremony is held only at Bi'esse, la Nouvelle, at the end of the spiritual month.",
      ],
    },
  },
  {
    id: "4", order: 4,
    title: {
      fr: "Transfert funéraire — Construction du Bureau",
      sw: "Kuhamisha Mfalme — Kujenga Bureau",
      en: "Funeral Transfer — Building the Bureau",
    },
    source: "Communication n° 102",
    description: {
      fr: "Lorsqu'un croyant décédé doit être transféré vers un nouveau lieu de repos, un parent demande aux vieillards d'organiser la cérémonie. Un Bureau (mémorial) est construit avec sept escaliers de chandelier.",
      sw: "Mfalme aliyefariki anapohitaji kuhamishwa kwenda mahali mapya pa kupumzika, ndugu anaweza kuomba wazee wafanye sherehe. Bureau (ukumbusho) inajengwa na ngazi saba za chandelier.",
      en: "When a deceased believer needs to be transferred to a new resting place, a relative asks the elders to organize the ceremony. A Bureau (memorial) is built with seven chandelier steps.",
    },
    steps: {
      fr: [
        "Un parent du défunt demande aux vieillards que la cérémonie ait lieu.",
        "L'assemblée se rend à l'ancien lieu de repos. Tous tournent autour du Bureau trois fois en récitant la prière du Mont Sinaï.",
        "Le dirigeant proclame : « Par la gloire du Père Bakwalufu Tshiyombo Tshilobo, du Fils Wahiseelelwa et de Malkia wa Ubembe — Enlevez la pierre. »",
        "Le parent recueille une pierre ou de la terre de l'ancien lieu dans un tissu blanc préparé.",
        "Le dirigeant dit : « Déliez-le et laissez-le aller. »",
        "Tous observent une minute de silence.",
        "L'assemblée se rend au nouvel emplacement. Ils déposent le tissu, tournent trois fois en récitant la prière de la Foi, et déposent leurs fleurs.",
        "La construction du nouveau Bureau commence : sept escaliers de chandelier, avec fleurs et bougies sur chaque marche.",
        "Les bougies sont allumées. La prière du Mont Sinaï est récitée trois fois. L'assemblée se retire en laissant les bougies brûler.",
      ],
      sw: [
        "Ndugu wa marehemu anaomba wazee sherehe ifanyike.",
        "Mkutano unaenda mahali pa zamani pa kupumzika. Wote wanazunguuka Bureau mara tatu wakisali sala ya Mlima wa Sinai.",
        "Kiongozi anatangaza: « Kwa utukufu wa Baba Bakwalufu Tshiyombo Tshilobo, na wa Mwana Wahiseelelwa, na wa Malkia wa Ubembe — Hondoa jiwe. »",
        "Ndugu anachukua jiwe au udongo kutoka mahali pa zamani katika kitambaa cheupe.",
        "Kiongozi anasema: « Mumufungue na mumuache aende. »",
        "Wote wanakaa kimya muda wa dakika moja.",
        "Mkutano unaenda mahali mapya. Wanaweka kitambaa, wanazunguuka mara tatu wakisali sala ya Imani, na kuweka mauwa yao.",
        "Ujenzi wa Bureau mpya unaanza: ngazi saba za chandelier, na mauwa na mishumaa kwa kila ngazi.",
        "Mishumaa inawashwa. Sala ya Mlima wa Sinai inasaliwa mara tatu. Mkutano unaondoka wakiacha mishumaa inawaka.",
      ],
      en: [
        "A relative of the deceased asks the elders for the ceremony to take place.",
        "The assembly goes to the old resting place. All circle the Bureau three times reciting the prayer of Mount Sinai.",
        "The leader proclaims: 'By the glory of the Father Bakwalufu Tshiyombo Tshilobo, of the Son Wahiseelelwa, and of Malkia wa Ubembe — Remove the stone.'",
        "The relative collects a stone or earth from the old place in a prepared white cloth.",
        "The leader says: 'Unbind him and let him go.'",
        "All observe a minute of silence.",
        "The assembly goes to the new location. They place the cloth, circle three times reciting the prayer of Faith, and lay down their flowers.",
        "Construction of the new Bureau begins: seven chandelier steps, with flowers and candles on each step.",
        "The candles are lit. The prayer of Mount Sinai is recited three times. The assembly departs, leaving the candles burning.",
      ],
    },
  },
];
