"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import LangSwitcher from "./LangSwitcher";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/histoire`, label: dict.nav.history },
    { href: `/${locale}/recits`, label: dict.nav.stories },
    { href: `/${locale}/eglises`, label: dict.nav.churches },
    { href: `/${locale}/dirigeants`, label: dict.nav.leaders },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-mid/10 bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href={`/${locale}`}
            className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-text sm:text-xl"
          >
            Malkia wa Ubembe
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-green-mid ${
                      pathname === link.href ? "text-green-mid" : "text-grey"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LangSwitcher locale={locale} />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LangSwitcher locale={locale} />
            <button
              className="relative z-50 flex h-10 w-10 items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close" : dict.nav.menu}
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-6 bg-text transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-text transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-40 flex h-full w-72 flex-col bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-[65px] items-center border-b border-green-mid/10 px-6">
          <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-text">
            {dict.nav.menu}
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-base transition-colors ${isActive ? "bg-green-pale text-green-mid font-medium" : "text-grey hover:bg-off-white hover:text-text"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-green-mid/10 px-6 py-6">
          <p className="text-xs leading-relaxed text-grey-light">
            Troisième Église Malkia wa Ubembe
          </p>
        </div>
      </aside>
    </>
  );
}
