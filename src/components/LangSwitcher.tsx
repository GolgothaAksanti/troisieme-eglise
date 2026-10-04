"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const languages: Record<Locale, { label: string; flag: string }> = {
  fr: { label: "Français", flag: "🇫🇷" },
  sw: { label: "Kiswahili", flag: "🇨🇩" },
  en: { label: "English", flag: "🇬🇧" },
};

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  function getLocalePath(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  }

  function select(target: Locale) {
    setOpen(false);
    if (target !== locale) {
      router.push(getLocalePath(target));
    }
  }

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const current = languages[locale];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-2 rounded-lg border border-green-mid/15 bg-off-white px-3 py-1.5 text-sm text-text transition-colors hover:border-green-mid/30"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {current.flag}
        </span>
        <span className="hidden text-xs font-medium sm:inline">
          {current.label}
        </span>
        <svg
          className={`h-3 w-3 text-grey-light transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </button>

      <div
        role="listbox"
        aria-label="Languages"
        className={`absolute right-0 top-full z-50 mt-1.5 w-44 overflow-hidden rounded-lg border border-green-mid/10 bg-white shadow-lg transition-all duration-200 origin-top-right ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {locales.map((loc) => {
          const lang = languages[loc];
          const isActive = loc === locale;
          return (
            <button
              key={loc}
              role="option"
              aria-selected={isActive}
              onClick={() => select(loc)}
              className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-sm transition-colors ${
                isActive
                  ? "bg-green-pale text-green-mid"
                  : "text-text hover:bg-off-white"
              }`}
            >
              <span className="text-base leading-none" aria-hidden="true">
                {lang.flag}
              </span>
              <span className="font-medium">{lang.label}</span>
              {isActive && (
                <svg
                  className="ml-auto h-4 w-4 text-green-mid"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8.5l3.5 3.5L13 4" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
