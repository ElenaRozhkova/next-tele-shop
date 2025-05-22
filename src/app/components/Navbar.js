"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Geräte", href: "/" },
        { name: "News", href: "/" },
        { name: "Contact", href: "/" },
    ];

    return (
        <nav className="w-full px-4 py-4 bg-white bg-opacity-90 sticky top-0 shadow-lg z-50">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/" className="bg-white-800 font-bold text-2xl">
                    NEXTNEWS
                </Link>
                <LanguageSwitcher />

                {/* Mobile-Menü */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden z-50`}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/" className="text-gray-600 font-bold text-xl">
                            NEXTNEWS
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-gray-500"
                            aria-label="Menü schließen"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-gray-600 text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="bg-gray-600 text-white px-8 py-2 rounded-md hover:bg-gray-500 w-full">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Overlay für Mobile-Menü */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-20 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </div>
        </nav>
    );
}
