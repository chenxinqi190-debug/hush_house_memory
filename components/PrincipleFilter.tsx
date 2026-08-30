const PRINCIPLES = [
  "edge",
  "forge",
  "grail",
  "heart",
  "knock",
  "lantern",
  "moon",
  "moth",
  "nectar",
  "rose",
  "scale",
  "sky",
  "winter",
];

interface PrincipleFilterProps {
  selectedPrincipleId: string | null;
  onSelectPrinciple: (id: string | null) => void;
}

export default function PrincipleFilter({
  selectedPrincipleId,
  onSelectPrinciple,
}: PrincipleFilterProps) {
  return (
    <div className="px-4 pb-2 md:pb-8">
      <div className="flex flex-wrap gap-2">
        {PRINCIPLES.map((principleId) => {
          const isSelected = selectedPrincipleId === principleId;

          return (
            <button
              key={principleId}
              type="button"
              onClick={() =>
                onSelectPrinciple(isSelected ? null : principleId)
              }
              aria-label={principleId}
              className={`flex h-11 w-11 items-center justify-center rounded-md border transition ${
                isSelected
                  ? "border-ink/60 bg-ink/10"
                  : "border-transparent hover:border-ink/20"
              }`}
            >
              <img
                src={`/icons/principles/principle.${principleId}.png`}
                alt={principleId}
                className="max-h-7 max-w-7 object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}