"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, Getintial } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5 text-white">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        <p className="font-ibm-plex-sans font-bold">BookNaley</p>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "cursor-pointer text-base capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            {" "}
            Library
          </Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-amber-100 text-black font-bold">
                {Getintial(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
