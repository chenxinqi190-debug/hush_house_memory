import { Craftable } from "@/types/crafting";

export const craftables: Craftable[] = [
  {
    id: "encaustum_terminale_uzult",
    displayName: {
      en: "Encaustum Terminale: Uzult",
      zh: "终刻墨：珀金",
    },
    description: {
      en: "The ink in which the First History was recorded by the Unwise Mortal. Uzult is the bright yellow-gold of Lantern. Light lingers on it for a little while even in the dark. Gold is not needed to mix Uzult, but amber is. Unobtrusive shrines to Uzult could sometimes be found in the churches of the Unconquered Sun.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "不智凡人用以记录第一史的墨水，珀金是灯之明亮金黄。即使在黑暗中，光也会在其上盘桓片刻。混合珀金不需黄金，但需琥珀。无敌太阳教会的教堂中偶能发现有不起眼的神龛将之供奉。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "lantern", amount: 7 },
      { id: "moth", amount: 7 },
      { id: "sky", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: [
          "anbary_n_lapidary",
          "glaziery_n_lightsmithing",
          "inks_of_revelation","sacra_solis_invicti","watchmans_paradoxes"],
        requires: ["xanthotic_essence"]}],
    type: ["ink"],
    icon: "encaustum_terminale_uzult.png",
  },
  {
    id: "encaustum_terminale_porphyrine",
    displayName: {
      en: "Encaustum Terminale: Porphyrine",
      zh: "终刻墨：贵紫",
    },
    description: {
      en: "The encaustum terminale of the Second History. It's the glowing crimson-mauve of the Secret Histories. Porphyrine was venerated in secret by a confraternity of corresponding Cluniacs and Benedictines.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "第二史的终刻墨 。秘史之熠熠紫红。贵紫受相应的克吕尼会士及本笃会士组成的兄弟会秘密敬拜。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "knock", amount: 7 },
      { id: "moon", amount: 7 },
      { id: "rose", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["auroral_contemplations"],
        requires: ["ichor_auroral"]},
        {
        id: "method_2",
        principle: {
          id: "rose",
          amount: 15,
        },
        skills: ["inks_of_power","sand_stories","inks_of_revelation"],
        requires: ["ichor_auroral"]},
      {
        id: "method_3",
        principle: {
          id: "rose",
          amount: 15,
        },
        skills: ["pearl_n_tide"],
        requires: ["lenten_rose"]}],
    type: ["ink"],
    icon: "encaustum_terminale_porphyrine.png",
  },
  {
    id: "encaustum_terminale_nillycant",
    displayName: {
      en: "Encaustum Terminale: Nillycant",
      zh: "终刻墨：喉青",
    },
    description: {
      en: "The encaustum terminale of the Third History. It's the bleak white-blue of Winter. It has spawned an itinerant order of secret celebrants who regard Worms as semi-gods, and who are sometimes called on to celebrate difficult funerals.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "第三史的终刻墨，冬之阴郁蓝白。它催生了一个视蠕虫为半神的秘仪托钵修会，他们有时会被召唤去主持棘手的葬礼。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "edge", amount: 7 },
      { id: "scale", amount: 7 },
      { id: "winter", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 15,
        },
        skills: [
          "inks_of_containment",
          "sights_n_sensations",],
        requires: ["solomons_preparation"]},
      {
        id: "method_2",
        principle: {
          id: "winter",
          amount: 15,
        },
        skills: ["ragged_crossroads"],
        requires: ["glassfinger_toxin"]}],
    type: ["ink"],
    icon: "encaustum_terminale_nillycant.png",
  },
  {
    id: "encaustum_terminale_orpiment_exultant",
    displayName: {
      en: "Encaustum Terminale: Orpiment Exultant",
      zh: "终刻墨：欢欣雌黄",
    },
    description: {
      en: "The encaustum terminale of the Fourth History. It's the incandescent orange of Forge. One ingredient - it's been, as it were, long-rumoured - is the blood of candescents. Certain Masonic and related traditions venerate what they call 'O.E'.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "第四史的终刻墨，铸之炽橙。它的其中一种原料——这一流言可以说由来已久——是炽热者的鲜血。某些共济会组织及其相关传统将其呼作“O·E”并加以崇拜。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "forge", amount: 7 },
      { id: "heart", amount: 7 },
      { id: "sky", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: ["anbary_n_lapidary","inks_of_power","transformations_n_liberations"],
        requires: ["iotic_essence"]}],
    type: ["ink"],
    icon: "encaustum_terminale_orpiment_exultant.png",
  },
  {
    id: "encaustum_terminale_marakat",
    displayName: {
      en: "Encaustum Terminale: Marakat",
      zh: "终刻墨：石翠",
    },
    description: {
      en: "The encaustum terminale of the Fifth History. The colour of the Principle that once occupied the place that Heart does now. In the Fifth History itself, the cult of Marakat was everywhere suppressed, but it's sometimes been venerated otherwise.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "第五史的终刻墨。与之同色的准则曾占据着如今的心的位置。在第五史中，有关石翠的崇拜受到普遍压制，但它有时还是会以其他方式被崇敬。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "grail", amount: 7 },
      { id: "knock", amount: 7 },
      { id: "nectar", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 15,
        },
        skills: [
          "insects_n_nectars",
          "inks_of_power",
          "tridesma_hiera"],
        requires: ["leathy"]}],
    type: ["ink"],
    icon: "encaustum_terminale_marakat.png",
  },
  {
    id: "aglaophotis_scented_candle",
    displayName: {
      en: "Aglaophotis-Scented Candle",
      zh: "阿格劳福提斯花薰烛",
    },
    description: {
      en: "A candle scented with aglaophotis.\n\n[Generates Memory: Revelation.]",
      zh: "一支带有阿格劳福提斯花香味的蜡烛。\n\n[使用获得回忆：启示。]",
    },
    principles: [
      { id: "heart", amount: 2 },
      { id: "knock", amount: 2 },
      { id: "lantern", amount: 2 },
      { id: "rose", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","aglaophotis"],
      },
    ],
    type: ["candle"],
    icon: "aglaophotis_scented_candle.png",
  },

  {
    id: "amethyst_ampoule",
    displayName: {
      en: "Amethyst Ampoule",
      zh: "紫晶安瓿瓶",
    },
    description: {
      en: "Were it released from the glass, it would be quite another colour.",
      zh: "若是将内容物倒出玻璃瓶，它将呈现出截然不同的颜色。",
    },
    principles: [
      { id: "heart", amount: 2 },
      { id: "knock", amount: 2 },
],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 5,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "lockworks_n_clockworks",
          "solutions_n_separations",
          "surgeries_n_exsanguinations",
          "the_great_signs_n_the_great_scars",
        ],
      },
    ],

    type: ["other"],

    icon: "amethyst_ampoule.png",
  },

  {
    id: "ashartine",
    displayName: {
      en: "Ashartine",
      zh: "阿夏廷",
    },
    description: {
      en: "Lies written in Ashartine tend to fade or be misspelt. It's legible in the dark. An Ink of Revelation.",
      zh: "用阿夏廷写下的谎言会褪色或错拼。它在黑暗中也清晰可辨。一种启示之墨。",
    },
    principles: [
      { id: "forge", amount: 1 },
      { id: "lantern", amount: 6 },
      { id: "sky", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing",
          "pyroglyphics",
          "watchmans_paradoxes",
        ],
        requires: ["ichor_vitreous"],
      },{
        id: "method_2",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: [
          "anbary_n_lapidary",
          "glassblowing_n_vesselcrafting",
        ],
        requires: ["ichor_vitreous"],
      },
    ],

    type: ["ink"],

    icon: "ashartine.png",
  },

  {
    id: "asimel",
    displayName: {
      en: "Asimel",
      zh: "阿苏麦",
    },
    description: {
      en: "A silver ink that can only be made and used in dreams. An Ink of Revelation.",
      zh: "一种仅可于梦中制作与使用的银色墨水。一种启示之墨。",
    },
    principles: [
      { id: "knock", amount: 3 },
      { id: "moon", amount: 5 },
      { id: "moth", amount: 1 },
      { id: "rose", amount: 1 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 10,
        },
        skills: ["inks_of_revelation"],
        requires: ["liquid"],
      },{
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "pearl_n_tide",
          "putrefactions_n_calcinations",
          "sea_stories",
        ],
        requires: ["liquid"],
      },
      {
        id: "method_3",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: ["ouranoscopy",],
        requires: ["lens"],
      },
    ],

    type: ["ink"],
    icon: "asimel.png",
  },

  {
    id: "awakened_feather",
    displayName: {
      en: "Awakened Feather",
      zh: "觉醒翎羽",
    },
    description: {
      en: "Alive to every draught and spark.",
      zh: "对每一丝气息与电火花都活力四射。",
    },
    principles: [
      { id: "scale", amount: 1 },
      { id: "sky", amount: 2 },
],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: [
          "anbary_n_lapidary",
          "furs_n_feathers",
          "lockworks_n_clockworks",
          "sacra_limiae",
          "sights_n_sensations",
          "stitching_n_binding",
        ],
      },
    ],

    type: ["beast_n_remains"],
    icon: "awakened_feather.png",
  },
  {
    id: "azoth",

    displayName: {
      en: "Azoth",
      zh: "阿佐特",
    },

    description: {
      en: "A solvent of frightening voracity.",
      zh: "一种有着骇人贪欲的溶剂。",
    },

    principles: [
      { id: "forge", amount: 2 },
      { id: "knock", amount: 6 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: [
          "bells_n_brazieries",
          "disciplines_of_the_hammer",
          "door_n_wall",
          "meniscate_reflections",
          "purifications_n_exaltations",
          "pyroglyphics",
        ],
        requires: ["wire_orichalcum"],
      },

      {
        id: "method_2",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: ["spices_n_savours"],
        requires: ["honeyscar_jasmine"],
      }],

    type: ["other"],

    icon: "azoth.png",
  },
  {
    id: "beeswax_candle",
    displayName: {
      en: "Beeswax Candle",
      zh: "蜂蜡蜡烛",
    },
    description: {
      en: "Simple and bright. \n\n[Generates Memory: Sight.]",
      zh: "朴素又明亮。\n\n[使用获得回忆：视觉。]",
    },
    principles: [{ id: "lantern", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax"],
      },
    ],

    type: ["candle"],

    icon: "beeswax_candle.png",
  },
  {
    id: "bisclavrets_knot",
    displayName: {
      en: "Bisclavret's Knot",
      zh: "狼骑结印",
    },
    description: {
      en: "The bisclavret is the half-human hill-child of these parts, and this is its sign.",
      zh: "bisclavret（狼人骑士）是活动于这附近一带的半人丘陵之子，此乃其符号。",
    },
    principles: [{ id: "moth", amount: 1 },{ id: "scale", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "scale",
          amount: 5,
        },
        skills: [
          "coil_n_chasm",
          "furs_n_feathers",
          "hill_n_hollow",
          "horns_n_ivories",
          "path_n_pilgrim",
          "pentiments_n_precursors",
          "serpents_n_venoms",
          "wolf_stories",
        ]},
    ],

    type: ["mark"],

    icon: "bisclavrets_knot.png",
  },
  {
    id: "bitterblack_salts",
    displayName: {
      en: "Bitterblack Salts",
      zh: "苦黑盐",
    },
    description: {
      en: "Bitter as chicory, dark as secrets, but the first rung of the traditional alchemical ascent.",
      zh: "苦如菊苣，黑如秘密，但这是传统炼金术的第一步。",
    },
    principles: [{ id: "forge", amount: 1 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 5,
        },
        skills: [
          "anbary_n_lapidary",
          "bells_n_brazieries",
          "disciplines_of_the_hammer",
          "transformations_n_liberations",
          "door_n_wall",
        ]},
    ],

    type: ["pigment"],
    icon: "bitterblack_salts.png",
  },
  {
    id: "black_sapphire_wash",
    displayName: {
      en: "Black Sapphire Wash",
      zh: "黑刚玉涂料",
    },
    description: {
      en: "The colour, perhaps, of the doors of the House of the Moon.",
      zh: "这颜色许是月亮居屋之门的色彩。",
    },
    principles: [{ id: "moon", amount: 6 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: [
          "desires_n_dissolutions",
          "pearl_n_tide",
          "putrefactions_n_calcinations",
          "sea_stories",
          "tridesma_hiera",
        ],
        requires: ["asimel"],
      },
    ],

    type: ["pigment"],

    icon: "black_sapphire_wash.png",
  },
  {
    id: "catwink",
    displayName: {
      en: "Catwink",
      zh: "猫瞬墨",
    },
    description: {
      en: "The smell of catwink puts off vermin; but it is very difficult to read in sunlight. An Ink of Containment.",
      zh: "猫瞬墨的气味能驱赶害虫；但它在阳光下难以被阅读。一种收容之墨。",
    },
    principles: [{ id: "edge", amount: 1 },
      { id: "grail", amount: 1 },
      { id: "moon", amount: 2 },
      { id: "scale", amount: 2 }
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: [
          "edicts_inviolable",
          "inks_of_containment",
          "putrefactions_n_calcinations",
          "sand_stories",
          "sickle_n_eclipse",
        ]},
    ],

    type: ["ink"],

    icon: "catwink.png",
  },
  {
    id: "chalice_candle",
    displayName: {
      en: "Chalice Candle",
      zh: "盏花薰烛",
    },
    description: {
      en: "A candle scented with fragrant chalice.\n\n[Generates Memory: Satisfaction.]",
      zh: "一支带有香盏花香气的蜡烛。\n\n[使用获得回忆：满足。]",
    },
    principles: [
      { id: "grail", amount: 2 },
      { id: "lantern", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","fragrant_chalice"],
      },
    ],

    type: ["candle"],

    icon: "chalice_candle.png",
  },
  {
    id: "chimeric_larva",

    displayName: {
      en: "Chimeric Larva",
      zh: "混种幼虫",
    },

    description: {
      en: "Approaching the chrysalis crossroads.",
      zh: "接近化蛹的十字路口。",
    },

    principles: [
      { id: "knock", amount: 2 },
      { id: "moon", amount: 2 },
      { id: "moth", amount: 4 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "insects_n_nectars","hill_n_hollow",],
        requires: ["egg"],
      },

      {
        id: "method_2",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["horns_n_ivories"],
        requires: ["egg"],
      },
      {
        id: "method_3",
        principle: {
          id: "moth",
          amount: 10,
        },
        skills: ["resurgences_n_emergences","transformations_n_liberations"],
        requires: ["egg"],
      },
    ],

    type: ["beast_n_remains"],

    icon: "chimeric_larva.png",
  },
  {
    id: "chronsichord",

    displayName: {
      en: "Chronsichord",
      zh: "时键琴",
    },

    description: {
      en: "A music-box that only performs once; a typewriter that can only send one message; a clock that can only strike Now.",
      zh: "只能演奏一次的音乐盒；只能发送一条信息的打字机；只能在现在报时的钟。",
    },

    principles: [
      { id: "forge", amount: 3 },
      { id: "knock", amount: 6 },
      { id: "sky", amount: 3 },
    { id: "winter", amount: 3 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 15,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing",
          "lockworks_n_clockworks",
          "preliminal_meter",
          "the_great_signs_n_the_great_scars",
        ],
        requires: ["gervinite"],
      },

      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: ["lockworks_n_clockworks"],
        requires: ["wire_silver"],
      },
    ],

    type: ["ink","tool"],
    icon: "chronsichord.png",
  },
  {
    id: "dearday_lens",
    displayName: {
      en: "Dearday Lens",
      zh: "蒂尔黛透镜",
    },
    description: {
      en: "A fiendishly simple - and wretchedly fragile - optical device.",
      zh: "一种极度简单——以及极度脆弱的——光学装置。",
    },
    principles: [{ id: "edge", amount: 1 },{ id: "forge", amount: 1 },{ id: "lantern", amount: 2 },{ id: "sky", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: [
          "disciplines_of_the_scar",
          "pyroglyphics",
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing"
        ]},
        {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing"]}],
    type: ["tool"],
    icon: "dearday_lens.png",
  },
  {
    id: "eigengrau",
    displayName: {
      en: "Eigengrau",
      zh: "本征灰酒",
    },
    description: {
      en: "'If Greydawn Oil were drinkable…'",
      zh: "“如果灰晓之油能喝的话……”",
    },
    principles: [{ id: "moon", amount: 1 },{ id: "winter", amount: 1 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 5,
        },
        skills: [
          "inks_of_containment",
          "sights_n_sensations",
          "quenchings_n_quellings"]},
        {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["maggephene_mysteries","pearl_n_tide"]},
      {
        id: "method_3",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: ["auroral_contemplations"]}],
    type: ["beverage_n_intoxication"],
    icon: "eigengrau.png",
  },
  {
    id: "essential_periost",
    displayName: {
      en: "Essential Periost",
      zh: "骨本精华",
    },
    description: {
      en: "What happens when you boil and scrape us down to our utter fundamentals.",
      zh: "这便是你将我等烹煮刮净，直至彻底唯余根本物质时所得到的。",
    },
    principles: [{ id: "moon", amount: 2 },{ id: "nectar", amount: 4 },{ id: "scale", amount: 4 },{ id: "winter", amount: 4 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "sharps",
          "sickle_n_eclipse",
          "wolf_stories"]},
        {
        id: "method_2",
        principle: {
          id: "winter",
          amount: 10,
        },
        skills: ["rhymes_n_rememberances","snow_stories"]},
      {
        id: "method_3",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: ["stone_stories"]}],
    type: ["beast_n_remains"],
    icon: "essential_periost.png",
  },
  {
    id: "frith_weft",
    displayName: {
      en: "Frith-Weft",
      zh: "狭湾纬编",
    },
    description: {
      en: "The 'peace-weaving' for which the Abbey was famous, long before it was named for St Brandan, when it was the Abbey of the Black Dove or the Abbey of the White Crow.",
      zh: "修道院早在被命名为圣布伦丹前便以其“和平织物”闻名，彼时它还被称为黑鸽修道院或白鸦修道院。",
    },
    principles: [{ id: "heart", amount: 3 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: [
          "stitching_n_binding",
          "weaving_n_knotworking"],
        requires: ["fabric"],
      },
    ],
    type: ["other"],
    icon: "frith_weft.png",
  },
  {
    id: "flushed_mommet",
    displayName: {
      en: "Flushed Mommet",
      zh: "靥红人偶",
    },
    description: {
      en: "A crimson-stained little cloth doll with merry button eyes and a frill of twitching ribbons.",
      zh: "一个沾满了深红污渍的小布娃娃，有着快活的纽扣眼睛和不断颤动的褶边。",
    },
    principles: [{ id: "grail", amount: 6 },{ id: "heart", amount: 3 },{ id: "moth", amount: 3 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 15,
        },
        skills: ["desires_n_dissolutions","furs_n_feathers","pentiments_n_precursors","resurgences_n_emergences","the_great_signs_n_the_great_scars"],
        requires: ["pale_mommet"],
      },
    ],
    type: ["tool"],
    icon: "flushed_mommet.png",
  },
  {
    id: "gervinite",

    displayName: {
      en: "Gervinite",
      zh: "格维合金",
    },

    description: {
      en: "An alloy equivalent in some respects to the clockmaker's invar - but instead of a constant weight, it retains the same origin in every history.",
      zh: "一种合金，在某些方面相当于钟表匠的因瓦合金——但它并非拥有恒定的重量，而是在每重历史中都有恒定的起源。",
    },

    principles: [
{ id: "knock", amount: 4 },{ id: "rose", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["lockworks_n_clockworks",],
        requires: ["glass"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["glaziery_n_lightsmithing"],
        requires: ["metal"],
      }],
      type: ["metal"],
      icon: "gervinite.png",
  },
  {
    id: "gideons_soaks",
    displayName: {
      en: "Gideon's Soaks",
      zh: "基甸的浸液",
    },
    description: {
      en: "A therapeutic collection of beneficial bottles.",
      zh: "由有益健康的瓶瓶罐罐组成的治疗学收藏品。",
    },
    principles: [
      { id: "forge", amount: 2 },
      { id: "heart", amount: 4 },
      { id: "nectar", amount: 3 },
      { id: "winter", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: [
          "edicts_inviolable",
          "herbs_n_infusions",
          "maggephene_mysteries",
          "quenchings_n_quellings",
          "surgeries_n_exsanguinations"
        ],
        requires: ["liquid"],
      },
    ],

    type: ["other"],

    icon: "gideons_soaks.png",
  },
  {
    id: "glassfinger_toxin",

    displayName: {
      en: "Glassfinger Toxin",
      zh: "透指毒素",
    },

    description: {
      en: "'What is within, without; what is without, within.' A poison sacred to the votaries of the Meniscate.",
      zh: "“内外相易，表里互替。”一种对弧月信徒来说地位神圣的毒素。",
    },

    principles: [{ id: "forge", amount: 2 },{ id: "knock", amount: 4 },{ id: "lantern", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["door_n_wall","edicts_liminal","solutions_n_separations","surgeries_n_exsanguinations"],
        requires: ["liquid"],
      },
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: ["serpents_n_venoms"],
        requires: ["liquid"],
      }],
      type: ["other"],
      icon: "glassfinger_toxin.png",
  },
  {
    id: "historywax_candle",
    displayName: {
      en: "Historywax Candle",
      zh: "历史蜡烛",
    },
    description: {
      en: "A candle made with the oils of the 'history plant', agave aeterna.\n\n[Generates Wild Surmise.]",
      zh: "一种用“历史植物”，永恒龙舌兰的油制成的蜡烛。\n\n[使用获得狂热猜度。]",
    },
    principles: [{ id: "lantern", amount: 3 }],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","agave_aeterna"],
      },
    ],
    type: ["candle"],
    icon: "historywax_candle.png",
  },
  {
    id: "honeyscar_scented_candle",
    displayName: {
      en: "Honeyscar-Scented Candle",
      zh: "蜜痂薰烛",
    },
    description: {
      en: "A candle scented with honeyscar jasmine.\n\n[Generates Memory: Foresight.]",
      zh: "一支带有蜜痂茉莉香味的蜡烛。\n\n[使用获得回忆：先见之明。]",
    },
    principles: [{ id: "forge", amount: 2 },{ id: "rose", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","honeyscar_jasmine"],
      },
    ],
    type: ["candle"],
    icon: "honeyscar_scented_candle.png",
  },
  {
    id: "houndsgall",
    displayName: {
      en: "Houndsgall",
      zh: "猃瘿墨",
    },
    description: {
      en: "Books written in Houndsgall are more likely to return to their owner, or one to whom they have been legitimately sold. An Ink of Containment.",
      zh: "用猃瘿墨写出的书更有可能回到它们的主人，或是被合法售予的人手中。一种收容之墨。",
    },
    principles: [
      { id: "edge", amount: 1 },
      { id: "heart", amount: 2 },
      { id: "scale", amount: 5 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "scale",
          amount: 15,
        },
        skills: [
          "horns_n_ivories",
          "inks_of_containment",
          "path_n_pilgrim",
          "pentiments_n_precursors",
        ],
      requires: ["living_relic"]}],
          type: ["ink"],
          icon: "houndsgall.png",
  },
  {
    id: "ichor_auroral",
    displayName: {
      en: "Ichor Auroral",
      zh: "曙光灵液",
    },

    description: {
      en: "No dawn knows only a single colour. No sky knows only a single dawn.",
      zh: "没有拂晓仅知晓一种颜色。没有天空仅知晓一种拂晓。",
    },

    principles: [{ id: "lantern", amount: 4 },{ id: "rose", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "rose",
          amount: 10,
        },
        skills: ["auroral_contemplations","inks_of_power","sand_stories"],
        requires: ["light"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["sights_n_sensations","watchmans_paradoxes"],
        requires: ["light"],
      }],
      type: ["pigment"],
      icon: "ichor_auroral.png",
  },
  {
    id: "ichor_vitreous",
    displayName: {
      en: "Ichor Vitreous",
      zh: "玻璃灵液",
    },

    description: {
      en: "A pale and watchful fluid that can be gathered, sometimes, when the Door-in-the-Eye is opened.",
      zh: "一种浅色而警觉的液体，偶尔能在瞳中扉开启时被收集到。",
    },

    principles: [{ id: "lantern", amount: 4 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 10,
        },
        skills: ["glassblowing_n_vesselcrafting","glaziery_n_lightsmithing","inks_of_revelation","sacra_solis_invicti","watchmans_paradoxes"],
        requires: ["glass"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["glassblowing_n_vesselcrafting"],
        requires: ["glass"],
      }],
      type: ["pigment"],
      icon: "ichor_vitreous.png",
  },
  {
    id: "iotic_essence",
    displayName: {
      en: "Iotic Essence",
      zh: "赤化精华",
    },

    description: {
      en: "'In the later operations of the Forge, the Madrugad yields to the true Forge of Days, and the essence begins to redden.' The bit about the 'true Forge of Days' nearly got St Melancthe burned for heresy, but no-one ever said she was wrong about the second part.",
      zh: "“在铸炉的后期运转中，昕旦让位于真正的白日铸炉，这种精华也开始变红。”圣梅兰瑟关于“真正的白日铸炉”的说辞差点害她因异端言论被烧死，但从没人指出她关于第二部分的说法有错。",
    },

    principles: [{ id: "forge", amount: 5 },{ id: "lantern", amount: 3 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 10,
        },
        skills: ["anbary_n_lapidary","meniscate_reflections","pyroglyphics","spices_n_savours","transformations_n_liberations"],
        requires: ["liquid"],
      },
      {
        id: "method_2",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: ["disciplines_of_the_hammer","meniscate_reflections","transformations_n_liberations"],
        requires: ["bitterblack_salts"],
      },
    {
        id: "method_3",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: ["disciplines_of_the_hammer","meniscate_reflections","transformations_n_liberations"],
        requires: ["xanthotic_essence"],
      }],
      type: ["pigment"],
      icon: "iotic_essence.png",
  },
  {
    id: "january_sanguinary",
    displayName: {
      en: "January Sanguinary",
      zh: "雅努略之血",
    },

    description: {
      en: "Also called sanguis saltandis or, by the ignorantly superstitious, 'true blood of St Januarius'.",
      zh: "也被称作跃动之血，又或者，按愚昧迷信者的说法，“圣雅努略的真血”。",
    },

    principles: [{ id: "heart", amount: 5 },{ id: "knock", amount: 3 },{ id: "sky", amount: 3 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 15,
        },
        skills: ["edicts_inviolable","herbs_n_infusions","maggephene_mysteries","surgeries_n_exsanguinations"],
        requires: ["gideons_soaks"],
      },
      {
        id: "method_2",
        principle: {
          id: "knock",
          amount: 15,
        },
        skills: ["surgeries_n_exsanguinations"],
        requires: ["glassfinger_toxin"],
      }],
      type: ["other"],
      icon: "january_sanguinary.png",
  },
  {
    id: "labhitic_tincture",
    displayName: {
      en: "Labhitic Tincture",
      zh: "狻猊酊",
    },
    description: {
      en: "A much more potent preparation can be extracted from the remains of a labhite, but labhites generally frown on this technique.",
      zh: "从狻猊的残骸里可以提炼出另一种强力得多的制剂，但狻猊们基本都反对这一技术。",
    },
    principles: [
      { id: "edge", amount: 2 },
      { id: "lantern", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 5,
        },
        skills: [
          "disciplines_of_the_hammer",
          "edicts_martial",
          "ragged_crossroads",
          "sickle_n_eclipse",
        ]}],
          type: ["other"],
          icon: "labhitic_tincture.png",
  },
  {
    id: "leathy",
    displayName: {
      en: "Leathy",
      zh: "遗忘之水",
    },
    description: {
      en: "A dark and syrupy liquor favoured in unnamed forest villages.'The tongue and the eye, and now we begin! Forget your name, forget your skin.'",
      zh: "一种粘稠的黑色液体，受到森林中无名村落的喜爱。“舌头与眼睛，现在我们开始！忘记你的名字，忘记你的表皮。”",
    },
    principles: [
      { id: "grail", amount: 2 },
      { id: "moth", amount: 4 },
      { id: "nectar", amount: 2 },
      { id: "scale", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: [
          "herbs_n_infusions",
          "insects_n_nectars",
          "orchids_n_narcotics",
          "rites_of_the_roots",
        ],
      requires:["beverage"]},
        {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "inks_of_containment",],
        requires:["beverage"]}],
          type: ["beverage_n_intoxication"],
          icon: "leathy.png",
  },
  {
    id: "living_relic",
    displayName: {
      en: "Living Relic",
      zh: "活化石",
    },
    description: {
      en: "Few of these have been seen in the world under this sun.",
      zh: "在这个太阳照耀的世界里鲜能见到这种存在。",
    },
    principles: [{ id: "heart", amount: 1 },{ id: "scale", amount: 4 },{ id: "sky", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: [
          "furs_n_feathers",
          "hill_n_hollow",
        "pentiments_n_precursors","stone_stories"],
        requires: ["egg"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: [
          "stitching_n_binding"],
        requires: ["egg"],
      },
    ],
    type: ["beast_n_remains"],
    icon: "living_relic.png",
    note: {
    en: ["Note: Can also be acquired by hatching an Outsized Egg."],
    zh: ["注：也可以通过孵化一枚巨蛋获得。"]}
},
{
    id: "mazarine_fife",
    displayName: {
      en: "Mazarine Fife",
      zh: "马扎林横笛",
    },
    description: {
      en: "Whittled according to Kitty Mazarine's patient, eccentric instructions.",
      zh: "根据凯蒂·马扎林耐心而古怪的指导削制而成。",
    },
    principles: [{ id: "sky", amount: 3 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["ouranoscopy","sacra_limiae","sacra_solis_invicti"],
        requires: ["wood"],
      },
    ],
    type: ["tool"],
    icon: "mazarine_fife.png",
  },
  {
    id: "midnight_mark",
    displayName: {
      en: "Midnight Mark",
      zh: "午夜污点",
    },
    description: {
      en: "A blemish left on a page (or a skin) by a careful incision (or a judicious sting) to preserve a little of the power of night.",
      zh: "一个通过小心地雕凿（或精确地扎刺）在纸张（或皮肤）上留下的污点，用以保存黑夜力量的些许余痕。",
    },
    principles: [{ id: "moon", amount: 2 },{ id: "moth", amount: 1 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["desires_n_dissolutions","insects_n_nectars","rhymes_n_rememberances","serpents_n_venoms","sharps","snow_stories","wolf_stories"],},
    ],
    type: ["mark"],
    icon: "midnight_mark.png",
  },
  {
    id: "moth_orchid_scented_candle",
    displayName: {
      en: "Moth-Orchid-Scented Candle",
      zh: "蛾兰薰烛",
    },
    description: {
      en: "A candle scented with moth orchid.\n\n[Generates Memory: A Stolen Secret.]",
      zh: "一支带有蛾兰香味的蜡烛。\n\n[使用获得回忆：偷来的秘密。]",
    },
    principles: [{ id: "knock", amount: 2 },
      { id: "moth", amount: 1 }],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","moth_orchid"],
      },
    ],
    type: ["candle"],
    icon: "moth_orchid_scented_candle.png",
  },
  {
    id: "paint_moth_gold",
    displayName: {
      en: "Paint: Moth-Gold",
      zh: "油漆：蛾金",
    },
    description: {
      en: "Moths are seldom this colour.",
      zh: "飞蛾可不常是这种颜色。",
    },
    principles: [{ id: "moth", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 5,
        },
        skills: [
          "inks_of_revelation"]}],
    type: ["pigment"],
    icon: "paint_moth_gold.png",
  },
  {
    id: "pale_mommet",
    displayName: {
      en: "Pale Mommet",
      zh: "苍白人偶",
    },
    description: {
      en: "A gently twitching little cloth doll with melancholy button eyes and a frill of coloured ribbons.",
      zh: "一个微微抽搐着的小布娃娃，有着忧郁的纽扣眼睛和彩色的缎带褶边。",
    },
    principles: [{ id: "grail", amount: 4 },{ id: "heart", amount: 2 },{ id: "moth", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 10,
        },
        skills: [
          "pentiments_n_precursors",
          "resurgences_n_emergences",
        "sea_stories","the_great_signs_n_the_great_scars","tridesma_hiera"],
        requires: ["fabric"],
      },
    ],
    type: ["tool"],
    icon: "pale_mommet.png",
  },
  {
    id: "pear_scented_candle",
    displayName: {
      en: "Pear-Scented Candle",
      zh: "铜梨薰烛",
    },
    description: {
      en: "A candle scented with pear.\n\n[Generates Memory: Foresight.]",
      zh: "一支带有铜梨香味的蜡烛。\n\n[使用获得回忆：先见之明。]",
    },
    principles: [{ id: "forge", amount: 4 },{ id: "lantern", amount: 1 },{ id: "nectar", amount: 4 }],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","pyrus_auricalcinus"],
      },
    ],
    type: ["candle"],
    icon: "pear_scented_candle.png",
  },
  {
    id: "perhibiate",
    displayName: {
      en: "Perhibiate",
      zh: "深瞑墨",
    },
    description: {
      en: "Which binds to the one whose name is there written. A minor Ink of Power.",
      zh: "会和用它写下的名字绑定。一种次级的力量之墨。",
    },
    principles: [{ id: "heart", amount: 2 },
      { id: "lantern", amount: 2 },
      { id: "scale", amount: 2 },
      { id: "winter", amount: 1 },
    ],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 5,
        },
        skills: [
          "stitching_n_binding",
          "weaving_n_knotworking",
        ]},
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 5,
        },
        skills: [
          "inks_of_power"]}],
    type: ["ink"],
    icon: "perhibiate.png",
  },
  {
    id: "perilous_imago",
    displayName: {
      en: "Perilous Imago",
      zh: "凶匿成虫",
    },
    description: {
      en: "It's come so far. Release it, and it could fly farther.",
      zh: "它已经远达至此。放生它，它就能飞得更远。",
    },
    principles: [{ id: "knock", amount: 2 },
      { id: "moon", amount: 2 },
      { id: "moth", amount: 6 },
      { id: "scale", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 15,
        },
        skills: ["resurgences_n_emergences","transformations_n_liberations"],
        requires: ["chimeric_larva"],
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["insects_n_nectars"],
        requires: ["chimeric_larva"],
      }],
    type: ["beast_n_remains"],
    icon: "perilous_imago.png",
  },
  {
    id: "perinculate",
    displayName: {
      en: "Perinculate",
      zh: "凶匿墨",
    },
    description: {
      en: "Deadly. Use gloves to read texts produced with this pigment. An Ink of Power (sometimes considered an Unsanctioned Ink).",
      zh: "十分致命。由这种墨水写下的文本需要戴手套才能阅读。一种力量之墨（有时被认为是一种未经批准的墨水）。",
    },
    principles: [
      { id: "edge", amount: 4 },
      { id: "grail", amount: 1 },
      { id: "scale", amount: 4 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 10,
        },
        skills: ["disciplines_of_the_scar","edicts_martial","sickle_n_eclipse"],
        requires: ["leaf"],
      },
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: ["inks_of_power"],
        requires: ["leaf"],
      },
    {
        id: "method_3",
        principle: {
          id: "winter",
          amount: 10,
        },
        skills: ["putrefactions_n_calcinations"],
        requires: ["leaf"],
      }],
    type: ["ink"],
    icon: "perinculate.png",
  },
  {
    id: "pyrus_auricalcinus",
    displayName: {
      en: "Pyrus Auricalcinus",
      zh: "铜梨",
    },
    description: {
      en: "A peculiar pear, with coppery skin that barely dints under the pressure of fingers.",
      zh: "一种异乎寻常的梨子，铜样的表皮在手指的按压下几乎毫无凹陷。",
    },
    principles: [
      { id: "forge", amount: 4 },
      { id: "nectar", amount: 4 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: ["coil_n_chasm","leaves_n_thorns","spices_n_savours"],
        requires: ["wood"],
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: ["desires_n_dissolutions"],
        requires: ["wood"],
      }],
    type: ["other"],
    icon: "pyrus_auricalcinus.png",
  },
  {
    id: "refulgin",
    displayName: {
      en: "Refulgin",
      zh: "耀素",
    },
    description: {
      en: "A white so pure that it remains visible even in utter darkness, like the moon, or an insistent cat.",
      zh: "如此纯粹的白色，即便在一片漆黑中依旧可见，宛若明月，亦或一只引人注目的猫。",
    },
    principles: [{ id: "lantern", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: [
          "inks_of_revelation",
          "sacra_solis_invicti",
          "purifications_n_exaltations",
          "transformations_n_liberations",
        ]}],
    type: ["pigment"],
    icon: "refulgin.png",
  },
  {
    id: "regensburg_balm",
    displayName: {
      en: "Regensburg Balm",
      zh: "雷根斯堡镇痛软膏",
    },
    description: {
      en: "An invaluable herbal cure introduced to Hush House by the physician Natan after his exile from Regensburg.",
      zh: "一种无价的草药制剂，在纳坦医生从雷根斯堡被流放后引入噤声居屋。",
    },
    principles: [{ id: "heart", amount: 2 },{ id: "nectar", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 5,
        },
        skills: [
          "edicts_inviolable",
          "maggephene_mysteries",
          "herbs_n_infusions",
          "quenchings_n_quellings",
          "surgeries_n_exsanguinations"
        ]}],
    type: ["other"],
    icon: "regensburg_balm.png",
  },
  {
    id: "rubywise_ruin",
    displayName: {
      en: "Rubywise Ruin",
      zh: "沉沦赤慧",
    },
    description: {
      en: "A ruddy liquor wrung from flowers - even when the flowers aren't red.",
      zh: "一种从鲜花中榨取的红色烈酒——即使作为原料的花不是红的。",
    },
    principles: [
      { id: "grail", amount: 4 },
      { id: "heart", amount: 2 },
      { id: "moth", amount: 2 },
      { id: "nectar", amount: 2 },
      { id: "rose", amount: 2 },
    ],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 10,
        },
        skills: [
          "applebright_euphonies",
          "desires_n_dissolutions",
          "leaves_n_thorns",
          "orchids_n_narcotics",
        ],
        requires: ["flower"]}],
    type: ["beverage_n_intoxication"],
    icon: "rubywise_ruin.png",
  },
  {
    id: "sacrament_ascite",
    displayName: {
      en: "Sacrament Ascite",
      zh: "斫解石圣餐",
    },
    description: {
      en: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Horned-Axe.",
      zh: "早在拂晓时期，三重绳结姐妹会就已经将其用于双角斧的仪式中。",
    },
    principles: [{ id: "knock", amount: 6 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 15,
        },
        skills: [
          "door_n_wall",
          "edicts_liminal",
          "glassblowing_n_vesselcrafting",
          "horns_n_ivories",
          "solutions_n_separations"
        ],
        requires: ["glassfinger_toxin"],
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["serpents_n_venoms"],
        requires: ["glassfinger_toxin"],
      }],
    type: ["beverage_n_intoxication"],
    icon: "sacrament_ascite.png",
  },
  {
    id: "sacrament_calicite",
    displayName: {
      en: "Sacrament Calicite",
      zh: "圣觚石圣餐",
    },
    description: {
      en: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Red Grail.",
      zh: "早在拂晓时期，三重绳结姐妹会就已经将其用于赤杯的仪式中。",
    },
    principles: [{ id: "grail", amount: 6 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 15,
        },
        skills: [
          "applebright_euphonies",
          "leaves_n_thorns",
          "orchids_n_narcotics",
          "sea_stories",
          "tridesma_hiera"
        ],
        requires: ["rubywise_ruin"]}],
    type: ["beverage_n_intoxication"],
    icon: "sacrament_calicite.png",
  },
  {
    id: "sacrament_malachite",
    displayName: {
      en: "Sacrament Malachite",
      zh: "孔雀石圣餐",
    },
    description: {
      en: "Back in the Dawn Period, the Sisterhood of the Triple Knot used this in the rites of the Ring-Yew, the Hour which has also been called the Malachite.",
      zh: "早在拂晓时期，三重绳结姐妹会就已经将其用于环杉，又称石绿的司辰的仪式中。",
    },
    principles: [{ id: "nectar", amount: 6 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 15,
        },
        skills: [
          "coil_n_chasm",
          "drums_n_dances",
          "herbs_n_infusions",
          "leaves_n_thorns",
          "rites_of_the_roots",
          "spices_n_savours"
        ],
        requires: ["pyrus_auricalcinus"]},
      {
        id: "method_2",
        principle: {
          id: "nectar",
          amount: 15,
        },
        skills: ["stone_stories"],
        requires: ["essential_periost"]}],
    type: ["beverage_n_intoxication"],
    icon: "sacrament_malachite.png",
  },
  {
    id: "salt_sign",
    displayName: {
      en: "Salt-Sign",
      zh: "盐迹",
    },
    description: {
      en: "Too bad it won't last. But then again, what does?",
      zh: "可惜它并不能长久存续，但话说回来，又有什么能呢？",
    },
    principles: [{ id: "moon", amount: 2 },
      { id: "rose", amount: 2 },
    ],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: [
          "hill_n_hollow",
          "sea_stories",
        ]},
      {
        id: "method_2",
        principle: {
          id: "rose",
          amount: 5,
        },
        skills: [
          "inks_of_power",
          "path_n_pilgrim",
          "pearl_n_tide",
          "sand_stories"
        ]}],
    type: ["mark"],
    icon: "salt_sign.png",
  },
  {
    id: "serpent_milk",
    displayName: {
      en: "Serpent-Milk",
      zh: "蛇乳",
    },
    description: {
      en: "It does look almost like milk, and it is drinkable, but don't give it to cats or babies.",
      zh: "看上去几乎和乳汁一样，而且确实能喝。但别给猫和婴儿喝这个。",
    },
    principles: [
      { id: "edge", amount: 6 },
      { id: "knock", amount: 2 },
      { id: "scale", amount: 3 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 15,
        },
        skills: [
          "disciplines_of_the_scar",
          "sharps",
          "sickle_n_eclipse",
          "meniscate_reflections",
        ],
        requires: ["perinculate"],
      },
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 15,
        },
        skills: ["serpents_n_venoms"],
        requires: ["perinculate"],
      }],
    type: ["beverage_n_intoxication"],
    icon: "serpent_milk.png",
  },
  {
    id: "skinshuck_mead",
    displayName: {
      en: "Skinshuck Mead",
      zh: "剥皮蜜酒",
    },
    description: {
      en: "A murky, sweet-smelling liquid crowded with sediment.",
      zh: "一种浑浊，香甜的液体，里边满是沉淀。",
    },
    principles: [{ id: "heart", amount: 2 },
      { id: "moth", amount: 6 },
      { id: "nectar", amount: 2 },
      { id: "scale", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 15,
        },
        skills: [
          "edicts_liminal",
          "rites_of_the_roots",
          "sacra_limiae",
          "solutions_n_separations"
        ],
        requires: ["honey"],
      },
      {
        id: "method_2",
        principle: {
          id: "moth",
          amount: 15,
        },
        skills: ["edicts_liminal",
          "rites_of_the_roots",
          "sacra_limiae",
          "solutions_n_separations","resurgences_n_emergences",
          "transformations_n_liberations"],
        requires: ["cuckoo_honey"],
      },
    {
        id: "method_3",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["insects_n_nectars"],
        requires: ["cuckoo_honey"]}],
    type: ["beverage_n_intoxication"],
    icon: "skinshuck_mead.png",
  },
  {
    id: "solomons_preparation",
    displayName: {
      en: "Solomon's Preparation",
      zh: "所罗门制剂",
    },
    description: {
      en: "Solomon Husher would take this every night without fail before sleep, to close his ears to the sound of the waves. But on the 9th of January 1838, a heavy snow fell on Hush House. When the other residents dug themselves out, Husher was nowhere to be found. He had left a resignation letter, and an undrunk measure of his Preparation.\n\n* This is a non-intoxicating beverage.",
      zh: "所罗门·赫舍每夜入眠前都会喝下这种东西，以使得自己不再听见海潮之声，从无例外。但在1838年1月9日，一场大雪降临了噤声居屋。当其他住户把自己刨出来时，赫舍却无处可寻。他留下了一封辞呈，以及一整罐未曾饮用的这种制剂。\n\n* 这是一种不含酒精的饮料。",
    },
    principles: [
      { id: "moon", amount: 1 },
      { id: "moth", amount: 1 },
      { id: "winter", amount: 4 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 10,
        },
        skills: [
          "inks_of_containment",
          "quenchings_n_quellings",
          "ragged_crossroads",
          "sights_n_sensations",
        ],
        requires: ["flower"],
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: ["edicts_inviolable","maggephene_mysteries"],
        requires: ["flower"],
      }],
    type: ["beverage_n_intoxication"],
    icon: "solomons_preparation.png",
  },
  {
    id: "stargall_ink",
    displayName: {
      en: "Stargall Ink",
      zh: "星瘿墨",
    },
    description: {
      en: "An ink traditionally (but only rarely) made with meteoric iron; a minor Ink of Power.",
      zh: "一种在传统上（但实际很少）用陨铁制成的墨水；一种次级的力量之墨。",
    },
    principles: [{ id: "forge", amount: 1 },
      { id: "rose", amount: 1 },{ id: "sky", amount: 2 },
    ],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: [
          "inks_of_containment","inks_of_power","inks_of_revelation"]}],
    type: ["ink"],
    icon: "stargall_ink.png",
  },
  {
    id: "stymphling",
    displayName: {
      en: "Stymphling",
      zh: "斯廷法利斯湖兽",
    },
    description: {
      en: "Eva Dewulf taught her father Valentine how to hatch these silvery little villains, but he never learnt to like them.",
      zh: "伊娃·德沃尔夫教会了她的父亲瓦伦丁如何孵化这些银色的小坏蛋，但他从没学会喜欢上它们。",
    },
    principles: [{ id: "moon", amount: 3 },{ id: "scale", amount: 3 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "rhymes_n_rememberances","sand_stories","serpents_n_venoms","snow_stories","tridesma_hiera"],
        requires:["egg"]}],
    type: ["beast_n_remains"],
    icon: "stymphling.png",
  },
  {
    id: "swaddled_thunder",
    displayName: {
      en: "Swaddled Thunder",
      zh: "襁褓雷霆",
    },
    description: {
      en: "A storm swathed in subtle threads, ready to be released with a few judicious snips.",
      zh: "紧裹于精密纺线中的雷暴，准备好被几下精确的修剪释放。",
    },
    principles: [{ id: "heart", amount: 6 },{ id: "sky", amount: 4 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 15,
        },
        skills: [
          "stitching_n_binding","quenchings_n_quellings","weaving_n_knotworking"],
        requires:["frith_weft"]},
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 15,
        },
        skills: [
          "drums_n_dances","strings_n_songs"],
        requires:["thunderskins_paean"]}],
    type: ["tool"],
    icon: "swaddled_thunder.png",
  },
  {
    id: "tanglebrag",
    displayName: {
      en: "Tanglebrag",
      zh: "诳语缠结",
    },
    description: {
      en: "A clot of wood, leaves and feathers that might draw the attention of the entity called Knotwingknot.",
      zh: "一团纠结在一起的木头、树叶与羽毛，可能引起一位名为异结翼的存在之注意。",
    },
    principles: [{ id: "lantern", amount: 1 },{ id: "moth", amount: 2 },{ id: "nectar", amount: 1 },{ id: "scale", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 5,
        },
        skills: [
          "edicts_liminal","resurgences_n_emergences","rites_of_the_roots","weaving_n_knotworking"]},
        {
        id: "method_2",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: ["watchmans_paradoxes"]}],
    type: ["other"],
    icon: "tanglebrag.png",
  },
  {
    id: "thirzas_cordials",
    displayName: {
      en: "Thirza's Cordials",
      zh: "蒂尔扎利口酒",
    },
    description: {
      en: "Separately, each is undrinkable. But mix them, and they're only undrinkable after fifteen minutes.",
      zh: "其中每种成分都不可单独饮用，但混合后就可以。另外，混合物仅在十五分钟后就会再次变得不可饮用。",
    },
    principles: [{ id: "moth", amount: 2 },{ id: "nectar", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 5,
        },
        skills: [
          "coil_n_chasm","herbs_n_infusions","orchids_n_narcotics","spices_n_savours","stone_stories"]}],
    type: ["beverage_n_intoxication"],
    icon: "thirzas_cordials.png",
  },
  {
    id: "thunderskins_paean",
    displayName: {
      en: "Thunderskin's Paean",
      zh: "轰雷之皮的赞歌",
    },
    description: {
      en: "A song of joyous sacrifice.",
      zh: "一首欢乐的祭歌。",
    },
    principles: [{ id: "grail", amount: 1 },{ id: "heart", amount: 4 },{ id: "scale", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: [
          "drums_n_dances","strings_n_songs"],
        requires: ["instrument"]}],
    type: ["other"],
    icon: "thunderskins_paean.png",
  },
  {
    id: "westcotts_compounds",
    displayName: {
      en: "Westcott's Compounds",
      zh: "威斯考特的混合物",
    },
    description: {
      en: "Reagents and activants to enhance alchemical operations, or the flavour of one's pipe tobacco.",
      zh: "有助于炼金术实验的进行，或是用作增进烟草风味的试剂与催化剂。",
    },
    principles: [{ id: "forge", amount: 2 },{ id: "grail", amount: 1 },{ id: "lantern", amount: 1 },{ id: "moth", amount: 1 },{ id: "nectar", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 5,
        },
        skills: [
          "sacra_limiae","solutions_n_separations"]},
        {
        id: "method_2",
        principle: {
          id: "forge",
          amount: 5,
        },
        skills: [
          "meniscate_reflections","pyroglyphics","spices_n_savours"]}],
    type: ["other"],
    icon: "westcotts_compounds.png",
  },
  {
    id: "wire_orichalcum",
    displayName: {
      en: "Wire (Orichalcum)",
      zh: "金属丝（山铜）",
    },
    description: {
      en: "A metal which alters its estate in every age, but in every age can be used to catalyse the azoth.",
      zh: "一种性质随着时代而改变的金属，不过在每个时代，它都能用来催化阿佐特。",
    },
    principles: [{ id: "forge", amount: 4 },{ id: "lantern", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 10,},
        skills: ["bells_n_brazieries","disciplines_of_the_hammer","door_n_wall"],
      requires:["metal"]},
    {
        id: "method_2",
        principle: {
          id: "knock",
          amount: 10,},
        skills: ["glassblowing_n_vesselcrafting"],
      requires:["metal"]},
    {
        id: "method_3",
        principle: {
          id: "sky",
          amount: 10,},
        skills: ["lockworks_n_clockworks"],
      requires:["metal"]}],
    type: ["metal"],
    icon: "wire_orichalcum.png",
  },
  {
    id: "wire_silver",
    displayName: {
      en: "Wire (Silver)",
      zh: "金属丝（银）",
    },
    description: {
      en: "The Meniscate's metal.",
      zh: "弧月的金属。",
    },
    principles: [{ id: "forge", amount: 2 },{ id: "moon", amount: 1 }],
    methods: [
      {
        id: "method_1",
        requires: [
          "silver_spintriae","silver_spintriae"]}],
    type: ["metal"],
    icon: "wire_silver.png",
  },
  {
    id: "witching_tisane",
    displayName: {
      en: "Witching Tisane",
      zh: "巫魅药茶",
    },
    description: {
      en: "'To mend a broken heart, to colour a pale soul.'\n\n* This is a non-intoxicating beverage.",
      zh: "“为残破的心灵修补，为黯淡的灵魂着色。”\n\n* 这是一种不含酒精的饮料。",
    },
    principles: [{ id: "grail", amount: 2 },{ id: "heart", amount: 1 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 5,
        },
        skills: [
          "desires_n_dissolutions","leaves_n_thorns","orchids_n_narcotics","sea_stories","the_great_signs_n_the_great_scars"]}],
    type: ["beverage_n_intoxication"],
    icon: "witching_tisane.png",
  },
  {
    id: "wyrd_weft",
    displayName: {
      en: "Wyrd-Weft",
      zh: "命运纬编",
    },
    description: {
      en: "A weave that either entrains, or follows, Fate. It's hard to be sure which.",
      zh: "一种牵引，或追随命运的织纹。很难说清楚到底是哪个。",
    },
    principles: [{ id: "heart", amount: 3 },{ id: "winter", amount: 6 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 15,
        },
        skills: [
          "stitching_n_binding",
          "weaving_n_knotworking"],
        requires: ["fabric"],
      },
    ],
    type: ["other"],
    icon: "wyrd_weft.png",
  },
{
    id: "xanthotic_essence",
    displayName: {
      en: "Xanthotic Essence",
      zh: "黄化精华",
    },
    description: {
      en: "The rich gold of a summer afternoon. 'If sunlight precedes moonlight,' St Anselm observed, 'the Meniscate must precede the Madrugad; and the light that was lost will remain.'",
      zh: "夏日午后的浓金色。“如果日光先于月光，”圣安塞姆曾注意到，“则弧月必先于昕旦；而失落之光将留存。”",
    },
    principles: [
      { id: "forge", amount: 2 },
      { id: "knock", amount: 2 },
      { id: "lantern", amount: 5 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 10,
        },
        skills: [
          "auroral_contemplations",
          "purifications_n_exaltations",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["liquid"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["anbary_n_lapidary"],
        requires: ["liquid"],
      },
      {
        id: "method_3",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["purifications_n_exaltations"],
        requires: [
          "bitterblack_salts",
        ]},
      {
        id: "method_4",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["purifications_n_exaltations"],
        requires: ["iotic_essence",
        ]}],
    type: ["pigment"],
    icon: "xanthotic_essence.png",
  },
  {
    id: "year_tally",
    displayName: {
      en: "Year-Tally",
      zh: "年岁账簿",
    },
    description: {
      en: "A chitty worth an additional year of life, scrupulously obtained through carefully balanced thaumaturgic attention to the Cindered Tally of the Madrugad.",
      zh: "一张价值一年额外寿命的单据，通过小心地平衡昕旦对灰烬账簿那玄妙的关注取得。",
    },
    principles: [{ id: "winter", amount: 6 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 15,
        },
        skills: [
          "putrefactions_n_calcinations","ragged_crossroads","rhymes_n_rememberances","snow_stories"],
        requires:["essential_periost"]},
        {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["ouranoscopy"],
      requires:["essential_periost"]}],
    type: ["mark"],
    icon: "year_tally.png",
  },
  {
    id: "yewgall_ink",
    displayName: {
      en: "Yewgall Ink",
      zh: "杉瘿墨",
    },
    description: {
      en: "A variant of iron gall ink, particularly difficult to erase; a minor Ink of Power.",
      zh: "铁瘿墨的变种，尤难擦除；一种次级的力量之墨。",
    },
    principles: [{ id: "moth", amount: 1 },{ id: "nectar", amount: 2 },
    ],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 5,
        },
        skills: [
          "inks_of_containment","inks_of_power","inks_of_revelation","insects_n_nectars","leaves_n_thorns","rites_of_the_roots"]},
        {
        id: "method_2",
        principle: {
          id: "winter",
          amount: 5,
        },
        skills: ["putrefactions_n_calcinations"]}],
    type: ["ink"],
    icon: "yewgall_ink.png",
  },
  {
    id: "corruption_keeperskin",
    displayName: {
      en: "Keeperskin",
      zh: "秘肤",
    },
    description: {
      en: "This book is blotched with keeperskin, a luminous fungus that grows in the Wood we see in sleep, and enters the world when a dreamer inhales its spores.\n\n[Keeperskin contamination can affect your Ereb and Chor, and spread to nearby objects. You can remove it with a skill that's effective against Corruptions, if you provide at least 7 Nectar.]",
      zh: "这本书沾染了秘肤，一种生长在我们梦中所见的林地的发光真菌，当梦者吸入它们的孢子后，这种真菌就进入了我们的世界。\n\n[秘肤会侵蚀你的黯晦和脉律，还会蔓延到附近的物品上。如果提供至少7点蜜，你可以通过某种能够有效对抗腐坏的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 7,
        },
        skills: [
          "herbs_n_infusions","maggephene_mysteries","sickle_n_eclipse","purifications_n_exaltations"]},],
    type: ["contamination"],
    icon: "corruption_keeperskin.png",
  },
  {
    id: "corruption_winkwell",
    displayName: {
      en: "Winkwell",
      zh: "闪渊",
    },
    description: {
      en: "Sometimes when I turn this book to the right angle, I see an eye peering at me from its pages or covers. They close and fade when I leave them in the dark... but light will always bring them out eventually.\n\n[This can affect your Fet and Wist, and spread to nearby objects. You can remove it with a skill that's effective against Corruption, and at least 7 Moon.]",
      zh: "当我将书摆放到正确的角度后，就仿佛能看见那书页与封面间凝视着我的眼睛。它们会在黑暗里闭阖……可光亮最终总会将它们唤醒。\n\n[这种腐坏会侵蚀你的灵躯和铭晓，并且向周围的物品滋生，如果提供至少7点月，你也许可以通过某种能有效对抗这一腐坏的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 7,
        },
        skills: [
          "maggephene_mysteries","sickle_n_eclipse","herbs_n_infusions","purifications_n_exaltations"]},],
    type: ["contamination"],
    icon: "corruption_winkwell.png",
  },
  {
    id: "curse_fifth_eye_curse",
    displayName: {
      en: "Fifth Eye Curse",
      zh: "第五目诅咒",
    },
    description: {
      en: "Someone has unhelpfully placed a curse which may tear open the unwilling eye of the soul.\n\n[This contamination can affect your Fet and Phost. You can remove it with a skill that's effective against Curses, and at least 7 Heart.]",
      zh: "有人恶意地施加了一个会强行撕开灵魂之眼的诅咒。\n\n[这种咒术会污损你的灵躯和灵识。如果提供至少7点心，你也可以通过某种能够有效的对抗这一诅咒的技艺来将之去除 。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 7,
        },
        skills: ["sacra_limiae","sacra_solis_invicti","tridesma_hiera"]},],
    type: ["contamination"],
    icon: "curse_fifth_eye_curse.png",
  },
  {
    id: "curse_sthenic_taint",
    displayName: {
      en: "Sthenic Taint",
      zh: "生猛污蚀",
    },
    description: {
      en: "A poison? A curse? Probably both. Be careful handling this book.\n\n[This contamination can affect your Shapt and Health. You can remove it with a skill that's effective against Curses, and at least 7 Knock.]",
      zh: "毒素？诅咒？也许二者兼有。要小心处理这本书。\n\n[这种咒术会污损你的辩闻和健康，如果提供至少7点启，你也可以通过某种能够有效的对抗这一诅咒的技艺来将之去除 。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 7,
        },
        skills: ["sacra_limiae","sacra_solis_invicti","tridesma_hiera"]},],
    type: ["contamination"],
    icon: "curse_sthenic_taint.png",
  },
  {
    id: "infestation_bloodlines",
    displayName: {
      en: "Bloodlines",
      zh: "血绦",
    },
    description: {
      en: "If I open this book at the right page, I'll find words that slowly ooze blood. Over time, those words increase in number.\n\n[This Infestation can affect your Ereb and Chor, and spread to nearby objects. You can remove it with a skill that's effective against Infestations, and at least 7 Moth.]",
      zh: "如果我把这本书翻到恰当的页码，我会发现缓慢渗血的文字，随着时间的推移，这些文字会越来越多。\n\n[这种寄生会侵染你的黯晦与脉律，并且向周围的物品繁殖。如果提供至少7点蛾，你也可以通过某种能够有效的对抗这一寄生的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 7,
        },
        skills: ["resurgences_n_emergences","hill_n_hollow","stitching_n_binding","stone_stories","surgeries_n_exsanguinations"]},],
    type: ["contamination"],
    icon: "infestation_bloodlines.png",
  },
  {
    id: "infestation_witchworms",
    displayName: {
      en: "Witchworms",
      zh: "巫蠹",
    },
    description: {
      en: "Tiny larvae with half-human faces. Fortunately, they rarely develop into their imago stage; but even as larvae, their whispering can torment senses and distort thoughts.\n\n[These can affect your Shapt and Wist, and spread to nearby objects. You can remove them with a skill that's effective against Infestations, and at least 7 Winter.]",
      zh: "长着半人脸的小幼虫。幸运的是，它们鲜能发育为成虫；但即使是幼虫，它们的窃窃私语也能折磨感官，扭曲思想。\n\n[这种寄生会侵染你的辩闻和铭晓，并且向周围的物品滋生，如果提供至少7点冬，你也可以通过某种能够有效的对抗这一寄生的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 7,
        },
        skills: ["hill_n_hollow","resurgences_n_emergences","stitching_n_binding","stone_stories","surgeries_n_exsanguinations"]},],
    type: ["contamination"],
    icon: "infestation_witchworms.png",
  },
  {
    id: "theoplasmic_actinic_theoplasma",
    displayName: {
      en: "Actinic Theoplasma",
      zh: "神辉流溢",
    },
    description: {
      en: "This book has suffered the attention of one of the bright Names or Hours, the gods-from-Light.\n\n [This contamination can affect your Phost and Trist, and spread to nearby objects. You can remove it with a skill that's effective against Theoplasmic Contamination, if you provide at least 7 Forge.]",
      zh: "这本书遭受了某位明亮夺目的具名者，或光源神的关注。\n\n[这种神性流溢会毒害你的灵识与悲恸，还会蔓延到附近的物品上，如果提供至少7点铸，你也可以通过某种能够有效的对抗这一浸染的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 7,
        },
        skills: ["meniscate_reflections","quenchings_n_quellings","inks_of_containment"]},],
    type: ["contamination"],
    icon: "theoplasmic_actinic_theoplasma.png",
  },
  {
    id: "theoplasmic_chionic_theoplasma",
    displayName: {
      en: "Chionic Theoplasma",
      zh: "神寒流溢",
    },
    description: {
      en: "This book suffered the attention of one of the chilly Names or Hours, perhaps even a god-from-Nowhere.\n\n[This contamination can affect your Trist and Health, and spread to nearby objects. You can remove it with a skill that's effective against Theoplasmic Contamination, and at least 7 Heart.]",
      zh: "这本书遭受了某位冰寒刺骨的具名者，甚至是虚源神的关注。\n\n[这种神性流溢会毒害你的悲恸和健康，还会蔓延到附近的物品上，如果提供至少7点心，你也可以通过某种能够有效的对抗这一浸染的技艺来将之去除。]",
    },
    principles:[],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 7,
        },
        skills: ["quenchings_n_quellings","meniscate_reflections","inks_of_containment"]},],
    type: ["contamination"],
    icon: "theoplasmic_chionic_theoplasma.png",
  }
]