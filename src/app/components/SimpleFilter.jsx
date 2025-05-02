'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SimpleFilter({ categories }) {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex gap-2 mb-6 p-4">
                <Link
                    href="/"
                    className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm"
                >
                    Alle
                </Link>

                {categories.map(category => (
                    <Link
                        key={category}
                        href={`/?kategorie=${encodeURIComponent(category)}`}
                        className={`px-4 py-2 rounded-full text-sm ${category === 'Fleisch & Gemüse'
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-100'
                            }`}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
}

