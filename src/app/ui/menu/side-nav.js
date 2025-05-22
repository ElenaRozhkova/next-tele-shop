'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NavLinks from '@/app/ui/menu/nav-links';
import { useEffect, useState } from 'react';

export default function SideNav({ locale }) {
    const t = useTranslations();

    // Если нужно, можно подгрузить types через useEffect или оставить как async props
    // Для упрощения, убираем async

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 text-white p-4 md:h-10"
                href={`/${locale}`}
            >
                <p>{t('side_nav_bar')}</p>
            </Link>
            <div className="flex gap-2 flex-wrap grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {/* NavLinks сюда можно передать props types */}
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
        </div>
    );
}
