"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowUp,
} from "lucide-react";

import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Legacy", href: "/legacy" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    "AMBÎENTE",
    "Water Bowl",
    "Shining Paws",
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">

      {/* CTA */}

      <div className="absolute left-1/2 top-0 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6">
        <div className="rounded-3xl bg-gradient-to-r from-yellow-500 to-amber-400 p-10 shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-4xl font-black text-slate-900">
                Ready to Lead?
              </h2>

              <p className="mt-3 max-w-xl text-lg text-slate-800">
                Become part of a community that believes in
                leadership, fellowship and service above self.
              </p>

            </div>

            <Link
              href="/join"
              className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black"
            >
              Join RCSC
            </Link>

          </div>

        </div>
      </div>

      {/* Footer */}

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-48">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Club */}

          <div className="lg:col-span-2">

            <Image
              src="/logo-dark.png"
              alt="RCSC"
              width={70}
              height={70}
            />

            <h3 className="mt-5 text-2xl font-bold text-white">
              Rotaract Club of
              <br />
              Sydenham College
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Empowering young leaders through
              fellowship, professional development,
              community service and lasting impact.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="https://instagram.com/rotaract.sydenham"
                target="_blank"
                className="rounded-full border border-slate-700 p-3 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
              >
                <LiaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaFacebookF size={18} />
              </Link>

            </div>

          </div>

          {/* Links */}

          <div>

            <h4 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="transition hover:pl-2 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Projects */}

          <div>

            <h4 className="mb-6 text-lg font-bold text-white">
              Flagship Projects
            </h4>

            <ul className="space-y-4">

              {projects.map((project) => (

                <li key={project}>
                  {project}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-lg font-bold text-white">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-yellow-400"
                />

                <span>
                  Sydenham College of Commerce &
                  Economics
                  <br />
                  Churchgate,
                  Mumbai
                </span>

              </div>

              <div className="flex gap-3">

                <FiMail
                  size={20}
                  className="text-yellow-400"
                />

                <a
                  href="mailto:info@rotaractsydenham.in"
                  className="hover:text-yellow-400"
                >
                  rotaractsydenham@gmail.com
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-slate-500">
            © {year} Rotaract Club of Sydenham College.
            All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Rotary International District 3141
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-slate-700 p-3 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}