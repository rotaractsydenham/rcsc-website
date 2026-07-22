"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

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

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Background */}

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 transition duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-72 bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">

          <h2 className="font-bold text-xl">
            Menu
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-6">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-lg hover:text-yellow-500 transition"
            >
              {link.name}
            </Link>
          ))}

        </nav>

      </aside>
    </>
  );
}