import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Troisième Église Malkia wa Ubembe",
  description:
    "L'Église du Saint-Esprit Tata Wahiseelelwa — fondée en 1923, rétablie le 3 novembre 1983 à Bi'esse-Baraka, Fizi, Sud-Kivu, RDC.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  const langMap: Record<string, string> = { fr: "fr", sw: "sw", en: "en" };

  return (
    <html
      lang={langMap[locale] ?? "fr"}
      className={`${cormorant.variable} ${sourceSans.variable}`}
    >
      <body className="flex min-h-screen flex-col font-[family-name:var(--font-source-sans)]">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
