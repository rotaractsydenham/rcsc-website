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

export default function BoardCard({
  member,
  featured = false,
  compact = false,
}: Props) 
{
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900">

      <div className="relative overflow-hidden">

  <Image
    src={member.image}
    alt={member.name}
    width={500}
    height={600}
    className={`w-full object-cover transition duration-500 group-hover:scale-110 ${
      featured
        ? "aspect-[16/9]"
        : compact
        ? "aspect-square"
        : "aspect-[4/5]"
    }`}
  />

  <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">

    {member.email && (
      <Link
        href={`mailto:${member.email}`}
        className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-yellow-500"
      >
      <FiMail size={18} />
      </Link>
    )}

    {member.instagram && (
      <Link
        href={member.instagram}
        target="_blank"
        className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-pink-500"
      >
        <FaInstagram size={18} />
      </Link>
    )}

    {member.linkedin && (
      <Link
        href={member.linkedin}
        target="_blank"
        className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-blue-600"
      >
        <FaLinkedinIn size={18} />
      </Link>
    )}

  </div>

</div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {member.name}
        </h3>

        <p className="mt-2 text-yellow-500">
          {member.position}
        </p>

        <p className="mt-4 text-slate-500">
          {member.group}
        </p>

      </div>

    </div>
  );
}