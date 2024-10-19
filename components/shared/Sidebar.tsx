"use client";
import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((ele, ix) => {
              const isActive: boolean = ele.route === pathname;
              return (
                <li
                  key={ele.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link href={ele.route} className="sidebar-link">
                    <Image
                      src={ele.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {ele.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((ele) => {
              const isActive: boolean = ele.route === pathname;
              return (
                <li
                  key={ele.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link href={ele.route} className="sidebar-link">
                    <Image
                      src={ele.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {ele.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex-center w-full cursor-pointer gap-2 p-4">
              <UserButton afterSwitchSessionUrl="/" showName />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
