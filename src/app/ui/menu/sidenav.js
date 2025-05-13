import Link from 'next/link';
import NavLinks from '@/app/ui/menu/navlinks';
import { PowerIcon } from '@heroicons/react/24/outline';
import {
    SparklesIcon
} from '@heroicons/react/24/outline';


export default function SideNav() {

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-center justify-center rounded-md bg-green-600 p-4 md:h-40"
                href="/"
            >
                <SparklesIcon className="w-6 h-6 flex h-20 items-center justify-center text-green-800" />
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">

                    </button>
                </form>
            </div>
        </div>
    );
}