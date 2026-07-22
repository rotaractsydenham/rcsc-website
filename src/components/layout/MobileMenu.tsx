"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  X,
  House,
  Info,
  Users,
  History,
  Calendar,
  FolderKanban,
  Images,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

import ThemeToggle from "./ThemeToggle";

interface Props {
  open: boolean;
  onClose: () => void;
}

const links = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
  {
    name: "Leadership",
    href: "/leadership",
    icon: Users,
  },
  {
    name: "Legacy",
    href: "/legacy",
    icon: History,
  },
  {
    name: "Events",
    href: "/events",
    icon: Calendar,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Images,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}

     <div
        onClick={onClose}
        className={`fixed inset-0 z-40
      bg-slate-950/25
      backdrop-blur-xl
      transition-all duration-500
      ${
      open
      ? "opacity-100"
      : "pointer-events-none opacity-0"
      }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-80 max-w-[88vw] flex-col overflow-hidden

        border-l border-white/15

        bg-gradient-to-b
        from-slate-900/70
        via-slate-900/60
        to-slate-950/75

        backdrop-blur-[30px]

        text-white

        shadow-[0_25px_80px_rgba(0,0,0,.45)]

        transition-transform duration-500 ease-out

        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Glass Highlight */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

          <div className="absolute left-0 top-0 h-full w-px bg-white/20" />

          <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white/[0.03] to-transparent" />

        </div>

        {/* Header */}

        <div className="relative border-b border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-5 py-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Image
                src="/logo/logo-dark.png"
                alt="RCSC"
                width={44}
                height={44}
              />

              <div>
                <p className="text-sm text-slate-300">
                  Rotaract Club of
                </p>

                <h2 className="font-bold leading-tight">
                  Sydenham College
                </h2>

              

              </div>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-white/10"
            >
              <X size={22} />
            </button>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-3 py-4">
 {links.map((link) => {
  const Icon = link.icon;

  const active =
    pathname === link.href ||
    (link.href !== "/" && pathname.startsWith(link.href));

  return (
    <Link
      key={link.name}
      href={link.href}
      onClick={onClose}
      className={`group relative mb-2 flex items-center gap-4 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-300 text-slate-900 shadow-xl"
          : "text-white hover:translate-x-2 hover:bg-white/10 hover:shadow-lg"
      }`}
    >
      {/* Hover Glow */}
      {!active && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      {/* Icon */}
      <div
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
          active
            ? "bg-white/30"
            : "bg-white/5 group-hover:bg-white/10"
        }`}
      >
        <Icon size={18} />
      </div>

      {/* Text */}
      <span className="relative z-10 font-medium tracking-wide">
        {link.name}
      </span>

      {/* Active Indicator */}
      {active && (
        <div className="ml-auto h-2 w-2 rounded-full bg-slate-900" />
      )}
    </Link>
  );
})}
</nav>
        {/* Footer */}

        <div className="relative border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent p-5">

          {/* Theme Card */}

          <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  Appearance
                </h3>

                <p className="mt-1 text-xs text-slate-300">
                  Switch between light and dark mode
                </p>

              </div>

              <ThemeToggle />

            </div>

          </div>

          {/* Social Media */}

          <div className="mb-2">

            

            <div className="flex justify-center gap-4">

              <a
                href="https://instagram.com/rotaractsydenham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaFacebookF size={18} />
              </a>

            </div>

          </div>

          {/* Footer Branding */}

            <div className="mx-auto mt-2 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <p className="mt-4 text-xs text-slate-500">
              © 2026 Rotaract Club of Sydenham College
            </p>
          
        </div>

      </aside>
    </>
  );
}