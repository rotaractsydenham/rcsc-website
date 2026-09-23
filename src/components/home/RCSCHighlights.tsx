"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  Star,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

import { highlightEvents } from "@/content/highlights/events";
import { achievements } from "@/content/highlights/achievements";
import { announcements } from "@/content/highlights/announcements";
import { membersOfTheMonth } from "@/content/highlights/members";

type HomepageHighlight = {
  type: "Event" | "Achievement" | "Announcement" | "Member of the Month";
  title: string;
  description: string;
  date: string;
  image: string | null;
  icon: typeof Bell;
  featured: boolean;
  href: string;
};

export default function RCSCHighlights() {
  /*
   * Combine all highlight types into one homepage feed.
   *
   * The homepage only shows three highlights.
   * The complete collection lives on /highlights.
   */
  const highlights: HomepageHighlight[] = [
    ...highlightEvents.map((event) => ({
      type: "Event" as const,
      title: event.title,
      description: event.description,
      date: event.date,
      image: event.image,
      icon: Bell,
      featured: event.featured,
      href: `/highlights/${event.slug}`,
    })),

    ...achievements.map((achievement) => ({
      type: "Achievement" as const,
      title: achievement.title,
      description: achievement.description,
      date: achievement.date,
      image: achievement.image ?? null,
      icon: Trophy,
      featured: achievement.featured,
      href: `/highlights/${achievement.slug}`,
    })),

    ...announcements.map((announcement) => ({
      type: "Announcement" as const,
      title: announcement.title,
      description: announcement.description,
      date: announcement.date,
      image: announcement.image ?? null,
      icon: Bell,
      featured: announcement.featured,
      href: `/highlights/${announcement.slug}`,
    })),

    ...membersOfTheMonth.map((member) => ({
      type: "Member of the Month" as const,
      title: member.name,
      description: member.description,
      date: member.month,
      image: member.image,
      icon: Star,
      featured: member.featured,
      href: `/highlights/${member.slug}`,
    })),
  ];

  /*
   * Featured items first, then the remaining highlights.
   * Only three are shown on the homepage.
   */
  const displayedHighlights = [
    ...highlights.filter((highlight) => highlight.featured),
    ...highlights.filter((highlight) => !highlight.featured),
  ].slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900">

      {/* =====================================================
          TOP ACCENT
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-end justify-between gap-5 sm:mb-9"
        >
          <div>
            <div className="mb-2.5 flex items-center gap-2.5">

              {/* Live indicator */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-500 sm:text-xs sm:tracking-[0.35em]">
                RCSC Highlights
              </p>

            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              What's happening in our community
            </h2>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/highlights"
            className="
              group hidden shrink-0 items-center gap-2
              text-[10px] font-bold uppercase tracking-[0.18em]
              text-slate-500
              transition-colors
              hover:text-slate-950
              dark:text-slate-400
              dark:hover:text-white
              sm:flex
            "
          >
            View All Highlights

            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                bg-yellow-400
                text-slate-950
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            HIGHLIGHTS
        ===================================================== */}

        <div
          className="
            -mx-5
            flex
            snap-x
            snap-mandatory
            gap-2
            overflow-x-auto
            px-5
            pb-3

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:mx-0
            sm:grid
            sm:grid-cols-2
            sm:gap-4
            sm:overflow-visible
            sm:px-0
            sm:pb-0

            lg:grid-cols-3
          "
        >
          {displayedHighlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={`${highlight.type}-${highlight.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="
                  w-[calc(100vw-40px)]
                  shrink-0
                  snap-center

                  sm:w-auto
                  sm:shrink
                "
              >
                <Link
                  href={highlight.href}
                  className="group block h-full"
                >
                  <article
                    className={`
                      relative flex h-[310px]
                      w-full
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      bg-white
                      transition-all duration-400

                      hover:-translate-y-1
                      hover:border-yellow-400
                      hover:shadow-xl

                      dark:bg-slate-950

                      sm:h-[300px]
                      sm:rounded-[1.75rem]

                      ${
                        highlight.featured
                          ? "border-yellow-400/50"
                          : "border-slate-200 dark:border-slate-800"
                      }
                    `}
                  >

                    {/* =================================================
                        IMAGE / BACKGROUND
                    ================================================= */}

                    {highlight.image ? (
                      <div className="absolute inset-0">
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          fill
                          sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">

                        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

                        <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
                          <Icon size={25} />
                        </div>

                      </div>
                    )}

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-6">

                      {/* Type */}
                      <div>
                        <span
                          className={`
                            inline-flex items-center gap-2
                            rounded-full
                            px-3 py-1.5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.2em]

                            ${
                              highlight.featured
                                ? "bg-yellow-400 text-slate-950"
                                : highlight.image
                                  ? "border border-white/20 bg-black/30 text-white backdrop-blur-md"
                                  : "border border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
                            }
                          `}
                        >
                          {!highlight.featured && (
                            <Icon size={11} />
                          )}

                          {highlight.type}
                        </span>
                      </div>

                      {/* Bottom content */}
                      <div>

                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-400">
                          {highlight.date}
                        </p>

                        <h3 className="line-clamp-2 text-2xl font-black leading-tight text-white sm:text-[1.7rem]">
                          {highlight.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                          {highlight.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-4 flex items-center justify-between">

                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                            Explore
                          </span>

                          <span
                            className="
                              flex h-9 w-9
                              items-center justify-center
                              rounded-full
                              bg-yellow-400
                              text-slate-950
                              transition-transform duration-300
                              group-hover:translate-x-1
                            "
                          >
                            <ArrowUpRight size={16} />
                          </span>

                        </div>

                      </div>
                    </div>

                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {displayedHighlights.length === 0 && (
          <div
            className="
              flex min-h-[220px]
              items-center justify-center
              rounded-[1.5rem]
              border border-dashed
              border-slate-300
              bg-white
              dark:border-slate-700
              dark:bg-slate-950
            "
          >
            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-500">
                <Bell size={21} />
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                New highlights coming soon.
              </p>

            </div>
          </div>
        )}

        {/* =====================================================
            MOBILE CTA
        ===================================================== */}

        <div className="mt-5 flex justify-center sm:hidden">

          <Link
            href="/highlights"
            className="
              group inline-flex
              items-center gap-2.5
              rounded-full
              border border-yellow-400
              px-5 py-2.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-950
              transition-all duration-300
              hover:bg-yellow-400
              dark:text-white
            "
          >
            View All Highlights

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-yellow-400
                text-slate-950
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={14} />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}