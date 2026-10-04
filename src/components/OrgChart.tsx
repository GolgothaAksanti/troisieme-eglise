"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface NodeData {
  id: string;
  title: string;
  subtitle?: string;
  description: Record<Locale, string>;
  level: "top" | "high" | "mid" | "base";
}

const nodes: NodeData[] = [
  { id: "neno", title: "NENO", subtitle: "Représentant Légal", level: "top", description: {
    fr: "L'autorité spirituelle suprême de l'Église. NENO est la Parole de Dieu, représentée par le Prophète Tata Wahiseelelwa.",
    sw: "Mamlaka kuu ya kiroho ya Kanisa. NENO ni Neno la Mungu, linalowakilishwa na Nabii Tata Wahiseelelwa.",
    en: "The supreme spiritual authority of the Church. NENO is the Word of God, represented by the Prophet Tata Wahiseelelwa.",
  }},
  { id: "bureau", title: "Bureau de la Représentation", subtitle: "Repr. Adjoint · Secr. Administratif · Trésorier", level: "high", description: {
    fr: "L'organe administratif qui assiste NENO. Il comprend le Représentant Adjoint, le Secrétaire Administratif et le Trésorier.",
    sw: "Chombo cha utawala kinachosaidia NENO. Kinajumuisha Naibu wa Mwakilishi, Katibu wa Utawala na Mweka Hazina.",
    en: "The administrative body that assists NENO. It includes the Deputy Representative, Administrative Secretary and Treasurer.",
  }},
  { id: "paradis", title: "Paradis", level: "high", description: {
    fr: "Le Comité Central du Paradis — l'instance spirituelle supérieure qui veille à l'application des Communications.",
    sw: "Kamati Kuu ya Paradiso — chombo kikuu cha kiroho kinachosimamia utekelezaji wa Communications.",
    en: "The Central Committee of Paradise — the supreme spiritual body that oversees the implementation of Communications.",
  }},
  { id: "conseil", title: "Conseil de 24 Vieillards", subtitle: "B.D.T.E", level: "high", description: {
    fr: "Les 24 Vieillards constituent le conseil spirituel de l'Église, responsables de la supervision des Mahelo.",
    sw: "Wazee 24 wanaunda baraza la kiroho la Kanisa, wenye kusimamia Mahelo.",
    en: "The 24 Elders form the spiritual council of the Church, responsible for overseeing the Mahelo.",
  }},
  { id: "viumbe", title: "Viumbe inne", level: "mid", description: {
    fr: "Les quatre êtres vivants — une instance spirituelle qui participe à la gouvernance sacrée de l'Église.",
    sw: "Viumbe vinne vilivyo hai — chombo cha kiroho kinachoshiriki katika utawala mtakatifu wa Kanisa.",
    en: "The four living beings — a spiritual body that participates in the sacred governance of the Church.",
  }},
  { id: "reunion", title: "Réunion ya Wahongozi", level: "mid", description: {
    fr: "L'assemblée des dirigeants. Les Wahongozi de chaque Mahelo se réunissent pour coordonner et transmettre les Communications.",
    sw: "Mkutano wa Wahongozi. Wahongozi wa kila Mahelo wanakutana kuratibu na kusambaza Communications.",
    en: "The leaders' assembly. The Wahongozi of each Mahelo meet to coordinate and transmit the Communications.",
  }},
  { id: "mwongozi", title: "Mwongozi Koko et Mama Mahelo", level: "mid", description: {
    fr: "Le couple dirigeant de chaque Mahelo locale, supervisant la vie spirituelle et communautaire.",
    sw: "Wanandoa wanaoongoza kila Mahelo ya mtaa, wakisimamia maisha ya kiroho na ya jamii.",
    en: "The leading couple of each local Mahelo, overseeing spiritual and community life.",
  }},
  { id: "wazee", title: "Wazee", level: "base", description: {
    fr: "Les Anciens de chaque Mahelo. Ils conduisent les cérémonies, prient pour les malades et lisent les Communications.",
    sw: "Wazee wa kila Mahelo. Wanaongoza sherehe, kuomba kwa wagonjwa na kusoma Communications.",
    en: "The Elders of each Mahelo. They conduct ceremonies, pray for the sick and read the Communications.",
  }},
  { id: "wafalme", title: "Wafalme", level: "base", description: {
    fr: "Les Rois et Reines — tous les croyants. Chaque membre est Mfalme (Roi) ou Malkia (Reine), portant l'uniforme vert.",
    sw: "Wafalme na Malkia — waumini wote. Kila mwanachama ni Mfalme au Malkia, akivaa sare ya kijani.",
    en: "The Kings and Queens — all believers. Each member is Mfalme (King) or Malkia (Queen), wearing the green uniform.",
  }},
];

function getLevelColor(level: NodeData["level"]) {
  switch (level) {
    case "top":
      return "bg-green-mid text-white border-green-mid";
    case "high":
      return "bg-green-deep text-white border-green-deep";
    case "mid":
      return "bg-white text-text border-green-mid/30";
    case "base":
      return "bg-off-white text-text border-green-mid/20";
  }
}

