import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getFaithPeriods, getTrinitarianFormula, getVipajiSaba, getGlossary } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

export default async function Doctrine({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const [dict, periods, formula, vipaji, glossaryData] = await Promise.all([
    getDictionary(loc),
    getFaithPeriods(loc),
    getTrinitarianFormula(loc),
    getVipajiSaba(loc),
    getGlossary(loc),
  ]);

  const periodColors = ["border-green-mid", "border-green-dark", "border-green-deep"];
  const periodNums = ["I", "II", "III"];

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.doctrine.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.doctrine.subtitle}</p>
        </div>
      </section>

      {/* ── Three periods ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-light text-text sm:mb-12 sm:text-3xl">{dict.doctrine.periodsTitle}</h2>
          <div className="space-y-8">
            {periods.map((period, i) => (
              <div key={period.id} className={`border-l-4 ${periodColors[i]} pl-6 sm:pl-8`}>
                <span className="mb-2 block font-[family-name:var(--font-cormorant)] text-2xl font-light text-grey-light">{periodNums[i]}</span>
                <h3 className="mb-3 text-xl font-normal text-text">{period.name}</h3>
                <p className="mb-3 text-sm leading-relaxed text-grey sm:text-base">{period.description}</p>
                <p className="text-sm italic text-green-mid">{dict.doctrine.promise} : {period.promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trinitarian formula ── */}
      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-light text-text sm:text-3xl">{dict.doctrine.formulaTitle}</h2>
          <p className="mb-8 text-sm text-grey">{dict.doctrine.formulaIntro}</p>
          <blockquote className="border-l-4 border-green-mid bg-white px-6 py-6 sm:px-8">
            {formula.map((line, i) => (
              <p key={i} className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-text sm:text-xl">
                {line}
              </p>
            ))}
          </blockquote>
        </div>
      </section>

      {/* ── Vipaji Saba ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-2xl font-light text-text sm:text-3xl">{dict.doctrine.vipajiTitle}</h2>
          <p className="mb-10 text-sm text-grey sm:mb-12">{dict.doctrine.vipajiSubtitle}</p>
          <div className="space-y-4">
            {vipaji.map((v) => (
              <div key={v.id} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-mid text-sm font-semibold text-white">{v.order}</span>
                  {v.order < 7 && <div className="mt-2 h-full w-px bg-green-mid/20" />}
                </div>
                <div className="pb-6">
                  <h3 className="mb-2 text-base font-normal text-text sm:text-lg">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-grey">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Glossary ── */}
      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-2xl font-light text-text sm:text-3xl">{dict.doctrine.glossaryTitle}</h2>
          <p className="mb-10 text-sm text-grey">{dict.doctrine.glossarySubtitle}</p>
          <dl className="space-y-6">
            {glossaryData.map((g) => (
              <div key={g.id}>
                <dt className="mb-1 text-base font-semibold text-green-mid">{g.term}</dt>
                <dd className="text-sm leading-relaxed text-grey">{g.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
