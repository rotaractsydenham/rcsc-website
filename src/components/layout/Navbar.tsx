"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Legacy", href: "/legacy" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur dark:bg-slate-950/90"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
        <Image
         src="/logo/logo.png"
         alt="Rotaract Club of Sydenham College"
         width={50}
         height={50}
         priority
         />

  <div className="hidden sm:block leading-tight">
    <h1 className="text-sm text-slate-500 dark:text-slate-400">
      Rotaract Club Of
    </h1>

    <p className="font-bold text-lg">
      Sydenham College
    </p>
  </div>
</Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Mobile */}

        <button className="lg:hidden">

          <Menu />

        </button>

      </div>
    </header>
  );
}