function getLevelDot(level: NodeData["level"]) {
  switch (level) {
    case "top":
      return "bg-green-mid";
    case "high":
      return "bg-green-deep";
    case "mid":
      return "bg-green-mid/50";
    case "base":
      return "bg-grey-light";
  }
}

function VLine() {
  return (
    <div className="flex justify-center py-1">
      <div className="h-5 w-px bg-green-mid/20" />
    </div>
  );
}

export default function OrgChart({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = nodes.find((n) => n.id === activeId) ?? null;

  function handleClick(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  function NodeBox({ node }: { node: NodeData }) {
    const isActive = activeId === node.id;
    const colorClass = getLevelColor(node.level);

    return (
      <button
        onClick={() => handleClick(node.id)}
        className={`w-full cursor-pointer border rounded-lg px-4 py-3 text-center transition-all duration-200 ${colorClass} ${
          isActive
            ? "ring-2 ring-green-mid ring-offset-2 scale-[1.03]"
            : "hover:scale-[1.02] hover:shadow-md"
        }`}
      >
        <p className="text-sm font-semibold leading-tight">{node.title}</p>
        {node.subtitle && (
          <p
            className={`mt-1 text-[11px] leading-snug ${
              node.level === "top" || node.level === "high"
                ? "text-white/60"
                : "text-grey"
            }`}
          >
            {node.subtitle}
          </p>
        )}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Chart */}
      <div className="flex-1 overflow-x-auto">
        <div className="min-w-[540px] px-2 py-2">
          {/* Level 1: NENO */}
          <div className="mx-auto w-[180px]">
            <NodeBox node={nodes[0]} />
          </div>

          <VLine />

          {/* NENO → Bureau (side branch) + down to Paradis/Conseil */}
          <div className="mx-auto flex max-w-[460px] items-start justify-center gap-3">
            <div className="flex-1" />
            <div className="w-[180px]">
              <NodeBox node={nodes[1]} />
            </div>
          </div>

          <VLine />

          {/* Level 2: Paradis + Conseil */}
          <div className="mx-auto flex max-w-[460px] gap-3">
            <div className="flex-1">
              <NodeBox node={nodes[2]} />
            </div>
            <div className="flex-1">
              <NodeBox node={nodes[3]} />
            </div>
          </div>

          <VLine />

          {/* Level 3: Viumbe + Réunion */}
          <div className="mx-auto flex max-w-[460px] gap-3">
            <div className="flex-1">
              <NodeBox node={nodes[4]} />
            </div>
            <div className="flex-1">
              <NodeBox node={nodes[5]} />
            </div>
          </div>

          <VLine />

          {/* Branch line */}
          <div className="mx-auto max-w-[460px]">
            <div className="mx-[calc(100%/6)] h-px bg-green-mid/20" />
          </div>

          {/* Three branch connectors */}
          <div className="mx-auto flex max-w-[460px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-1 justify-center py-1">
                <div className="h-5 w-px bg-green-mid/20" />
              </div>
            ))}
          </div>

          {/* Level 4: Mwongozi x3 */}
          <div className="mx-auto flex max-w-[460px] gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1">
                <NodeBox node={nodes[6]} />
              </div>
            ))}
          </div>

          {/* Three connectors */}
          <div className="mx-auto flex max-w-[460px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-1 justify-center py-1">
                <div className="h-5 w-px bg-green-mid/20" />
              </div>
            ))}
          </div>

          {/* Level 5: Wazee x3 */}
          <div className="mx-auto flex max-w-[460px] gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1">
                <NodeBox node={nodes[7]} />
              </div>
            ))}
          </div>

          {/* Three connectors */}
          <div className="mx-auto flex max-w-[460px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-1 justify-center py-1">
                <div className="h-5 w-px bg-green-mid/20" />
              </div>
            ))}
          </div>

          {/* Level 6: Wafalme x3 */}
          <div className="mx-auto flex max-w-[460px] gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1">
                <NodeBox node={nodes[8]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:w-72 lg:shrink-0">
        <div
          className={`sticky top-24 overflow-hidden rounded-lg border transition-all duration-300 ${
            active
              ? "border-green-mid/20 bg-white"
              : "border-transparent bg-off-white"
          }`}
        >
          {active ? (
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${getLevelDot(active.level)}`}
                  />
                  <h3 className="text-base font-semibold text-text">
                    {active.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveId(null)}
                  className="shrink-0 text-grey-light transition-colors hover:text-text"
                  aria-label={dict.orgChart.close}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </button>
              </div>
              {active.subtitle && (
                <p className="mb-3 text-xs text-green-mid">
                  {active.subtitle}
                </p>
              )}
              <p className="text-sm leading-relaxed text-grey">
                {active.description[locale]}
              </p>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-mid/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-green-mid"
                >
                  <circle cx="10" cy="10" r="7" />
                  <path d="M10 7v3M10 13h.01" />
                </svg>
              </div>
              <p className="text-sm text-grey">
                {dict.orgChart.select}
              </p>
            </div>
          )}
        </div>

        {/* Source */}
        <p className="mt-4 text-center text-[11px] text-grey-light lg:text-left">
          {dict.orgChart.source}
        </p>
      </div>
    </div>
  );
}
