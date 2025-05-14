'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BrandFilter({ brand_name, type_name }) {
    const searchParams = useSearchParams();
    const currentBrand = searchParams.get('brand_name');

    return (
        <div>
            <div className="flex flex-wrap gap-2 items-center justify-center">
                <Link
                    href={type_name ? `/${type_name}` : '/'}
                    className="px-4 py-2 text-center bg-gray-800 text-white rounded-full text-sm"
                >
                    Alle
                </Link>

                {brand_name.map((brand) => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('brand_name', brand);

                    const href = type_name
                        ? `/${type_name}?${params.toString()}`
                        : `/?${params.toString()}`;

                    return (
                        <Link
                            key={brand}
                            href={href}
                            className={`px-4 py-2 rounded-full text-sm ${currentBrand === brand
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            {brand}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
