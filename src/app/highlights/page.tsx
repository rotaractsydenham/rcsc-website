"use client";

import { useState } from "react";
import { ArrowUpRight, Bell, Star, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/shared/PageHero";
import HighlightCard from "@/components/highlights/HighlightCard";

import { highlightEvents } from "@/content/highlights/events";
import { achievements } from "@/content/highlights/achievements";
import { announcements } from "@/content/highlights/announcements";
import { membersOfTheMonth } from "@/content/highlights/members";

type FilterType =
  | "all"
  | "events"
  | "achievements"
  | "announcements"
  | "members";

const filters: { label: string; value: FilterType }[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Events",
    value: "events",
  },
  {
    label: "Achievements",
    value: "achievements",
  },
  {
    label: "Announcements",
    value: "announcements",
  },
  {
    label: "Member of the Month",
    value: "members",
  },
];

export default function HighlightsPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterType>("all");

  const showEvents =
    activeFilter === "all" ||
    activeFilter === "events";

  const showAchievements =
    activeFilter === "all" ||
    activeFilter === "achievements";

  const showAnnouncements =
    activeFilter === "all" ||
    activeFilter === "announcements";

  const showMembers =
    activeFilter === "all" ||
    activeFilter === "members";

  const hasContent =
    (showEvents && highlightEvents.length > 0) ||
    (showAchievements && achievements.length > 0) ||
    (showAnnouncements && announcements.length > 0) ||
    (showMembers && membersOfTheMonth.length > 0);

  return (
    <main className="bg-white dark:bg-slate-950">

      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHero
        eyebrow="RCSC Highlights"
        title="What's Happening at RCSC"
        subtitle="Explore our events, achievements, announcements and the people who make our club what it is."
        image="/images/hero/hero.jpg"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <section
        className="
          relative overflow-hidden
          pb-32
          pt-14
          sm:pb-36
          sm:pt-18
          lg:pb-40
          lg:pt-22
        "
      >

        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
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
            relative
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}
          <div className="mb-7 sm:mb-9">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-yellow-400 sm:w-12" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-yellow-500
                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                From the RCSC Community
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                justify-between
                gap-5
                sm:flex-row
                sm:items-end
              "
            >
              <h2
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Latest Highlights
              </h2>

              <p
                className="
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                  sm:text-right
                "
              >
                Events, achievements, announcements and members worth
                celebrating.
              </p>
            </div>
          </div>

          {/* =================================================
              FILTERS
          ================================================= */}
          <div
            className="
              mb-9
              flex
              gap-2
              overflow-x-auto
              pb-2

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:flex-wrap
              sm:overflow-visible
              sm:pb-0
            "
          >
            {filters.map((filter) => {
              const active =
                activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter.value)
                  }
                  className={`
                    shrink-0
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-yellow-400 text-slate-950 shadow-sm"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-yellow-400 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }
                  `}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* =================================================
              EVENTS
          ================================================= */}
          {showEvents && highlightEvents.length > 0 && (
            <HighlightGroup
              eyebrow="Events"
              title="What's on the Calendar"
              description="Discover upcoming and past events organised by RCSC."
            >
              {highlightEvents.map((event) => (
                <div
                  key={event.id}
                  className="
                    w-[calc(100vw-52px)]
                    shrink-0
                    snap-start

                    sm:w-auto
                    sm:shrink
                  "
                >
                  <HighlightCard event={event} />
                </div>
              ))}
            </HighlightGroup>
          )}

          {/* =================================================
              MEMBER OF THE MONTH
          ================================================= */}
          {showMembers &&
            membersOfTheMonth.length > 0 && (
              <HighlightGroup
                eyebrow="Recognition"
                title="Member of the Month"
                description="Celebrating the people who go above and beyond for RCSC."
              >
                {membersOfTheMonth.map((member) => (
                  <div
                    key={member.id}
                    className="
                      w-[calc(100vw-52px)]
                      shrink-0
                      snap-start

                      sm:w-auto
                      sm:shrink
                    "
                  >
                    <MemberCard member={member} />
                  </div>
                ))}
              </HighlightGroup>
            )}

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}
          {showAchievements &&
            achievements.length > 0 && (
              <HighlightGroup
                eyebrow="Recognition"
                title="Achievements"
                description="Celebrating milestones, awards and accomplishments."
              >
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="
                      w-[calc(100vw-52px)]
                      shrink-0
                      snap-start

                      sm:w-auto
                      sm:shrink
                    "
                  >
                    <AchievementCard
                      achievement={achievement}
                    />
                  </div>
                ))}
              </HighlightGroup>
            )}

          {/* =================================================
              ANNOUNCEMENTS
          ================================================= */}
          {showAnnouncements &&
            announcements.length > 0 && (
              <HighlightGroup
                eyebrow="Updates"
                title="Announcements"
                description="Important updates and notices from the club."
              >
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="
                      w-[calc(100vw-52px)]
                      shrink-0
                      snap-start

                      sm:w-auto
                      sm:shrink
                    "
                  >
                    <AnnouncementCard
                      announcement={announcement}
                    />
                  </div>
                ))}
              </HighlightGroup>
            )}

          {/* =================================================
              EMPTY STATE
          ================================================= */}
          {!hasContent && (
            <div
              className="
                rounded-[2rem]
                border
                border-dashed
                border-slate-300
                px-6
                py-20
                text-center
                dark:border-slate-700
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400/10
                  text-yellow-500
                "
              >
                <Bell size={24} />
              </div>

              <h3 className="mt-5 text-xl font-black">
                Nothing here yet
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                New highlights will appear here as the RCSC
                community continues to grow.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}


/* =============================================================
   GROUP
============================================================= */

function HighlightGroup({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16 last:mb-0 sm:mb-20">

      <div className="mb-7">

        <div className="mb-2 flex items-center gap-3">
          <span className="h-[2px] w-8 rounded-full bg-yellow-400" />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-yellow-500
            "
          >
            {eyebrow}
          </p>
        </div>

        <div
          className="
            flex
            flex-col
            justify-between
            gap-2
            sm:flex-row
            sm:items-end
          "
        >
          <h3 className="text-2xl font-black sm:text-3xl">
            {title}
          </h3>

          <p
            className="
              max-w-lg
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
              sm:text-right
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* =================================================
          MOBILE CAROUSEL / DESKTOP GRID
      ================================================= */}
      <div
        className="
          -mx-5
          flex
          w-[calc(100%+2.5rem)]
          gap-3
          overflow-x-auto
          px-5
          pb-4
          snap-x
          snap-mandatory
          scroll-px-5

          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          sm:mx-0
          sm:w-auto
          sm:px-0
          sm:scroll-px-0
          sm:grid
          sm:grid-cols-2
          lg:grid-cols-3
          sm:gap-6
          sm:overflow-visible
          sm:pb-0
        "
      >
        {children}
      </div>
    </section>
  );
}


