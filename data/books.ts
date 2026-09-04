export type BookFormat =
  | "codex"
  | "tablet"
  | "scroll"
  | "reel_of_film"
  | "phonograph_record";

export type BookLanguage =
  | "aramaic"
  | "cracktrack"
  | "deep_mandaic"
  | "english"
  | "ericapaean"
  | "fucine"
  | "greek"
  | "hyksos"
  | "killasimi"
  | "latin"
  |	"phrygian"
  |	"sabazine"
  | "sanskrit"
  | "vak";

export interface Book {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  principle: {
    id: string;
    amount: number;
  };
  language?: string;
  format: BookFormat;
}

export const books: Book[] = [
  // Edge Books
  {
    id: "edge_4_de_horis_book_2",
    displayName: {
      en: "De Horis book 2",
      zh: "《司辰志2》",
    },
    principle: {
      id: "edge",
      amount: 4,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "edge_4_de_horis_book_3",
    displayName: {
      en: "De Horis book 3",
      zh: "《司辰志3》",
    },
    principle: {
      id: "edge",
      amount: 4,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "edge_4_the_suns_lament",
    displayName: {
      en: "The Sun's Lament",
      zh: "《日悼》",
    },
    principle: {
      id: "edge",
      amount: 4,
    },
    format: "codex",
  },
  {
    id: "edge_4_the_war_of_the_roads_1451_1551",
    displayName: {
      en: "The War of the Roads,1451-1551",
      zh: "《路权战争：1451-1551》",
    },
    principle: {
      id: "edge",
      amount: 4,
    },
    format: "codex",
  },
  {
    id: "edge_4_the_victory_of_crowns",
    displayName: {
      en: "The Victory of Crowns",
      zh: "《王冠的胜利》",
    },
    principle: {
      id: "edge",
      amount: 4,
    },
    format: "codex",
  },
  {
    id: "edge_6_de_bellis_murorum",
    displayName: {
      en: "De Bellis Murorum",
      zh: "《墙垣之战》",
    },
    principle: {
      id: "edge",
      amount: 6,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "edge_6_exorcism_for_girls",
    displayName: {
      en: "Exorcism for Girls",
      zh: "《女孩们的驱灵仪式》",
    },
    principle: {
      id: "edge",
      amount: 6,
    },
    format: "codex",
  },
  {
    id: "edge_6_the_high_traditions_of_the_noble_endeavour",
    displayName: {
      en: "The High Traditions of the Noble Endeavour",
      zh: "《高贵之举社团那无比崇高的传承》",
    },
    principle: {
      id: "edge",
      amount: 6,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "edge_8_as_the_sun_his_course",
    displayName: {
      en: "As The Sun His Course",
      zh: "《其躔如日》",
    },
    principle: {
      id: "edge",
      amount: 8,
    },
    language: "aramaic",
    format: "codex",
  },
  {
    id: "edge_8_the_iron_book",
    displayName: {
      en: "The Iron Book",
      zh: "《铁之书》",
    },
    principle: {
      id: "edge",
      amount: 8,
    },
    language: "fucine",
    format: "codex",
  },
  {
    id: "edge_8_the_leonine_tantra",
    displayName: {
      en: "The Leonine Tantra",
      zh: "《狮子密续》",
    },
    principle: {
      id: "edge",
      amount: 8,
    },
    language: "sanskrit",
    format: "scroll",
  },
  {
    id: "edge_8_the_open_head",
    displayName: {
      en: "THE OPEN HEAD",
      zh: "《敞开头脑》",
    },
    principle: {
      id: "edge",
      amount: 8,
    },
    language: "hyksos",
    format: "reel_of_film",
  },
  {
    id: "edge_10_a_childs_treasury_of_golden_afternoons",
    displayName: {
      en: "A Child's Treasury of Golden Afternoons",
      zh: "《一个孩童的金色午后宝藏》",
    },
    principle: {
      id: "edge",
      amount: 10,
    },
    language: "hyksos",
    format: "codex",
  },
  {
    id: "edge_10_seven_shards",
    displayName: {
      en: "Seven Shards",
      zh: "《七大碎片》",
    },
    principle: {
      id: "edge",
      amount: 10,
    },
    format: "codex",
  },
    {
    id: "edge_10_the_ascendant",
    displayName: {
      en: "The Ascendant",
      zh: "《论支配》",
    },
    principle: {
      id: "edge",
      amount: 10,
    },
    language: "hyksos",
    format: "codex",
  },
  {
    id: "edge_10_the_sky_in_the_scar",
    displayName: {
      en: "The Sky in the Scar",
      zh: "《伤疤中的天宇》",
    },
    principle: {
      id: "edge",
      amount: 10,
    },
    language: "sabazine",
    format: "codex",
  },
  {
    id: "edge_12_the_book_of_thrones",
    displayName: {
      en: "The Book of Thrones",
      zh: "《王座之书》",
    },
    principle: {
      id: "edge",
      amount: 12,
    },
    language: "phrygian",
    format: "codex",
  },
  {
    id: "edge_12_the_deeds_of_the_scarred_captain",
    displayName: {
      en: "The Deeds of the Scarred Captain",
      zh: "《伤疤上尉事迹录》",
    },
    principle: {
      id: "edge",
      amount: 12,
    },
    language: "greek",
    format: "codex",
  },
  {
    id: "edge_14_book_of_true_blood",
    displayName: {
      en: "Book of True Blood",
      zh: "《真血之书》",
    },
    principle: {
      id: "edge",
      amount: 14,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "edge_14_how_the_end_will_begin",
    displayName: {
      en: "How the End will Begin",
      zh: "《终结如何开始》",
    },
    principle: {
      id: "edge",
      amount: 14,
    },
    language: "vak",
    format: "codex",
  },
  {
    id: "edge_14_journal_of_sir_david_greene_1903",
    displayName: {
      en: "Journal of Sir David Greene, 1903",
      zh: "《大卫·格林爵士的日志，1903》",
    },
    principle: {
      id: "edge",
      amount: 14,
    },
    language: "hyksos",
    format: "codex",
  },
  {
    id: "edge_16_the_sevenfold_slaying_of_the_seven_coiled",
    displayName: {
      en: "The Sevenfold Slaying of the Seven-Coiled",
      zh: "《七步斩七蟠》",
    },
    principle: {
      id: "edge",
      amount: 16,
    },
    language: "fucine",
    format: "codex",
  },
   {
    id: "edge_18_the_wound_wounds",
    displayName: {
      en: "The Wound-Wounds",
      zh: "《伤之伤》",
    },
    principle: {
      id: "edge",
      amount: 18,
    },
    language: "killasimi",
    format: "codex",
  },
  // Forge Books
  {
    id: "forge_4_sunset_passages",
    displayName: {
      en: "Sunset Passages",
      zh: "《日落殊途》",
    },
    principle: {
      id: "forge",
      amount: 4,
    },
    language: "latin",
    format: "codex",
  },
  {
    id: "forge_4_vinzants_minglings",
    displayName: {
      en: "Vinzant's Minglings",
      zh: "《文赞特的熔炼》",
    },
    principle: {
      id: "forge",
      amount: 4,
    },
    format: "codex",
  },
  {
    id: "forge_6_journal_of_walter_dewulf",
    displayName: {
      en: "Journal of Walter Dewulf",
      zh: "《沃尔特·德沃尔夫的日志》",
    },
    principle: {
      id: "forge",
      amount: 6,
    },
    format: "codex",
  },
  {
    id: "forge_6_on_matthias_and_the_amethyst_imago_transformation",
    displayName: {
      en: "On Matthias and the Amethyst Imago: Transformation",
      zh: "《马提亚斯与紫晶成虫：嬗变》",
    },
    principle: {
      id: "forge",
      amount: 6,
    },
    language: "aramaic",
    format: "codex",
  },
  {
    id: "forge_6_the_book_of_cinders",
    displayName: {
      en: "The Book of Cinders",
      zh: "《灰烬之书》",
    },
    principle: {
      id: "forge",
      amount: 6,
    },
    format: "codex",
  },
  {
    id: "forge_6_the_vinzant_inscriptions",
    displayName: {
      en: "The Vinzant Inscriptions",
      zh: "《文赞特铭文》",
    },
    principle: {
      id: "forge",
      amount: 6,
    },
    language: "phrygian",
    format: "codex",
  },
  {
    id: "forge_8_ambrosial",
    displayName: {
      en: "Ambrosial!",
      zh: "《爱莫若食！》",
    },
    principle: {
      id: "forge",
      amount: 8,
    },
    format: "codex",
  },
  {
    id: "forge_8_a_shape_in_smoke",
    displayName: {
      en: "A Shape in Smoke",
      zh: "《烟中之形》",
    },
    principle: {
      id: "forge",
      amount: 8,
    },
    format: "codex",
  },
  {
    id: "forge_8_old_coppernose_and_the_softer_metal",
    displayName: {
      en: "Old Coppernose and the Softer Metal",
      zh: "《老铜鼻子与软金属》",
    },
    principle: {
      id: "forge",
      amount: 8,
    },
    format: "codex",
  },
  {
    id: "forge_8_the_amalgam_of_the_red_rose",
    displayName: {
      en: "The Amalgam of the Red Rose",
      zh: "《红玫瑰合金》",
    },
    principle: {
      id: "forge",
      amount: 8,
    },
    format: "codex",
  },
  {
    id: "forge_8_the_incandescent_tantra",
    displayName: {
      en: "The Incandescent Tantra",
      zh: "《炽热密续》",
    },
    principle: {
      id: "forge",
      amount: 8,
    },
    language: "sanskrit",
    format: "scroll",
  },
  {
    id: "forge_10_amiranis_beteli",
    displayName: {
      en: "Amiranis Beteli",
      zh: "《阿米拉尼槟榔石》",
    },
    principle: {
      id: "forge",
      amount: 10,
    },
    language: "fucine",
    format: "tablet",
  },
  {
    id: "forge_10_glimmerings",
    displayName: {
      en: "Glimmerings",
      zh: "《荧荧微光》",
    },
    principle: {
      id: "forge",
      amount: 10,
    },
    format: "codex",
  },
  {
    id: "forge_10_skin_of_silver",
    displayName: {
      en: "Skin of Silver",
      zh: "《银肤》",
    },
    principle: {
      id: "forge",
      amount: 10,
    },
    language: "deep_mandaic",
    format: "codex",
  },
  {
    id: "forge_10_the_admonitory_automata_project",
    displayName: {
      en: "The Admonitory Automata Project",
      zh: "《劝诫机计划》",
    },
    principle: {
      id: "forge",
      amount: 10,
    },
    format: "reel_of_film",
  },
  {
    id: "forge_10_the_temptations_of_architecture",
    displayName: {
      en: "The Temptations of Architecture",
      zh: "《建筑的诱惑》",
    },
    principle: {
      id: "forge",
      amount: 10,
    },
    format: "codex",
  },
  {
    id: "forge_12_the_book_of_dissolution",
    displayName: {
      en: "The Book of Dissolution",
      zh: "《融解之书》",
    },
    principle: {
      id: "forge",
      amount: 12,
    },
    language: "deep_mandaic",
    format: "codex",
  },
  {
    id: "forge_12_the_carmine_petal_revised",
    displayName: {
      en: "The Carmine Petal: Revised",
      zh: "《胭红花瓣：删节版》",
    },
    principle: {
      id: "forge",
      amount: 12,
    },
    format: "codex",
  },
  {
    id: "forge_14_a_descent_of_the_shell",
    displayName: {
      en: "A Descent of the Shell",
      zh: "《壳之延继》",
    },
    principle: {
      id: "forge",
      amount: 14,
    },
    format: "codex",
  },
  {
    id: "forge_14_the_burning_woman",
    displayName: {
      en: "The Burning Woman",
      zh: "《燃烧的女人》",
    },
    principle: {
      id: "forge",
      amount: 14,
    },
    language: "phrygian",
    format: "codex",
  },
  {
    id: "forge_14_the_manner_in_which_the_alchemist_was_spared",
    displayName: {
      en: "The Manner in which the Alchemist was Spared",
      zh: "《炼金术士保命之法》",
    },
    principle: {
      id: "forge",
      amount: 14,
    },
    language: "vak",
    format: "codex",
  },
  {
    id: "forge_16_my_deeds_my_powers_my_achievements_and_the_injustices_perpetrated_against_me",
    displayName: {
      en: "My Deeds, My Powers, My Achievements and the Injustices Perpetrated Against Me",
      zh: "《我的事迹、我的力量、我的成就和我所面临的不公》",
    },
    principle: {
      id: "forge",
      amount: 16,
    },
    language: "deep_mandaic",
    format: "codex",
  },
  {
    id: "forge_16_the_messenger_awaiting_her_destination",
    displayName: {
      en: "The Messenger Awaiting Her Destination",
      zh: "《等待目的地的女送信人》",
    },
    principle: {
      id: "forge",
      amount: 16,
    },
    language: "vak",
    format: "codex",
  },
  {
    id: "forge_18_the_carmine_petal_unexpurgated",
    displayName: {
      en: "The Carmine Petal: Unexpurgated",
      zh: "《胭红花瓣：未删节版》",
    },
    principle: {
      id: "forge",
      amount: 18,
    },
    format: "codex",
  },
  // Grail Books
    {
    id: "grail_4_the_skeleton_songs",
    displayName: {
      en: "The Skeleton Songs",
      zh: "《骷髅歌》",
    },
    principle: {
      id: "grail",
      amount: 4,
    },
    language: "English",
    format: "codex",
  },
];