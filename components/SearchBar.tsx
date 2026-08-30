"use client";
import { Language, translations } from "@/data/i18n";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
}

export default function SearchBar({ value, onChange, language }: SearchBarProps) {
  const t = translations[language];
  return (
    <div className="px-4 pb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.search}
        aria-label="Search craftables"
        className="w-full border-b border-ink/20 bg-transparent px-0.5 py-1 text-xl text-ink placeholder:text-ink/60 focus:border-ink/60 focus:outline-none"
      />
    </div>
  );
}
