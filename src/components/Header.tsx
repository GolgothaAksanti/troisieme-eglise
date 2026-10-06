"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import LangSwitcher from "./LangSwitcher";
import Logo3 from "./Logo3";

type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "dropdown"; label: string; children: { href: string; label: string }[] };

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { kind: "link", href: `/${locale}`, label: dict.nav.home },
    {
      kind: "dropdown",
      label: dict.nav.about,
      children: [
        { href: `/${locale}/histoire`, label: dict.nav.history },
        { href: `/${locale}/doctrine`, label: dict.nav.doctrine },
        { href: `/${locale}/dirigeants`, label: dict.nav.leaders },
        { href: `/${locale}/vieillards`, label: dict.nav.elders },
        { href: `/${locale}/prieres`, label: dict.nav.prayers },
        { href: `/${locale}/cantiques`, label: dict.nav.hymns },
        { href: `/${locale}/ceremonies`, label: dict.nav.ceremonies },
      ],
    },
    { kind: "link", href: `/${locale}/recits`, label: dict.nav.stories },
    { kind: "link", href: `/${locale}/eglises`, label: dict.nav.churches },
    { kind: "link", href: `/${locale}/evenements`, label: dict.nav.events },
    { kind: "link", href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function isActive(href: string) {
    return pathname === href;
  }

  function isDropdownActive(children: { href: string }[]) {
    return children.some((c) => pathname === c.href);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-mid/10 bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1.5"
          >
            <Logo3 size="sm" />
            <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-text sm:text-xl">
              Malkia wa Ubembe
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                if (item.kind === "link") {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors hover:text-green-mid ${
                          isActive(item.href) ? "text-green-mid" : "text-grey"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // Dropdown
                const active = isDropdownActive(item.children);
                return (
                  <li key={item.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 text-sm transition-colors hover:text-green-mid ${
                        active ? "text-green-mid" : "text-grey"
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 transition-all duration-200 ${
                        dropdownOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="min-w-[180px] overflow-hidden rounded-lg border border-green-mid/10 bg-white py-1.5 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors hover:bg-off-white hover:text-green-mid ${
                              isActive(child.href) ? "text-green-mid font-medium" : "text-grey"
                            }`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <LangSwitcher locale={locale} />
          </div>

          {/* ── Mobile toggle ── */}
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

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`fixed top-0 right-0 z-40 flex h-full w-72 flex-col bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-[65px] items-center gap-1.5 border-b border-green-mid/10 px-6">
          <Logo3 size="sm" />
          <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-text">
            {dict.nav.menu}
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              if (item.kind === "link") {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-4 py-3 text-base transition-colors ${active ? "bg-green-pale text-green-mid font-medium" : "text-grey hover:bg-off-white hover:text-text"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              // Mobile accordion
              const active = isDropdownActive(item.children);
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(!mobileExpanded)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base transition-colors ${
                      active ? "text-green-mid font-medium" : "text-grey hover:bg-off-white hover:text-text"
                    }`}
                    aria-expanded={mobileExpanded}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-lg py-2.5 pl-8 pr-4 text-sm transition-colors ${
                              childActive ? "text-green-mid font-medium" : "text-grey hover:bg-off-white hover:text-text"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
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
