import React from "react";
import Link from "next/link";
import HeaderLogo from "@/components/ui/header-logo";
import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NavBarHeader = () => {
    return (
        <header className="w-full py-2 px-4 bg-neutral-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
                <Menubar className="bg-transparent border-none shadow-none">
                    <MenubarMenu>
                        <MenubarTrigger className="text-white"><HeaderLogo /></MenubarTrigger>
                        <MenubarContent align="start">
                            <MenubarItem asChild>
                                <Link href="/">Home</Link>
                            </MenubarItem>
                            <MenubarItem asChild>
                                <Link href="/projects">Projects</Link>
                            </MenubarItem>
                            <MenubarItem asChild>
                                <Link href="/docs">Docs</Link>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="flex items-center gap-2">
                <Button className="size-sm variant-outline text-white bg-black hover:bg-white hover:text-black">
                    <Link href="/login">Login</Link>
                </Button>
                <Avatar>
                    <AvatarFallback className="text-black">A</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};

export default NavBarHeader;
