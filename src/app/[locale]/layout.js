import "./globals.css";
import Navbar from '@/app/[locale]/components/Navbar'
import SideNav from '@/app/ui/menu/side-nav'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'


export const dynamic = 'force-static'  // Чтобы страница генерировалась статически

// Локали, которые поддерживаются
const locales = ['en', 'de']

// Генерируем статические параметры для статической генерации страниц с локалями
/*export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}*/

// Функция layout получает параметр locale из маршрута
export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>

        <div className="flex-grow container mx-auto md:overflow-y-auto sm:py-2 px-0">
          <Navbar />

        </div>
        <div className="container flex mx-auto h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav locale={locale} />
          </div>
          <div className="flex-grow md:overflow-y-auto md:px-12">{children}</div>
        </div>

      </body>
    </html>
  )
}
