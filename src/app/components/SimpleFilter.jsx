'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SimpleFilter({ categories }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    // Текущий поисковый запрос
    const currentQuery = searchParams.get('query');

    return (
        <div className="">
            <div className="flex flex-wrap gap-2 items-center justify-center">
                <Link
                    href={currentQuery ? `/?query=${currentQuery}` : '/'}
                    className="px-4 py-2 text-center bg-gray-800 text-white rounded-full text-sm"
                >
                    Alle
                </Link>

                {categories.map(category => {
                    const params = new URLSearchParams();
                    params.set('kategorie', category);
                    if (currentQuery) {
                        params.set('query', currentQuery);
                    }

                    return (
                        <Link
                            key={category}
                            href={`/?${params.toString()}`}
                            className={`px-4 py-2 rounded-full text-sm ${category === 'Fleisch & Gemüse'
                                ? 'text-center bg-green-500 text-white hover:bg-green-600'
                                : 'text-center bg-gray-100 text-gray-800 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

