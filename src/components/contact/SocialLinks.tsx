import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import { contact } from "@/content/contact";

export default function SocialLinks() {
  const socials = [
    {
      href: contact.social.instagram,
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: contact.social.linkedin,
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: contact.social.facebook,
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      href: contact.social.youtube,
      icon: <FaYoutube />,
      label: "YouTube",
    },
  ];

  return (
    <div className="flex justify-center gap-5">

      {socials.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          className="rounded-full border p-4 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}

    </div>
  );
}