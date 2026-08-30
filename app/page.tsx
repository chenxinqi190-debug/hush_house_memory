"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useMemo, useState } from "react";
import { craftables as craftableData } from "@/data/craftables";
import CraftingSidebar from "@/components/CraftingSidebar";
import MobileDrawer from "@/components/MobileDrawer";
import CraftingDetail from "@/components/CraftingDetail";
import { Language, translations } from "@/data/i18n";
import Link from "next/link";

export default function Home() {
  // In this iteration the data source is the mock array. Later this can be
  // swapped for a fetch/query without changing anything below.
  const [isMounted, setIsMounted] = useState(false);
  const craftables = craftableData;
  const [selectedPrincipleId, setSelectedPrincipleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCraftableId, setSelectedCraftableId] = useState<string | null>(
    null
  );
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
  setIsMounted(true);

  const savedLanguage = localStorage.getItem("language") as Language | null;
  const savedCraftableId = localStorage.getItem("selectedCraftableId");
  const savedSearchQuery = localStorage.getItem("searchQuery");
  const savedPrincipleId = localStorage.getItem("selectedPrincipleId");

  if (savedLanguage === "en" || savedLanguage === "zh") setLanguage(savedLanguage);
  if (savedCraftableId) setSelectedCraftableId(savedCraftableId);
  if (savedSearchQuery) setSearchQuery(savedSearchQuery);
  if (savedPrincipleId) setSelectedPrincipleId(savedPrincipleId);
}, []);

  useEffect(() => {
     if (!isMounted) return;
  localStorage.setItem("language", language);
}, [language, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

  if (selectedCraftableId) {
    localStorage.setItem("selectedCraftableId", selectedCraftableId);
  } else {
    localStorage.removeItem("selectedCraftableId");
  }
}, [selectedCraftableId, isMounted]);

  useEffect(() => {
  if (!isMounted) return;
  localStorage.setItem("searchQuery", searchQuery);
}, [searchQuery, isMounted]);

useEffect(() => {
   if (!isMounted) return;

  if (selectedPrincipleId) {
    localStorage.setItem("selectedPrincipleId", selectedPrincipleId);
  } else {
    localStorage.removeItem("selectedPrincipleId");
  }
}, [selectedPrincipleId, isMounted]);

  // Category filtering now happens visually through the sidebar accordion
  // (only the relevant category needs opening), so the only filtering
  // done here is the free-text search.
  const filteredCraftables = useMemo(() => {
    return craftables.filter((craftable) => {
      const matchesSearch = 
      craftable.displayName[language]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      const matchesPrinciple = 
      !selectedPrincipleId ||
      (craftable.principles ?? []).some(
    (p) => p.id === selectedPrincipleId
  );
      return matchesSearch && matchesPrinciple;
    });
  }, [craftables, searchQuery, selectedPrincipleId, language]);

  const selectedCraftable =
    craftables.find((craftable) => craftable.id === selectedCraftableId) ?? null;

  function handleSelectCraftable(id: string) {
    setSelectedCraftableId(id);
    // On mobile, picking a craftable should close the drawer and reveal
    // the detail view, which is the primary mobile experience.
    setIsDrawerOpen(false);
  }

  const sidebarProps = {
    searchQuery,
    onSearchChange: setSearchQuery,
    craftables: filteredCraftables,
    selectedCraftableId,
    onSelectCraftable: handleSelectCraftable,
    selectedPrincipleId,
    onSelectPrinciple: setSelectedPrincipleId,
    language,
  };
if (!isMounted) {
  return null;
}
  return (
    <div className={`${
    language === "zh" ? "font-zh" : "font-en"
  } bg-parchment flex h-screen overflow-hidden text-ink`}
>
      {/* Desktop sidebar */}
      <aside className="hidden md:block md:w-[400px] md:flex-shrink-0 border-r border-ink/10">
        <CraftingSidebar {...sidebarProps} />
      </aside>

      {/* Mobile slide-in drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} language={language} >
        <CraftingSidebar {...sidebarProps} />
      </MobileDrawer>

      {/* Right / primary detail panel */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden flex items-center gap-3 border-b border-ink/10 p-3">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open craftable list"
            className="rounded-md border border-ink/20 px-3 py-1 text-sm text-ink/80"
          >
            ☰ {t.craftables}
          </button>
          <span className="text-sm text-ink/70">
            {selectedCraftable ? selectedCraftable.displayName[language] : "Hush House Cookbook"}
          </span>
        </div>
        <div className="flex items-center justify-end gap-3 px-8 pt-4">
  <LanguageSwitcher language={language} onChange={setLanguage} />

  <Link
    href="/about"
    className="text-lg text-in/80 transition-colors hover:text-ink"
  >
    {t.about}
  </Link>
</div>

        <CraftingDetail craftable={selectedCraftable} craftables={craftables} language={language} />
      </main>
    </div>
  );
}
