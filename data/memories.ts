import type { Memory } from "@/types/memory";

export const memories: Memory[] = [
  {
    id: "memory_storm",
    displayName: {
      en: "Memory: Storm",
      zh: "回忆: 风暴",
    },
    description: {
      en: "There are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
      zh: "xxx",
    },
    principles: [
      { id: "heart", amount: 2 },{ id: "sky", amount: 2 }
    ],
    type: "temporary",
    bookSources: [
      "heart_4_apollo_and_marsyas",
      "heart_8_the_flayed_tantra",
      "heart_12_those_who_do_not_sleep",
      "moon_4_what_does_not_bark",
      "sky_10_de_motu_corporum_vetitorum"
    ],
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
      zh: "xxxx",
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
      zh: "大地之印",
    },
    description: {
      en: "'In the Tracks of Beasts, in the Convolutions of his own Carapace, in Egg-vein and Shell-shadow, the Many-Eyed One found the Signs which can be History.' An Earth-Sign is an auspice traced on the cloaked shape of the earth, perceptible to the sensitive, interpreted only by the wise.",
      zh: "xxx",
    },
    principles: [
      { id: "nectar", amount: 2 },
    ],
    type: "persistent",
    bookSources: [
      "heart_8_rapt_in_the_king",
      "nectar_8_de_ratio_quercuum"
      ],
    evolveVia: ["skolekosophy"],
    icon: "/memories/earth_sign.png",
  },
];