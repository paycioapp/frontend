import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../globals.css";

import 'react-phone-input-2/lib/style.css';


import { Toaster } from "react-hot-toast";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import ProgressBar from "../components/utils/Progress";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getMessages } from "next-intl/server";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap", // Optional but recommended
});


export const metadata: Metadata = {
  title: "Best Crypto Payment Gateway for Businesses | Paycio",
  description: "Best Crypto Payment Gateway for Businesses | Paycio",
  keywords: "Paycio, crypto, payment gateway",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = await getMessages();
  const isRTL = ['ar', 'fa', 'he', 'ur', 'ps', 'ckb', 'sd', 'dv', 'ug', 'yi'].includes(locale);
  return (
    <html lang={locale} dir={isRTL ? 'rtl': 'ltr'}>
      <body
        className={`${instrumentSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ProgressBar />
          <Toaster position="top-center" />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
