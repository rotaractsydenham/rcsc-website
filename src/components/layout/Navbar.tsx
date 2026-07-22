"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/content/navigation";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

   const [menuOpen, setMenuOpen] = useState(false);
  
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const isHome = pathname === "/";
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
const transparentNavbar = isHome && !scrolled;

const textColor = transparentNavbar
  ? "text-white"
  : "text-slate-900 dark:text-white";

const secondaryTextColor = transparentNavbar
  ? "text-slate-100"
  : "text-slate-600 dark:text-slate-100";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
 transparentNavbar
  ? "bg-transparent"
  : "border-b border-white/20 bg-white/60 backdrop-blur-xl shadow-lg dark:border-slate-700/30 dark:bg-slate-900/60"
}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
         <Image
          src={
              resolvedTheme === "dark"
                 ? "/logo/logo-dark.png"
                   : "/logo/logo-light.png"
         }
          alt="Rotaract Club of Sydenham College"
         width={52}
         height={52}
          priority
         />

  <div className="hidden sm:block leading-tight">
    <h1 className={`text-sm transition-colors ${secondaryTextColor}`}>
      Rotaract Club Of
    </h1>

    <p className={`text-lg font-bold transition-colors ${textColor}`}>
      Sydenham College
    </p>
  </div>
</Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 hover:text-yellow-500 ${textColor}`}
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Mobile */}

<div className="flex items-center gap-4">

    <ThemeToggle className={textColor} />

    <button
     className="lg:hidden"
     onClick={() => setMenuOpen(true)}
    >
        <Menu className={textColor} />
    </button>

</div>

      </div>
      <MobileMenu
         open={menuOpen}
        onClose={() => setMenuOpen(false)}
    />
    </header>
  );
}