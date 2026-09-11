export interface Wisdom {
  id: string;

  displayName: {
    en: string;
    zh: string;
  };

  icon: string;
}

export const wisdoms: Record<string, Wisdom> = {
    birdsong: {
    id: "birdsong",
    displayName: {
      en: "Birdsong",
      zh: "鸟鸣学",
    },
    icon: "/icons/wisdoms/birdsong.png",
},
horomachistry: {
    id: "horomachistry",
    displayName: {
      en: "Horomachistry",
      zh: "司辰学",
    },
    icon: "/icons/wisdoms/horomachistry.png",
},
hushery: {
    id: "hushery",
    displayName: {
      en: "Hushery",
      zh: "静默术",
    },
    icon: "/icons/wisdoms/hushery.png",
},
    illumination: {
    id: "illumination",
    displayName: {
      en: "Illumination",
      zh: "照明术",
    },
    icon: "/icons/wisdoms/illumination.png",
},
ithastry: {
    id: "ithastry",
    displayName: {
      en: "Ithastry",
      zh: "盗火术",
    },
    icon: "/icons/wisdoms/ithastry.png",
},
nyctodromy: {
    id: "nyctodromy",
    displayName: {
      en: "Nyctodromy",
      zh: "夜游术",
    },
    icon: "/icons/wisdoms/nyctodromy.png",
},
    preservation: {
    id: "preservation",
    displayName: {
      en: "Preservation",
      zh: "保存术",
    },
    icon: "/icons/wisdoms/preservation.png",
  },
  skolekosophy: {
    id: "skolekosophy",
    displayName: {
      en: "Skolekosophy",
      zh: "蠕虫学",
    },
    icon: "/icons/wisdoms/skolekosophy.png",
  },
  the_bosk: {
    id: "the_bosk",
    displayName: {
      en: "The Bosk",
      zh: "丛林学",
    },
    icon: "/icons/wisdoms/the_bosk.png",
  },
};