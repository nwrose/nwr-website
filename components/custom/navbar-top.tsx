"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {Separator} from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {useState, useEffect} from "react";
import Image from "next/image";


export default function Navbar() {
    const [ mounted, setMounted ] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <>
        <div className="fixed w-[100%] bg-popover sm:text-lg font-extrabold shadow-md z-50">
            <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-row justify-center sm:justify-between w-screen">
                    <div className="hidden sm:block">
                        <NavigationMenuItem className="text-violet-800">
                            <Link href="/#home" legacyBehavior passHref>
                                <NavigationMenuLink className="flex items-center">
                                    <Image alt="" src="/jpgs/ashleys-pic-zoom.jpg" height={200} width={200} className="m-2 rounded-full h-12 w-12"/>
                                    <p className="max-w-0 md:max-w-full">NATE ROSENBERG</p>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>
                    <div className="flex min-w-[30%] justify-between m-2">
                        <NavigationMenuItem>
                            <Link href="#home" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#experience" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Projects
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="outline" size="icon" onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                            </Button>
                        </NavigationMenuItem>
                    </div> 
                </NavigationMenuList>
            </NavigationMenu>
            <Separator />
        </div>
        </>
    );
  }