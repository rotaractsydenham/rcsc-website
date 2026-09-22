import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { BoardMember } from "@/content/board";

interface Props {
  member: BoardMember;
  featured?: boolean;
  compact?: boolean;
}

export default function BoardCard({ member }: Props) {
  return (
    <div className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      
      {/* Image */}
      <div className="relative h-[360px] shrink-0 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Social Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-yellow-500 hover:text-slate-900"
            >
              <FiMail size={18} />
            </Link>
          )}

          {member.instagram && (
            <Link
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Instagram`}
              className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-pink-500"
            >
              <FaInstagram size={18} />
            </Link>
          )}

          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-blue-600"
            >
              <FaLinkedinIn size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {member.name}
        </h3>

        <p className="mt-3 text-base font-semibold text-yellow-500">
          {member.position}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />

          <p className="pt-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
            {member.group}
          </p>
        </div>
      </div>
    </div>
  );
}