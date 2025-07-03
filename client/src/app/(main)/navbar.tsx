// This is a client component
// It will be rendered on the client side
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes";

export default function Navbar() {
  const {resolvedTheme} = useTheme();

  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto p-2 flex items-center justify-between gap-3">
        {/* LINK TO HOME PAGE */}
        <Link href="/resumes" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={55}
            // height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            TURESUME
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* THEME TOGGLE MODE (NIGHT, LIGHT, SYSTEM) */}
          <ThemeToggle />
          {/* USER BUTTON COMPONENT FROM CLERK */}
          <UserButton
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: "2.5rem",
                  height: "2.5rem",
                },
              },
            }}
          >
            {/* ADD A MENU ITEM FOR BILLING IN THE USER BUTTON */}
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
