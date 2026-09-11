export type BookFormat =
  | "codex"
  | "multitudinous"
  | "phonograph_record"
  | "tablet"
  | "scroll"
  | "reel_of_film"
  | "thing"
;

export type BookLanguage =
  | "aramaic"
  | "cracktrack"
  | "deep_mandaic"
  | "ericapaean"
  | "fucine"
  | "greek"
  | "hyksos"
  | "killasimi"
  | "kernewek_henavek"
  | "latin"
  |	"phrygian"
  | "ramsund"
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
  language?: BookLanguage;
  format: BookFormat;
  memoryId: string;
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_contradiction"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_contradiction"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_contradiction"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_contradiction"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_revelation"
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
    memoryId: "memory_contradiction"
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
    memoryId: "numen_merciless_alteration"
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
    memoryId: "memory_hindsight"
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
    memoryId: "numen_back_into_balance"
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
    memoryId: "memory_contradiction"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_fear"
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
    memoryId: "memory_regret"
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
    memoryId: "memory_revelation"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_impulse"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_impulse"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_revelation"
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
    memoryId: "memory_foresight"
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
    memoryId: "numen_the_bells_of_ys"
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
    memoryId: "bittersweet_certainty"
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
    memoryId: "memory_fear"
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
    memoryId: "secret_threshold"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_pattern"
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
    memoryId: "memory_foresight"
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
    memoryId: "memory_foresight"
  },
  // Grail Books
    {
    id: "grail_4_the_orchid_transfigurations_a_feast",
    displayName: {
      en: "The Orchid Transfigurations: a Feast",
      zh: "《兰花变容：筵宴》",
    },
    principle: {
      id: "grail",
      amount: 4,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_intuition"
  },
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
    format: "codex",
    memoryId: "beguiling_melody"
  },
  {
    id: "grail_4_the_tripled_heart",
    displayName: {
      en: "The Tripled Heart",
      zh: "《三重心》",
    },
    principle: {
      id: "grail",
      amount: 4,
    },
    language: "kernewek_henavek",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "grail_4_the_winds_ruin",
    displayName: {
      en: "The Wind's Ruin",
      zh: "《风墟》",
    },
    principle: {
      id: "grail",
      amount: 4,
    },
    format: "codex",
    memoryId: "beguiling_melody"
  },
  {
    id: "grail_6_colours_in_the_liver",
    displayName: {
      en: "COLOURS IN THE LIVER",
      zh: "《肝内之色》",
    },
    principle: {
      id: "grail",
      amount: 6,
    },
    format: "reel_of_film",
    memoryId: "memory_revelation"
  },
  {
    id: "grail_6_the_devoured_tantra",
    displayName: {
      en: "The Devoured Tantra",
      zh: "《贪食密续》",
    },
    principle: {
      id: "grail",
      amount: 6,
    },
    language: "sanskrit",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "grail_6_an_impertinent_vitulation",
    displayName: {
      en: "An Impertinent Vitulation",
      zh: "《粗陋谢肉祭》",
    },
    principle: {
      id: "grail",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_6_on_matthias_and_the_amethyst_imago_pursuit",
    displayName: {
      en: "On Matthias and the Amethyst Imago: Pursuit",
      zh: "《马提亚斯与紫晶成虫：追寻》",
    },
    principle: {
      id: "grail",
      amount: 6,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "grail_8_calicite_supplications",
    displayName: {
      en: "Calicite Supplications",
      zh: "《圣觚石祷文》",
    },
    principle: {
      id: "grail",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_8_the_intimations_of_skin",
    displayName: {
      en: "The Intimations of Skin",
      zh: "《肌肤的暗示》",
    },
    principle: {
      id: "grail",
      amount: 8,
    },
    format: "codex",
    memoryId: "beguiling_melody"
  },
  {
    id: "grail_8_the_orchid_transfigurations_a_birth",
    displayName: {
      en: "The Orchid Transfigurations: a Birth",
      zh: "《兰花变容：生诞》",
    },
    principle: {
      id: "grail",
      amount: 8,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_8_snare_of_the_tree_collected_proverbs_of_aunt_mopsy",
    displayName: {
      en: "Snare of the Tree: Collected Proverbs of Aunt Mopsy",
      zh: "《树的陷阱：莫普西阿姨的谚语集》",
    },
    principle: {
      id: "grail",
      amount: 8,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "grail_8_the_thirsting_tantra",
    displayName: {
      en: "The Thirsting Tantra",
      zh: "《干渴密续》",
    },
    principle: {
      id: "grail",
      amount: 8,
    },
    language: "sanskrit",
    format: "scroll",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_10_the_geminiad_ii",
    displayName: {
      en: "The Geminiad ii",
      zh: "《双生姝丽·卷二》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_10_a_journey_to_the_grove",
    displayName: {
      en: "A Journey to the Grove",
      zh: "《林苑旅志》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_10_on_thirstlies_ivories_and_lovelies",
    displayName: {
      en: "On Thirstlies, Ivories and Lovelies",
      zh: "《干渴者，骨白者与美貌者》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "grail_10_the_rose_of_nuriel",
    displayName: {
      en: "The Rose of Nuriel",
      zh: "《努列尔宝训集》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_10_the_sun_disfigured",
    displayName: {
      en: "The Sun Disfigured",
      zh: "《太阳的崩毁》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    language: "cracktrack",
    format: "scroll",
    memoryId: "numen_the_suns_weakness"
  },
  {
    id: "grail_10_the_wonderful_shape",
    displayName: {
      en: "The Wonderful Shape",
      zh: "《瑰奇之形》",
    },
    principle: {
      id: "grail",
      amount: 10,
    },
    language: "killasimi",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_12_a_catalogue_of_uncharted_pleasures",
    displayName: {
      en: "A Catalogue of Uncharted Pleasures",
      zh: "《未知快感概览》",
    },
    principle: {
      id: "grail",
      amount: 12,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "grail_12_one_thousand_threads",
    displayName: {
      en: "One Thousand Threads",
      zh: "《千丝万缕》",
    },
    principle: {
      id: "grail",
      amount: 12,
    },
    language: "killasimi",
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "grail_14_26_enticements_7_torments",
    displayName: {
      en: "Twenty-Six Enticements, Seven Torments",
      zh: "《二十六种诱惑与七类苦痛》",
    },
    principle: {
      id: "grail",
      amount: 14,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "grail_16_the_dream_of_the_conspiracy_of_the_lower_skies",
    displayName: {
      en: "The Dream of the Conspiracy of the Lower Skies",
      zh: "《下层天域密盟之梦》",
    },
    principle: {
      id: "grail",
      amount: 16,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "grail_21_medusan_commentaries",
    displayName: {
      en: "Medusan Commentaries",
      zh: "《细述美杜莎》",
    },
    principle: {
      id: "grail",
      amount: 21,
    },
    language: "killasimi",
    format: "multitudinous",
    memoryId: "memory_fear"
  },
  //Heart Books
  {
    id: "heart_4_a_true_and_complete_accounting_of_the_askslepian_mysteries_of_the_roots_of_the_house",
    displayName: {
      en: "A True and Complete Accounting of the Asclepian Mysteries of the Roots of the House",
      zh: "《对居屋根基的阿斯克利庇之谜真实而完整的记述》",
    },
    principle: {
      id: "heart",
      amount: 4,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "heart_4_apollo_and_marsyas",
    displayName: {
      en: "Apollo and Marsyas",
      zh: "《阿波罗与马西亚斯》",
    },
    principle: {
      id: "heart",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_storm"
  },
  {
    id: "heart_4_the_orchid_transfigurations_noon",
    displayName: {
      en: "The Orchid Transfigurations: Noon",
      zh: "《兰花变容：午时》",
    },
    principle: {
      id: "heart",
      amount: 4,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "heart_4_the_other_line",
    displayName: {
      en: "The Other Line",
      zh: "《他者的对白》",
    },
    principle: {
      id: "heart",
      amount: 4,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "heart_6_the_ceaseless_tantra",
    displayName: {
      en: "The Ceaseless Tantra",
      zh: "《无休密续》",
    },
    principle: {
      id: "heart",
      amount: 6,
    },
    language: "sanskrit",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "heart_6_velletri_interviews",
    displayName: {
      en: "Velletri Interviews",
      zh: "《韦莱特里审讯记录》",
    },
    principle: {
      id: "heart",
      amount: 6,
    },
    format: "phonograph_record",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "heart_8_the_flayed_tantra",
    displayName: {
      en: "The Flayed Tantra",
      zh: "《剥皮密续》",
    },
    principle: {
      id: "heart",
      amount: 8,
    },
    language: "sanskrit",
    format: "scroll",
    memoryId: "memory_storm"
  },
  {
    id: "heart_8_rapt_in_the_king",
    displayName: {
      en: "Rapt in the King",
      zh: "《为王着迷》",
    },
    principle: {
      id: "heart",
      amount: 8,
    },
    format: "codex",
    memoryId: "earth_sign"
  },
  {
    id: "heart_8_two_wombs_one_heart",
    displayName: {
      en: "Two Wombs, One Heart",
      zh: "《两个子宫，一颗心脏》",
    },
    principle: {
      id: "heart",
      amount: 8,
    },
    language: "killasimi",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "heart_8_warming_draughts_to_uplift_the_heart",
    displayName: {
      en: "Warming Draughts to Uplift the Heart",
      zh: "《热药暖人心》",
    },
    principle: {
      id: "heart",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "heart_10_the_geminiad_i",
    displayName: {
      en: "The Geminiad i",
      zh: "《双生姝丽·卷一》",
    },
    principle: {
      id: "heart",
      amount: 10,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "heart_10_the_instruments_of_the_heart",
    displayName: {
      en: "The Instruments of the Heart",
      zh: "《心之乐器》",
    },
    principle: {
      id: "heart",
      amount: 10,
    },
    format: "codex",
    memoryId: "cheerful_ditty"
  },
  {
    id: "heart_10_notes_on_bindings",
    displayName: {
      en: "Notes on Bindings",
      zh: "《缝缚手记》",
    },
    principle: {
      id: "heart",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "heart_12_lake_fucino_recordings",
    displayName: {
      en: "Lake Fucino Recordings",
      zh: "《富奇诺湖录音带》",
    },
    principle: {
      id: "heart",
      amount: 12,
    },
    format: "phonograph_record",
    memoryId: "beguiling_melody"
  },
  {
    id: "heart_12_those_who_do_not_sleep",
    displayName: {
      en: "Those Who Do Not Sleep",
      zh: "《不眠者》",
    },
    principle: {
      id: "heart",
      amount: 12,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_storm"
  },
  {
    id: "heart_14_commandments_for_the_preservation_of_all_that_exists",
    displayName: {
      en: "Commandments For the Preservation of All That Exists",
      zh: "《关于维持一切事物存续的教令》",
    },
    principle: {
      id: "heart",
      amount: 14,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "heart_14_the_time_of_division",
    displayName: {
      en: "The Time of Division",
      zh: "《分裂之时》",
    },
    principle: {
      id: "heart",
      amount: 14,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "heart_16_the_book_of_the_extinguished_heart",
    displayName: {
      en: "The Book of the Extinguished Heart",
      zh: "《寂灭之心》",
    },
    principle: {
      id: "heart",
      amount: 16,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "bittersweet_certainty"
  },
  {
    id: "heart_16_nyns_cages_avignon_text",
    displayName: {
      en: "Nyn's Cages (Avignon Text)",
      zh: "《宁之囚笼》（阿维尼翁版）",
    },
    principle: {
      id: "heart",
      amount: 16,
    },
    language: "ericapaean",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  //Knock Books
  {
    id: "knock_4_advice_on_containment",
    displayName: {
      en: "Advice on Containment",
      zh: "《关于收容之建议》",
    },
    principle: {
      id: "knock",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_4_the_raptures_of_forculus",
    displayName: {
      en: "The Raptures of Forculus",
      zh: "《福尔库鲁斯的狂喜》",
    },
    principle: {
      id: "knock",
      amount: 4,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_4_the_treatise_on_underplaces",
    displayName: {
      en: "The Treatise on Underplaces",
      zh: "《下层论》",
    },
    principle: {
      id: "knock",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "knock_4_travelling_at_night_1",
    displayName: {
      en: "Travelling at Night, vol 1",
      zh: "《夜游漫记·卷一》",
    },
    principle: {
      id: "knock",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "knock_4_travelling_at_night_3",
    displayName: {
      en: "Travelling at Night, vol 3",
      zh: "《夜游漫记·卷三》",
    },
    principle: {
      id: "knock",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_6_by_their_marks_shall_ye_know_them",
    displayName: {
      en: "By Their Marks Shall Ye Know them",
      zh: "《凭其印记汝当辨之》",
    },
    principle: {
      id: "knock",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_6_the_elations_of_limentinus",
    displayName: {
      en: "The Elations of Limentinus",
      zh: "《利门提努斯的欢欣》",
    },
    principle: {
      id: "knock",
      amount: 6,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_6_the_locksmiths_dream_trespasses",
    displayName: {
      en: "The Locksmith's Dream: Trespasses",
      zh: "《锁匠的梦境：罪行》",
    },
    principle: {
      id: "knock",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "knock_8_cardeas_delights",
    displayName: {
      en: "Cardea's Delights",
      zh: "《卡尔迪亚的愉悦》",
    },
    principle: {
      id: "knock",
      amount: 8,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_8_the_gospel_of_zacchaeus",
    displayName: {
      en: "The Gospel of Zacchaeus",
      zh: "《撒该福音》",
    },
    principle: {
      id: "knock",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "knock_8_on_the_winding_stair",
    displayName: {
      en: "On the Winding Stair",
      zh: "《论盘旋楼梯》",
    },
    principle: {
      id: "knock",
      amount: 8,
    },
    language: "ramsund",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_8_the_twin_serpent_tantra",
    displayName: {
      en: "The Twin-Serpent Tantra",
      zh: "《孪蛇密续》",
    },
    principle: {
      id: "knock",
      amount: 8,
    },
    language: "sanskrit",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_10_an_almanac_of_entrances",
    displayName: {
      en: "An Almanac of Entrances",
      zh: "《诸门年鉴》",
    },
    principle: {
      id: "knock",
      amount: 10,
    },
    format: "codex",
    memoryId: "secret_threshold"
  },
  {
    id: "knock_10_on_imperfections",
    displayName: {
      en: "On Imperfections",
      zh: "《论瑕疵》",
    },
    principle: {
      id: "knock",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_10_towards_a_fundamental_aesthetic",
    displayName: {
      en: "Towards a Fundamental Aesthetic",
      zh: "《走近基础美学》",
    },
    principle: {
      id: "knock",
      amount: 10,
    },
    language:"ericapaean",
    format: "codex",
    memoryId: "numen_a_final_understanding"
  },
  {
    id: "knock_12_the_grand_passage_of_the_hours",
    displayName: {
      en: "The Grand Passage of the Hours",
      zh: "《司辰的浩旅》",
    },
    principle: {
      id: "knock",
      amount: 12,
    },
    language:"vak",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_12_oghkor_oghkor_tissilak_oghkor",
    displayName: {
      en: "OGHKOR OGHKOR TISSILAK OGHKOR",
      zh: "《奥格科尔 奥格科尔 蒂西拉克 奥格科尔》",
    },
    principle: {
      id: "knock",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_12_on_the_matter_and_the_deeds_of_serpents",
    displayName: {
      en: "On the Matter and the Deeds of Serpents",
      zh: "《蛇族事迹考察》",
    },
    principle: {
      id: "knock",
      amount: 12,
    },
    language:"vak",
    format: "codex",
    memoryId: "secret_threshold"
  },
  {
    id: "knock_14_deaths_and_their_evasions",
    displayName: {
      en: "Deaths and their Evasions",
      zh: "《死亡及其规避之法》",
    },
    principle: {
      id: "knock",
      amount: 14,
    },
    language:"fucine",
    format: "codex",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "knock_14_a_manual_for_departure",
    displayName: {
      en: "A Manual for Departure",
      zh: "《脱身手册》",
    },
    principle: {
      id: "knock",
      amount: 14,
    },
    language:"vak",
    format: "codex",
    memoryId: "secret_threshold"
  },
  {
    id: "knock_16_a_tower_falls",
    displayName: {
      en: "A Tower Falls",
      zh: "《塔之倒坍》",
    },
    principle: {
      id: "knock",
      amount: 16,
    },
    language:"vak",
    format: "phonograph_record",
    memoryId: "confounding_parable"
  },
  {
    id: "knock_18_the_road_to_janus",
    displayName: {
      en: "The Road to Janus",
      zh: "《通往雅努斯之途》",
    },
    principle: {
      id: "knock",
      amount: 18,
    },
    language:"vak",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "knock_21_xenodicene_odes",
    displayName: {
      en: "Xenodicene Odes",
      zh: "《刻赛诺狄刻颂歌》",
    },
    principle: {
      id: "knock",
      amount: 21,
    },
    language:"vak",
    format: "multitudinous",
    memoryId: "confounding_parable"
  },
  //Lantern Books
  {
    id: "lantern_4_bancroft_diaries",
    displayName: {
      en: "Bancroft Diaries",
      zh: "《班克罗夫特日记》",
    },
    principle: {
      id: "lantern",
      amount: 4,
    },
    language:"latin",
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "lantern_4_in_the_malleary",
    displayName: {
      en: "In the Malleary",
      zh: "《于锤炼场中》",
    },
    principle: {
      id: "lantern",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "lantern_4_the_locksmiths_dream_a_light_through_the_keyhole",
    displayName: {
      en: "The Locksmith's Dream: a Light through the Keyhole",
      zh: "《锁匠的梦境：穿过锁孔之光》",
    },
    principle: {
      id: "lantern",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_4_sunrise_awakenings",
    displayName: {
      en: "Sunrise Awakenings",
      zh: "《日出的觉醒》",
    },
    principle: {
      id: "lantern",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_6_gospel_of_nicodemus",
    displayName: {
      en: "Gospel of Nicodemus",
      zh: "《尼哥底母福音》",
    },
    principle: {
      id: "lantern",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_6_the_known_unknown_tantra",
    displayName: {
      en: "The Known-Unknown Tantra",
      zh: "《昧知密续》",
    },
    principle: {
      id: "lantern",
      amount: 6,
    },
    language:"sanskrit",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_6_the_locksmiths_dream_incursus",
    displayName: {
      en: "The Locksmith's Dream: Incursus",
      zh: "《锁匠的梦境：神侵》",
    },
    principle: {
      id: "lantern",
      amount: 6,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "lantern_6_wainscot_histories",
    displayName: {
      en: "Wainscot Histories",
      zh: "《饰壁史话》",
    },
    principle: {
      id: "lantern",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_contradiction"
  },
  {
    id: "lantern_8_letters_to_my_successor",
    displayName: {
      en: "Letters To My Successor",
      zh: "《致继任者的信》",
    },
    principle: {
      id: "lantern",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_8_a_light_in_the_inkwell",
    displayName: {
      en: "A Light in the Inkwell",
      zh: "《墨水瓶中的光》",
    },
    principle: {
      id: "lantern",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_8_prophecies_of_glory",
    displayName: {
      en: "Prophecies of Glory",
      zh: "《辉光预言》",
    },
    principle: {
      id: "lantern",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_8_the_rose_of_waznei",
    displayName: {
      en: "The Rose of Waznei",
      zh: "《瓦兹内宝训集》",
    },
    principle: {
      id: "lantern",
      amount: 8,
    },
    language:"greek",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_8_the_watchful_tantra",
    displayName: {
      en: "The Watchful Tantra",
      zh: "《警夜密续》",
    },
    principle: {
      id: "lantern",
      amount: 8,
    },
    language:"sanskrit",
    format: "scroll",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_10_the_alloy_of_the_white_rose",
    displayName: {
      en: "The Alloy of the White Rose",
      zh: "《白玫瑰合金》",
    },
    principle: {
      id: "lantern",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_10_the_suns_design",
    displayName: {
      en: "The Sun's Design",
      zh: "《太阳的宏图》",
    },
    principle: {
      id: "lantern",
      amount: 10,
    },
    language: "cracktrack",
    format: "tablet",
    memoryId: "numen_the_paths_of_the_sun"
  },
  {
    id: "lantern_10_unhatched_hymns",
    displayName: {
      en: "Unhatched Hymns",
      zh: "《未孵赞美诗》",
    },
    principle: {
      id: "lantern",
      amount: 10,
    },
    language: "sabazine",
    format: "codex",
    memoryId: "savage_hymn"
  },
  {
    id: "lantern_12_the_chandlers_wish",
    displayName: {
      en: "The Chandler's Wish",
      zh: "《制烛人之愿》",
    },
    principle: {
      id: "lantern",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "lantern_12_the_sky_the_soul",
    displayName: {
      en: "The Sky, the Soul",
      zh: "《魂归苍穹》",
    },
    principle: {
      id: "lantern",
      amount: 12,
    },
    language:"aramaic",
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "lantern_14_the_high_mysteries_of_the_innermost_chamber_of_our_church_solar",
    displayName: {
      en: "The High Mysteries of the Innermost Chamber of our Church Solar",
      zh: "《吾太阳神教核心厅室之极密》",
    },
    principle: {
      id: "lantern",
      amount: 14,
    },
    language:"fucine",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "lantern_14_opus_magnum_caeruleum",
    displayName: {
      en: "Opus Magnum Caeruleum",
      zh: "《Opus Magnum Caeruleum》",
    },
    principle: {
      id: "lantern",
      amount: 14,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "lantern_21_quirinic_meditations",
    displayName: {
      en: "Quirinic Meditations",
      zh: "《奎里努斯沉思录》",
    },
    principle: {
      id: "lantern",
      amount: 21,
    },
    language: "ericapaean",
    format: "multitudinous",
    memoryId: "memory_contradiction"
  },
  //Moon Books
  {
    id: "moon_4_collected_hush_house_lectures",
    displayName: {
      en: "Collected Hush House Lectures",
      zh: "《噤声居屋讲座集》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "moon_4_an_investigation_of_a_foundered_country",
    displayName: {
      en: "An Investigation of A Foundered Country",
      zh: "《对沉没国度的调查》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "phonograph_record",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "moon_4_the_moons_egg",
    displayName: {
      en: "The Moon's Egg",
      zh: "《月卵》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "moon_4_a_pale_lady_and_a_prince_of_wines",
    displayName: {
      en: "A Pale Lady and a Prince of Wines",
      zh: "《苍白女士与葡萄酒王子》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_4_the_twelve_letters_on_consequence",
    displayName: {
      en: "The Twelve Letters On Consequence",
      zh: "《结果十二函》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "moon_4_the_viennese_conundra",
    displayName: {
      en: "The Viennese Conundra",
      zh: "《维也纳未解之谜》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "moon_4_what_does_not_bark",
    displayName: {
      en: "What Does Not Bark",
      zh: "《不吠之物》",
    },
    principle: {
      id: "moon",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_storm"
  },
  {
    id: "moon_6_the_account_of_kanishk_at_the_spiders_door",
    displayName: {
      en: "The Account of Kanishk at the Spider's Door",
      zh: "《迦腻色伽在蜘蛛之门前的经过》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "moon_6_black_nephrite",
    displayName: {
      en: "Black Nephrite",
      zh: "《墨玉》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "moon_6_an_exorcists_field_manual",
    displayName: {
      en: "An Exorcist's Field Manual",
      zh: "《驱灵师生存手册》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_contradiction"
  },
  {
    id: "moon_6_the_kerisham_portolan",
    displayName: {
      en: "The Kerisham Portolan",
      zh: "《凯尔伊苏姆波特兰图》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "moon_6_the_larquebine_codex",
    displayName: {
      en: "The Larquebine Codex",
      zh: "《拉奎伯斯写本》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    language:"phrygian",
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_6_the_morphy_codex",
    displayName: {
      en: "The Morphy Codex",
      zh: "《墨菲写本》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    language:"aramaic",
    format: "codex",
    memoryId: "beguiling_melody"
  },
  {
    id: "moon_6_the_sea_does_not_regret",
    displayName: {
      en: "The Sea Does Not Regret",
      zh: "《大海从不后悔》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_6_the_world_despoild",
    displayName: {
      en: "The World Despoil'd",
      zh: "《遭掠的世界》",
    },
    principle: {
      id: "moon",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "moon_8_the_crossing_to_noon",
    displayName: {
      en: "The Crossing to Noon",
      zh: "《渡至午港》",
    },
    principle: {
      id: "moon",
      amount: 8,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_8_the_deaths_of_the_moon",
    displayName: {
      en: "The Deaths of the Moon",
      zh: "《月之死态》",
    },
    principle: {
      id: "moon",
      amount: 8,
    },
    language: "killasimi",
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_8_experiment_beyond_sight",
    displayName: {
      en: "EXPERIMENT BEYOND SIGHT",
      zh: "《超视实验》",
    },
    principle: {
      id: "moon",
      amount: 8,
    },
    format: "reel_of_film",
    memoryId: "memory_revelation"
  },
  {
    id: "moon_8_malachite_supplications",
    displayName: {
      en: "Malachite Supplications",
      zh: "《孔雀石祷文》",
    },
    principle: {
      id: "moon",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moon_8_to_a_pale_lady",
    displayName: {
      en: "To a Pale Lady",
      zh: "《致苍白女士》",
    },
    principle: {
      id: "moon",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_10_codex_acephali",
    displayName: {
      en: "Codex Acephali",
      zh: "《无颅医典》",
    },
    principle: {
      id: "moon",
      amount: 10,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "moon_10_observations_on_the_peacock_door",
    displayName: {
      en: "Observations on the Peacock Door",
      zh: "《孔雀之门观测记录》",
    },
    principle: {
      id: "moon",
      amount: 10,
    },
    language: "vak",
    format: "codex",
    memoryId: "memory_contradiction"
  },
  {
    id: "moon_10_the_queens_turn",
    displayName: {
      en: "The Queen's Turn",
      zh: "《女王的转变》",
    },
    principle: {
      id: "moon",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "moon_10_the_three_and_the_three_kerisham_manuscript",
    displayName: {
      en: "The Three and the Three (Kerisham Manuscript)",
      zh: "《三者与三者》（凯尔伊苏姆抄本）",
    },
    principle: {
      id: "moon",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "moon_12_the_black_book_of_brittany",
    displayName: {
      en: "The Black Book of Brittany",
      zh: "《布列塔尼黑书》",
    },
    principle: {
      id: "moon",
      amount: 12,
    },
    format: "codex",
    memoryId: "bittersweet_certainty"
  },
  {
    id: "moon_14_enchiridion_tragularis",
    displayName: {
      en: "Enchiridion Tragularis",
      zh: "《图拉古拉里指南》",
    },
    principle: {
      id: "moon",
      amount: 14,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "moon_14_the_secret_colours",
    displayName: {
      en: "The Secret Colours",
      zh: "《秘密色彩》",
    },
    principle: {
      id: "moon",
      amount: 14,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "moon_14_the_three_and_the_three_vatican_manuscript",
    displayName: {
      en: "The Three and the Three (Vatican Manuscript)",
      zh: "《三者与三者》（梵蒂冈抄本）",
    },
    principle: {
      id: "moon",
      amount: 14,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "moon_16_nix_abolix",
    displayName: {
      en: "Nix Abolix",
      zh: "《尼克斯·阿波利克斯》",
    },
    principle: {
      id: "moon",
      amount: 16,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "moon_18_the_three_and_the_three_st_chiavi_manuscript",
    displayName: {
      en: "The Three and the Three (St Chiavi Manuscript)",
      zh: "《三者与三者》（圣基亚维抄本）",
    },
    principle: {
      id: "moon",
      amount: 18,
    },
    format: "codex",
    memoryId: "numen_three_rules"
  },
  {
    id: "moon_18_the_voyages_of_ferninshun_of_oreol",
    displayName: {
      en: "The Voyages of Ferninshun of Oreol",
      zh: "《奥莱尔的斐宁舜之远航记》",
    },
    principle: {
      id: "moon",
      amount: 18,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_salt"
  },
  //Moth Books
  {
    id: "moth_4_the_six_letters_on_necessity",
    displayName: {
      en: "The Six Letters on Necessity",
      zh: "《须知六函》",
    },
    principle: {
      id: "moth",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "moth_6_the_carbonek_schism",
    displayName: {
      en: "The Carbonek Schism",
      zh: "《卡本内克裂教》",
    },
    principle: {
      id: "moth",
      amount: 6,
    },
    language: "sabazine",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "moth_6_the_kitling_ripe_and_the_moldywarp_s_grave",
    displayName: {
      en: "Kitling Ripe and the Moldywarp's Grave (and Other Stories)",
      zh: "《老成仔猫与鼹鼠的坟墓（及其他故事）》",
    },
    principle: {
      id: "moth",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_6_on_matthias_and_the_amethyst_imago_loss",
    displayName: {
      en: "On Matthias and the Amethyst Imago: Loss",
      zh: "《马提亚斯与紫晶成虫：失去》",
    },
    principle: {
      id: "moth",
      amount: 6,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "memory_a_stolen_secret"
  },
  {
    id: "moth_6_the_shaven_lock_tantra",
    displayName: {
      en: "The Shaven Lock Tantra",
      zh: "《剃度密续》",
    },
    principle: {
      id: "moth",
      amount: 6,
    },
    language: "sanskrit",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_8_the_fire_circle_tantra",
    displayName: {
      en: "The Fire-Circle Tantra",
      zh: "《旋火密续》",
    },
    principle: {
      id: "moth",
      amount: 8,
    },
    language: "sanskrit",
    format: "scroll",
    memoryId: "memory_intuition"
  },
  {
    id: "moth_8_the_rose_of_hypatia",
    displayName: {
      en: "The Rose of Hypatia",
      zh: "《希帕提娅宝训集》",
    },
    principle: {
      id: "moth",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "moth_8_the_silver_book",
    displayName: {
      en: "The Silver Book",
      zh: "《银之书》",
    },
    principle: {
      id: "moth",
      amount: 8,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_10_the_debate_of_seven_cups",
    displayName: {
      en: "The Debate of Seven Cups",
      zh: "《七杯之辩》",
    },
    principle: {
      id: "moth",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_10_an_echo_of_silence",
    displayName: {
      en: "An Echo of Silence",
      zh: "《寂静回声》",
    },
    principle: {
      id: "moth",
      amount: 10,
    },
    language: "sabazine",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_10_from_history_to_eternity",
    displayName: {
      en: "From History to Eternity",
      zh: "《从历史到永恒》",
    },
    principle: {
      id: "moth",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "moth_10_kopralith_omphalos",
    displayName: {
      en: "Kopralith Omphalos",
      zh: "《翁法洛斯粪化石》",
    },
    principle: {
      id: "moth",
      amount: 10,
    },
    language: "killasimi",
    format: "tablet",
    memoryId: "numen_weaving_the_world"
  },
  {
    id: "moth_12_the_geminiad_iii",
    displayName: {
      en: "The Geminiad iii",
      zh: "《双生姝丽·卷三》",
    },
    principle: {
      id: "moth",
      amount: 12,
    },
    language: "fucine",
    format: "codex",
    memoryId: "beguiling_melody"
  },
  {
    id: "moth_12_the_serenity_of_the_black_wood",
    displayName: {
      en: "The Serenity of the Black Wood",
      zh: "《黑林地的静谧》",
    },
    principle: {
      id: "moth",
      amount: 12,
    },
    language: "greek",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "moth_14_the_book_of_masks",
    displayName: {
      en: "The Book of Masks",
      zh: "《面具之书》",
    },
    principle: {
      id: "moth",
      amount: 14,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_14_five_creations",
    displayName: {
      en: "Five Creations",
      zh: "《五大创造论》",
    },
    principle: {
      id: "moth",
      amount: 14,
    },
    language: "vak",
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "moth_14_inaam_kapigiginlupir_garkie_cryppys",
    displayName: {
      en: "Inaam, Kapigiginlupir, Garkie, Cryppys",
      zh: "《伊纳姆、卡皮吉吉努皮尔、加尔基、克雷皮斯》",
    },
    principle: {
      id: "moth",
      amount: 14,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "moth_14_white_jade_tablet",
    displayName: {
      en: "White Jade Tablet",
      zh: "《白玉碑文》",
    },
    principle: {
      id: "moth",
      amount: 14,
    },
    language: "cracktrack",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "moth_16_the_songs_of_the_carapace_cross",
    displayName: {
      en: "The Songs of the Carapace Cross",
      zh: "《介壳种之歌》",
    },
    principle: {
      id: "moth",
      amount: 16,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "moth_21_plantagenet_mysteries",
    displayName: {
      en: "Plantagenet Mysteries",
      zh: "《金雀花王朝之谜》",
    },
    principle: {
      id: "moth",
      amount: 21,
    },
    language: "deep_mandaic",
    format: "multitudinous",
    memoryId: "memory_foresight"
  },
  //Nectar Books
 {
    id: "nectar_4_de_horis_book_1",
    displayName: {
      en: "De Horis book 1",
      zh: "《司辰志1》",
    },
    principle: {
      id: "nectar",
      amount: 4,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_impulse"
  }, 
  {
    id: "nectar_4_kitling_ripes_tasty_treats",
    displayName: {
      en: "Kitling Ripe's Tasty Treats",
      zh: "《老成仔猫的美味佳肴》",
    },
    principle: {
      id: "nectar",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_satisfaction"
  }, 
  {
    id: "nectar_4_the_most_sorrowful_end_of_the_lady_nonna",
    displayName: {
      en: "The Most Sorrowful End of the Lady Nonna",
      zh: "《诺娜女士的至悲结局》",
    },
    principle: {
      id: "nectar",
      amount: 4,
    },
    language: "kernewek_henavek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "nectar_4_three_flowers_hath_the_tree",
    displayName: {
      en: "Three Flowers Hath the Tree",
      zh: "《树生三花》",
    },
    principle: {
      id: "nectar",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "nectar_6_fekris_herbary",
    displayName: {
      en: "Fekri's Herbary",
      zh: "《费克里的草药学》",
    },
    principle: {
      id: "nectar",
      amount: 6,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "nectar_6_honey_the_comprehensive_guide",
    displayName: {
      en: "Honey: the Comprehensive Guide",
      zh: "《蜂蜜：综合指南》",
    },
    principle: {
      id: "nectar",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_contradiction"
  },
  {
    id: "nectar_6_the_shadow_in_the_stair",
    displayName: {
      en: "The Shadow in the Stair",
      zh: "《楼梯中的阴影》",
    },
    principle: {
      id: "nectar",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "nectar_8_the_bee_keepers_ends",
    displayName: {
      en: "The Bee-Keeper's Ends",
      zh: "《养蜂人的目标》",
    },
    principle: {
      id: "nectar",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "nectar_8_the_berrybook",
    displayName: {
      en: "The Berrybook",
      zh: "《浆果之书》",
    },
    principle: {
      id: "nectar",
      amount: 8,
    },
    language: "killasimi",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "nectar_8_de_ratio_quercuum",
    displayName: {
      en: "De Ratio Quercuum",
      zh: "《De Ratio Quercuum》",
    },
    principle: {
      id: "nectar",
      amount: 8,
    },
    language: "latin",
    format: "codex",
    memoryId: "earth_sign"
  },
  {
    id: "nectar_10_green_jasper_tablet",
    displayName: {
      en: "Green Jasper Tablet",
      zh: "《碧玉碑文》",
    },
    principle: {
      id: "nectar",
      amount: 10,
    },
    language: "cracktrack",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "nectar_10_serpent_root",
    displayName: {
      en: "Serpent-Root",
      zh: "《巨蛇根茎》",
    },
    principle: {
      id: "nectar",
      amount: 10,
    },
    language: "cracktrack",
    format: "tablet",
    memoryId: "numen_loopholes"
  },
  {
    id: "nectar_10_the_writing_on_the_wall",
    displayName: {
      en: "The Writing on the Wall",
      zh: "《壁上文字》",
    },
    principle: {
      id: "nectar",
      amount: 10,
    },
    language: "vak",
    format: "thing",
    memoryId: "numen_an_irresistible_feast"
  },
  {
    id: "nectar_12_cucurbit_prisoner_records_1927",
    displayName: {
      en: "Cucurbit Prisoner Records 1927",
      zh: "《炼金瓶监狱囚犯记录·1927》",
    },
    principle: {
      id: "nectar",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  //Rose Books
  {
    id: "rose_6_the_book_of_the_centipede",
    displayName: {
      en: "The Book of the Centipede",
      zh: "《蜈蚣之书》",
    },
    principle: {
      id: "rose",
      amount: 6,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "rose_6_just_verse",
    displayName: {
      en: "Just Verse",
      zh: "《漫赋诗篇》",
    },
    principle: {
      id: "rose",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "rose_6_letters_from_a_fugitive",
    displayName: {
      en: "Letters from a Fugitive",
      zh: "《逃亡者信笺集》",
    },
    principle: {
      id: "rose",
      amount: 6,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "rose_8_the_concursum_diaries",
    displayName: {
      en: "The Concursum Diaries",
      zh: "《聚点日记》",
    },
    principle: {
      id: "rose",
      amount: 8,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "rose_10_book_of_miah",
    displayName: {
      en: "Book of Miah",
      zh: "《弥阿之书》",
    },
    principle: {
      id: "rose",
      amount: 10,
    },
    language: "hyksos",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "rose_10_the_radical_measure",
    displayName: {
      en: "The Radical Measure",
      zh: "《激进举措》",
    },
    principle: {
      id: "rose",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "rose_10_the_turquoise_hand",
    displayName: {
      en: "The Turquoise Hand",
      zh: "《绿松石之手》",
    },
    principle: {
      id: "rose",
      amount: 10,
    },
    language: "ramsund",
    format: "codex",
    memoryId: "numen_that_old_lost_music"
  },
  {
    id: "rose_12_the_radical_measure_glossed",
    displayName: {
      en: "The Radical Measure (Glossed)",
      zh: "《激进举措》（润色版）",
    },
    principle: {
      id: "rose",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "rose_12_the_red_book_of_brittany",
    displayName: {
      en: "The Red Book of Brittany",
      zh: "《布列塔尼红书》",
    },
    principle: {
      id: "rose",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_satisfaction"
  },
  {
    id: "rose_14_the_history_of_inks",
    displayName: {
      en: "The History of Inks",
      zh: "《诸墨之史》",
    },
    principle: {
      id: "rose",
      amount: 14,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "rose_14_isaac_of_karths_history_of_the_shadowless_kings",
    displayName: {
      en: "Isaac of Karth's History of the Shadowless Kings",
      zh: "《卡斯的艾萨克的无影众王史》",
    },
    principle: {
      id: "rose",
      amount: 14,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "rose_14_a_novel_method_for_invocation_n_contrition",
    displayName: {
      en: "A Novel Method for Invocation & Contrition",
      zh: "《祈求与悔过之奇思妙法》",
    },
    principle: {
      id: "rose",
      amount: 14,
    },
    language: "ericapaean",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "rose_16_where_has_she_gone",
    displayName: {
      en: "Where Has She Gone?",
      zh: "《她去到过何地？》",
    },
    principle: {
      id: "rose",
      amount: 16,
    },
    language: "vak",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "rose_18_a_tower_rises",
    displayName: {
      en: "A Tower Rises",
      zh: "《塔之攀升》",
    },
    principle: {
      id: "rose",
      amount: 18,
    },
    language: "vak",
    format: "phonograph_record",
    memoryId: "confounding_parable"
  },
  //Scale Books
  {
    id: "scale_4_one_hundred_and_eight",
    displayName: {
      en: "One Hundred And Eight",
      zh: "《一百零八》",
    },
    principle: {
      id: "scale",
      amount: 4,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "scale_4_the_queens_of_the_rivers",
    displayName: {
      en: "The Queens of the Rivers",
      zh: "《河川诸女王》",
    },
    principle: {
      id: "scale",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "scale_4_recordings_from_the_althiban_abyss",
    displayName: {
      en: "Recordings from the Althiban Abyss",
      zh: "《阿什班深渊的录音带》",
    },
    principle: {
      id: "scale",
      amount: 4,
    },
    language: "deep_mandaic",
    format: "phonograph_record",
    memoryId: "memory_fear"
  },
  {
    id: "scale_4_stolen_histories",
    displayName: {
      en: "Stolen Histories",
      zh: "《遭窃的历史》",
    },
    principle: {
      id: "scale",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "scale_6_the_encircling_tantra",
    displayName: {
      en: "The Encircling Tantra",
      zh: "《盘绕密续》",
    },
    principle: {
      id: "scale",
      amount: 6,
    },
    format: "codex",
    language: "sanskrit",
    memoryId: "memory_fear"
  },
  {
    id: "scale_6_key_of_night",
    displayName: {
      en: "Key of Night",
      zh: "《黑夜之钥》",
    },
    principle: {
      id: "scale",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "scale_6_the_republic_of_teeth",
    displayName: {
      en: "The Republic of Teeth",
      zh: "《毒牙的共和》",
    },
    principle: {
      id: "scale",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "scale_6_singlefoot_songs",
    displayName: {
      en: "Singlefoot Songs",
      zh: "《夔牛之歌》",
    },
    principle: {
      id: "scale",
      amount: 6,
    },
    format: "codex",
    memoryId: "savage_hymn"
  },
  {
    id: "scale_8_ascite_supplications",
    displayName: {
      en: "Ascite Supplications",
      zh: "《斫解石祷文》",
    },
    principle: {
      id: "scale",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "scale_8_the_hissing_key",
    displayName: {
      en: "The Hissing Key",
      zh: "《嘶鸣之钥》",
    },
    principle: {
      id: "scale",
      amount: 8,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "scale_8_hunting_journals_of_bryan_dewulf",
    displayName: {
      en: "Hunting Journals of Bryan Dewulf",
      zh: "《布莱恩·德沃尔夫的狩猎日志》",
    },
    principle: {
      id: "scale",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "scale_8_it_is_written",
    displayName: {
      en: "It Is Written",
      zh: "《青史已著》",
    },
    principle: {
      id: "scale",
      amount: 8,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "scale_8_the_tantra_of_worms",
    displayName: {
      en: "The Tantra of Worms",
      zh: "《蠕虫密续》",
    },
    principle: {
      id: "scale",
      amount: 8,
    },
    language: "sanskrit",
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "scale_10_ud_rocashaas",
    displayName: {
      en: "Ud Rocashaas",
      zh: "《Ud Rocashaas》",
    },
    principle: {
      id: "scale",
      amount: 10,
    },
    language: "kernewek_henavek",
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "scale_12_cucurbit_prisoner_records_1928",
    displayName: {
      en: "Cucurbit Prisoner Records 1928",
      zh: "《炼金瓶监狱囚犯记录·1928》",
    },
    principle: {
      id: "scale",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "scale_14_medusas_lament",
    displayName: {
      en: "Medusa's Lament",
      zh: "《美杜莎的哀叹》",
    },
    principle: {
      id: "scale",
      amount: 14,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "scale_21_echidnalia",
    displayName: {
      en: "Echidnalia",
      zh: "《厄客德娜家族》",
    },
    principle: {
      id: "scale",
      amount: 21,
    },
    language: "cracktrack",
    format: "multitudinous",
    memoryId: "memory_impulse"
  },
  //Sky Books
  {
    id: "sky_4_the_humours_of_a_gentleman",
    displayName: {
      en: "The Humours of a Gentleman",
      zh: "《绅士笑话集》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_gossip"
  },
  {
    id: "sky_4_journal_of_thomas_dewulf",
    displayName: {
      en: "Journal of Thomas Dewulf",
      zh: "《托马斯·德沃尔夫的日志》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_salt"
  },
  {
    id: "sky_4_the_locksmiths_dream_portions_and_proportions",
    displayName: {
      en: "The Locksmith's Dream: Portions and Proportions",
      zh: "《锁匠的梦境：构成和大小》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "sky_4_the_locksmiths_dream_stolen_reflections",
    displayName: {
      en: "The Locksmith's Dream: Stolen Reflections",
      zh: "《锁匠的梦境：被盗的倒影》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "sky_4_perugian_diaries",
    displayName: {
      en: "Perugian Diaries",
      zh: "《佩鲁贾日记》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "cheerful_ditty"
  },
  {
    id: "sky_4_seven_faces_of_icarus",
    displayName: {
      en: "Seven Faces of Icarus",
      zh: "《伊卡洛斯的七副面孔》",
    },
    principle: {
      id: "sky",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "sky_6_against_the_sisterhood_of_the_knot",
    displayName: {
      en: "Against the Sisterhood of the Knot and the Foulness of their Depraved Customs",
      zh: "《对绳结姐妹会与其堕落习俗之批判》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_intuition"
  },
  {
    id: "sky_6_against_vitruvius",
    displayName: {
      en: "Against Vitruvius",
      zh: "《驳维特鲁威乌斯》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "sky_6_evas_treasury",
    displayName: {
      en: "Eva's Treasury",
      zh: "《伊娃的宝藏》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "sky_6_the_fallen_cross",
    displayName: {
      en: "The Fallen Cross",
      zh: "《衰落的介壳种》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "sky_6_on_resonance",
    displayName: {
      en: "On Resonance",
      zh: "《论共振》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "sky_6_on_what_is_contained_by_silver",
    displayName: {
      en: "On What is Contained By Silver",
      zh: "《论困于银镜之物》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    language: "greek",
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "sky_6_travelling_at_night_vol_2",
    displayName: {
      en: "Travelling at Night, vol 2",
      zh: "《夜游漫记·卷二》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "sky_6_a_true_history_of_valentine_dewulf",
    displayName: {
      en: "A True History of Valentine Dewulf",
      zh: "《瓦伦丁·德沃尔夫之真实历史》",
    },
    principle: {
      id: "sky",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_fear"
  },
  {
    id: "sky_8_damascene_traditions_of_the_house_of_lethe",
    displayName: {
      en: "Damascene Traditions of the House of Lethe",
      zh: "《遗忘家族的大马士革部之传统》",
    },
    principle: {
      id: "sky",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_impulse"
  },
  {
    id: "sky_8_a_seventh_voice",
    displayName: {
      en: "A Seventh Voice",
      zh: "《第七音》",
    },
    principle: {
      id: "sky",
      amount: 8,
    },
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "sky_10_de_motu_corporum_vetitorum",
    displayName: {
      en: "De motu corporum vetitorum",
      zh: "《De motu corporum vetitorum》",
    },
    principle: {
      id: "sky",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_storm"
  },
  {
    id: "sky_10_opening_the_sky",
    displayName: {
      en: "Opening the Sky",
      zh: "《开启天穹》",
    },
    principle: {
      id: "sky",
      amount: 10,
    },
    format: "phonograph_record",
    memoryId: "cheerful_ditty"
  },
  {
    id: "sky_10_the_other_eye_of_the_serpent",
    displayName: {
      en: "The Other Eye of the Serpent",
      zh: "《蛇的另一只眼》",
    },
    principle: {
      id: "sky",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_pattern"
  },
  {
    id: "sky_10_shuritic_book_of_suns",
    displayName: {
      en: "Shuritic Book of Suns",
      zh: "《Shuritic Book of Suns》",
    },
    principle: {
      id: "sky",
      amount: 10,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "numen_the_great_counterfeit"
  },
  {
    id: "sky_10_sunset_celia_and_the_end_of_days",
    displayName: {
      en: "Sunset Celia and the End of Days",
      zh: "《日落西莉亚与白日终末》",
    },
    principle: {
      id: "sky",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_foresight"
  },
  {
    id: "sky_12_the_invisible_opera_unfinished_recording",
    displayName: {
      en: "The Invisible Opera (Unfinished Recording)",
      zh: "《无形歌剧》（未完成版）",
    },
    principle: {
      id: "sky",
      amount: 12,
    },
    format: "phonograph_record",
    memoryId: "cheerful_ditty"
  },
  {
    id: "sky_12_the_lion_and_the_glass",
    displayName: {
      en: "The Lion and the Glass",
      zh: "《狮子与玻璃》",
    },
    principle: {
      id: "sky",
      amount: 12,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "sky_12_the_mirror_of_melancthe",
    displayName: {
      en: "The Mirror of Melancthe",
      zh: "《梅兰瑟之镜》",
    },
    principle: {
      id: "sky",
      amount: 12,
    },
    format: "codex",
    memoryId: "memory_solace"
  },
  {
    id: "sky_14_each_flame_his_fuel",
    displayName: {
      en: "Each Flame His Fuel",
      zh: "《每束火焰皆有其燃料》",
    },
    principle: {
      id: "sky",
      amount: 14,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "sky_16_the_book_of_the_white_cat",
    displayName: {
      en: "The Book of the White Cat",
      zh: "《白猫之书》",
    },
    principle: {
      id: "sky",
      amount: 16,
    },
    language: "phrygian",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "sky_16_the_focus_of_amber",
    displayName: {
      en: "The Focus of Amber",
      zh: "《琥珀之光》",
    },
    principle: {
      id: "sky",
      amount: 16,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_revelation"
  },
  {
    id: "sky_16_the_origins_of_hours",
    displayName: {
      en: "The Origins of Hours",
      zh: "《司辰的起源》",
    },
    principle: {
      id: "sky",
      amount: 16,
    },
    language: "vak",
    format: "codex",
    memoryId: "confounding_parable"
  },
  {
    id: "sky_18_in_the_mountains_as_upon_the_plain",
    displayName: {
      en: "In The Mountains As Upon The Plain There May Not Be A Path Where None Has Passed",
      zh: "《山中亦如平川，许无前人未达之途》",
    },
    principle: {
      id: "sky",
      amount: 18,
    },
    language: "vak",
    format: "codex",
    memoryId: "memory_gossip"
  },
  //Winter Books
  {
    id: "winter_4_annals_of_st_brandans",
    displayName: {
      en: "Annals of St Brandan's",
      zh: "《圣布伦丹编年史》",
    },
    principle: {
      id: "winter",
      amount: 4,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_4_an_introduction_to_histories",
    displayName: {
      en: "An Introduction to Histories",
      zh: "《诸史导论》",
    },
    principle: {
      id: "winter",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_4_lady_evas_repose",
    displayName: {
      en: "Lady Eva's Repose",
      zh: "《伊娃女士的安息》",
    },
    principle: {
      id: "winter",
      amount: 4,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_6_chione_at_abydos",
    displayName: {
      en: "Chione at Abydos",
      zh: "《喀俄涅在阿拜多斯城》",
    },
    principle: {
      id: "winter",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_6_the_five_letters_on_memory",
    displayName: {
      en: "The Five Letters On Memory",
      zh: "《记忆五函》",
    },
    principle: {
      id: "winter",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_6_oblations_in_iron",
    displayName: {
      en: "Oblations in Iron",
      zh: "《铁之祭献》",
    },
    principle: {
      id: "winter",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_6_on_the_white",
    displayName: {
      en: "On the White",
      zh: "《论纯白》",
    },
    principle: {
      id: "winter",
      amount: 6,
    },
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_6_those_indignities_perpetrated_by_the_deceitful_fraternity_of_obliviates",
    displayName: {
      en: "Those Indignities Perpetrated By the Deceitful Fraternity of Obliviates",
      zh: "《惯于欺瞒的忘却互助会造成的种种侮辱伤害》",
    },
    principle: {
      id: "winter",
      amount: 6,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_contradiction"
  },
  {
    id: "winter_8_ettery_after",
    displayName: {
      en: "Ettery After",
      zh: "《伊特丽的结局》",
    },
    principle: {
      id: "winter",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_8_exercises_in_the_continuity_of_self",
    displayName: {
      en: "Exercises in the Continuity of Self",
      zh: "《延续自我之术》",
    },
    principle: {
      id: "winter",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_8_the_ivory_book",
    displayName: {
      en: "The Ivory Book",
      zh: "《白骨之书》",
    },
    principle: {
      id: "winter",
      amount: 8,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_8_musgraves_sketches",
    displayName: {
      en: "Musgrave's Sketches",
      zh: "《马斯格雷夫的素描》",
    },
    principle: {
      id: "winter",
      amount: 8,
    },
    format: "codex",
    memoryId: "bittersweet_certainty"
  },
  {
    id: "winter_8_operations_of_a_certain_finality",
    displayName: {
      en: "Operations of a Certain Finality",
      zh: "《通往必然终结之手段》",
    },
    principle: {
      id: "winter",
      amount: 8,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_10_the_barrowchilds_elegies",
    displayName: {
      en: "The Barrowchild's Elegies",
      zh: "《坟茔之子的挽歌》",
    },
    principle: {
      id: "winter",
      amount: 10,
    },
    language: "latin",
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_10_nyns_cages_bruges_text_illuminated",
    displayName: {
      en: "Nyn's Cages (Bruges Text, Illuminated)",
      zh: "《宁之囚笼》（布鲁日插画版）",
    },
    principle: {
      id: "winter",
      amount: 10,
    },
    language: "ericapaean",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_10_towards_a_fundamental_aesthetic_second_edition",
    displayName: {
      en: "Towards a Fundamental Aesthetic: Second Edition",
      zh: "《走近基础美学：第二版》",
    },
    principle: {
      id: "winter",
      amount: 10,
    },
    language: "ericapaean",
    format: "codex",
    memoryId: "numen_a_final_understanding"
  },
  {
    id: "winter_10_the_white_book_of_brittany",
    displayName: {
      en: "The White Book of Brittany",
      zh: "《布列塔尼白书》",
    },
    principle: {
      id: "winter",
      amount: 10,
    },
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_10_the_world_does_not_weep",
    displayName: {
      en: "The World Does Not Weep",
      zh: "《世界从不落泪》",
    },
    principle: {
      id: "winter",
      amount: 10,
    },
    language: "aramaic",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_12_in_memory_of_gods",
    displayName: {
      en: "In Memory of Gods",
      zh: "《缅怀诸神》",
    },
    principle: {
      id: "winter",
      amount: 12,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_12_a_second_glory",
    displayName: {
      en: "A Second Glory",
      zh: "《第二辉光》",
    },
    principle: {
      id: "winter",
      amount: 12,
    },
    language: "deep_mandaic",
    format: "codex",
    memoryId: "memory_hindsight"
  },
  {
    id: "winter_14_the_scar_in_the_sky",
    displayName: {
      en: "The Scar in the Sky",
      zh: "《天宇中的伤疤》",
    },
    principle: {
      id: "winter",
      amount: 14,
    },
    language: "fucine",
    format: "codex",
    memoryId: "memory_regret"
  },
  {
    id: "winter_21_naenian_sketches",
    displayName: {
      en: "Naenian Sketches",
      zh: "《挽歌儿的速写》",
    },
    principle: {
      id: "winter",
      amount: 21,
    },
    language: "sabazine",
    format: "multitudinous",
    memoryId: "memory_hindsight"
  }
];