import { Language } from "@/data/i18n";

interface LanguageSwitcherProps {
  language: Language;
  onChange: (language: Language) => void;
}

export default function LanguageSwitcher({
  language,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex justify-end gap-2 p-4 text-lg">
      <button
        onClick={() => onChange("en")}
        className={language === "en" ? "font-bold" : ""}
      >
        EN
      </button>

      <span>/</span>

      <button
        onClick={() => onChange("zh")}
        className={language === "zh" ? "font-bold" : ""}
      >
        中文
      </button>
    </div>
  );
}