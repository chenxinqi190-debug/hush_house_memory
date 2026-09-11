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
      action: "study",
    },
  ],
  note: {
    en: ["The Storm card obtained by studying Swaddled Thunder can be stacked."],
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
      action: "study",
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
    id: "memory_storm",
    displayName: {
      en: "Memory: Storm",
      zh: "回忆: 风暴",
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