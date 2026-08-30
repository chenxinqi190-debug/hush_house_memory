import { Happy_Monkey } from "next/font/google";

export interface Item {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  icon: string;
  craftableId?: string;
}

export const items: Record<string, Item> = {
  agave_aeterna: {
    id: "agave_aeterna",
    displayName: {
      en: "Agave Aeterna", 
      zh: "永恒龙舌兰",
    },
    icon: "/icons/agave_aeterna.png",
  },
  aglaophotis: {
    id: "aglaophotis",
    displayName: {
      en: "Aglaophotis", 
      zh: "阿格劳福提斯花",
    },
    icon: "/icons/aglaophotis.png",
  },
  asimel: {
    id: "asimel",
    displayName: {
      en: "Asimel", 
      zh: "阿苏麦",
    },
    icon: "/icons/asimel.png",
    craftableId: "asimel"
  },
  beeswax: {
    id: "beeswax",
    displayName: {
      en: "Beeswax", 
      zh: "蜂蜜",
    },
    icon: "/icons/beeswax.png",
  },
  beverage: {
    id: "beverage",
    displayName: {
      en: "Beverage", 
      zh: "饮料",
    },
    icon: "/icons/beverage.png",
  },
  bitterblack_salts: {
    id: "bitterblack_salts",
    displayName: {
      en: "Bitterblack Salts", 
      zh: "苦黑盐",
    },
    icon: "/icons/bitterblack_salts.png",
    craftableId: "bitterblack_salts"
  },
    blue_crown: {
    id: "blue_crown",
    displayName: {
      en: "Blue Crown",
      zh: "蓝冠花",
    },
    icon: "/icons/blue_crown.png",
  },
    bowl_of_sea_blest_pears: {
    id: "bowl_of_sea_blest_pears",
    displayName: {
      en: "Bowl of Sea-Blest Pears",
      zh: "一碗海佑梨",
    },
    icon: "/icons/bowl_of_sea_blest_pears.png",
  },
  chimeric_larva: {
    id: "chimeric_larva",
    displayName: {
      en: "Chimeric Larva",
      zh: "混种幼虫",
    },
    icon: "/icons/chimeric_larva.png",
    craftableId: "chimeric_larva"
  },
  cuckoo_honey: {
    id: "cuckoo_honey",
    displayName: {
      en: "Cuckoo Honey",
      zh: "杜鹃蜜",
    },
    icon:"/icons/cuckoo_honey.png"
  },
  egg: {
    id: "egg",
    displayName: {
      en: "Egg",
      zh: "卵",
    },
    icon:"/icons/egg.png"
  },
  essential_periost: {
    id: "essential_periost",
    displayName: {
      en: "Essential Periost",
      zh: "骨本精华",
    },
    icon:"/icons/essential_periost.png",
    craftableId: "essential_periost"
  },
    fabric: {
    id: "fabric",
    displayName: {
      en: "Fabric",
      zh: "织物与丝缕",
    },
    icon: "/icons/fabric.png",
  },
  flower: {
    id: "flower",
    displayName: {
      en: "Flower", 
      zh: "花",
    },
    icon: "/icons/flower.png",
  },
  fragrant_chalice: {
    id: "fragrant_chalice",
    displayName: {
      en: "Fragrant Chalice",
      zh: "香盏花",
    },
    icon: "/icons/fragrant_chalice.png",
  },
  frith_weft: {
    id: "frith_weft",
    displayName: {
      en: "Frith-Weft",
      zh: "狭湾纬编",
    },
    icon: "/icons/frith_weft.png",
    craftableId: "frith_weft"
  },
  gervinite: {
    id: "gervinite",
    displayName: {
      en: "Gervinite",
      zh: "格维合金",
    },
    icon: "/icons/gervinite.png",
    craftableId: "gervinite"
  },
  gideons_soaks: {
    id: "gideons_soaks",
    displayName: {
      en: "Gideons Soaks",
      zh: "基甸的浸液",
    },
    icon: "/icons/gideons_soaks.png",
    craftableId: "gideons_soaks"
  },
  glass: {
    id: "glass",
    displayName: {
      en: "Glass",
      zh: "玻璃",
    },
    icon: "/icons/glass.png",
  },
  glassfinger_toxin: {
    id: "glassfinger_toxin",
    displayName: {
      en: "Glassfinger Toxin",
      zh: "透指毒素",
    },
    icon: "/icons/glassfinger_toxin.png",
    craftableId:"glassfinger_toxin"
  },
  honey: {
    id: "honey",
    displayName: {
      en: "Honey",
      zh: "蜂蜜",
    },
    icon: "/icons/honey.png",
  },
  honeyscar_jasmine: {
    id: "honeyscar_jasmine",
    displayName: {
      en: "Honeyscar Jasmine",  
    zh: "蜜痂茉莉",
    },
    icon: "/icons/honeyscar_jasmine.png",
  },
  ichor_auroral: {
    id: "ichor_auroral",
    displayName: {
      en: "Ichor Auroral",
      zh: "曙光灵液",
    },
    icon: "/icons/ichor_auroral.png",
    craftableId: "ichor_auroral"
  },
  ichor_vitreous: {
    id: "ichor_vitreous",
    displayName: {
      en: "Ichor Vitreous",
      zh: "玻璃灵液",
    },
    icon: "/icons/ichor_vitreous.png",
    craftableId: "ichor_vitreous"
  },
  instrument: {
    id: "instrument",
    displayName: {
      en: "Instrument",
      zh: "乐器",
    },
    icon: "/icons/instrument.png",
    },
  intoxicating: {
    id: "intoxicating",
    displayName: {
      en: "Intoxicating",
      zh: "烈酒",
    },
    icon: "/icons/intoxicating.png",
  },
  iotic_essence: {
    id: "iotic_essence",
    displayName: {
      en: "Iotic Essence",
      zh: "赤化精华",
    },
    icon: "/icons/iotic_essence.png",
    craftableId: "iotic_essence"
  },
  leaf: {
    id: "leaf",
    displayName: {
      en: "Leaf",
      zh: "叶",
    },
    icon: "/icons/leaf.png",
  },
  leathy: {
    id: "leathy",
    displayName: {
      en: "Leathy",
      zh: "遗忘之水",
    },
    icon: "/icons/leathy.png",
    craftableId: "leathy"
  },
  lens: {
    id: "lens",
    displayName: {
      en: "Lens",
      zh: "透镜",
    },
    icon: "/icons/lens.png",
  },
  lenten_rose: {
    id: "lenten_rose",
    displayName: {
      en: "Lenten Rose",
      zh: "四旬斋玫瑰",
    },
    icon: "/icons/lenten_rose.png",
  },
  light: {
    id: "light",
    displayName: {
      en: "Light",
      zh: "光源",
    },
    icon: "/icons/light.png",
  },
  liquid: {
    id: "liquid",
    displayName: {
      en: "Liquid", 
      zh: "液体",
    },
    icon: "/icons/liquid.png",
  },
  living_relic: {
    id: "living_relic",
    displayName: {
      en: "Living Relic",
      zh: "活化石",
    },
    icon: "/icons/living_relic.png",
    craftableId: "living_relic" 
  },
  metal: {
    id: "metal",
    displayName: {
      en: "Metal", 
      zh: "金属",
    },
    icon: "/icons/metal.png",
  },
  moth_orchid: {
    id: "moth_orchid",
    displayName: {
      en: "Moth Orchid",
      zh: "蛾兰",
    },
    icon: "/icons/moth_orchid.png",
  },
  pale_mommet: {
    id: "pale_mommet",
    displayName: {
      en: "Pale Mommet",
      zh: "苍白人偶",
    },
    icon: "/icons/pale_mommet.png",
    craftableId: "pale_mommet"
    },
    perinculate: {
    id: "perinculate",
    displayName: {
      en: "Perinculate",
      zh: "凶匿墨",
    },
    icon: "/icons/perinculate.png",
    craftableId: "perinculate"
    },
  pyrus_auricalcinus: {
    id: "pyrus_auricalcinus",
    displayName: {
      en: "Pyrus Auricalcinus",
      zh: "铜梨",
    },
    icon: "/icons/pyrus_auricalcinus.png",
    craftableId:"pyrus_auricalcinus"
    },
  rubywise_ruin: {
    id: "rubywise_ruin",
    displayName: {
      en: "Rubywise Ruin",
      zh: "沉沦赤慧",
    },
    icon: "/icons/rubywise_ruin.png",
    craftableId:"rubywise_ruin"
  },
  silver_spintriae: {
    id: "silver_spintriae",
    displayName: {
      en: "Silver Spintriae",
      zh: "古银币",
    },
    icon: "/icons/silver_spintriae.png",
    },
  solomons_preparation: {
    id: "solomons_preparation",
    displayName: {
      en: "Solomon's Preparation",
      zh: "所罗门制剂",
    },
    icon: "/icons/solomons_preparation.png",
    craftableId: "solomons_preparation"
    },
    thunderskins_paean: {
    id: "thunderskins_paean",
    displayName: {
      en: "Thunderskin's Paean",
      zh: "轰雷之皮的赞歌",
    },
    icon: "/icons/thunderskins_paean.png",
    craftableId: "thunderskins_paean"
    },
  wire_orichalcum: {
    id: "wire_orichalcum",
    displayName: {
      en: "Wire (Orichalcum)",
      zh: "金属丝（山铜）",
    },
    icon: "/icons/wire_orichalcum.png",
    craftableId: "wire_orichalcum"
    },
  wire_silver: {
    id: "wire_silver",
    displayName: {
      en: "Wire (Silver)",
      zh: "金属丝（银）",
    },
    icon: "/icons/wire_silver.png",
    craftableId: "wire_silver"
    },
    wood: {
    id: "wood",
    displayName: {
      en: "Wood",
      zh: "木材",
    },
    icon: "/icons/wood.png",
    },
    xanthotic_essence: {
    id: "xanthotic_essence",
    displayName: {
      en: "Xanthotic Essence",
      zh: "黄化精华",
    },
    icon: "/icons/xanthotic_essence.png",
    craftableId: "xanthotic_essence"},
    
}