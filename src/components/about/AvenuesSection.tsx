import Link from "next/link";
import {
  Users,
  HeartHandshake,
  Briefcase,
  Globe,
  Trophy,
  ArrowRight,
} from "lucide-react";

const avenues = [
  {
    title: "Club Service",
    icon: Users,
    description:
      "Building fellowship, strengthening teamwork and creating memorable experiences within the club.",
    href: "/projects",
  },
  {
    title: "Community Service",
    icon: HeartHandshake,
    description:
      "Creating meaningful impact through projects that serve society and promote sustainable development.",
    href: "/projects",
  },
  {
    title: "Professional Development",
    icon: Briefcase,
    description:
      "Equipping members with leadership, communication and career-building opportunities.",
    href: "/projects",
  },
  {
    title: "International Service",
    icon: Globe,
    description:
      "Building friendships beyond borders while promoting cultural understanding and global collaboration.",
    href: "/projects",
  },
  {
    title: "Sports",
    icon: Trophy,
    description:
      "Promoting teamwork, fitness and sportsmanship through friendly competitions and district events.",
    href: "/projects",
  },
];

export default function AvenuesSection() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              OUR AVENUES
            </span>

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          </div>

          <h2 className="text-5xl font-black">

            Five Avenues, One Purpose

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

            Every initiative we undertake is guided by one of the five avenues
            of service, ensuring a balanced approach to leadership,
            professional growth and community impact.

          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {avenues.map((avenue) => {

            const Icon = avenue.icon;

            return (

              <Link
                key={avenue.title}
                href={avenue.href}
                className="
                  group

                  rounded-[2rem]
                  border
                  bg-white
                  p-8

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-yellow-400
                  hover:shadow-xl

                  dark:bg-slate-900
                "
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-black">

                  {avenue.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                  {avenue.description}

                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-yellow-500">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}