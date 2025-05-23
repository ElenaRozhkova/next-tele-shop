'use client'
import { usePathname } from 'next/navigation'; // Use this instead of useRouter
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NavLinks({ types }) {
    const pathname = usePathname();  // Use usePathname to get the current pathname in the App Directory
    const locale = useLocale();
    const links = types.map((type) => ({
        name: type.type_name,
        href: `/${locale}/${type.type_name}`,
        icon: DevicePhoneMobileIcon,
    }));

    return (
        <>
            {links.map((link) => {
                // Check if the current link is active
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 m-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': isActive, // Apply active styles only to the active link
                            },
                        )}
                    >

                        <p className="md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
