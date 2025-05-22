'use client'; // чтобы использовать useRouter и client-side навигацию

import { useRouter, usePathname } from 'next/navigation';

const locales = ['en', 'de'];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const changeLocale = (newLocale) => {
        // меняем локаль в URL
        // предполагается, что локаль — это первый сегмент в маршруте, например: /en/ or /de/
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPathname = segments.join('/') || '/';
        router.push(newPathname);
    };

    return (
        <div>
            {locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => changeLocale(loc)}
                    style={{ marginRight: '8px' }}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
