export interface CraftableAspect {
  id: string;
  amount?: number;
}
export interface CraftableMethod {
  id: string; // method_1, method_2...
  principle?: {
    id: string;
    amount: number;
  };
  skills?: string[];
  requires?: string[];
}
export type CraftableType =
  | "beverage_n_intoxication"
  | "ink"
  | "pigment"
  | "tool"
  | "beast_n_remains"
  | "candle"
  | "metal"
  | "contamination"
  | "mark"
  | "other";
export interface Craftable {
  id: string; // internal id, never displayed
  displayName: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  principles?: CraftableAspect[]; // the item's own aspects
  methods: CraftableMethod[]; // crafting routes
  type: CraftableType[]; // sidebar/category use
  icon: string;
  note?: {
    en: string[];
    zh: string[];
  };
}

export const CATEGORY_ORDER: CraftableType[] = [
  "contamination",
  "beverage_n_intoxication",
  "ink",
  "beast_n_remains",
  "tool",
  "pigment",
  "candle",
  "metal",
  "mark",
  "other",
];

export interface Method {
  principle?: {
    id: string;
    amount: number;
  };

  skills?: string[];
  requires?: string[];
}
