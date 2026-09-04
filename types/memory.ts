import type { CraftableMethod } from "./crafting";
export type MemoryType =
  | "weather"
  | "temporary"
  | "persistent"
  | "numen";

export interface Memory {
  id: string;

  displayName: {
    en: string;
    zh: string;
  };

  description: {
    en: string;
    zh: string;
  };

  principles?: {
    id: string;
    amount?: number;
  }[];

  type: MemoryType;

  methods?: CraftableMethod[];

  bookSources?: string[];
  evolveVia?: string[];

  icon: string;

  note?: {
    en: string[];
    zh: string[];
  };
}