"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="p6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`'hover:text-primary font-medium text-sm'${
                path == "/" && "text-primary"
              }`}
            >
              For Sale
            </li>
          </Link>
          <li className="hover:text-primary font-medium text-sm">For Rent</li>
          <li className="hover:text-primary font-medium text-sm">
            Agent Finder
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" />
          Post your ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}

export default Header;
