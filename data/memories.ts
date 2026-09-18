import type { Memory } from "@/types/memory";
import { notEqual } from "assert";
import { sourceMapsEnabled } from "process";
import { text } from "stream/consumers";

export const memories: Memory[] = [
  {
    id: "clouds",
    displayName: {
      en: "Clouds",
      zh: "多云",
    },
    description: {
      en: "In this country the sky is rarely clear. The Sun goes courteously cloaked.\n[Can be drawn in any season.]",
      zh: "在这个国家，天空很少是晴朗的。太阳得体地披上了斗篷。\n[所有季节均可能出现多云天气。]",
    },
    principles: [
      { id: "moon", amount: 1 },{ id: "moth", amount: 1 }
    ],
    type: "weather",
    icon: "/memories/clouds.png",
  },
  {
    id: "fog",
    displayName: {
      en: "Fog",
      zh: "雾",
    },
    description: {
      en: "Coastal fog - moon-mared, sea-dulling.\n[Can be drawn in Autumn and Winter.]",
      zh: "沿滩游雾——月色朦胧，海水晦暗。\n[雾天仅现于秋冬。]",
    },
    principles: [
      { id: "knock", amount: 3 },{ id: "moon", amount: 3 }
    ],
    type: "weather",
    icon: "/memories/fog.png",
  },
  {
    id: "gale",
    displayName: {
      en: "Gale",
      zh: "狂风",
    },
    description: {
      en: "Trees bend, walls creak, travellers bend low against the blast.\n[Can be drawn in Sprin, Autumn and Winter.]",
      zh: "树木弯曲，墙壁吱吱作响，旅人弯腰以抵御狂风。\n[狂风可现于春、秋、冬。]",
    },
    principles: [
      { id: "heart", amount: 3 },{ id: "sky", amount: 3 }
    ],
    type: "weather",
    icon: "/memories/gale.png",
  },
  {
    id: "hail",
    displayName: {
      en: "Hail",
      zh: "冰雹",
    },
    description: {
      en: "Ice raps on the roofs and tree-tops.\n[Can be drawn in Autumn and Winter.]",
      zh: "冰砾敲打着屋顶和树梢。\n[冰雹仅现于秋冬。]",
    },
    principles: [
      { id: "edge", amount: 3 },{ id: "sky", amount: 3 }
    ],
    type: "weather",
    icon: "/memories/hail.png",
  },
  {
    id: "rain",
    displayName: {
      en: "Rain",
      zh: "雨",
    },
    description: {
      en: "Soft rain brings life.\n[Can be drawn in any season.]",
      zh: "细雨带来生机。\n[所有季节均可能出现雨天。]",
    },
    principles: [
      { id: "grail", amount: 2 },{ id: "nectar", amount: 2 }
    ],
    type: "weather",
    icon: "/memories/rain.png",
  },
  {
    id: "snow",
    displayName: {
      en: "Snow",
      zh: "雪",
    },
    description: {
      en: "The world is pale today. 'The White is west of the world, and winter does not wait forever', Solomon Husher once said.\n[Can be drawn in Winter.]",
      zh: "今日世界一片淡白。“纯白在世界以西，且冬不永待”，所罗门·赫舍曾言。\n[雪天仅现于冬。]",
    },
    principles: [
      { id: "winter", amount: 3 },{ id: "sky", amount: 3 }
    ],
    type: "weather",
    icon: "/memories/snow.png",
  },
  {
    id: "storm_weather",
    displayName: {
      en: "Storm",
      zh: "风暴",
    },
    description: {
      en: "Thunder-roaring, lightning-lashed skies.\n[Can be drawn in Autumn and Winter.]",
      zh: "天空电闪雷鸣。\n[风暴天仅现于秋冬。]",
    },
    principles: [
      { id: "heart", amount: 4 },{ id: "sky", amount: 4 }
    ],
    type: "weather",
     sources: [
    {
      id: "swaddled_thunder",
      sourceType: "craftable",
      action: "consider",
    },
  ],
  note: {
    en: ["The Storm card obtained by considering Swaddled Thunder can be stacked."],
    zh: ["通过研究襁褓雷霆获取的风暴卡可以叠加。"]
  },
    icon: "/memories/storm_weather.png",
  },
  {
    id: "sunny",
    displayName: {
      en: "Sunny",
      zh: "晴朗",
    },
    description: {
      en: "The Sun is not what it was, but today he is smiling.\n[Can be drawn in Spring, Summer, and Autumn.]",
      zh: "太阳不复往昔，但今日他露出了微笑。\n[晴朗天气可现于春、夏、秋。]",
    },
    principles: [
      { id: "lantern", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "weather",
    icon: "/memories/sunny.png",
  },
  {
    id: "nume_brume",
    displayName: {
      en: "Nume-Brume",
      zh: "闰时雾霭",
    },
    description: {
      en: "Numa's brumous vapours.",
      zh: "闰时的冷郁水雾。",
    },
    principles: [
      { id: "knock", amount: 5 },{ id: "moon", amount: 5 },{ id: "rose", amount: 5 },{ id: "winter", amount: 5 }
    ],
    type: "weather",
    icon: "/memories/nume_brume.png",
  },
  {
    id: "beguiling_melody",
    displayName: {
      en: "Beguiling Melody",
      zh: "诱人旋律",
    },
    description: {
      en: "A sweet enchantment of a song.",
      zh: "歌曲中的甜蜜魔咒。",
    },
    principles: [
      { id: "grail", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 5,
        },
        skills: ["applebright_euphonies","resurgences_n_emergences","pentiments_n_precursors","tridesma_hiera"],
      },
    ],
    icon: "/memories/beguiling_melody.png",
  },
  {
    id: "bittersweet_certainty",
    displayName: {
      en: "Bittersweet Certainty",
      zh: "苦乐参半的必然",
    },
    description: {
      en: "Eventually, the Sun-in-Rags always brings its beautiful ending.",
      zh: "最后，残阳总是带来它的凄美结尾。",
    },
    principles: [
      { id: "lantern", amount: 1 },{ id: "winter", amount: 2 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["ouranoscopy"],
      },
      {
        id: "method_2",
        principle: {
          id: "winter",
          amount: 5,
        },
        skills: ["snow_stories","ragged_crossroads","rhymes_n_rememberances","ouranoscopy"],
      },
    ],
    icon: "/memories/bittersweet_certainty.png",
  },
  {
    id: "cheerful_ditty",
    displayName: {
      en: "Cheerful Ditty",
      zh: "欢快小调",
    },
    description: {
      en: "A rousing little rhythm.",
      zh: "振奋人心的简单旋律。",
    },
    principles: [
      { id: "heart", amount: 2 },{ id: "sky", amount: 1 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 5,
        },
        skills: ["drums_n_dances","strings_n_songs"],
      }],
      sources: [
    {
      id: "awakened_feather",
      sourceType: "craftable",
      action: "consider",
    },
  ],
    icon: "/memories/cheerful_ditty.png",
  },
  {
    id: "confounding_parable",
    displayName: {
      en: "Confounding Parable",
      zh: "混淆寓言",
    },
    description: {
      en: "'The Moth, the Grail, and the Egg Unhatching all tell different stories of the world's beginning. One of those stories is the oldest, but it may not be the first.'\n~ Abbess Nonna",
      zh: "“飞蛾、圣杯与逆孵之卵各自讲述了关于世界起源的故事。其中一个故事是最古老的，但可能不是最初的。” ——诺娜院长",
    },
    principles: [
      {id: "moon", amount: 2 },{ id: "rose", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["tridesma_hiera"],
      },
    {
        id: "method_2",
        principle: {
          id: "rose",
          amount: 5,
        },
        skills: ["preliminal_meter","sky_stories"],
      },
    {
        id: "method_3",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["applebright_euphonies","sacra_solis_invicti"],
      }],
    icon: "/memories/confounding_parable.png",
  },
  {
    id: "memory_a_stolen_secret",
    displayName: {
      en: "Memory: A Stolen Secret",
      zh: "回忆：偷来的秘密",
    },
    description: {
      en: "Something I overheard in dreams?	",
      zh: "梦中偶闻之事？",
    },
    principles: [
      { id: "knock", amount: 1 },{ id: "moon", amount: 2 }
    ],
    sources: [{
    id: "moth_orchid_scented_candle",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_a_stolen_secret.png",
  },
  {
    id: "memory_contradiction",
    displayName: {
      en: "Memory: Contradiction",
      zh: "回忆：矛盾",
    },
    description: {
      en: "Something uncomfortable.",
      zh: "让人不适之事。",
    },
    principles: [
      { id: "edge", amount: 2 },{ id: "moon", amount: 1 }
    ],
    sources: [{
    id: "bokken_captain_torgue_n_mistress_dearday",
    sourceType: "item",
    action: "consider",
  },
{
    id: "cudgels_dyddgu_n_st_twrog",
    sourceType: "item",
    action: "consider",
  },
{
    id: "wasters_darling_dear_n_father_turk",
    sourceType: "item",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_contradiction.png",
  },
  {
    id: "memory_fear",
    displayName: {
      en: "Memory: Fear",
      zh: "回忆：恐惧",
    },
    description: {
      en: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.\n~ Lovecraft",
      zh: "“人类最古老最强烈的情绪是恐惧，而最古老最强烈的恐惧是对未知的恐惧。” ——洛夫克拉夫特",
    },
    principles: [
      { id: "edge", amount: 1 },{ id: "scale", amount: 2 }
    ],
    sources: [{
    id: "animal_bones",
    sourceType: "item",
    action: "consider",
  },
{
    id: "arsenic",
    sourceType: "item",
    action: "consider",
  },
{
    id: "heart_in_a_jar",
    sourceType: "item",
    action: "consider",
  },
{
    id: "nighted_chair",
    sourceType: "item",
    action: "consider",
  },
{
    id: "perinculate",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "urn_of_ashes",
    sourceType: "item",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_fear.png",
  },
  {
    id: "memory_foresight",
    displayName: {
      en: "Memory: Foresight",
      zh: "回忆：先见之明",
    },
    description: {
      en: "'Wit's forge and fire-blast, meaning's press and screw.'\n ~ Coleridge, 'On Donne's Poetry'",
      zh: "“才智的重塑与迸发，思想的凝炼与回旋。”——柯勒律治，《论多恩的诗歌》",
    },
    principles: [
      { id: "forge", amount: 2 },{ id: "lantern", amount: 1 }
    ],
    sources: [{
    id: "azoth",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "watchful_candle",
    sourceType: "item",
    action: "consider",
  },
{
    id: "honeyscar_scented_candle",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "pear_scented_candle",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "iotic_essence",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "scintillate_oil",
    sourceType: "item",
    action: "consider",
  },
{
    id: "bitterblack_salts",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "skaptodon_fang",
    sourceType: "item",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_foresight.png",
  },
  {
    id: "memory_gossip",
    displayName: {
      en: "Memory: Gossip",
      zh: "回忆：流言",
    },
    description: {
      en: "Frivolous, but tasty.",
      zh: "轻浮，但美味可口。",
    },
    principles: [
      { id: "grail", amount: 1 },{ id: "rose", amount: 2 }
    ],
    type: "temporary",
    icon: "/memories/memory_gossip.png",
  },
  {
    id: "memory_hindsight",
    displayName: {
      en: "Memory: Hindsight",
      zh: "回忆：后见之明",
    },
    description: {
      en: "Some things we can only really understand when they're gone.",
      zh: "有些事只有在消逝之后才能理解。",
    },
    principles: [
      { id: "scale", amount: 1 },{ id: "winter", amount: 2 }
    ],
    sources: [{
    id: "solomons_preparation",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_hindsight.png",
  },
  {
    id: "memory_impulse",
    displayName: {
      en: "Memory: Impulse",
      zh: "回忆：冲动",
    },
    description: {
      en: "It doesn't exactly make sense - but I understand it anyway.",
      zh: "很难说得清——但我还是明白了。",
    },
    principles: [
      { id: "moth", amount: 2 },{ id: "nectar", amount: 1 }
    ],
    sources: [{
    id: "holiest_hemolymph",
    sourceType: "item",
    action: "consider",
  },
{
    id: "moly",
    sourceType: "item",
    action: "consider",
  },
{
    id: "oscillate_oil",
    sourceType: "item",
    action: "consider",
  },
{
    id: "tanglebrag",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_impulse.png",
  },
  {
    id: "memory_intuition",
    displayName: {
      en: "Memory: Intuition",
      zh: "回忆：直觉",
    },
    description: {
      en: "You just know, you know?",
      zh: "你就是明白，你明白吗？",
    },
    principles: [
      { id: "moon", amount: 2 },{ id: "rose", amount: 2 }
    ],
    sources: [{
    id: "umbrous_oil",
    sourceType: "item",
    action: "consider",
  },
{
    id: "ichor_auroral",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_intuition.png",
  },
  {
    id: "memory_loss",
    displayName: {
      en: "Memory: Loss",
      zh: "回忆：失落",
    },
    description: {
      en: "Whatever it was, now it isn't.",
      zh: "无论曾经为何，它都不复从前。",
    },
    principles: [
      { id: "edge", amount: 1 },{ id: "winter", amount: 1 }
    ],
    sources: [{
    text:{
      en: "Renouncing objects at: Sea's Edge | Loading Dock Crane | Brancrug Boathouse",
      zh: "将物品扔进海里。"
    },
    sourceType: "text",
    action: "activity",
  }],
    type: "temporary",
    icon: "/memories/memory_loss.png",
  },
  {
    id: "memory_pattern",
    displayName: {
      en: "Memory: Pattern",
      zh: "回忆：典范",
    },
    description: {
      en: "Something fits just right.",
      zh: "恰到好处之事。",
    },
    principles: [
      { id: "forge", amount: 1 },{ id: "knock", amount: 2 }
    ],
    sources: [
{
    id: "chronsichord",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_pattern.png",
  },
  {
    id: "memory_regret",
    displayName: {
      en: "Memory: Regret",
      zh: "回忆：悔恨",
    },
    description: {
      en: "Every choice has its shadow.",
      zh: "每重选择皆有其影。",
    },
    principles: [
      { id: "forge", amount: 1 },{ id: "winter", amount: 2 }
    ],
    sources: [
    {
    id: "acrid_marrow",
    sourceType: "item",
    action: "consider",
  },{
    id: "amethyst_ampoule",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "basket_leeks",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "basket_onions",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "curious_seashell",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "dearday_lens",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "flushed_mommet",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "glassfinger_toxin",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "mushroom_meringue",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "salt_sign",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "snowflake_candle",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "wire_orichalcum",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "wire_silver",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "wormy_pumpkin",
    sourceType: "item",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_regret.png",
  },
  {
    id: "memory_revelation",
    displayName: {
      en: "Memory: Revelation",
      zh: "回忆：启示",
    },
    description: {
      en: "Some truths come to us from outside, or above.",
      zh: "有些真相是我们从外面，或从上面得知的。",
    },
    principles: [
      { id: "lantern", amount: 2 }],
    sources: [
{
    id: "atlantic_amber",
    sourceType: "item",
    action: "consider",
  },
{
    id: "aglaophotis_scented_candle",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "refulgin",
    sourceType: "craftable",
    action: "consider",
  },
{
    id: "xanthotic_essence",
    sourceType: "craftable",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_revelation.png",
  },
  {
    id: "memory_salt",
    displayName: {
      en: "Memory: Salt",
      zh: "回忆：盐",
    },
    description: {
      en: "Sea-spray, depth-sorrow.",
      zh: "海上薄雾，渊洋之殇。",
    },
    principles: [
      { id: "knock", amount: 1 },{ id: "moon", amount: 1 },{ id: "winter", amount: 1 }],
    sources: [
{
    id: "sand",
    sourceType: "item",
    action: "consider",
  },
{
    id: "whispering_sand",
    sourceType: "item",
    action: "consider",
  },
{
    id: "widows_candle",
    sourceType: "item",
    action: "consider",
  },
{
    text: {en: "Swimming at Sea's Edge.", zh: "可通过在海崖游泳（消耗健康卡）获得。"},
    sourceType: "text",
    action: "activity",
  }],
    type: "temporary",
    icon: "/memories/memory_salt.png",
  },
  {
    id: "memory_satisfaction",
    displayName: {
      en: "Memory: Satisfaction",
      zh: "回忆：满足",
    },
    description: {
      en: "Some appetites are easier to satisfy than others.",
      zh: "有些欲望比其他的更容易满足。",
    },
    principles: [
      { id: "grail", amount: 2 },{ id: "heart", amount: 1 }],
    sources: [
{
    id: "sly_alembic",
    sourceType: "item",
    action: "consider",
  },
{
    id: "chalice_candle",
    sourceType: "craftable",
    action: "consider",
  },
{
    text: {en: "*Most dishes grants satisfaction.", zh: "*大部分可制作菜品消耗后可获得回忆：满足。"},
    sourceType: "text",
    action: "consider",
  }],
    type: "temporary",
    icon: "/memories/memory_satisfaction.png",
  },
  {
    id: "memory_scent",
    displayName: {
      en: "Memory: Scent",
      zh: "回忆：气味",
    },
    description: {
      en: "Green scents recall rain.",
      zh: "绿茵之香让人想起雨水。",
    },
    principles: [
      { id: "nectar", amount: 1 }],
    type: "temporary",
    sources: [
      //not distroying
      {id: "paradise_palm",
        sourceType: "item",
        action: "consider"
      },
      {id: "red_practice_sword",
        sourceType: "item",
        action: "consider"
      },
      //flowers
      {id: "aglaophotis",
        sourceType: "item",
        action: "consider"
      },
      {id: "blue_crown",
        sourceType: "item",
        action: "consider"
      },
      {id: "catsclaw",
        sourceType: "item",
        action: "consider"
      },
      {id: "evas_locks",
        sourceType: "item",
        action: "consider"
      },
      {id: "fragrant_chalice",
        sourceType: "item",
        action: "consider"
      },
      {id: "healing_herb",
        sourceType: "item",
        action: "consider"
      },
      {id: "honeyscar_jasmine",
        sourceType: "item",
        action: "consider"
      },
      {id: "lenten_rose",
        sourceType: "item",
        action: "consider"
      },
      {id: "moth_orchid",
        sourceType: "item",
        action: "consider"
      },
      {id: "sea_holly",
        sourceType: "item",
        action: "consider"
      },
      {id: "trumpeters_lily",
        sourceType: "item",
        action: "consider"
      },
      //plants
      {id: "potted_avidity",
        sourceType: "item",
        action: "consider"
      },
      {id: "potted_bamboo",
        sourceType: "item",
        action: "consider"
      },
      {id: "pot_of_malachite_daisies",
        sourceType: "item",
        action: "consider"
      },
      {id: "potted_tree",
        sourceType: "item",
        action: "consider"
      },
      {id: "potted_pink_orchid",
        sourceType: "item",
        action: "consider"
      },
      {id: "potted_white_orchid",
        sourceType: "item",
        action: "consider"
      },
      {id: "watchful_potted_plant",
        sourceType: "item",
        action: "consider"
      },
      {id: "shadowless_silk",
        sourceType: "item",
        action: "consider"
      },
      {id: "vase_of_roses",
        sourceType: "item",
        action: "consider"
      },
      //vegetables
      {id: "pumpkin",
        sourceType: "item",
        action: "consider"
      },
      {id: "pyrus_auricalcinus",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "sack_of_vegetables",
        sourceType: "item",
        action: "consider"
      },
      //inks
      {id: "ashartine",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "asimel",
        sourceType: "craftable",
        action: "consider"
      },
       {id: "catwink",
        sourceType: "craftable",
        action: "consider"
      },      
      {id: "encaustum_terminale_marakat",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "encaustum_terminale_nillycant",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "encaustum_terminale_orpiment_exultant",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "encaustum_terminale_porphyrine",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "encaustum_terminale_uzult",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "houndsgall",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "perhibiate",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "stargall_ink",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "yewgall_ink",
        sourceType: "craftable",
        action: "consider"
      },
      //drinks
      {id: "ch_second_flush_assam_packet",
        sourceType: "item",
        action: "consider"
      },
      {id: "dawnlion_coffee_packet",
        sourceType: "item",
        action: "consider"
      },
      {id: "evening_isles_coffee_packet",
        sourceType: "item",
        action: "consider"
      },
      {id: "trn_cocoa",
        sourceType: "item",
        action: "consider"
      },
      //others
    {id: "ambergris_chunk",
        sourceType: "item",
        action: "consider"
      },
      {id: "beeswax",
        sourceType: "item",
        action: "consider"
      },
    ],
    icon: "/memories/memory_scent.png",
  },
  {
    id: "memory_sight",
    displayName: {
      en: "Memory: Sight",
      zh: "回忆：景象",
    },
    description: {
      en: "The eye sees more than the heart knows.",
      zh: "“眼见胜于心知。” ——布雷克",
    },
    principles: [
      { id: "lantern", amount: 1 }],
    type: "temporary",
    sources: [
      {text: 
        {en: "Obtained by considering various objects in Hush House (nearly any work of art, among others). This ledger has more pressing matter to do than listing them all.",
        zh: "研究居屋中很多物件都可产生此卡片，尤其是家具与艺术品。本账本暂不列出。"},
    sourceType: "text",
    action: "consider"
  }],
    icon: "/memories/memory_sight.png",
  },
   {
    id: "memory_solace",
    displayName: {
      en: "Memory: Solace",
      zh: "回忆：慰藉",
    },
    description: {
      en: "Peace after trouble.	",
      zh: "化险为夷。",
    },
    principles: [
      { id: "heart", amount: 2 },{ id: "sky", amount: 1 }
    ],
    sources: [
      {id: "bedside_candleholder",
        sourceType: "item",
        action: "consider"
      },
      {id: "canned_ham",
        sourceType: "item",
        action: "consider"
      },
      {id: "blackberry_jam",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "gideons_soaks",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "basket_vegetables",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "dark_marrow",
        sourceType: "craftable",
        action: "consider"
      },
      {id: "golden_marrow",
        sourceType: "craftable",
        action: "consider"
      }
    ],
    type: "temporary",
    icon: "/memories/memory_solace.png",
  },
  {
    id: "memory_sound",
    displayName: {
      en: "Memory: Sound",
      zh: "回忆：声音",
    },
    description: {
      en: "A memory lasts longer than an echo. Of course when Speech came into the world, and we could cast echoes into words, things got more complicated.",
      zh: "回忆比回声更持久。当然，当言辞进入世界，我们可以用语言把回声变成词语时，事情就变得更复杂了。",
    },
    principles: [
      { id: "heart", amount: 1 }],
      sources: [
        //All not consuming
        {id: "chair_of_challenges",
          sourceType: "item",
          action: "consider"
        },
        {id: "terrence_the_chicken",
          sourceType: "animal",
          action: "consider"
        },
        {id: "tuppence_the_other_chicken",
          sourceType: "animal",
          action: "consider"
        },
        {id: "magnificent_green_cockatoo",
          sourceType: "animal",
          action: "consider"
        },
        {id: "outsized_egg",
          sourceType: "item",
          action: "consider"
        },
        {id: "pet_gull",
          sourceType: "animal",
          action: "consider"
        },
        {id: "hush_house_key",
          sourceType: "item",
          action: "consider"
        },
        {id: "mazarine_fife",
          sourceType: "craftable",
          action: "consider"
        },
        {id: "chaise_longue_of_conclusions",
          sourceType: "item",
          action: "consider"
        },
        {id: "dappled_practice_sword",
          sourceType: "item",
          action: "consider"
        },
        {id: "dappled_quarterstaff",
          sourceType: "item",
          action: "consider"
        },
      ],
    type: "temporary",
    icon: "/memories/memory_sound.png",
  },
  {
    id: "memory_storm",
    displayName: {
      en: "Memory: Storm",
      zh: "回忆：风暴",
    },
    description: {
      en: "There are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
      zh: "世上有足以撼动天上月亮、动摇颅中思想的风暴。",
    },
    principles: [
      { id: "heart", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "temporary",
    icon: "/memories/memory_storm.png",
  },
  {
    id: "memory_taste",
    displayName: {
      en: "Memory: Taste",
      zh: "回忆：滋味",
    },
    description: {
      en: "Every sweet has its sour.",
      zh: "“每种甜蜜都有其酸涩。”——爱默生",
    },
    principles: [
      { id: "grail", amount: 1 }],
    type: "temporary",
    sources: 
    [{
      text: {en: "Most food and drinks.", zh: "*各种吃的喝的70余项，不列了。"},
      sourceType: "text",
      action: "consider"
    }],
    icon: "/memories/memory_taste.png",
  },
  {
    id: "memory_touch",
    displayName: {
      en: "Memory: Touch",
      zh: "回忆：触感",
    },
    description: {
      en: "Craft is learnt through the tips of the fingers.",
      zh: "手艺唯有通过指尖的触碰方能学习。",
    },
    principles: [
      { id: "forge", amount: 1 }],
      sources: [
        {text: {en: "Obtained by considering various objects in Hush House (most comforts), without consuming them",zh: "研究居屋中大量物品都可获得回忆：触感，包括大部分家具。它们不会被消耗。"},
          sourceType: "text",
          action: "consider"}],
    type: "temporary",
    icon: "/memories/memory_touch.png",
  },
  {
    id: "nameday_riddle",
    displayName: {
      en: "Nameday Riddle",
      zh: "命名日之谜",
    },
    description: {
      en: "A deceptively intricate riddle that might just teach us who we really are. Gervinus van Lauren was notoriously fond of these.",
      zh: "一则看似复杂的谜语，也许能告诉我们我们到底是谁。格维努斯·范·劳伦出了名的喜欢这些。",
    },
    principles: [
      {id: "knock", amount: 2 },{ id: "moth", amount: 3 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 10,
        },
        skills: ["edicts_liminal","rites_of_the_roots","sacra_limiae","solutions_n_separations","weaving_n_knotworking"],
      }],
    icon: "/memories/nameday_riddle.png",
  },
  {
    id: "old_moment",
    displayName: {
      en: "Old Moment",
      zh: "旧日时刻",
    },
    description: {
      en: "You've had them too; those moments when we seem to look out at the world through another's eyes. What if those moments were real?",
      zh: "你也曾体验过它们；那些我们似乎在以他者的眼睛观察世界的时刻。如果那些时刻是真实存在的呢？",
    },
    principles: [
      {id: "lantern", amount: 2 },{ id: "moth", amount: 2 },{ id: "scale", amount: 4 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 10,
        },
        skills: ["disciplines_of_the_scar"],
      },
    {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: ["coil_n_chasm","horns_n_ivories","path_n_pilgrim","wolf_stories"],
      }],
  sources: [
  {
    id: "black_dove_wine",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "cuckoo_honey",
    sourceType: "item",
    action: "consider",
  },
  {
    id: "essential_periost",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "serpent_milk",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "year_tally",
    sourceType: "craftable",
    action: "consider",
  },
  {
    id: "living_relic",
    sourceType: "craftable",
    action: "conversation",
  },
],
    evolveVia:["preservation"],
    icon: "/memories/old_moment.png",
  },
  {
    id: "savage_hymn",
    displayName: {
      en: "Savage Hymn",
      zh: "野蛮颂歌",
    },
    description: {
      en: "A music that urges valour and violence.",
      zh: "一段能唤起勇气与狂热的音乐。",
    },
    principles: [
      {id: "scale", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 5,
        },
        skills: ["drums_n_dances"],
      },
    {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 5,
        },
        skills: ["stone_stories","drums_n_dances"],
      }],
    icon: "/memories/savage_hymn.png",
  },
  {
    id: "secret_threshold",
    displayName: {
      en: "Secret Threshold",
      zh: "秘密门关",
    },
    description: {
      en: "It's not easy to draw our own doors, but it's not impossible.",
      zh: "绘制我们自己的门绝非易事，但也并非不可能。",
    },
    principles: [
      {id: "knock", amount: 2 },{ id: "rose", amount: 1 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 5,
        },
        skills: ["door_n_wall","preliminal_meter","edicts_liminal","horns_n_ivories"],
      }],
    icon: "/memories/secret_threshold.png",
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
    principles: [
      {id: "grail", amount: 1 },{ id: "heart", amount: 4 },{ id: "scale", amount: 1 }
    ],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: ["drums_n_dances","strings_n_songs"],
        requires: ["instrument"]
      }],
      sources: [{
    id: "january_sanguinary",
    sourceType: "craftable",
    action: "consider",
  }],
  evolveVia: ["preservation"],
  icon: "/memories/thunderskins_paean.png",
  },
  {
    id: "torgues_cleansing",
    displayName: {
      en: "Torgue's Cleansing",
      zh: "图格的净化术",
    },
    description: {
      en: "The librarian Natalia Brulleau learnt this powerful - if unpleasant - technique from the priest and Edge-long, Reverend Torgue.",
      zh: "图书管理员纳塔莉娅·布鲁洛夫从教士兼刃之长生者图格牧师那儿学到了这种强大——尽管并不令人愉快的技巧。",
    },
    principles: [{ id: "edge", amount: 2 }],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 5,
        },
        skills: ["auroral_contemplations","disciplines_of_the_scar","meniscate_reflections","sharps"]
      },
    {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["purifications_n_exaltations"]}],
    type: "temporary",
    icon: "/memories/torgues_cleansing.png",
  },
  {
    id: "wild_surmise",
    displayName: {
      en: "Wild Surmise",
      zh: "狂热猜度",
    },
    description: {
      en: "'Eyes open, skies open!'	",
      zh: "“双眼睁大，天穹辽阔！”",
    },
    principles: [{id: "lantern", amount: 3 },{id: "moth", amount: 3 },{id: "sky", amount: 3 }],
    sources:[
      {id: "historywax_candle",
sourceType: "craftable",
action: "consider"
      }],
      evolveVia: ["ithastry"],
    type: "temporary",
      icon: "/memories/wild_surmise.png",
  },
  {
    id: "wind_rumour",
    displayName: {
      en: "Wind-Rumour",
      zh: "风之流言",
    },
    description: {
      en: "'If the cloud were a canvas, who spread it? If the sky were a sheet, who knotted it?' A Wind-Rumour is an auspice found in the sky by those who look too long, interpretable only by the wise.",
      zh: "“如果云朵是一片画布，是谁把它铺展？如果天空是一面帆篷，是谁把它结起？”风之流言是藏匿于空中的吉兆，长久注视天空的人能察觉，但唯有智者才能解读。",
    },
    principles: [{id: "heart", amount: 1 },{id: "sky", amount: 2 }],
    type: "temporary",
    sources: [
      {id: "pet_gull",
        sourceType: "animal",
        action: "conversation"
      }
    ],
  evolveVia: ["birdsong"],
  icon: "/memories/wind_rumour.png",
  },
  {
    id: "winning_move",
    displayName: {
      en: "Winning Move",
      zh: "致胜之着",
    },
    description: {
      en: "Those who've studied the Hours of the Edge often say the world is a war - the Corrivality. Every event that might happen differently is a battle in that war, a contention between alternate outcomes. The Wisdoms can sometimes show those battles might be won.",
      zh: "那些研习刃之司辰的人常说世界是一场战争——角争。每一个可能以不同方式发生的事件都是那场战争中的一场战斗，是可能的不同结果间的斗争。诸般智慧有时会展示这些战斗可能如何被赢得。",
    },
    principles: [{id: "edge", amount: 3 }],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 10,
        },
        skills: ["auroral_contemplations","disciplines_of_the_hammer","meniscate_reflections","ragged_crossroads","sharps"],
        requires: ["memory"]
      }],
  evolveVia: ["illumination"],
  icon: "/memories/winning_move.png",
  },
  {
    id: "wistful_air",
    displayName: {
      en: "Wistful Air",
      zh: "怅惘曲调",
    },
    description: {
      en: "A half-sorrowful music of half-pleasant longing.",
      zh: "半悦渴慕的半悲乐音。",
    },
    principles: [{id: "rose", amount: 2 },{id: "sky", amount: 2 },],
    type: "temporary",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["bells_n_brazieries","sky_stories","strings_n_songs","ouranoscopy","watchmans_paradoxes"]
      }],
      icon: "/memories/wistful_air.png",
  },
  {
    id: "ascendant_harmony",
    displayName: {
      en: "Ascendant Harmony",
      zh: "方兴和声",
    },
    description: {
      en: "A bright and ringing music which evokes the blue sweep of the lower heavens.",
      zh: "一段明快且响亮的音乐，唤起了下层天界的蔚蓝天穹。",
    },
    principles: [
      { id: "lantern", amount: 2 },{ id: "sky", amount: 4 }
    ],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["applebright_euphonies","bells_n_brazieries","furs_n_feathers","purifications_n_exaltations","sky_stories","strings_n_songs"],
        requires: ["instrument"]
      }
    ],
    evolveVia: ["birdsong"],
    icon: "/memories/ascendant_harmony.png",
  },
  {
    id: "curious_hunch",
    displayName: {
      en: "Curious Hunch",
      zh: "罕奇直觉",
    },
    description: {
      en: "A sudden unlikely certainty.",
      zh: "一种突然而未然的确然。",
    },
    principles: [
      { id: "heart", amount: 3 },{ id: "knock", amount: 4 },{ id: "lantern", amount: 3 },{ id: "moth", amount: 3 },
    ],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["preliminal_meter","the_great_signs_n_the_great_scars"],
        requires: ["memory"]
      }
    ],
    evolveVia: ["nyctodromy"],
    icon: "/memories/curious_hunch.png",
  },
  {
    id: "didumos",
    displayName: {
      en: "Didumos",
      zh: "孪星降梦",
    },
    description: {
      en: "No Star is permitted upon Earth, but we may cozen them to dream of us, and the Dream of a Star may take a kind of form, which we call didumos.\n~ Thomas Dewulf	",
      zh: "“星辰不许现于大地之上，但我们或可将其诱入我们梦中。星辰之梦许会以一种形式出现，我们称之为孪星降梦。”——托马斯·德沃尔夫",
    },
    principles: [
      { id: "knock", amount: 3 },{ id: "lantern", amount: 3 },{ id: "sky", amount: 6 },{ id: "winter", amount: 3 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: ["applebright_euphonies","bells_n_brazieries","ouranoscopy","sacra_limiae","sights_n_sensations"],
        requires: ["ascendant_harmony"]
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["ouranoscopy"],
        requires: ["asimel"]
      },
    ],
    evolveVia: ["horomachistry", "hushery"],
    icon: "/memories/didumos.png",
  },
  {
    id: "earthquake_name",
    displayName: {
      en: "Earthquake Name",
      zh: "震灾之名",
    },
    description: {
      en: "Everything comes when it is called - even the nightmares that trouble stone's deep sleep.",
      zh: "世间万物唤名皆至——哪怕烦扰岩石深眠的梦魇亦是如此。",
    },
    principles: [
      { id: "forge", amount: 3 },{ id: "scale", amount: 6 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["disciplines_of_the_scar"],
        requires: ["old_moment"]
      },
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 15,
        },
        skills: ["coil_n_chasm","hill_n_hollow","stone_stories","wolf_stories"],
        requires: ["old_moment"]
      },
    ],
    evolveVia: ["ithastry","skolekosophy"],
    icon: "/memories/earthquake_name.png",
  },
  {
    id: "earth_sign",
    displayName: {
      en: "Earth-Sign",
      zh: "大地之兆",
    },
    description: {
      en: "'In the Tracks of Beasts, in the Convolutions of his own Carapace, in Egg-vein and Shell-shadow, the Many-Eyed One found the Signs which can be History.' An Earth-Sign is an auspice traced on the cloaked shape of the earth, perceptible to the sensitive, interpreted only by the wise.",
      zh: "“于野兽的踪迹里，于他自身介壳的沟回中，于卵之脉与壳之影，多目者发现了那可为历史之兆。”大地之兆是刻画在大地上的吉兆，敏感的人能察觉，但唯有智者才能解读。",
    },
    principles: [
      { id: "nectar", amount: 2 },
    ],
    type: "persistent",
    evolveVia: ["skolekosophy"],
    icon: "/memories/earth_sign.png",
  },
  {
    id: "enduring_reflection",
    displayName: {
      en: "Enduring Reflection",
      zh: "弥久映像",
    },
    description: {
      en: "Refine what is; recall what remains.",
      zh: "精炼现有；唤回余留。",
    },
    principles: [
      { id: "heart", amount: 1 },{ id: "knock", amount: 1 },{ id: "rose", amount: 3 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "rose",
          amount: 10,
        },
        skills: ["path_n_pilgrim","pearl_n_tide","preliminal_meter","sky_stories"],
        requires: ["memory"]
      }
    ],
    evolveVia: ["nyctodromy"],
    icon: "/memories/enduring_reflection.png",
  },
  {
    id: "forbidden_epic",
    displayName: {
      en: "Forbidden Epic",
      zh: "禁断的史诗",
    },
    description: {
      en: "'The attention of the Hours is drawn to the bloodiest wars. Afterwards, the Histories are braided like hair.'",
      zh: "“众司辰被最为血腥的战争吸引了注意。而后，重重历史被编结如发辫。”",
    },
    principles: [
      { id: "edge", amount: 6 },{ id: "moon", amount: 4 },{ id: "rose", amount: 4 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["edicts_martial"],
        requires: ["confounding_parable"]
      }
    ],
    evolveVia: ["birdsong","horomachistry"],
    icon: "/memories/forbidden_epic.png",
  },
  {
    id: "hives_lament",
    displayName: {
      en: "Hive's Lament",
      zh: "蜂巢挽歌",
    },
    description: {
      en: "A song of pragmatic sorrow.",
      zh: "一首务实哀伤之歌。",
    },
    principles: [
      { id: "moth", amount: 2 },{ id: "nectar", amount: 4 },{ id: "winter", amount: 2 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: ["drums_n_dances"],
        requires: ["instrument"]
      }
    ],
    sources:[{id: "perilous_imago", sourceType: "animal", action: "conversation"}],
    evolveVia: ["the_bosk"],
    icon: "/memories/hives_lament.png",
  },
  {
    id: "horizon_sight",
    displayName: {
      en: "Horizon-Sight",
      zh: "极目远眺",
    },
    description: {
      en: "'On a clear autumn day, the story goes, you can see Ys from the Watchman's Tower. I don't know whether that's true. But on a clear day in Numa… you would see the City Unbuilt.'\n~ Dr Brian Levinsen	",
      zh: "“传说，如果在晴朗的秋日站在守夜人塔的塔顶眺望远方，就能看到伊苏。我不知道那是真是假，但若是在闰时的晴日这样做……你就会看见那未建之城。”——布莱恩·莱文森博士",
    },
    principles: [
      { id: "rose", amount: 4 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "rose",
          amount: 15,
        },
        skills: ["path_n_pilgrim","preliminal_meter","sand_stories","sky_stories"],
        requires: ["enduring_reflection"]
      }
    ],
    sources:[{id: "gervinite", sourceType: "craftable", action: "consider"},
      {id: "walls_of_ys", sourceType: "craftable", action: "consider"},
      {id: "stymphling", sourceType: "animal", action: "conversation"}],
    evolveVia: ["hushery"],
    icon: "/memories/horizon_sight.png",
  },
  {
    id: "invincible_audacity",
    displayName: {
      en: "Invincible Audacity",
      zh: "无敌勇莽",
    },
    description: {
      en: "A general says: when I make the right choice, I win. An Illuminate says: when I win, I determine which choice was the right one.\n~ Natalia Brulleau",
      zh: "“一位将军说：当我做对了选择，我就能获胜。而照明学家会说：当我获胜，我就能确定哪个选择是对的。”——纳塔莉娅·布鲁洛夫",
    },
    principles: [
      { id: "edge", amount: 6 },{ id: "forge", amount: 3 },{ id: "lantern", amount: 3 }],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "edge",
          amount: 15,
        },
        skills: ["auroral_contemplations","disciplines_of_the_hammer","edicts_martial"],
        requires: ["winning_move"]
      }],
    evolveVia: ["illumination","ithastry"],
    icon: "/memories/invincible_audacity.png",
  },
  {
    id: "occult_scrap",
    displayName: {
      en: "Occult Scrap",
      zh: "密教残篇",
    },
    description: {
      en: "Secret histories are layered beneath the one we know, like the notes in rare wine. The Librarian knows this well.",
      zh: "隐秘的历史被掩盖于我们所知的历史之下，就像珍贵红酒的气味。而图书管理员精善此道。",
    },
    principles: [
      { id: "knock", amount: 2 },{ id: "moth", amount: 2 },{ id: "rose", amount: 2 }
    ],
    sources: [
      {id: "yellowing_newspaper",
        sourceType: "item",
        action: "consider"
      },
      {text: 
        {en: "Adding Visitors to the Writing-Case (only once per visitor)",
        zh: "可通过将访客给予的名片加入名片夹获得；"},
        sourceType: "text",
        action: "activity"
      },
      {text: 
        {en: "Presenting Lt Arthur Thomas Moore (Ret.) with The Sun's Design (only once).",
        zh: "可通过与亚瑟·托马斯·摩尔中尉（已退役）交流《太阳的宏图》获得（仅一次）；"},
        sourceType: "text",
        action: "activity"
      },
      {text: 
        {en: "Hosting a Salon with 'Daymare' and Mrs and Mr Kille or with Dr Arun Peel and Princess Coquille Amirejibi.",
        zh: "主持一场沙龙，受邀人包含日魇和基尔夫妇，或者阿伦·剥皮和科基尔·阿米雷吉比公主，可获得该卡片。"},
        sourceType: "text",
        action: "activity"
      }
    ],
    type: "persistent",
    evolveVia: ["horomachistry"],
    icon: "/memories/occult_scrap.png",
  },
  {
    id: "old_wound",
    displayName: {
      en: "Old Wound",
      zh: "古老创伤",
    },
    description: {
      en: "The wound is visible; the pain is not.",
      zh: "伤口易见，苦痛不然。",
    },
    principles: [
      { id: "edge", amount: 1 },{ id: "moon", amount: 2 },{ id: "winter", amount: 3 }
    ],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["edicts_martial"],
      },
    ],
    icon: "/memories/old_wound.png",
  },
  {
    id: "wind_in_waiting",
    displayName: {
      en: "Wind-in-Waiting",
      zh: "静待之风",
    },
    description: {
      en: "'When the sun was redder, when the world was softer, and the Thirty ruled the sky… the winds were better neighbours.'",
      zh: "“太阳曾经更殷红，世界曾经更柔软，而那时卅者仍主宰着天穹……那时风也更宜作伴。”",
    },
    principles: [
      { id: "grail", amount: 3 },{ id: "moth", amount: 3 },{ id: "scale", amount: 3 },{ id: "sky", amount: 6 }
    ],
    evolveVia: ["birdsong","the_bosk"],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: ["furs_n_feathers","sacra_solis_invicti","sky_stories","strings_n_songs"],
        requires: ["mazarine_fife"]
      },
    ],
    icon: "/memories/wind_in_waiting.png",
  },
  {
    id: "wormwood_dream",
    displayName: {
      en: "Wormwood Dream",
      zh: "苦艾之梦",
    },
    description: {
      en: "If there are laws which apply only in dream - then it must also be that there are crimes which can only be committed there.",
      zh: "如果有只适用于梦中的法则——就一定有只能在梦中犯下的罪业。",
    },
    principles: [{ id: "edge", amount: 3 },{ id: "moon", amount: 6 },{ id: "winter", amount: 6 }],
    evolveVia: ["nyctodromy","skolekosophy"],
    type: "persistent",
    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: ["edicts_martial"],
        requires: ["memory"]
      },
      {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: ["edicts_inviolable","rhymes_n_rememberances","sickle_n_eclipse","snow_stories","wolf_stories"],
        requires: ["stymphling"]
      },
    ],
    icon: "/memories/wormwood_dream.png",
  },
  {
    id: "numen_a_final_understanding",
    displayName: {
      en: "Numen: a Final Understanding",
      zh: "闰识：终焉之悟",
    },
    description: {
      en: "Eternity and History cannot be reconciled. Freedom cannot be perfection - not unless we understand the paradox of the eternal ending. And only in certain Histories is that paradox possible...\n[Any Librarian can use this to establish a History and complete the game - but the Magnate can use it to win a particular victory.]",
      zh: "永恒与历史不可调和。自由与完美无法并立——除非我们能参透永恒终结的悖论，且只在特定的历史中此悖论才可能成真……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但富豪可以用它赢得特殊胜利。]",
    },
    principles: [
      { id: "rose", amount: 5 },{ id: "sky", amount: 5 },{ id: "winter", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_a_final_understanding.png",
  },
  {
    id: "numen_an_irresistible_feast",
    displayName: {
      en: "Numen: an Irresistible Feast",
      zh: "闰识：销魂盛宴",
    },
    description: {
      en: "The Hours are bound by their own edicts - even the Chancel and the Calyptra. That's why their deepest rules are secret. In certain Histories, if we know those deepest rules, we know what even the Chancel and the Calyptra may not do.\n[Any Librarian can use this to establish a History and complete the game - but the Revolutionary can win a particular victory.]",
      zh: "当巨龙吞噬司辰的尸身之际，正是此等饥饿使它们蜕化为了蠕虫。要是没有介壳种的滋味之秘，它们的饥饿将永不满足。在特定的历史中，那滋味之秘依旧具有力量……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但艺术家可以用它赢得特殊胜利。]",
    },
    principles: [
      { id: "edge", amount: 5 },{ id: "grail", amount: 5 },{ id: "nectar", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_an_irresistible_feast.png",
  },
  {
    id: "numen_back_into_balance",
    displayName: {
      en: "Numen: Back Into Balance",
      zh: "闰识：重返平衡",
    },
    description: {
      en: "When the travelling Carapace-kinds passed beyond the wave and the sky, they made arrangements for their return. There are Histories where those arrangements might be invoked...\n[Any Librarian can use this to establish a History and complete the game - but the Executioner and the Revolutionary can win a particular victory.]",
      zh: "远行的介壳诸族在飞越波涛与天空时便为自己的回归做了准备。有些历史或许能唤起这些准备……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但处刑者与革命家可以赢得特殊胜利。]",
    },
    principles: [
      { id: "heart", amount: 5 },{ id: "sky", amount: 5 },{ id: "winter", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_back_into_balance.png",
  },
  {
    id: "numen_inescapable_confinement",
    displayName: {
      en: "Numen: Inescapable Confinement",
      zh: "闰识：永陷囹圄",
    },
    description: {
      en: "Everything ultimately comes down to a choice between Eternity and History. There's only one place you're safe from both, and it's a not a place anyone would want to be. It's a prison that only exists in certain histories... \n[Any Librarian can use this to establish a History and complete the game - but the Prodigal and the Archaeologist can win a particular victory.]",
      zh: "万事万物最终都可归结于永恒与历史间的抉择。只有一处地方可以令你免受二者的威胁，而那可不是个谁都乐意待的去处。那是一座只存在于特定历史中的监牢……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但浪子与考古学家可以赢得特殊胜利。]",
    },
    principles: [
      { id: "knock", amount: 5 },{ id: "scale", amount: 5 },{ id: "winter", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_inescapable_confinement.png",
  },
  {
    id: "numen_loopholes",
    displayName: {
      en: "Numen: Loopholes",
      zh: "闰识：永恒罅隙",
    },
    description: {
      en: "When Eternity came into the world, certain prudent powers arranged loopholes: the House of the Moon, the persistence of possibility, the right to vengeance. In the right Histories, those loopholes will open again... \n[Any Librarian can use this to establish a History and complete the game - but the Twice-Born can win a particular victory.]",
      zh: "当永恒降临世间，某些谨慎的神灵布下了罅隙：月亮的居屋，机会的存续，复仇的权利。在恰当的历史中，这些罅隙将再度开启。\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但二度降生者可以赢得特殊胜利。]",
    },
    principles: [
      { id: "knock", amount: 5 },{ id: "moon", amount: 5 },{ id: "moth", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_loopholes.png",
  },
  {
    id: "numen_merciless_alteration",
    displayName: {
      en: "Numen: Merciless Alteration",
      zh: "闰识：无情变革",
    },
    description: {
      en: "The fundamental flaw; the irresistible shortcut; the hate that heats; the change that mars; the scar that opens. These are the foulest Histories.\n[Any Librarian can use this to establish a History and complete the game - but the Artist and the Archaeologist can win a particular victory.]",
      zh: "根本的缺陷；诱人的捷径；高涨的憎恶；破坏的变化；绽开的伤疤。这些便是最为恶劣肮脏的历史。\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但艺术家与考古学家可以赢得特殊胜利。]",
    },
    principles: [
      { id: "edge", amount: 5 },{ id: "forge", amount: 5 },{ id: "grail", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_merciless_alteration.png",
  },
  {
    id: "numen_that_old_lost_music",
    displayName: {
      en: "Numen: That Old Lost Music",
      zh: "闰识：失落古调",
    },
    description: {
      en: "In the right Histories, every song ever sung still lingers in wind and echo, untouched by the demands of Eternity… \n[Any Librarian can use this to establish a History and complete the game - but the Symurgist and the Magnate can win a particular victory.]",
      zh: "在恰当的历史中，每首曾被吟唱过的歌谣都依旧流连于风与回响中，未被永恒的索求侵扰……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但鸟慧者与富豪可以赢得特殊胜利。]",
    },
    principles: [
      { id: "rose", amount: 5 },{ id: "scale", amount: 5 },{ id: "sky", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_that_old_lost_music.png",
  },
  {
    id: "numen_the_bells_of_ys",
    displayName: {
      en: "Numen: the Bells of Ys",
      zh: "闰识：伊苏之钟",
    },
    description: {
      en: "Ys, by her arts, found the strike-tone that shakes the Hours. For this reason among many of the Hours discourage traffic with Ys. But a bell cast with this secret could speak the Ys-note...\n[Any Librarian can use this to establish a History and complete the game - but The Prodigal and the Revolutionary can win a particular victory.]",
      zh: "伊苏，她用她的技艺找到了可以震颤司辰的钟鸣。出于诸多原因，尤其是这一点，众司辰阻碍着与伊苏的往来。然而由这一秘密浇铸而成的钟将能发出伊苏的鸣响……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但浪子与革命者可以赢得特殊胜利。]",
    },
    principles: [
      { id: "edge", amount: 5 },{ id: "forge", amount: 5 },{ id: "rose", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_the_bells_of_ys.png",
  },
  {
    id: "numen_the_great_counterfeit",
    displayName: {
      en: "Numen: the Great Counterfeit",
      zh: "闰识：欺世赝身",
    },
    description: {
      en: "The Sun-in-Splendour and the Forge of the Days could not be joined. But Sunset Celia and the Swan King could. This secret is the trick of it. \n[Any Librarian can use this to establish a History and complete the game - but the Twice-Born can win a particular victory.]",
      zh: "骄阳与白日铸炉不可结合，但日落西莉亚与天鹅王可以。此秘密便是上述的诡计。\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但二度降生者可以赢得特殊胜利。]",
    },
    principles: [
      { id: "lantern", amount: 5 },{ id: "moon", amount: 5 },{ id: "nectar", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_the_great_counterfeit.png",
  },
  {
    id: "numen_the_paths_of_the_sun",
    displayName: {
      en: "Numen: the Paths of the Sun",
      zh: "闰识：日之道途",
    },
    description: {
      en: "The Sun has charted his Paths - paths beyond walls and woods and Bounds. When the Sun lights our way, when we are ready, all of us will enter Eternity - at least, in the right History...\n[Any Librarian can use this to establish a History and complete the game - but the Cartographer and the Twice-Born can win a particular victory.]",
      zh: "太阳已开辟其道途——那越过围墙与丛林与边境的道途。当太阳照亮我等的道路，当我等就绪之时，我们都将步入永恒——至少，在恰当的历史中如此……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但制图师与二度降生者可以赢得特殊胜利。]",
    },
    principles: [
      { id: "forge", amount: 5 },{ id: "knock", amount: 5 },{ id: "lantern", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_the_paths_of_the_sun.png",
  },
  {
    id: "numen_the_suns_weakness",
    displayName: {
      en: "Numen: the Sun's Weakness",
      zh: "闰识：日之瑕玷",
    },
    description: {
      en: "The Sun has charted his Paths - paths beyond walls and woods and Bounds. When the Sun lights our way, when we are ready, all of us will enter Eternity - at least, in the right History...\n[Any Librarian can use this to establish a History and complete the game - but the Executioner can use it to win a particular victory.]",
      zh: "太阳的罪孽与伤疤乃是我们的救赎。在某些历史中它们将把我们禁锢——阻止我们升入永恒——\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但处刑者可以用它赢得特殊胜利。]",
    },
    principles: [
      { id: "grail", amount: 5 },{ id: "lantern", amount: 5 },{ id: "moth", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_the_suns_weakness.png",
  },
  {
    id: "numen_three_rules",
    displayName: {
      en: "Numen: Three Rules",
      zh: "闰识：三者律法",
    },
    description: {
      en: "The Hours are bound by their own edicts - even the Chancel and the Calyptra. That's why their deepest rules are secret. In certain Histories, if we know those deepest rules, we know what even the Chancel and the Calyptra may not do.\n[Any Librarian can use this to establish a History and complete the game - but the Revolutionary can win a particular victory.]",
      zh: "司辰会被祂们自己立下的敕令束缚——即使是圣坛与根冠。这便是为何祂们最根本的律法秘而不宣。在特定的历史中，如果我们知道了这些最根本的律法，我们就能知晓连圣坛与根冠都无法做到的事。\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但革命者可以赢得特殊胜利。]",
    },
    principles: [
      { id: "heart", amount: 5 },{ id: "moth", amount: 5 },{ id: "scale", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_three_rules.png",
  },
  {
    id: "numen_weaving_the_world",
    displayName: {
      en: "Numen: Weaving the World",
      zh: "闰识：编织世界",
    },
    description: {
      en: "The Histories, they say, are braided like hair - or tangled like roots. What is the shape of that knot? Funny you should ask...\n [Any Librarian can use this to establish a History and complete the game - but the Symurgist and the Cartographer can win a particular victory.]",
      zh: "诸史，如他们所说，如发丝般编织——亦如树根般纠缠。那结扣会是什么形状？这是个有趣的问题……\n[任何一位图书管理员都能用它构筑一重历史并完成游戏——但鸟慧者与制图师可以赢得特殊胜利。]",
    },
    principles: [
      { id: "heart", amount: 5 },{ id: "moon", amount: 5 },{ id: "nectar", amount: 5 }
    ],
    type: "numen",
    icon: "/memories/numen_weaving_the_world.png",
  }
];