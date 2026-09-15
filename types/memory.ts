import type { CraftableMethod } from "./crafting";

export type MemoryType =
  | "weather"
  | "temporary"
  | "persistent"
  | "numen";

export type MemorySourceAction =
  | "consider"
  | "conversation"
  | "activity";

export type MemorySourceType =
  | "item"
  | "craftable"
  | "person"
  | "animal"
  | "text";

export interface MemorySource {
  action: MemorySourceAction;
  id?: string;
  sourceType: MemorySourceType;
  text?: {
    en: string;
    zh: string;
  };
  guaranteed?: boolean;
}

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

  sources?: MemorySource[];

  evolveVia?: string[];

  icon: string;

  note?: {
    en: string[];
    zh: string[];
  };
}