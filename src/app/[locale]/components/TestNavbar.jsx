'use client'
import * as React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/app/ui/navigation-menu"; // Убедитесь, что импорт правильный

export default function TestNavbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        onClick={() => setOpenMenu(!openMenu)}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                        Getting started
                        <ChevronDownIcon
                            className={`ml-2 transition-transform duration-300 ${openMenu ? "rotate-180" : "rotate-0"}`}
                        />
                    </NavigationMenuTrigger>

                    {/* Подменю */}
                    {openMenu && (
                        <NavigationMenuContent
                            className="absolute bottom-full mb-2 w-[300px] bg-white shadow-md rounded-md"
                            style={{
                                visibility: openMenu ? 'visible' : 'hidden',  // Убедимся, что подменю видно
                                opacity: openMenu ? 1 : 0,  // Плавное появление
                                transition: 'opacity 0.2s ease-out', // Плавный эффект появления
                            }}
                        >
                            <ul className="p-4">
                                <li>
                                    <NavigationMenuLink href="/" className="block px-4 py-2 text-sm">
                                        Shadcn/UI
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="/docs/installation" className="block px-4 py-2 text-sm">
                                        Installation
                                    </NavigationMenuLink>
                                </li>
                                {/* Добавьте другие элементы меню здесь */}
                            </ul>
                        </NavigationMenuContent>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
