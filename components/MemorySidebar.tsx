"use client";

import { useState } from "react";
import {
  Memory, MemoryType
} from "@/types/memory";
import SearchBar from "./SearchBar";
import PrincipleFilter from "./PrincipleFilter";
import CategorySection from "./CategorySection";
import { Language, translations } from "@/data/i18n";

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  memories: Memory[];
  selectedMemoryId: string | null;
  onSelectMemory: (id: string) => void;
  selectedPrincipleId: string | null;
  onSelectPrinciple: (id: string | null) => void;
  language: Language;
}

const MEMORY_CATEGORY_ORDER: MemoryType[] = [
  "weather",
  "temporary",
  "persistent",
  "numen"
];

export default function MemorySidebar({
  searchQuery,
  onSearchChange,
  memories,
  selectedMemoryId,
  onSelectMemory,
  selectedPrincipleId,
  onSelectPrinciple,
  language,
}: SidebarProps) {
  const t = translations[language];

  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set()
  );

  const isFiltering =
    searchQuery.trim() !== "" || selectedPrincipleId !== null;

  function toggleCategory(category: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);

      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }

      return next;
    });
  }

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-6 pb-4 md:pt-10 md:pb-20">
        <h1 className="text-4xl tracking-[0.1em] text-ink md:text-5xl">
          {t.archiveTitle}
        </h1>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
        language={language}
      />

      <PrincipleFilter
        selectedPrincipleId={selectedPrincipleId}
        onSelectPrinciple={onSelectPrinciple}
      />

      <div className="hidden px-4 pb-6 md:block">
        <p className="text-sm text-ink/60">{t.filterTip}</p>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-2">
        {MEMORY_CATEGORY_ORDER.map((category) => {
          const categoryMemories = memories.filter((memory) => memory.type === category);

          if (categoryMemories.length === 0) return null;

          return (
            <CategorySection
              key={category}
              label={t.types[category] ?? category}
              craftables={categoryMemories}
              isOpen={
                isFiltering
                  ? categoryMemories.length > 0
                  : openCategories.has(category)
              }
              onToggle={() => toggleCategory(category)}
              selectedCraftableId={selectedMemoryId}
              onSelectCraftable={onSelectMemory
              }
              language={language}
            />
          );
        })}
      </nav>
    </div>
  );
}