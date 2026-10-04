import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-green-mid/10 bg-off-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="mb-4 text-xl font-light text-text">
              Troisième Église
            </h3>
            <p className="text-sm leading-relaxed text-grey">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-cormorant)] text-base text-text">
              {dict.footer.navTitle}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-grey">
              <li><Link href={`/${locale}`} className="transition-colors hover:text-green-mid">{dict.nav.home}</Link></li>
              <li><Link href={`/${locale}/histoire`} className="transition-colors hover:text-green-mid">{dict.nav.history}</Link></li>
              <li><Link href={`/${locale}/recits`} className="transition-colors hover:text-green-mid">{dict.nav.stories}</Link></li>
              <li><Link href={`/${locale}/eglises`} className="transition-colors hover:text-green-mid">{dict.nav.churches}</Link></li>
              <li><Link href={`/${locale}/dirigeants`} className="transition-colors hover:text-green-mid">{dict.nav.leaders}</Link></li>
              <li><Link href={`/${locale}/contact`} className="transition-colors hover:text-green-mid">{dict.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-cormorant)] text-base text-text">
              {dict.footer.contactTitle}
            </h4>
            <address className="flex flex-col gap-2 text-sm not-italic text-grey">
              <p>Bi&apos;esse-City, Baraka</p>
              <p>Fizi, Sud-Kivu</p>
              <p>RDC</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-green-mid/5 pt-8 text-center text-xs text-grey-light sm:mt-12">
          &copy; {new Date().getFullYear()} Troisième Église Malkia wa Ubembe
        </div>
      </div>
    </footer>
  );
}
