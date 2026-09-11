"use client";

import { useEffect, useState } from "react";

import type { Memory } from "@/types/memory";
import type { Language } from "@/data/i18n";

import { translations } from "@/data/i18n";
import { books } from "@/data/books";
import { craftables } from "@/data/craftables";

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

      {/* Principles */}
      <section className="mt-12">
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
      </section>

      {/* Evolve Via */}
{memory.evolveVia && memory.evolveVia.length > 0 && (
  <section className="mt-8">
    ...
  </section>
)}

<div className="mt-12 border-t border-ink/20 pt-12">
      {/* Book Sources */}
      {memoryBooks.length > 0 && (
        <section>
          <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
            {t.bookSources}
          </h3>

          <div className="mt-4 space-y-3">
            {memoryBooks.map((book) => (
              <div
                key={book.id}
                className="flex items-center gap-3"
              >
                <div className="flex min-w-[70px] items-center gap-1">
                  <img
                    src={`/icons/principles/principle.${book.principle.id}.png`}
                    alt={book.principle.id}
                    className="h-6 w-6 object-contain"
                  />

                  <span className="text-base text-ink">
                    {book.principle.amount}
                  </span>
                </div>

                <div>
                  <p className="text-lg text-ink">
                    {book.displayName[language]}
                  </p>

                  <p className="text-sm text-ink/50">
                    {t.bookFormats[book.format]}
{book.language && ` | ${t.bookLanguages[book.language]}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Sources */}
      {sources.length > 0 && (
  <section className="mt-12">
    <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
      {t.sources}
    </h3>

    <div className="mt-4 space-y-3">
      {sources.map((source) => (
        <div
          key={`${source.sourceType}-${source.id}`}
          className="flex items-center gap-3"
        >
          <span className="text-sm uppercase tracking-wide text-ink/50">
            {source.action === "study" ? "👁" : "👄"}
          </span>

          <span className="text-lg text-ink">
            {source.id}
          </span>

          {source.guaranteed === false && (
            <span className="text-sm italic text-ink/50">
              {t.possible}
            </span>
          )}
        </div>
      ))}
    </div>
  </section>
)}

{/* Crafting */}
      {methods.length > 0 && (
        <div className="relative mt-12 md:flex md:items-start md:gap-10">
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