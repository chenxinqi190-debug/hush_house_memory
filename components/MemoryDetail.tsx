"use client";

import { Memory } from "@/types/memory";
import { craftables } from "@/data/craftables";
import { items } from "@/data/items";
import { skills } from "@/data/skills";
import { Language, translations } from "@/data/i18n";
import { useEffect, useState } from "react";
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
  const previewCraftable = previewCraftableId
 ? craftables.find(
        (craftable) => craftable.id === previewCraftableId
      ) ?? null
    : null;

 const memoryPrinciples = memory.principles ?? [];
  const methods = memory.methods ?? [];

   return (
    <article className="w-full max-w-[1700px] px-8 pt-6 pb-14 md:ml-20">
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
          <div className="mt-2 flex flex-wrap gap-3">
            {[...memoryPrinciples]
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((principle) => (
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
          <p className="mt-2 text-sm italic text-ink/40">{t.none}</p>
        )}
      </section>

      {/* Methods */}
      <div className="relative mt-12 md:flex md:items-start md:gap-10">
<section className="w-full min-w-0 md:w-[800px] md:shrink-0">
{methods.map((method, index) => (
    <FormulaSection
      key={method.id}
      method={method}
      index={index}
      language={language}
      title={t.crafting}
       onOpenPreview={(craftableId) => {
  setPreviewCraftableId((current) =>
    current === craftableId ? null : craftableId
  );
}}
    />
  ))}
</section>

{previewCraftable && (
    <>
    <button
      type="button"
      aria-label="Close preview"
      onClick={() => setPreviewCraftableId(null)}
      className="fixed inset-0 z-40 bg-black/20 md:hidden"
    />
    <aside className={`fixed inset-x-0 bottom-0 z-50
      max-h-[78vh] overflow-y-auto overflow-x-hidden
      border-t border-ink/20 bg-parchment
      px-5 pt-5 pb-8 shadow-xl
      transition-transform duration-300 ease-out

      md:sticky md:top-6 md:left-auto md:right-auto md:bottom-auto
    md:z-auto md:ml-8 md:max-h-none md:w-[420px]
    md:shrink-0 md:overflow-visible
    md:border-l md:border-t-0
    md:bg-none md:bg-transparent md:pl-6 md:pr-0 md:pt-0 md:pb-0
    md:shadow-none md:transition-none md:translate-y-0
`}>
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
        {previewCraftable.methods.map((method, index) => (
          <FormulaSection
            key={method.id}
            method={method}
            index={index}
            language={language}
            compact
          />
        ))}
      </section>
    </aside>
    </>
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