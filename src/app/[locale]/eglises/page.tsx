"use client";

import { useState, useEffect } from "react";
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

  const countries = Array.from(new Set(churches.map((c) => c.country)));

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
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grey-light" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="9" r="6" /><path d="M13.5 13.5L17 17" />
              </svg>
              <input
                type="text"
                placeholder={dict.search || ""}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-green-mid/15 bg-off-white py-2.5 pl-10 pr-4 text-sm text-text outline-none transition-colors placeholder:text-grey-light focus:border-green-mid"
              />
            </div>
            {countries.length > 1 && (
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="rounded-lg border border-green-mid/15 bg-off-white px-4 py-2.5 text-sm text-text outline-none focus:border-green-mid">
                <option value="all">{dict.allCountries || "All"}</option>
                {countries.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
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
