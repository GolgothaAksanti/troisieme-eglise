import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <section className="bg-green-mid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 text-3xl font-light text-white sm:mb-4 sm:text-4xl md:text-5xl">{dict.contact.title}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-green-deep/70 sm:text-base">{dict.contact.subtitle}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-6 text-2xl font-light text-text sm:mb-8">{dict.contact.formTitle}</h2>
            <form className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-grey">{dict.contact.name}</label>
                <input type="text" id="name" name="name" className="w-full border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-grey">{dict.contact.email}</label>
                <input type="email" id="email" name="email" className="w-full border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-grey">{dict.contact.message}</label>
                <textarea id="message" name="message" rows={6} className="w-full border border-green-mid/15 bg-off-white px-4 py-3 text-text outline-none transition-colors focus:border-green-mid" />
              </div>
              <button type="submit" className="w-full bg-green-mid px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-green-dark sm:w-auto">{dict.contact.send}</button>
            </form>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-light text-text sm:mb-8">{dict.contact.addressTitle}</h2>
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="mb-2 text-base font-normal text-text">{dict.contact.hqLabel}</h3>
                <address className="space-y-1 text-sm not-italic leading-relaxed text-grey">
                  <p>Bi&apos;esse-City, Baraka</p><p>Territoire de Fizi, Sud-Kivu</p><p>RDC</p>
                </address>
              </div>
              <div>
                <h3 className="mb-2 text-base font-normal text-text">{dict.contact.usLabel}</h3>
                <address className="space-y-1 text-sm not-italic leading-relaxed text-grey">
                  <p>Bowling Green, Kentucky</p><p>USA</p>
                </address>
              </div>
              <div>
                <h3 className="mb-2 text-base font-normal text-text">{dict.contact.socialLabel}</h3>
                <ul className="space-y-2 text-sm text-grey">
                  <li><a href="https://www.facebook.com/3%C3%A8me-%C3%89glise-Malkia-Wa-Ubembe-1042092745905378/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-green-mid">Facebook</a></li>
                  <li><a href="https://www.youtube.com/channel/UC_Ft_Kcz6nikc-5_Zvvkeog" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-green-mid">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
