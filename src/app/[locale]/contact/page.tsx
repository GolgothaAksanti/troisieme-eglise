import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Logo3 from "@/components/Logo3";

type Props = { params: Promise<{ locale: string }> };

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-green-mid px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <Logo3 size="xl" className="scale-[8] text-white sm:scale-[12]" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            {dict.contact.title}
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-green-deep/70 sm:text-lg">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-2xl font-light text-text sm:text-3xl">
            {dict.contact.formTitle}
          </h2>
          <p className="mb-10 text-sm text-grey">
            {dict.contact.formNote}
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-grey">
                {dict.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid focus:ring-1 focus:ring-green-mid/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-grey">
                {dict.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid focus:ring-1 focus:ring-green-mid/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-grey">
                {dict.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-lg border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid focus:ring-1 focus:ring-green-mid/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-mid px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-green-dark sm:w-auto"
            >
              {dict.contact.send}
            </button>
          </form>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="bg-off-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-10 text-2xl font-light text-text sm:text-3xl">
            {dict.contact.addressTitle}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* DRC */}
            <div className="border-l-2 border-green-mid bg-white py-6 pl-6 pr-5">
              <div className="mb-4 flex items-center gap-2.5">
                <svg className="h-4 w-4 text-green-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h3 className="text-sm font-semibold text-text">{dict.contact.hqLabel}</h3>
              </div>
              <address className="space-y-0.5 text-sm not-italic leading-relaxed text-grey">
                <p>Bi&apos;esse-City, Baraka</p>
                <p>Territoire de Fizi, Sud-Kivu</p>
                <p>RDC</p>
              </address>
            </div>

            {/* USA */}
            <div className="border-l-2 border-green-mid/40 bg-white py-6 pl-6 pr-5">
              <div className="mb-4 flex items-center gap-2.5">
                <svg className="h-4 w-4 text-green-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h3 className="text-sm font-semibold text-text">{dict.contact.usLabel}</h3>
              </div>
              <address className="space-y-0.5 text-sm not-italic leading-relaxed text-grey">
                <p>Bowling Green, Kentucky</p>
                <p>USA</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-6 text-lg font-light text-text sm:text-xl">
            {dict.contact.socialTitle}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/3%C3%A8me-%C3%89glise-Malkia-Wa-Ubembe-1042092745905378/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 border border-green-mid/20 px-5 py-3 text-sm text-grey transition-all hover:border-green-mid hover:text-green-mid"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.541.11v3.254c-.168-.018-.458-.027-.824-.027-1.17 0-1.623.443-1.623 1.596v2.625h4.309l-.552 3.667h-3.757v7.98h-4.952z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UC_Ft_Kcz6nikc-5_Zvvkeog"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 border border-green-mid/20 px-5 py-3 text-sm text-grey transition-all hover:border-green-mid hover:text-green-mid"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
