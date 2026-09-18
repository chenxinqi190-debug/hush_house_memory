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
  acrid_marrow: {
    id: "acrid_marrow",
    displayName: {
      en: "Acrid Marrow",
      zh: "苦西葫芦",
    },
    icon: "/icons/acrid_marrow.png",
  },
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
  aglaophotis_scented_candle: {
    id: "aglaophotis_scented_candle",
    displayName: {
      en: "Aglaophotis-Scented Candle",
      zh: "阿格劳福提斯花薰烛",
    },
    icon: "/icons/aglaophotis_scented_candle.png",
    craftableId: "aglaophotis_scented_candle",
  },
  ambergris_chunk: {
    id: "ambergris_chunk",
    displayName: {
      en: "Ambergris Chunk",
      zh: "龙涎香块",
    },
    icon: "/icons/ambergris_chunk.png",
  },
  amethyst_ampoule: {
    id: "amethyst_ampoule",
    displayName: {
      en: "Amethyst Ampoule",
      zh: "紫晶安瓿瓶",
    },
    icon: "/icons/amethyst_ampoule.png",
    craftableId: "amethyst_ampoule",
  },
  animal_bones: {
    id: "animal_bones",
    displayName: {
      en: "Animal Bones",
      zh: "兽骨",
    },
    icon: "/icons/animal_bones.png",
  },
  arsenic: {
    id: "arsenic",
    displayName: {
      en: "Arsenic",
      zh: "砒霜",
    },
    icon: "/icons/arsenic.png",
  },
  ascendant_harmony: {
    id: "ascendant_harmony",
    displayName: {
      en: "Ascendant Harmony", 
      zh: "方兴和声",
    },
    icon: "/icons/memories/ascendant_harmony.png",
  },
  ashartine: {
    id: "ashartine",
    displayName: {
      en: "Ashartine",
      zh: "阿夏廷",
    },
    icon: "/icons/ashartine.png",
    craftableId: "ashartine",
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
  atlantic_amber: {
    id: "atlantic_amber",
    displayName: {
      en: "Atlantic Amber",
      zh: "大西洋琥珀",
    },
    icon: "/icons/atlantic_amber.png",
  },
  awakened_feather: {
    id: "awakened_feather",
    displayName: {
      en: "Awakened Feather",
      zh: "觉醒翎羽",
    },
    icon: "/icons/awakened_feather.png",
    craftableId: "awakened_feather",
  },
  azoth: {
    id: "azoth",
    displayName: {
      en: "Azoth",
      zh: "阿佐特",
    },
    icon: "/icons/azoth.png",
    craftableId: "azoth",
  },
  basket_leeks: {
    id: "basket_leeks",
    displayName: {
      en: "Basket Of Leeks",
      zh: "一篮韭葱",
    },
    icon: "/icons/basket_leeks.png",
  },
  basket_onions: {
    id: "basket_onions",
    displayName: {
      en: "Basket Of Onions",
      zh: "一篮洋葱",
    },
    icon: "/icons/basket_onions.png",
  },
  basket_vegetables: {
    id: "basket_vegetables",
    displayName: {
      en: "Basket Of Onions",
      zh: "一篮蔬菜",
    },
    icon: "/icons/basket_vegetables.png",
  },
  bedside_candleholder: {
    id: "bedside_candleholder",
    displayName: {
      en: "Bedside Candleholder",
      zh: "床头烛台",
    },
    icon: "/icons/bedside_candleholder.png",
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
  black_dove_wine: {
    id: "black_dove_wine",
    displayName: {
      en: "Black Dove Wine",
      zh: "黑鸽酒",
    },
    icon: "/icons/black_dove_wine.png",
  },
  blackberry_jam: {
    id: "blackberry_jam",
    displayName: {
      en: "Blackberry Jam",
      zh: "黑莓酱",
    },
    icon: "/icons/blackberry_jam.png",
    craftableId: "blackberry_jam",
  },
    blue_crown: {
    id: "blue_crown",
    displayName: {
      en: "Blue Crown",
      zh: "蓝冠花",
    },
    icon: "/icons/blue_crown.png",
  },
  bokken_captain_torgue_n_mistress_dearday: {
    id: "bokken_captain_torgue_n_mistress_dearday",
    displayName: {
      en: "Bokken Captain Torgue and Mistress Dearday",
      zh: "木刀：图格上尉与蒂尔黛夫人",
    },
    icon: "/icons/bokken_captain_torgue_n_mistress_dearday.png",
  },
  bowl_of_sea_blest_pears: {
    id: "bowl_of_sea_blest_pears",
    displayName: {
      en: "Bowl of Sea-Blest Pears",
      zh: "一碗海佑梨",
    },
    icon: "/icons/bowl_of_sea_blest_pears.png",
  },
  canned_ham: {
    id: "canned_ham",
    displayName: {
      en: "Canned Ham",
      zh: "火腿罐头",
    },
    icon: "/icons/canned_ham.png",
  },
  catsclaw: {
    id: "catsclaw",
    displayName: {
      en: "Catsclaw",
      zh: "猫爪草",
    },
    icon: "/icons/catsclaw.png",
  },
  catwink: {
    id: "catwink",
    displayName: {
      en: "Catwink",
      zh: "猫瞬墨",
    },
    icon: "/icons/catwink.png",
    craftableId: "catwink",
  },
  chair_of_challenges: {
    id: "chair_of_challenges",
    displayName: {
      en: "Chair Of Challenges",
      zh: "挑战座椅",
    },
    icon: "/icons/chair_of_challenges.png",
  },
  chaise_longue_of_conclusions: {
    id: "chaise_longue_of_conclusions",
    displayName: {
      en: "Chaise Longue Of Conclusions",
      zh: "定论躺椅",
    },
    icon: "/icons/chaise_longue_of_conclusions.png",
  },
  chalice_candle: {
    id: "chalice_candle",
    displayName: {
      en: "Chalice Candle",
      zh: "盏花薰烛",
    },
    icon: "/icons/chalice_candle.png",
    craftableId: "chalice_candle",
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
  chronsichord: {
    id: "chronsichord",
    displayName: {
      en: "Chronsichord",
      zh: "时键琴",
    },
    icon: "/icons/chronsichord.png",
    craftableId: "chronsichord",
  },
  ch_second_flush_assam_packet: {
    id: "ch_second_flush_assam_packet",
    displayName: {
      en: "C&H Second Flush Assam (Packet)",
      zh: "C＆H公司夏摘阿萨姆茶（包装）",
    },
    icon: "/icons/ch_second_flush_assam_packet.png",
  },
  confounding_parable: {
    id: "confounding_parable",
    displayName: {
      en: "Confounding Parable",
      zh: "混淆寓言",
    },
    icon:"/icons/memories/confounding_parable.png"
  },
  cuckoo_honey: {
    id: "cuckoo_honey",
    displayName: {
      en: "Cuckoo Honey",
      zh: "杜鹃蜜",
    },
    icon:"/icons/cuckoo_honey.png"
  },
  cudgels_dyddgu_n_st_twrog: {
    id: "cudgels_dyddgu_n_st_twrog",
    displayName: {
      en: "Cudgels: Dyddgu and St Twrog",
      zh: "棍棒：蒂迪佳与圣图瓦格",
    },
    icon: "/icons/cudgels_dyddgu_n_st_twrog.png",
  },
  curious_seashell: {
    id: "curious_seashell",
    displayName: {
      en: "Curious Seashell",
      zh: "奇异海贝",
    },
    icon: "/icons/curious_seashell.png",
  },
  dappled_practice_sword: {
    id: "dappled_practice_sword",
    displayName: {
      en: "Dappled Practice Sword",
      zh: "斑纹训练用剑",
    },
    icon: "/icons/dappled_practice_sword.png",
  },
  dappled_quarterstaff: {
    id: "dappled_quarterstaff",
    displayName: {
      en: "Dappled Quarterstaff",
      zh: "斑纹六尺棍",
    },
    icon: "/icons/dappled_quarterstaff.png",
  },
  dark_marrow: {
    id: "dark_marrow",
    displayName: {
      en: "Dark Marrow",
      zh: "黯西葫芦",
    },
    icon: "/icons/dark_marrow.png",
    craftableId: "dark_marrow",
  },
  dawnlion_coffee_packet: {
    id: "dawnlion_coffee_packet",
    displayName: {
      en: "Dawnlion Coffee (Packet)",
      zh: "晨狮牌咖啡（包装）",
    },
    icon: "/icons/dawnlion_coffee_packet.png",
  },
  dearday_lens: {
    id: "dearday_lens",
    displayName: {
      en: "Dearday Lens",
      zh: "蒂尔黛透镜",
    },
    icon: "/icons/dearday_lens.png",
    craftableId: "dearday_lens",
  },
  encaustum_terminale_marakat: {
    id: "encaustum_terminale_marakat",
    displayName: {
      en: "Marakat",
      zh: "石翠",
    },
    icon: "/icons/encaustum_terminale_marakat.png",
    craftableId: "encaustum_terminale_marakat",
  },
  encaustum_terminale_nillycant: {
    id: "encaustum_terminale_nillycant",
    displayName: {
      en: "Nillycant",
      zh: "喉青",
    },
    icon: "/icons/encaustum_terminale_nillycant.png",
    craftableId: "encaustum_terminale_nillycant",
  },
  encaustum_terminale_orpiment_exultant: {
    id: "encaustum_terminale_orpiment_exultant",
    displayName: {
      en: "Orpiment Exultant",
      zh: "欢欣雌黄",
    },
    icon: "/icons/encaustum_terminale_orpiment_exultant.png",
    craftableId: "encaustum_terminale_orpiment_exultant",
  },
  encaustum_terminale_porphyrine: {
    id: "encaustum_terminale_porphyrine",
    displayName: {
      en: "Porphyrine",
      zh: "贵紫",
    },
    icon: "/icons/encaustum_terminale_porphyrine.png",
    craftableId: "encaustum_terminale_porphyrine",
  },
  encaustum_terminale_uzult: {
    id: "encaustum_terminale_uzult",
    displayName: {
      en: "Uzult",
      zh: "珀金",
    },
    icon: "/icons/encaustum_terminale_uzult.png",
    craftableId: "encaustum_terminale_uzult",
  },
  enduring_reflection: 
  {
    id: "enduring_reflection",
    displayName: {
      en: "Enduring Reflection",
      zh: "弥久映像",
    },
    icon:"/icons/memories/enduring_reflection.png"
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
  mazarine_fife: {
    id: "mazarine_fife",
    displayName: {
      en: "Mazarine Fife", 
      zh: "马扎林横笛",
    },
    icon: "/icons/mazarine_fife.png",
  },
  memory: {
    id: "memory",
    displayName: {
      en: "Memory", 
      zh: "回忆",
    },
    icon: "/icons/memory.png",
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
  old_moment: {
    id: "old_moment",
    displayName: {
      en: "Old Moment", 
      zh: "旧日时刻",
    },
    icon: "/icons/memories/old_moment.png",
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
  stymphling: {
    id: "stymphling",
    displayName: {
      en: "Stymphling",
      zh: "斯廷法利斯湖兽",
    },
    icon: "/icons/stymphling.png",
    craftableId: "stymphling"
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
  winning_move: {
    id: "winning_move",
    displayName: {
      en: "Winning Move",
      zh: "致胜之着",
    },
    icon: "/icons/memories/winning_move.png"},
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