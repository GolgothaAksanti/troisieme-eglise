import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import Logo3 from "./Logo3";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="bg-green-pale">
      {/* ── Creed banner ── */}
      <div className="border-b border-green-mid/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-px w-12 bg-green-mid/30 sm:block" />
            <p className="text-center font-[family-name:var(--font-cormorant)] text-lg italic leading-relaxed text-green-deep sm:text-xl md:text-2xl">
              &ldquo;{dict.footer.creed}&rdquo;
            </p>
            <span className="hidden h-px w-12 bg-green-mid/30 sm:block" />
          </div>
        </div>
      </div>

      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="mb-4 inline-flex items-center gap-2"
            >
              <Logo3 size="md" className="text-green-deep" />
              <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-green-deep">
                Malkia wa Ubembe
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-green-dark/70">
              {dict.footer.description}
            </p>
          </div>

          {/* Discover column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-green-mid">
              {dict.footer.discoverTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/recits`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.stories}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/eglises`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.churches}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/evenements`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.events}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* About the Church column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-green-mid">
              {dict.footer.aboutTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}/histoire`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.history}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/dirigeants`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.leaders}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/vieillards`} className="text-sm text-green-deep/65 transition-colors hover:text-green-deep">
                  {dict.nav.elders}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-green-mid">
              {dict.footer.connectTitle}
            </h4>
            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs font-medium text-green-deep">{dict.footer.hqLabel}</p>
                <address className="text-sm not-italic leading-relaxed text-green-deep/65">
                  Bi&apos;esse-City, Baraka<br />
                  Fizi, Sud-Kivu, RDC
                </address>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-green-deep">{dict.footer.usLabel}</p>
                <address className="text-sm not-italic leading-relaxed text-green-deep/65">
                  Bowling Green, Kentucky<br />
                  USA
                </address>
              </div>
              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.facebook.com/3%C3%A8me-%C3%89glise-Malkia-Wa-Ubembe-1042092745905378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-green-mid/25 text-green-mid transition-all hover:border-green-mid hover:bg-green-mid hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.541.11v3.254c-.168-.018-.458-.027-.824-.027-1.17 0-1.623.443-1.623 1.596v2.625h4.309l-.552 3.667h-3.757v7.98h-4.952z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_Ft_Kcz6nikc-5_Zvvkeog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-green-mid/25 text-green-mid transition-all hover:border-green-mid hover:bg-green-mid hover:text-white"
                  aria-label="YouTube"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-green-mid/12 bg-green-mid/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-green-deep/45">
            &copy; {new Date().getFullYear()} Troisième Église Malkia wa Ubembe. {dict.footer.rights}
          </p>
          <p className="text-xs text-green-deep/30">
            Bi&apos;esse-Baraka &middot; 1923
          </p>
        </div>
      </div>
    </footer>
  );
}
