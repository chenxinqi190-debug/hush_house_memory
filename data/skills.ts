export interface Skill {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  image: string;
  principles: string[];
}

export const skills: Record<string, Skill> = {
  anbary_n_lapidary: {
    id: "anbary_n_lapidary",
    displayName: {
      en: "Anbary & Lapidary",
      zh: "雕珀与琢石",
    },
    image: "/skills/anbary_n_lapidary.png",
    principles: ["sky", "forge"],
  },
  applebright_euphonies: {
    id: "applebright_euphonies",
    displayName: {
      en: "Applebright Euphonies",
      zh: "光明果悦音",
    },
    image: "/skills/applebright_euphonies.png",
    principles: ["sky", "grail"],
  },
  auroral_contemplations: {
    id: "auroral_contemplations",
    displayName: {
      en: "Auroral Contemplations",
      zh: "曙光的静观",
    },
    image: "/skills/auroral_contemplations.png",
    principles: ["lantern", "edge"],
  },
  bells_n_brazieries: {
    id: "bells_n_brazieries",
    displayName: {
      en: "Bells & Brazieries",
      zh: "洪钟与铜器",
    },
    image: "/skills/bells_n_brazieries.png",
    principles: ["forge", "sky"],
  },
  coil_n_chasm: {
    id: "coil_n_chasm",
    displayName: {
      en: "Coil & Chasm",
      zh: "虬蟠与裂隙",
    },
    image: "/skills/coil_n_chasm.png",
    principles: ["scale", "nectar"],
  },
  desires_n_dissolutions: {
    id: "desires_n_dissolutions",
    displayName: {
      en: "Desires & Dissolutions",
      zh: "诱惑与消殒",
    },
    image: "/skills/desires_n_dissolutions.png",
    principles: ["grail", "moon"],
  },
  disciplines_of_the_scar: {
    id: "disciplines_of_the_scar",
    displayName: {
      en: "Disciplines of the Scar",
      zh: "伤疤的戒律",
    },
    image: "/skills/disciplines_of_the_scar.png",
    principles: ["edge", "lantern"],
  },
  disciplines_of_the_hammer: {
    id: "disciplines_of_the_hammer",
    displayName: {
      en: "Disciplines of the Hammer",
      zh: "锤砧的戒律",
    },
    image: "/skills/disciplines_of_the_hammer.png",
    principles: ["edge", "forge"],
  },
  door_n_wall: {
    id: "door_n_wall",
    displayName: {
      en: "Door & Wall",
      zh: "门扉与墙垣",
    },
    image: "/skills/door_n_wall.png",
    principles: ["knock", "forge"],
  },
  drums_n_dances: {
    id: "drums_n_dances",
    displayName: {
      en: "Drums & Dances",
      zh: "鼓点与舞步",
    },
    image: "/skills/drums_n_dances.png",
    principles: ["heart", "nectar"],
  },
  edicts_inviolable: {
    id: "edicts_inviolable",
    displayName: {
      en: "Edicts Inviolable",
      zh: "无侵之敕令",
    },
    image: "/skills/edicts_inviolable.png",
    principles: ["heart", "moon"],
  },
  edicts_liminal: {
    id: "edicts_liminal",
    displayName: {
      en: "Edicts Liminal",
      zh: "阈限之敕令",
    },
    image: "/skills/edicts_liminal.png",
    principles: ["moth", "knock"],
  },
  edicts_martial: {
    id: "edicts_martial",
    displayName: {
      en: "Edicts Martial",
      zh: "武力之敕令",
    },
    image: "/skills/edicts_martial.png",
    principles: ["moon", "edge"],
  },
  furs_n_feathers: {
    id: "furs_n_feathers",
    displayName: {
      en: "Furs & Feathers",
      zh: "毛皮与羽翎",
    },
    image: "/skills/furs_n_feathers.png",
    principles: ["sky", "scale"],
  },
  glassblowing_n_vesselcrafting: {
    id: "glassblowing_n_vesselcrafting",
    displayName: {
      en: "Glassblowing & Vesselcrafting",
      zh: "玻璃吹制与容器制造",
    },
    image: "/skills/glassblowing_n_vesselcrafting.png",
    principles: ["knock", "sky"],
  },
  glaziery_n_lightsmithing: {
    id: "glaziery_n_lightsmithing",
    displayName: {
      en: "Glaziery & Lightsmithing",
      zh: "玻璃与锻光",
    },
    image: "/skills/glaziery_n_lightsmithing.png",
    principles: ["lantern", "sky"],
  },
  herbs_n_infusions: {
    id: "herbs_n_infusions",
    displayName: {
      en: "Herbs & Infusions",
      zh: "草药与药汤",
    },
    image: "/skills/herbs_n_infusions.png",
    principles: ["heart", "nectar"],
  },
  hill_n_hollow: {
    id: "hill_n_hollow",
    displayName: {
      en: "Hill & Hollow",
      zh: "丘陵与孔窍",
    },
    image: "/skills/hill_n_hollow.png",
    principles: ["moon", "scale"],
  },
  horns_n_ivories: {
    id: "horns_n_ivories",
    displayName: {
      en: "Horns & Ivories",
      zh: "兽角与象牙",
    },
    image: "/skills/horns_n_ivories.png",
    principles: ["scale", "knock"],
  },
  inks_of_containment: {
    id: "inks_of_containment",
    displayName: {
      en: "Inks of Containment",
      zh: "收容之墨",
    },
    image: "/skills/inks_of_containment.png",
    principles: ["winter", "moon"],
  },
  inks_of_power: {
    id: "inks_of_power",
    displayName: {
      en: "Inks of Power",
      zh: "力量之墨",
    },
    image: "/skills/inks_of_power.png",
    principles: ["rose", "scale"],
  },
  inks_of_revelation: {
    id: "inks_of_revelation",
    displayName: {
      en: "Inks of Revelation",
      zh: "启示之墨",
    },
    image: "/skills/inks_of_revelation.png",
    principles: ["lantern", "moth"],
  },
  insects_n_nectars: {
    id: "insects_n_nectars",
    displayName: {
      en: "Insects & Nectars",
      zh: "昆虫与花蜜",
    },
    image: "/skills/insects_n_nectars.png",
    principles: ["nectar", "moon"],
  },
  leaves_n_thorns: {
    id: "leaves_n_thorns",
    displayName: {
      en: "Leaves & Thorns",
      zh: "叶片与棘刺",
    },
    image: "/skills/leaves_n_thorns.png",
    principles: ["nectar", "grail"],
  },
  lockworks_n_clockworks: {
    id: "lockworks_n_clockworks",
    displayName: {
      en: "Lockworks & Clockworks",
      zh: "锁簧与发条",
    },
    image: "/skills/lockworks_n_clockworks.png",
    principles: ["knock", "sky"],
  },
  maggephene_mysteries: {
    id: "maggephene_mysteries",
    displayName: {
      en: "Maggephene Mysteries",
      zh: "疫疠之秘",
    },
    image: "/skills/maggephene_mysteries.png",
    principles: ["moon", "heart"],
  },
  meniscate_reflections: {
    id: "meniscate_reflections",
    displayName: {
      en: "Meniscate Reflections",
      zh: "弧月的倒影",
    },
    image: "/skills/meniscate_reflections.png",
    principles: ["forge", "edge"],
  },
  orchids_n_narcotics: {
    id: "orchids_n_narcotics",
    displayName: {
      en: "Orchids & Narcotics",
      zh: "兰花与迷药",
    },
    image: "/skills/orchids_n_narcotics.png",
    principles: ["grail", "nectar"],
  },
  ouranoscopy: {
    id: "ouranoscopy",
    displayName: {
      en: "Ouranoscopy",
      zh: "窥天术",
    },
    image: "/skills/ouranoscopy.png",
    principles: ["sky", "moon"],
  },
  path_n_pilgrim: {
    id: "path_n_pilgrim",
    displayName: {
      en: "Path & Pilgrim",
      zh: "道途与朝圣",
    },
    image: "/skills/path_n_pilgrim.png",
    principles: ["rose", "scale"],
  },
  pearl_n_tide: {
    id: "pearl_n_tide",
    displayName: {
      en: "Pearl & Tide",
      zh: "珍珠与浪潮",
    },
    image: "/skills/pearl_n_tide.png",
    principles: ["rose", "moon"],
  },
  pentiments_n_precursors: {
    id: "pentiments_n_precursors",
    displayName: {
      en: "Pentiments & Precursors",
      zh: "覆画残迹与古老前身",
    },
    image: "/skills/pentiments_n_precursors.png",
    principles: ["scale", "grail"],
  },
  preliminal_meter: {
    id: "preliminal_meter",
    displayName: {
      en: "Preliminal Meter",
      zh: "阙前格律",
    },
    image: "/skills/preliminal_meter.png",
    principles: ["knock", "rose"],
  },
  purifications_n_exaltations: {
    id: "purifications_n_exaltations",
    displayName: {
      en: "Purifications & Exaltations",
      zh: "精炼与擢升",
    },
    image: "/skills/purifications_n_exaltations.png",
    principles: ["sky", "lantern"],
  },
  putrefactions_n_calcinations: {
    id: "putrefactions_n_calcinations",
    displayName: {
      en: "Putrefactions & Calcinations",
      zh: "腐化与煅烧",
    },
    image: "/skills/putrefactions_n_calcinations.png",
    principles: ["winter", "moon"],
  },
  pyroglyphics: {
    id: "pyroglyphics",
    displayName: {
      en: "Pyroglyphics",
      zh: "焰篆体",
    },
    image: "/skills/pyroglyphics.png",
    principles: ["forge", "lantern"],
  },
  quenchings_n_quellings: {
    id: "quenchings_n_quellings",
    displayName: {
      en: "Quenchings & Quellings",
      zh: "淬火与熄焰",
    },
    image: "/skills/quenchings_n_quellings.png",
    principles: ["winter", "heart"],
  },
  ragged_crossroads: {
    id: "ragged_crossroads",
    displayName: {
      en: "Ragged Crossroads",
      zh: "残破十字路",
    },
    image: "/skills/ragged_crossroads.png",
    principles: ["edge", "winter"],
  },
  resurgences_n_emergences: {
    id: "resurgences_n_emergences",
    displayName: {
      en: "Resurgences & Emergences",
      zh: "复苏与羽化",
    },
    image: "/skills/resurgences_n_emergences.png",
    principles: ["moth", "grail"],
  },
  rhymes_n_rememberances: {
    id: "rhymes_n_rememberances",
    displayName: {
      en: "Rhyme & Remembrance",
      zh: "音律与铭记",
    },
    image: "/skills/rhymes_n_rememberances.png",
    principles: ["winter", "moon"],
  },
  rites_of_the_roots: {
    id: "rites_of_the_roots",
    displayName: {
      en: "Rites of the Roots",
      zh: "根系之仪",
    },
    image: "/skills/rites_of_the_roots.png",
    principles: ["nectar", "moth"],
  },
  sacra_limiae: {
    id: "sacra_limiae",
    displayName: {
      en: "Sacra Limiae",
      zh: "利米亚典仪",
    },
    image: "/skills/sacra_limiae.png",
    principles: ["moth", "sky"],
  },
  sacra_solis_invicti: {
    id: "sacra_solis_invicti",
    displayName: {
      en: "Sacra Solis Invicti",
      zh: "无敌太阳典仪",
    },
    image: "/skills/sacra_solis_invicti.png",
    principles: ["lantern", "sky"],
  },
  sand_stories: {
    id: "sand_stories",
    displayName: {
      en: "Sand Stories",
      zh: "沙的故事",
    },
    image: "/skills/sand_stories.png",
    principles: ["rose", "moon"],
  },
  sea_stories: {
    id: "sea_stories",
    displayName: {
      en: "Sea Stories",
      zh: "大海的故事",
    },
    image: "/skills/sea_stories.png",
    principles: ["moon", "grail"],
  },
  serpents_n_venoms: {
    id: "serpents_n_venoms",
    displayName: {
      en: "Serpents & Venoms",
      zh: "群蛇与毒液",
    },
    image: "/skills/serpents_n_venoms.png",
    principles: ["scale", "moon"],
  },
  sharps: {
    id: "sharps",
    displayName: {
      en: "Sharps",
      zh: "锋锐",
    },
    image: "/skills/sharps.png",
    principles: ["edge", "moon"],
  },
  sickle_n_eclipse: {
    id: "sickle_n_eclipse",
    displayName: {
      en: "Sickle & Eclipse",
      zh: "镰刀与日蚀",
    },
    image: "/skills/sickle_n_eclipse.png",
    principles: ["edge", "moon"],
  },
  sights_n_sensations: {
    id: "sights_n_sensations",
    displayName: {
      en: "Sights & Sensations",
      zh: "景象与感知",
    },
    image: "/skills/sights_n_sensations.png",
    principles: ["sky", "winter"],
  },
  snow_stories: {
    id: "snow_stories",
    displayName: {
      en: "Snow Stories",
      zh: "白雪的故事",
    },
    image: "/skills/snow_stories.png",
    principles: ["winter", "moon"],
  },
  solutions_n_separations: {
    id: "solutions_n_separations",
    displayName: {
      en: "Solutions & Separations",
      zh: "溶解与离析",
    },
    image: "/skills/solutions_n_separations.png",
    principles: ["moth", "knock"],
  },
  spices_n_savours: {
    id: "spices_n_savours",
    displayName: {
      en: "Spices & Savours",
      zh: "香料与滋味",
    },
    image: "/skills/spices_n_savours.png",
    principles: ["nectar", "forge"],
  },
  stitching_n_binding: {
    id: "stitching_n_binding",
    displayName: {
      en: "Stitching & Binding",
      zh: "缝合与装订",
    },
    image: "/skills/stitching_n_binding.png",
    principles: ["sky", "heart"],
  },
  strings_n_songs: {
    id: "strings_n_songs",
    displayName: {
      en: "Strings & Songs",
      zh: "弦乐与歌谣",
    },
    image: "/skills/strings_n_songs.png",
    principles: ["sky", "heart"],
  },
  stone_stories: {
    id: "stone_stories",
    displayName: {
      en: "Stone Stories",
      zh: "岩石的故事",
    },
    image: "/skills/stone_stories.png",
    principles: ["scale", "nectar"],
  },
  surgeries_n_exsanguinations: {
    id: "surgeries_n_exsanguinations",
    displayName: {
      en: "Surgeries & Exsanguinations",
      zh: "手术与放血",
    },
    image: "/skills/surgeries_n_exsanguinations.png",
    principles: ["heart", "knock"],
  },
  the_great_signs_n_the_great_scars: {
    id: "the_great_signs_n_the_great_scars",
    displayName: {
      en: "The Great Signs and the Great Scars",
      zh: "伟大符印与伟大伤疤",
    },
    image: "/skills/the_great_signs_n_the_great_scars.png",
    principles: ["grail", "knock"],
  },
  transformations_n_liberations: {
    id: "transformations_n_liberations",
    displayName: {
      en: "Transformations & Liberations",
      zh: "嬗变与解放",
    },
    image: "/skills/transformations_n_liberations.png",
    principles: ["forge", "moth"],
  },
  tridesma_hiera: {
    id: "tridesma_hiera",
    displayName: {
      en: "Tridesma Hiera",
      zh: "三重誓之仪",
    },
    image: "/skills/tridesma_hiera.png",
    principles: ["moon", "grail"],
  },
  watchmans_paradoxes: {
    id: "watchmans_paradoxes",
    displayName: {
      en: "Watchman's Paradoxes",
      zh: "守夜人的悖论",
    },
    image: "/skills/watchmans_paradoxes.png",
    principles: ["lantern", "sky"],
  },
  weaving_n_knotworking: {
    id: "weaving_n_knotworking",
    displayName: {
      en: "Weaving & Knotworking",
      zh: "缝纫与编织",
    },
    image: "/skills/weaving_n_knotworking.png",
    principles: ["heart", "moth"],
  },
  wolf_stories: {
    id: "wolf_stories",
    displayName: {
      en: "Wolf Stories",
      zh: "狼的故事",
    },
    image: "/skills/wolf_stories.png",
    principles: ["moon", "scale"],
  },
   
};