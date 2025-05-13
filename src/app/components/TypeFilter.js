'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function TypeFilter({ type_name }) {
    const searchParams = useSearchParams();
    const currentType = searchParams.get('type_name');

    // Формируем ссылку без type_name
    const baseParams = new URLSearchParams(searchParams.toString());
    baseParams.delete('type_name');
    const allHref = `geraete/?${baseParams.toString()}`;

    return (
        <div className="">
            <div className="flex flex-wrap gap-2 items-center justify-center">
                {/* Кнопка "Alle" — удаляет type_name, но сохраняет другие параметры */}
                <Link
                    href={allHref}
                    className="px-4 py-2 text-center bg-gray-800 text-white rounded-full text-sm"
                >
                    Alle
                </Link>

                {/* Кнопки по брендам */}
                {type_name.map((type) => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('type_name', type);

                    return (
                        <Link
                            key={type}
                            href={`geraete/?${params.toString()}`}
                            className={`px-4 py-2 rounded-full text-sm ${currentType === type
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            {type}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
