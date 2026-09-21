import { Happy_Monkey } from "next/font/google";

export interface Item {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  icon: string;
  craftableId?: string;
  memoryId?: string;
  
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
    memoryId: "ascendant_harmony",
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
      en: "Basket Of Vegetables",
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
      en: "Bokken: Captain Torgue and Mistress Dearday",
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
    memoryId: "confounding_parable",
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
    memoryId: "enduring_reflection", 
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
  evas_locks: {
    id: "evas_locks",
    displayName: {
      en: "Evas Locks",
      zh: "伊娃华发",
    },
    icon: "/icons/evas_locks.png",
  },
  evening_isles_coffee_packet: {
    id: "evening_isles_coffee_packet",
    displayName: {
      en: "Evening Isles Coffee (Packet)",
      zh: "薄暮群屿咖啡（包装）",
    },
    icon: "/icons/evening_isles_coffee_packet.png",
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
  flushed_mommet: {
    id: "flushed_mommet",
    displayName: {
      en: "Flushed Mommet",
      zh: "靥红人偶",
    },
    icon: "/icons/flushed_mommet.png",
    craftableId: "flushed_mommet",
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
  golden_marrow: {
    id: "golden_marrow",
    displayName: {
      en: "Golden Marrow",
      zh: "金黄西葫芦",
    },
    icon: "/icons/golden_marrow.png",
    craftableId: "golden_marrow",
  },
  healing_herb: {
    id: "healing_herb",
    displayName: {
      en: "Healing Herb",
      zh: "治愈草药",
    },
    icon: "/icons/healing_herb.png",
  },
  heart_in_a_jar: {
    id: "heart_in_a_jar",
    displayName: {
      en: "Heart In A Jar",
      zh: "罐装心脏",
    },
    icon: "/icons/heart_in_a_jar.png",
  },
  historywax_candle: {
    id: "historywax_candle",
    displayName: {
      en: "Historywax Candle",
      zh: "历史蜡烛",
    },
    icon: "/icons/historywax_candle.png",
    craftableId: "historywax_candle",
  },
  holiest_hemolymph: {
    id: "holiest_hemolymph",
    displayName: {
      en: "Holiest Hemolymph",
      zh: "至圣血淋巴",
    },
    icon: "/icons/holiest_hemolymph.png",
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
  honeyscar_scented_candle: {
    id: "honeyscar_scented_candle",
    displayName: {
      en: "Honeyscar-Scented Candle",
      zh: "蜜痂薰烛",
    },
    icon: "/icons/honeyscar_scented_candle.png",
    craftableId: "honeyscar_scented_candle",
  },
  houndsgall: {
    id: "houndsgall",
    displayName: {
      en: "Houndsgall",
      zh: "猃瘿墨",
    },
    icon: "/icons/houndsgall.png",
    craftableId: "houndsgall",
  },
  hush_house_key: {
    id: "hush_house_key",
    displayName: {
      en: "Hush House Key",
      zh: "噤声居屋的钥匙",
    },
    icon: "/icons/hush_house_key.png",
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
  january_sanguinary: {
    id: "january_sanguinary",
    displayName: {
      en: "January Sanguinary",
      zh: "雅努略之血",
    },
    icon: "/icons/january_sanguinary.png",
    craftableId: "january_sanguinary",
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
  loyal_dog: {
    id: "loyal_dog",
    displayName: {
      en: "Loyal Dog",
      zh: "忠诚的狗",
    },
    icon: "/icons/loyal_dog.png",
  },
  magnificent_green_cockatoo: {
    id: "magnificent_green_cockatoo",
    displayName: {
      en: "Magnificent Green Cockatoo",
      zh: "华丽的绿羽鸡头鹦鹉",
    },
    icon: "/icons/magnificent_green_cockatoo.png",
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
  moly: {
    id: "moly",
    displayName: {
      en: "Moly",
      zh: "摩吕",
    },
    icon: "/icons/moly.png",
  },
  moth_orchid: {
    id: "moth_orchid",
    displayName: {
      en: "Moth Orchid",
      zh: "蛾兰",
    },
    icon: "/icons/moth_orchid.png",
  },
  moth_orchid_scented_candle: {
    id: "moth_orchid_scented_candle",
    displayName: {
      en: "Moth-Orchid-Scented Candle",
      zh: "蛾兰薰烛",
    },
    icon: "/icons/moth_orchid_scented_candle.png",
    craftableId: "moth_orchid_scented_candle",
  },
  mushroom_meringue: {
    id: "mushroom_meringue",
    displayName: {
      en: "Mushroom Meringue",
      zh: "蘑菇蛋白酥",
    },
    icon: "/icons/mushroom_meringue.png",
    craftableId: "mushroom_meringue",
  },
  nighted_chair: {
    id: "nighted_chair",
    displayName: {
      en: "Nighted Chair",
      zh: "夜色座椅",
    },
    icon: "/icons/nighted_chair.png",
  },
  old_moment: {
    id: "old_moment",
    displayName: {
      en: "Old Moment", 
      zh: "旧日时刻",
    },
    memoryId: "old_moment",
    icon: "/icons/memories/old_moment.png",
  },
  oscillate_oil: {
    id: "oscillate_oil",
    displayName: {
      en: "Oscillate Oil",
      zh: "颤油",
    },
    icon: "/icons/oscillate_oil.png",
  },
  outsized_egg: {
    id: "outsized_egg",
    displayName: {
      en: "Outsized Egg",
      zh: "巨蛋",
    },
    icon: "/icons/outsized_egg.png",
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
  paradise_palm: {
    id: "paradise_palm",
    displayName: {
      en: "Paradise Palm",
      zh: "天堂棕榈",
    },
    icon: "/icons/paradise_palm.png"
  },
  pear_scented_candle: {
    id: "pear_scented_candle",
    displayName: {
      en: "Pear-Scented Candle",
      zh: "铜梨薰烛",
    },
    icon: "/icons/pear_scented_candle.png",
    craftableId: "pear_scented_candle",
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
  perilous_imago: {
    id: "perilous_imago",
    displayName: {
      en: "Perilous Imago",
      zh: "凶匿成虫",
    },
    icon: "/icons/perilous_imago.png",
  },
  pet_cat: {
    id: "pet_cat",
    displayName: {
      en: "Pet Cat",
      zh: "宠物猫",
    },
    icon: "/icons/pet_cat.png",
  },
  pet_gull: {
    id: "pet_gull",
    displayName: {
      en: "Pet Gull",
      zh: "宠物海鸥",
    },
    icon: "/icons/pet_gull.png",
  },
  pot_of_malachite_daisies: {
    id: "pot_of_malachite_daisies",
    displayName: {
      en: "Pot Of Malachite Daisies",
      zh: "石绿色雏菊盆栽",
    },
    icon: "/icons/pot_of_malachite_daisies.png",
  },
  potted_avidity: {
    id: "potted_avidity",
    displayName: {
      en: "Potted Avidity",
      zh: "盆中贪欲",
    },
    icon: "/icons/potted_avidity.png",
  },
  potted_bamboo: {
    id: "potted_bamboo",
    displayName: {
      en: "Potted Bamboo",
      zh: "绿竹盆栽",
    },
    icon: "/icons/potted_bamboo.png",
  },
  potted_pink_orchid: {
    id: "potted_pink_orchid",
    displayName: {
      en: "Potted Pink Orchid",
      zh: "粉兰花盆栽",
    },
    icon: "/icons/potted_pink_orchid.png",
  },
  potted_white_orchid: {
    id: "potted_white_orchid",
    displayName: {
      en: "Potted White Orchid",
      zh: "白兰花盆栽",
    },
    icon: "/icons/potted_white_orchid.png",
  },
  pumpkin: {
    id: "pumpkin",
    displayName: {
      en: "Pumpkin",
      zh: "南瓜",
    },
    icon: "/icons/pumpkin.png",
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
    red_practice_sword: {
    id: "red_practice_sword",
    displayName: {
      en: "Red Practice Sword",
      zh: "赤色练习用剑",
    },
    icon: "/icons/red_practice_sword.png"
  },
  refulgin: {
    id: "refulgin",
    displayName: {
      en: "Refulgin",
      zh: "耀素",
    },
    icon: "/icons/refulgin.png",
    craftableId: "refulgin",
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
  sack_of_vegetables: {
    id: "sack_vegetables",
    displayName: {
      en: "Sack Of Vegetables",
      zh: "一袋蔬菜",
    },
    icon: "/icons/sack_vegetables.png",
  },
  salt_sign: {
    id: "salt_sign",
    displayName: {
      en: "Salt-Sign",
      zh: "盐迹",
    },
    icon: "/icons/salt_sign.png",
    craftableId: "salt_sign",
  },
  sand: {
    id: "sand",
    displayName: {
      en: "Sand",
      zh: "沙砾",
    },
    icon: "/icons/sand.png",
  },
  scintillate_oil: {
    id: "scintillate_oil",
    displayName: {
      en: "Scintillate Oil",
      zh: "烁油",
    },
    icon: "/icons/scintillate_oil.png",
  },
  sea_holly: {
    id: "sea_holly",
    displayName: {
      en: "Sea Holly",
      zh: "海冬青",
    },
    icon: "/icons/sea_holly.png",
  },
  serpent_milk: {
    id: "serpent_milk",
    displayName: {
      en: "Serpent-Milk",
      zh: "蛇乳",
    },
    icon: "/icons/serpent_milk.png",
    craftableId: "serpent_milk",
  },
  shadowless_silk: {
    id: "shadowless_silk",
    displayName: {
      en: "Shadowless Silk",
      zh: "无影合欢",
    },
    icon: "/icons/shadowless_silk.png",
  },
  silver_spintriae: {
    id: "silver_spintriae",
    displayName: {
      en: "Silver Spintriae",
      zh: "古银币",
    },
    icon: "/icons/silver_spintriae.png",
    },
  skaptodon_fang: {
    id: "skaptodon_fang",
    displayName: {
      en: "Skaptodon Fang",
      zh: "剑齿兽的獠牙",
    },
    icon: "/icons/skaptodon_fang.png",
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
  stargall_ink: {
    id: "stargall_ink",
    displayName: {
      en: "Stargall Ink",
      zh: "星瘿墨",
    },
    icon: "/icons/stargall_ink.png",
    craftableId: "stargall_ink",
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
  sly_alembic: {
    id: "sly_alembic",
    displayName: {
      en: "Sly Alembic",
      zh: "淘气蒸馏釜",
    },
    icon: "/icons/sly_alembic.png",
  },
  snowflake_candle: {
    id: "snowflake_candle",
    displayName: {
      en: "Snowflake Candle",
      zh: "雪花蜡烛",
    },
    icon: "/icons/snowflake_candle.png",
  },
  swaddled_thunder: {
    id: "swaddled_thunder",
    displayName: {
      en: "Swaddled Thunder",
      zh: "襁褓雷霆",
    },
    icon: "/icons/swaddled_thunder.png",
    craftableId: "swaddled_thunder",
  },
  tanglebrag: {
    id: "tanglebrag",
    displayName: {
      en: "Tanglebrag",
      zh: "诳语缠结",
    },
    icon: "/icons/tanglebrag.png",
    craftableId: "tanglebrag",
  },
  terrence_the_chicken: {
    id: "terrence_the_chicken",
    displayName: {
      en: "Terrence, the Chicken",
      zh: "特伦士，一只鸡",
    },
    icon: "/icons/terrence_the_chicken.png",
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
  tiny_potted_tree: {
    id: "tiny_potted_tree",
    displayName: {
      en: "Tiny Potted Tree",
      zh: "迷你盆栽树",
    },
    icon: "/icons/tiny_potted_tree.png",
  },
  trn_limited_drinking_cocoa_packet: {
    id: "trn_limited_drinking_cocoa_packet",
    displayName: {
      en: "T.R.N. Limited Drinking Cocoa (Packet)",
      zh: "T.R.N.有限公司可可饮料（包装）",
    },
    icon: "/icons/trn_limited_drinking_cocoa_packet.png",
  },
  trumpeters_lily: {
    id: "trumpeters_lily",
    displayName: {
      en: "Trumpeter's Lily",
      zh: "喇叭百合",
    },
    icon: "/icons/trumpeters_lily.png",
  },
  tuppence_the_other_chicken: {
    id: "tuppence_the_other_chicken",
    displayName: {
      en: "Tuppence, the Other Chicken",
      zh: "土便士，另一只鸡",
    },
    icon: "/icons/tuppence_the_other_chicken.png",
  },
  umbrous_oil: {
    id: "umbrous_oil",
    displayName: {
      en: "Umbrous Oil",
      zh: "暗油",
    },
    icon: "/icons/umbrous_oil.png",
  },
  urn_of_ashes: {
    id: "urn_of_ashes",
    displayName: {
      en: "Urn Of Ashes",
      zh: "骨灰瓮",
    },
    icon: "/icons/urn_of_ashes.png",
  },
  vase_of_roses: {
    id: "vase_of_roses",
    displayName: {
      en: "Vase Of Roses",
      zh: "瓶插玫瑰",
    },
    icon: "/icons/vase_of_roses.png",
  },
  viper: {
    id: "viper",
    displayName: {
      en: "Viper",
      zh: "温顺蝰蛇",
    },
    icon: "/icons/tamed_viper.png",
  },
  walls_of_ys: {
    id: "walls_of_ys",
    displayName: {
      en: "Walls Of Ys",
      zh: "伊苏之墙",
    },
    icon: "/icons/walls_of_ys.png",
    craftableId: "walls_of_ys",
  },
  wasters_darling_dear_n_father_turk: {
    id: "wasters_darling_dear_n_father_turk",
    displayName: {
      en: "Wasters: Darling-Dear and Father Turk",
      zh: "训练用剑：蒂儿宝贝与图克神父",
    },
    icon: "/icons/wasters_darling_dear_n_father_turk.png",
  },
  watchful_candle: {
    id: "watchful_candle",
    displayName: {
      en: "Watchful Candle",
      zh: "巡夜烛台",
    },
    icon: "/icons/watchful_candle.png",
  },
  watchful_potted_plant: {
    id: "watchful_potted_plant",
    displayName: {
      en: "Watchful Potted Plant",
      zh: "警觉盆栽",
    },
    icon: "/icons/watchful_potted_plant.png",
  },
  whispering_sand: {
    id: "whispering_sand",
    displayName: {
      en: "Whispering Sand",
      zh: "簌响之沙",
    },
    icon: "/icons/whispering_sand.png",
  },
  widows_candle: {
    id: "widows_candle",
    displayName: {
      en: "Widow's Candle",
      zh: "寡妇的蜡烛",
    },
    icon: "/icons/widows_candle.png",
  },
  winning_move: {
    id: "winning_move",
    displayName: {
      en: "Winning Move",
      zh: "致胜之着",
    },
    memoryId: "winning_move",
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
  wormy_pumpkin: {
    id: "wormy_pumpkin",
    displayName: {
      en: "Wormy Pumpkin",
      zh: "虫蛀南瓜",
    },
    icon: "/icons/wormy_pumpkin.png",
  },
  xanthotic_essence: {
    id: "xanthotic_essence",
    displayName: {
      en: "Xanthotic Essence",
      zh: "黄化精华",
    },
    icon: "/icons/xanthotic_essence.png",
    craftableId: "xanthotic_essence"},
  year_tally: {
    id: "year_tally",
    displayName: {
      en: "Year-Tally",
      zh: "年岁账簿",
    },
    icon: "/icons/year_tally.png",
    craftableId: "year_tally",
  },
  yellowing_newspaper: {
    id: "yellowing_newspaper",
    displayName: {
      en: "Yellowing Newspaper",
      zh: "泛黄报纸",
    },
    icon: "/icons/yellowing_newspaper.png",
  },
  yewgall_ink: {
    id: "yewgall_ink",
    displayName: {
      en: "Yewgall Ink",
      zh: "杉瘿墨",
    },
    icon: "/icons/yewgall_ink.png",
    craftableId: "yewgall_ink",
  },
}