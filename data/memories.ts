import type { Memory } from "@/types/memory";
import { notEqual } from "assert";

export const memories: Memory[] = [
  {
    id: "clouds",
    displayName: {
      en: "Clouds",
      zh: "多云",
    },
    description: {
      en: "In this country the sky is rarely clear. The Sun goes courteously cloaked.\n\n[Can be drawn in any season.]",
      zh: "在这个国家，天空很少是晴朗的。太阳得体地披上了斗篷。\n\n[所有季节均可能出现多云天气。]",
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
      en: "Coastal fog - moon-mared, sea-dulling.\n\n[Can be drawn in Autumn and Winter.]",
      zh: "沿滩游雾——月色朦胧，海水晦暗。\n\n[雾天仅现于秋冬。]",
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
      en: "Trees bend, walls creak, travellers bend low against the blast.\n\n[Can be drawn in Sprin, Autumn and Winter.]",
      zh: "树木弯曲，墙壁吱吱作响，旅人弯腰以抵御狂风。\n\n[狂风可现于春、秋、冬。]",
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
      en: "Ice raps on the roofs and tree-tops.\n\n[Can be drawn in Autumn and Winter.]",
      zh: "冰砾敲打着屋顶和树梢。\n\n[冰雹仅现于秋冬。]",
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
      en: "Soft rain brings life.\n\n[Can be drawn in any season.]",
      zh: "细雨带来生机。\n\n[所有季节均可能出现雨天。]",
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
      en: "The world is pale today. 'The White is west of the world, and winter does not wait forever', Solomon Husher once said.\n\n[Can be drawn in Winter.]",
      zh: "今日世界一片淡白。“纯白在世界以西，且冬不永待”，所罗门·赫舍曾言。\n\n[雪天仅现于冬。]",
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
      en: "Thunder-roaring, lightning-lashed skies.\n\n[Can be drawn in Autumn and Winter.]",
      zh: "天空电闪雷鸣。\n\n[风暴天仅现于秋冬。]",
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
      en: "The Sun is not what it was, but today he is smiling.\n\n[Can be drawn in Spring, Summer, and Autumn.]",
      zh: "太阳不复往昔，但今日他露出了微笑。\n\n[晴朗天气可现于春、夏、秋。]",
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
      en: "'The Moth, the Grail, and the Egg Unhatching all tell different stories of the world's beginning. One of those stories is the oldest, but it may not be the first.'\n\n~ Abbess Nonna",
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
      en: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.\n\n~ Lovecraft",
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
      en: "'Wit's forge and fire-blast, meaning's press and screw.'\n\n ~ Coleridge, 'On Donne's Poetry'",
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
];