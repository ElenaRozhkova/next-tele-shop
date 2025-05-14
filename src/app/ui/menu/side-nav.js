// app/ui/menu/SideNav.js
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/menu/nav-links';
import { getTypes } from '@/app/lib/getTypes';

// Asynchronous function for fetching types data
export default async function SideNav() {
    const types = await getTypes(); // Fetch data here

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 text-white p-4 md:h-10"
                href="/geraete"
            >
                <p>Geräte</p>
            </Link>
            <div className="flex flex-wrap grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks types={types} /> {/* Pass types here */}
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
        </div>
    );
}
