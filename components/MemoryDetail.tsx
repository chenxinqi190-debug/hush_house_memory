"use client";

import { useEffect, useState } from "react";

import type { Memory } from "@/types/memory";
import type { Language } from "@/data/i18n";

import { translations } from "@/data/i18n";
import { books } from "@/data/books";
import { craftables } from "@/data/craftables";
import { items } from "@/data/items";
import { wisdoms } from "@/data/wisdoms";

import FormulaSection from "@/components/FormulaSection";

interface MemoryDetailProps {
  memory: Memory | null;
  language: Language;
}

export default function MemoryDetail({
  memory,
  language,
}: MemoryDetailProps) {
  const t = translations[language];

  const [previewCraftableId, setPreviewCraftableId] =
    useState<string | null>(null);

  useEffect(() => {
    setPreviewCraftableId(null);
  }, [memory?.id]);

  if (!memory) {
    return (
      <div className="flex justify-center px-4 pt-20 md:h-full md:items-center md:pt-0">
        <p className="whitespace-pre-line text-3xl italic text-ink/80">
          {t.start}
        </p>
      </div>
    );
  }

  const memoryPrinciples = memory.principles ?? [];
  const methods = memory.methods ?? [];
  const sources = memory.sources ?? [];
  const considerSources = sources.filter(
  (source) => source.action === "consider"
);
const conversationSources = sources.filter(
  (source) => source.action === "conversation"
);
const activitySources = sources.filter(
  (source) => source.action === "activity"
);
const evolveVia = memory.evolveVia ?? [];
  const memoryBooks = books
    .filter((book) => book.memoryId === memory.id)
    .sort((a, b) => {
      const principleCompare = a.principle.id.localeCompare(
        b.principle.id
      );

      if (principleCompare !== 0) {
        return principleCompare;
      }

      return a.principle.amount - b.principle.amount;
    });

  const previewCraftable = previewCraftableId
    ? craftables.find(
        (craftable) => craftable.id === previewCraftableId
      ) ?? null
    : null;
  
    //Get source resolver 
const getSourceObject = (source: (typeof sources)[number]) => {
  if (!source.id) return null;

  return items[source.id] ?? null;
};

  return (
    <article className="w-full max-w-[1700px] px-8 pt-6 pb-14">
      {/* Category */}
      <p className="text-lg uppercase tracking-[0.2em] text-ink/80">
        {t.types[memory.type]}
      </p>

      {/* Title */}
      <h2 className="mt-2 text-4xl leading-snug text-ink">
        {memory.displayName[language]}
      </h2>

      {/* Icon */}
      <div className="mt-6 flex h-[150px] w-[150px] items-center justify-center">
        <img
          src={`/icons/${memory.icon}`}
          alt={memory.displayName[language]}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Description */}
      <p className="mt-12 whitespace-pre-line text-lg leading-relaxed text-ink">
        {memory.description[language]}
      </p>

{/* Principles + Evolve Via */}
<section
  className={`mt-12 grid gap-10 ${
    evolveVia.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"
  }`}
>
  {/* Principles */}
  <div>
    <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
      {t.principles}
    </h3>

    {memoryPrinciples.length > 0 ? (
      <div className="mt-3 flex flex-wrap gap-3">
        {memoryPrinciples.map((principle) => (
          <div
            key={principle.id}
            className="flex items-center gap-1"
          >
            <img
              src={`/icons/principles/principle.${principle.id}.png`}
              alt={principle.id}
              className="max-h-6 max-w-6 object-contain"
            />

            {(principle.amount ?? 1) > 1 && (
              <span className="text-base text-ink">
                {principle.amount}
              </span>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p className="mt-2 text-sm italic text-ink/40">
        {t.none}
      </p>
    )}
  </div>

  {/* Evolve Via */}
  {evolveVia.length > 0 && (
    <div>
      <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
        {t.evolveVia}
      </h3>

      <div className="mt-3 flex flex-wrap gap-4">
        {evolveVia.map((wisdomId) => {
          const wisdom = wisdoms[wisdomId];

          if (!wisdom) {
            console.warn(`Unknown wisdom id: ${wisdomId}`);
            return null;
          }

          return (
            <div
              key={wisdomId}
              className="flex items-center gap-2"
            >
              <img
                src={wisdom.icon}
                alt={wisdom.displayName[language]}
                className="h-8 w-8 object-contain"
              />

              <span className="text-lg text-ink">
                {wisdom.displayName[language]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  )}
</section>

{(memoryBooks.length > 0 ||
  sources.length > 0 ||
  methods.length > 0) && (
  <div className="mt-12 border-t border-ink/20 pt-10">
      {/* Book Sources */}
      {memoryBooks.length > 0 && (
  <section>
    <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
      {t.bookSources}
    </h3>

         <div className="mt-4 space-y-1">
  {memoryBooks.map((book) => (
    <div
      key={book.id}
      className="flex items-start gap-3 py-1"
    >
      <div className="flex min-w-[48px] items-center gap-1 pt-1">
        <img
          src={`/icons/principles/principle.${book.principle.id}.png`}
          alt={book.principle.id}
          className="h-6 w-6 object-contain"
        />

        <span className="text-base text-ink">
          {book.principle.amount}
        </span>
      </div>

      <div className="min-w-0">
        <p className="text-lg leading-tight text-ink">
          {book.displayName[language]}
        </p>

        <p className="mt-0.5 text-sm leading-tight text-ink/50">
          {t.bookFormats[book.format]}
          {book.language &&
            ` | ${t.bookLanguages[book.language]}`}
        </p>
      </div>
    </div>
  ))}
</div></section>
      )}

      {/* Other Sources */}
      {sources.length > 0 && (
  <section className={memoryBooks.length > 0 ? "mt-12" : ""}>
    <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
      {t.sources}
    </h3>

    <div className="mt-4 space-y-6">
  {/* Consider Sources */}
  {considerSources.length > 0 && (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <img
    src="/icons/action/consider.png"
    alt=""
    className="h-5 w-5 object-contain"
  />
        <span className="text-sm uppercase tracking-wide text-ink/50">
          {t.consider}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

  {considerSources.map((source, index) => {
    if (source.sourceType === "text") {
      return (
        <p
          key={`consider-text-${index}`}
          className="text-lg leading-snug text-ink sm:col-span-2 lg:col-span-3"
        >
          {source.text?.[language]}
        </p>
      );
    }

const sourceObject = getSourceObject(source);

if (!sourceObject) {
  console.warn(
    `Unknown source: ${source.sourceType} / ${source.id}`
  );
  return null;
}

return (
  <div
    key={`${source.sourceType}-${source.id}`}
    className="flex min-w-0 items-center gap-3"
  >
    <img
      src={sourceObject.icon}
      alt=""
      className="h-12 w-12 shrink-0 object-contain"
    />

    <span className="min-w-0 text-base leading-snug text-ink">
      {sourceObject.displayName[language]}
    </span>
  </div>
);
  })}
</div>
    </div>
  )}

  {/* Conversation Sources */}
  {conversationSources.length > 0 && (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <img
    src="/icons/action/conversation.png"
    alt=""
    className="h-5 w-5 object-contain"
  />
        <span className="text-sm uppercase tracking-wide text-ink/50">
          {t.conversation}
        </span>
      </div>

      <div className="space-y-3">
        {conversationSources.map((source) => (
          <div
            key={`${source.sourceType}-${source.id}`}
            className="text-lg text-ink"
          >
            {source.id}
          </div>
        ))}
      </div>
    </div>
  )}
  {/* Activity Sources */}
{activitySources.length > 0 && (
  <div className="space-y-2">
    {activitySources.map((source, index) => (
      <p
        key={`activity-${index}`}
        className="text-lg leading-snug text-ink"
      >
        {source.text?.[language]}
      </p>
    ))}
  </div>
)}
</div>
</section>
)}

{/* Crafting */}
      {methods.length > 0 && (
  <div
    className={`relative md:flex md:items-start md:gap-10 ${
      memoryBooks.length > 0 || sources.length > 0 ? "mt-12" : ""
    }`}
  >
          <section className="w-full min-w-0 md:w-[800px] md:shrink-0">
            {methods.map((method, index) => (
              <FormulaSection
                key={method.id}
                method={method}
                index={index}
                language={language}
                title={t.crafting}
                previewCraftableId={previewCraftableId}
                onOpenPreview={(craftableId) => {
                  setPreviewCraftableId((current) =>
                    current === craftableId
                      ? null
                      : craftableId
                  );
                }}
              />
            ))}
          </section>

          {previewCraftable && (
            <aside className="md:sticky md:top-6 md:w-[420px] md:shrink-0 md:border-l md:border-ink/20 md:pl-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl text-ink">
                  {previewCraftable.displayName[language]}
                </h2>

                <button
                  type="button"
                  onClick={() => setPreviewCraftableId(null)}
                  className="text-2xl leading-none text-ink/50 hover:text-ink"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <section className="mt-6">
                {previewCraftable.methods.map(
                  (method, index) => (
                    <FormulaSection
                      key={method.id}
                      method={method}
                      index={index}
                      language={language}
                      compact
                    />
                  )
                )}
              </section>
            </aside>
          )}
        </div>
      )}
      </div>
      )}

      {/* Note */}
      {memory.note && (
        <section className="mt-6">
          {memory.note[language].map((line, index) => (
            <p
              key={index}
              className="text-base italic leading-relaxed text-ink/60"
            >
              {line}
            </p>
          ))}
        </section>
      )}
    </article>
  );
}