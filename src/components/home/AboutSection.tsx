import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe,
  HeartHandshake,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Leadership",
    description:
      "Develop confident leaders through hands-on experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description:
      "Create meaningful impact in the community.",
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description:
      "Build skills for careers and entrepreneurship.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connect with Rotaractors around the world.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="
        relative
        -mt-1
        overflow-hidden
        bg-white
        pt-16
        pb-24
        dark:bg-slate-950
      "
    >
      {/* =====================================================
          HERO → ABOUT TRANSITION
      ===================================================== */}

      {/* Soft continuation of the Hero fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-28
          bg-gradient-to-b
          from-white/0
          via-white/80
          to-white
          dark:via-slate-950/80
          dark:to-slate-950
        "
      />

      {/* Subtle gold atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-72
          -translate-x-1/2
          rounded-full
          bg-yellow-400/5
          blur-[90px]
        "
      />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-20
          h-96
          w-96
          rounded-full
          bg-yellow-400/5
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-slate-200/40
          blur-[100px]
          dark:bg-yellow-400/[0.02]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            MAIN ABOUT
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-14
            pt-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="
              relative
              order-2
              lg:order-1
            "
          >
            {/* Decorative frame */}
            <div
              className="
                absolute
                -bottom-5
                -left-5
                h-full
                w-full
                rounded-[2rem]
                border-2
                border-yellow-400/30
              "
            />

            {/* Image container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-slate-900
                shadow-2xl
              "
            >
              <Image
                src="/images/about/about.jpg"
                alt="Rotaract Club of Sydenham College"
                width={900}
                height={650}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                  sm:h-[500px]
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/60
                  via-transparent
                  to-transparent
                "
              />

              {/* =================================================
                  FLOATING YEAR
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/20
                  bg-black/40
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-yellow-400
                  "
                >
                  Chartered
                </p>

                <p
                  className="
                    mt-1
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  2020
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              order-1
              lg:order-2
            "
          >
            {/* Eyebrow */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-[2px]
                  w-12
                  rounded-full
                  bg-yellow-400
                "
              />

              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-yellow-500
                "
              >
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-2xl
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              Young Leaders.
              <br />

              <span className="text-yellow-500">
                Lasting Impact.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                dark:text-slate-300
              "
            >
              Chartered in 2020 under Rotary International
              District 3141, the Rotaract Club of Sydenham College
              empowers young people through leadership, community
              service, professional development, and fellowship.
            </p>

            {/* Second paragraph */}
            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-500
                dark:text-slate-400
              "
            >
              Our members believe in creating meaningful change
              while developing lifelong friendships and leadership
              skills.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-9">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-yellow-400
                  px-6
                  py-3.5
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  dark:text-white
                "
              >
                Discover RCSC

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400
                    text-slate-900
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ===================================================
            WHAT WE STAND FOR
        =================================================== */}

        <div
          className="
            mt-28
            mb-10
            text-center
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.4em]
              text-yellow-500
            "
          >
            What We Stand For
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-4xl
              dark:text-white
            "
          >
            More Than a Club
          </h3>
        </div>

        {/* ===================================================
            FEATURE CARDS
        =================================================== */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-slate-200
                  bg-slate-50
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400
                  hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* =================================================
                    NUMBER
                ================================================= */}

                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-5xl
                    font-black
                    text-slate-200/70
                    dark:text-slate-800
                  "
                >
                  0{index + 1}
                </span>

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    relative
                    mb-7
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                    text-yellow-500
                    transition-all
                    duration-300
                    group-hover:bg-yellow-400
                    group-hover:text-slate-900
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-950
                    dark:text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {feature.description}
                </p>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    mt-6
                    h-[2px]
                    w-8
                    rounded-full
                    bg-yellow-400
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    -right-16
                    h-32
                    w-32
                    rounded-full
                    bg-yellow-400/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          ABOUT → EVENTS PREPARATION
          
          Very subtle bottom fade. This does NOT act as a
          separator; it simply gives the next section room
          to transition visually.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-b
          from-transparent
          to-slate-50
          dark:to-slate-900
        "
      />
    </section>
  );
}