/* =============================================================
   MEMBER CARD
============================================================= */

function MemberCard({
  member,
}: {
  member: (typeof membersOfTheMonth)[number];
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[1.75rem]
        border
        border-yellow-400/40
        bg-slate-950
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative aspect-[4/5] overflow-hidden">

        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 84vw, 33vw"
          className="
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/30
            to-transparent
          "
        />

        <div className="absolute left-5 top-5">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-yellow-400
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-950
            "
          >
            <Star size={11} />
            Member of the Month
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-yellow-400
            "
          >
            {member.month}
          </p>

          <h4 className="mt-1 text-2xl font-black text-white">
            {member.name}
          </h4>

          <p
            className="
              mt-2
              line-clamp-2
              text-sm
              leading-6
              text-white/75
            "
          >
            {member.description}
          </p>
        </div>

      </div>
    </article>
  );
}


/* =============================================================
   ACHIEVEMENT CARD
============================================================= */

function AchievementCard({
  achievement,
}: {
  achievement: (typeof achievements)[number];
}) {
  return (
    <article
      className="
        group
        flex
        min-h-[280px]
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-400
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >

      {achievement.image ? (
        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 640px) 84vw, 33vw"
            className="
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />

        </div>
      ) : (
        <div
          className="
            flex
            aspect-[16/10]
            items-center
            justify-center
            bg-slate-100
            dark:bg-slate-800
          "
        >
          <Trophy
            className="text-yellow-500"
            size={42}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-yellow-500
          "
        >
          {achievement.date}
        </p>

        <h4 className="mt-2 text-xl font-black">
          {achievement.title}
        </h4>

        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          {achievement.description}
        </p>

      </div>
    </article>
  );
}


/* =============================================================
   ANNOUNCEMENT CARD
============================================================= */

function AnnouncementCard({
  announcement,
}: {
  announcement: (typeof announcements)[number];
}) {
  return (
    <Link
      href={`/highlights/${announcement.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex
          min-h-[280px]
          h-full
          flex-col
          overflow-hidden
          rounded-[1.75rem]
          border
          border-slate-800
          bg-slate-950
          p-6
          text-white
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-yellow-400
          hover:shadow-xl
        "
      >

        <div className="flex items-center justify-between">

          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-yellow-400/10
              text-yellow-400
            "
          >
            <Bell size={22} />
          </span>

          <ArrowUpRight
            size={20}
            className="
              text-white/40
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-yellow-400
            "
          />

        </div>

        <div className="mt-auto">

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-yellow-400
            "
          >
            {announcement.date}
          </p>

          <h4 className="mt-2 text-2xl font-black">
            {announcement.title}
          </h4>

          <p
            className="
              mt-2
              line-clamp-3
              text-sm
              leading-6
              text-white/65
            "
          >
            {announcement.description}
          </p>

        </div>
      </article>
    </Link>
  );
}