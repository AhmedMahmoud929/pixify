"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <UserButton afterSwitchSessionUrl="/" />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </Button>
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={180}
              height={28}
            />
            <ul className="header-nav_elements">
              {navLinks.map((ele, ix) => {
                const isActive: boolean = ele.route === pathname;
                return (
                  <li
                    key={ele.route}
                    className={`sidebar-nav_element group ${
                      isActive && "gradient-text"
                    } p-18 flex whitespace-nowrap text-dark-700`}
                  >
                    <Link
                      href={ele.route}
                      className="sidebar-link cursor-pointer"
                    >
                      <Image src={ele.icon} alt="logo" width={24} height={24} />
                      {ele.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default MobileNav;
