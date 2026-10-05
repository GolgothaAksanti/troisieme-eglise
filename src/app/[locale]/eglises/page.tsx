"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import type { Church } from "@/types";
import type { Locale } from "@/i18n/config";

export default function Eglises() {
  const params = useParams();
  const locale = (params.locale as string) || "fr";
  const [churches, setChurches] = useState<Church[]>([]);
  const [maheloLeaders, setMaheloLeaders] = useState<Record<string, string>>({});
  const [dict, setDict] = useState<Record<string, string>>({});
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@/data/churches").then((mod) => {
      setChurches(mod.churches);
      setMaheloLeaders(mod.maheloLeaders);
    });
    import(`@/i18n/dictionaries/${locale}.json`).then((mod) => {
      const d = mod.default.churches;
      setDict(d);
    });
  }, [locale]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const countries = Array.from(new Set(churches.map((c) => c.country)));
  const allLabel = dict.allCountries || "All";
  const selectedLabel = selectedCountry === "all" ? allLabel : selectedCountry;

  const filtered = churches.filter((c) => {
    const leader = c.leaderId ? maheloLeaders[c.leaderId] : "";
    const matchesSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      leader?.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = selectedCountry === "all" || c.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.title || "Nos Mahelo"}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">
            {(dict.subtitle || "").replace("{count}", String(churches.length))}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-grey-light" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="9" r="6" /><path d="M13.5 13.5L17 17" />
              </svg>
              <input
                type="text"
                placeholder={dict.search || ""}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-green-mid/15 bg-off-white py-3 pl-11 pr-4 text-sm text-text outline-none transition-all placeholder:text-grey-light focus:border-green-mid focus:ring-2 focus:ring-green-mid/10"
              />
            </div>
            {countries.length > 1 && (
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex w-full items-center justify-between gap-6 rounded-xl border bg-off-white py-3 pl-4 pr-3.5 text-sm transition-all sm:w-auto ${
                    dropdownOpen
                      ? "border-green-mid ring-2 ring-green-mid/10"
                      : "border-green-mid/15 hover:border-green-mid/30"
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                >
                  <span className={selectedCountry === "all" ? "text-grey" : "text-text"}>
                    {selectedLabel}
                  </span>
                  <svg
                    className={`h-4 w-4 text-grey-light transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <ul
                  role="listbox"
                  aria-label={allLabel}
                  className={`absolute right-0 z-20 mt-2 min-w-full overflow-hidden rounded-xl border border-green-mid/10 bg-white py-1 shadow-lg transition-all duration-200 sm:min-w-[180px] ${
                    dropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <li
                    role="option"
                    aria-selected={selectedCountry === "all"}
                    onClick={() => { setSelectedCountry("all"); setDropdownOpen(false); }}
                    className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                      selectedCountry === "all"
                        ? "bg-green-pale text-green-mid font-medium"
                        : "text-grey hover:bg-off-white hover:text-text"
                    }`}
                  >
                    {selectedCountry === "all" && (
                      <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                    <span className={selectedCountry === "all" ? "" : "pl-6"}>{allLabel}</span>
                  </li>
                  {countries.map((c) => (
                    <li
                      key={c}
                      role="option"
                      aria-selected={selectedCountry === c}
                      onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                      className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                        selectedCountry === c
                          ? "bg-green-pale text-green-mid font-medium"
                          : "text-grey hover:bg-off-white hover:text-text"
                      }`}
                    >
                      {selectedCountry === c && (
                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      )}
                      <span className={selectedCountry === c ? "" : "pl-6"}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="mb-4 text-xs text-grey-light">
            {filtered.length === churches.length
              ? (dict.count || "").replace("{count}", String(filtered.length))
              : (dict.countOf || "").replace("{count}", String(filtered.length)).replace("{total}", String(churches.length))}
          </p>

          {filtered.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-green-mid/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-green-mid/10 bg-off-white">
                    <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-grey sm:px-5">{dict.colNumber || "N°"}</th>
                    <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-grey sm:px-5">{dict.colName || "Mahelo"}</th>
                    <th className="hidden whitespace-nowrap px-4 py-3 text-xs font-semibold text-grey sm:table-cell sm:px-5">{dict.colLocation || "Lieu"}</th>
                    <th className="hidden whitespace-nowrap px-4 py-3 text-xs font-semibold text-grey md:table-cell md:px-5">{dict.colLeader || "Responsable"}</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((church, i) => {
                    const leader = church.leaderId ? maheloLeaders[church.leaderId] : null;
                    const isHQ = church.id === "01";
                    const isLast = i === filtered.length - 1;
                    return (
                      <tr key={church.id} className={`transition-colors hover:bg-green-pale/50 ${!isLast ? "border-b border-green-mid/5" : ""} ${isHQ ? "bg-green-pale/30" : ""}`}>
                        <td className="px-4 py-3 sm:px-5">
                          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${isHQ ? "bg-green-mid text-white" : "bg-green-mid/8 text-green-mid"}`}>{church.id}</span>
                        </td>
                        <td className="px-4 py-3 sm:px-5">
                          <p className="font-medium text-text">
                            {church.name}
                            {isHQ && <span className="ml-2 inline-block rounded-full bg-green-mid/12 px-2 py-0.5 align-middle text-[10px] font-medium text-green-deep">{dict.hq || "HQ"}</span>}
                          </p>
                          <p className="mt-1 text-xs text-grey sm:hidden">
                            {church.city}{leader && <span className="text-grey-light"> · {leader}</span>}
                          </p>
                        </td>
                        <td className="hidden px-4 py-3 text-grey sm:table-cell sm:px-5">{church.city}</td>
                        <td className="hidden px-4 py-3 text-grey md:table-cell md:px-5">{leader ?? "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-grey">{dict.empty || ""}</p>
          )}

          <p className="mt-8 text-center text-[11px] text-grey-light sm:mt-10">{dict.source || ""}</p>
        </div>
      </section>
    </>
  );
}
