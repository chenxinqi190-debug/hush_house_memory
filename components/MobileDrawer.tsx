"use client";

import { ReactNode, useEffect } from "react";
import { Language, translations } from "@/data/i18n";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  language: Language;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  children,
  language,
}: MobileDrawerProps) {
  const t = translations[language];
  // Prevent background scroll while the drawer is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`md:hidden fixed inset-0 z-40 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/30 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`bg-parchment absolute inset-y-0 left-0 w-[320px] max-w-[85%] shadow-lg transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeMenu}
            className="rounded-md px-3 py-1 text-sm text-ink/60 hover:text-ink"
          >
            {t.close}
          </button>
        </div>
        <div className="h-[calc(100%-44px)]">{children}</div>
      </div>
    </div>
  );
}
