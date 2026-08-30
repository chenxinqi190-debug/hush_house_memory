import { CraftableMethod } from "@/types/crafting";
import { items } from "@/data/items";
import { skills } from "@/data/skills";
import { Language, translations } from "@/data/i18n";

interface FormulaSectionProps {
  method: CraftableMethod;
  index: number;
  language: Language;
  compact?: boolean;
  previewCraftableId?: string | null;
  onOpenPreview?: (craftableId: string) => void;
}

const romanNumerals = ["I", "II", "III", "IV", "V"];

export default function FormulaSection({
  method,
  index,
  language,
  compact = false,
  previewCraftableId,
  onOpenPreview,
}: FormulaSectionProps) {
  const t = translations[language];

  const hasPrinciple = !!method.principle;
  const hasSkills = !!method.skills?.length;
  const hasMaterials = !!method.requires?.length;
  const compactGridColumns =
  hasPrinciple && hasSkills && hasMaterials
    ? "72px 180px 120px"
    : hasPrinciple && hasSkills
      ? "72px 180px"
      : hasPrinciple && hasMaterials
        ? "72px 120px"
        : hasSkills && hasMaterials
          ? "180px 120px"
          : hasSkills
            ? "180px"
            : hasPrinciple
              ? "72px"
              : hasMaterials
                ? "120px"
                : undefined;
  const formulaGridClass =
    hasPrinciple && hasSkills && hasMaterials
      ? "md:grid-cols-[140px_360px_minmax(160px,1fr)]"
      : hasPrinciple && hasSkills
        ? "md:grid-cols-[140px_360px]"
        : hasPrinciple && hasMaterials
          ? "md:grid-cols-[140px_minmax(160px,1fr)]"
          : hasSkills && hasMaterials
            ? "md:grid-cols-[360px_minmax(160px,1fr)]"
            : hasSkills
              ? "md:grid-cols-[360px]"
              : hasPrinciple
                ? "md:grid-cols-[140px]"
                : hasMaterials
                  ? "md:grid-cols-[minmax(160px,1fr)]"
                  : "";

  return (
    <div
  className={
    compact
      ? "mb-6 border-t border-ink/10 pt-4"
      : "mb-10 border-t border-ink/10 pt-6"
  }
>
      <h3 className={compact
      ? "text-lg uppercase tracking-[0.16em] text-ink/70"
      : "text-2xl uppercase tracking-[0.2em] text-ink/80"}>
        {t.formula} {romanNumerals[index]}
      </h3>

      <div className={compact
      ? "mt-4 grid gap-5"
      : `mt-6 grid gap-8 ${formulaGridClass}`
  }
  style={
    compact && compactGridColumns
    ? { gridTemplateColumns: compactGridColumns }
      : undefined
  }
>
        {/* Required Principle */}
        {method.principle && (
          <div>
            <p className={compact
      ? "text-sm uppercase tracking-[0.06em] leading-tight text-ink/70"
      : "text-lg uppercase tracking-[0.08em] leading-tight text-ink/80"}>
              {t.requiredPrinciple}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <img
                src={`/icons/principles/principle.${method.principle.id}.png`}
                alt={method.principle.id}
                className="h-9 w-9 object-contain"
              />

              <span className="text-lg text-ink">
                {method.principle.amount}
              </span>
            </div>
          </div>
        )}

        {/* Skills */}
        {method.skills?.length ? (
          <div>
            <p className={compact
              ? "text-sm uppercase tracking-[0.06em] text-ink/70"
      : "text-lg uppercase tracking-[0.08em] text-ink/80"
            }>
              {t.skills}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-10">
              {method.skills.map((skillId) => {
                const skill = skills[skillId];

                return (
                  <div key={skill.id} className={compact ? "w-20" : "w-24"}>
                    <img
                      src={skill.image}
                      alt={skill.displayName[language]}
                      className={compact
                        ? "h-14 w-14 object-contain"
                        : "h-20 w-20 object-contain"}
                    />

                    <p className={compact
    ? "mt-1 text-xs leading-none text-ink"
    : "mt-2 text-sm leading-none text-ink"}>
                      {skill.displayName[language]}
                    </p>

                    <div className={"mt-2 flex flex-wrap gap-1"}>
                      {skill.principles.map((principleId) => (
                        <img
                          key={principleId}
                          src={`/icons/principles/principle.${principleId}.png`}
                          alt={principleId}
                          className="h-6 w-6 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Required Materials */}
        {method.requires?.length ? (
          <div>
            <p className={compact
      ? "text-sm uppercase tracking-[0.06em] text-ink/70"
      : "text-lg uppercase tracking-[0.08em] text-ink/80"}>
              {t.requires}
            </p>

            <div className="mt-3 flex flex-wrap gap-4">
              {method.requires.map((itemId) => {
                const item = items[itemId];
                const canPreview = Boolean(item.craftableId && onOpenPreview);
                const isSelected = item.craftableId === previewCraftableId;
                const content = (
          <>
            <img
              src={item.icon}
              alt={item.displayName[language]}
              className={
                compact
                  ? "h-10 w-10 object-contain"
                  : "h-14 w-14 object-contain"
              }
            />
 <span
              className={
                compact
                  ? "mt-1 text-xs leading-tight text-ink"
                  : "mt-2 text-sm text-ink"
              }
            >
              {item.displayName[language]}
            </span>

            {canPreview && (
      <span
        className={
          compact
            ? "mt-1 text-[10px] italic text-ink/50"
            : "mt-1 text-xs italic text-ink/50"
        }
      >
        {t.openCraftable}
      </span>
    )}
          </>
        );

        if (!canPreview) {
          return (
            <div
              key={item.id}
              className="flex w-24 flex-col items-center text-center"
            >
              {content}
            </div>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.craftableId) {
                onOpenPreview?.(item.craftableId);
              }
            }}
            className={`flex w-24 flex-col items-center rounded-sm px-1 py-1 text-center transition ${
              isSelected
                ? "bg-ink/10"
                : "cursor-pointer hover:bg-ink/5"
            }`}
          >
            {content}
          </button>
        );
      })}
    </div>
  </div>
) : null}
      </div>
    </div>
  );
}