"use client";

import { Language } from "@/data/i18n";

interface CategoryItem {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
}

interface CategorySectionProps {
  label: string;
  craftables: CategoryItem[];
  isOpen: boolean;
  onToggle: () => void;
  selectedCraftableId: string | null;
  onSelectCraftable: (id: string) => void;
  language: Language;
}

export default function CategorySection({
  label,
  craftables,
  isOpen,
  onToggle,
  selectedCraftableId,
  onSelectCraftable,
  language,
}: CategorySectionProps) {
  return (
    <div className="border-b border-ink/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-2 py-3 text-left"
      >
        <span className="text-lg tracking-[0.15em] uppercase text-ink">
          {label}
        </span>
        <span aria-hidden="true" className="text-ink/40">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pl-3">
          {craftables.length > 0 ? (
            <ul className="space-y-3">
              {craftables.map((craftable) => {
                const isSelected = craftable.id === selectedCraftableId;
                return (
                  <li key={craftable.id}>
                    <button
                      type="button"
                      onClick={() => onSelectCraftable(craftable.id)}
                      aria-current={isSelected ? "true" : undefined}
                      className={`block w-full text-left text-lg leading-relaxed ${
                        isSelected
                          ? "text-ink"
                          : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      {craftable.displayName[language]}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xs italic text-ink/40">
              No craftables archived here yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
