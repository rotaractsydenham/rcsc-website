"use client";

import { club } from "@/content/club";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  useEffect,
  useState,
} from "react";



type AnimationPhase =
  | "full"
  | "typing-rcsc"
  | "typing-rcsydc"
  | "back-rcsc"
  | "typing-final";

const FULL_NAME =
  "Rotaract Club of Sydenham College";

const FIRST_LINE =
  "Rotaract Club";

export default function Hero() {
  const [phase, setPhase] =
    useState<AnimationPhase>("full");

  const [displayText, setDisplayText] =
    useState(FULL_NAME);

  /* =========================================================
     IDENTITY ANIMATION
  ========================================================= */

  useEffect(() => {
    let cancelled = false;

    let timeout: ReturnType<
      typeof setTimeout
    >;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeout = setTimeout(
          resolve,
          ms
        );
      });

    const typeText = async (
      text: string,
      speed: number,
      afterDelay: number
    ) => {
      for (
        let i = 1;
        i <= text.length;
        i++
      ) {
        if (cancelled) return;

        setDisplayText(
          text.slice(0, i)
        );

        await wait(speed);
      }

      await wait(afterDelay);
    };

    const deleteText = async (
      text: string,
      minimumLength: number,
      speed: number,
      afterDelay: number
    ) => {
      for (
        let i = text.length - 1;
        i >= minimumLength;
        i--
      ) {
        if (cancelled) return;

        setDisplayText(
          text.slice(0, i)
        );

        await wait(speed);
      }

      await wait(afterDelay);
    };

    const runAnimation =
      async () => {
        /* ================================================
           INITIAL FULL NAME
        ================================================ */

        setPhase("full");
        setDisplayText(FULL_NAME);

        await wait(2800);

        /* ================================================
           FULL NAME → RCSC
        ================================================ */

        setPhase("typing-rcsc");

        await deleteText(
          FULL_NAME,
          0,
          28,
          200
        );

        await typeText(
          "RCSC",
          170,
          850
        );

        /* ================================================
           RCSC → RCSydC
        ================================================ */

        setPhase("typing-rcsydc");

        await deleteText(
          "RCSC",
          3,
          120,
          150
        );

        await typeText(
          "RCSydC",
          150,
          1000
        );

        /* ================================================
           RCSydC → RCSC
        ================================================ */

        setPhase("back-rcsc");

        await deleteText(
          "RCSydC",
          3,
          100,
          150
        );

        await typeText(
          "RCSC",
          160,
          1000
        );

        /* ================================================
           RCSC → FULL NAME
        ================================================ */

        setPhase("typing-final");

        await deleteText(
          "RCSC",
          0,
          120,
          180
        );

        await typeText(
          FULL_NAME,
          55,
          0
        );

        if (!cancelled) {
          setPhase(
            "typing-final"
          );
      
        }
      
      };

    runAnimation();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  /* =========================================================
     STATES
  ========================================================= */

  const isInitialFullName =
    phase === "full";

  const isAbbreviation =
    phase === "typing-rcsc" ||
    phase === "typing-rcsydc" ||
    phase === "back-rcsc";

  const isFinalTyping =
    phase === "typing-final";

  /* =========================================================
     DESKTOP FULL NAME

     Desktop:
     Rotaract Club
     of Sydenham College
  ========================================================= */

  const renderDesktopFullName = (
    animated: boolean
  ) => {
    const firstLine = animated
      ? displayText.slice(
          0,
          FIRST_LINE.length
        )
      : FIRST_LINE;

    const secondLine = animated
      ? displayText.slice(
          FIRST_LINE.length
        )
      : "of Sydenham College";

    return (
      <div
        className="
          w-full
          font-black
          leading-[0.9]
          tracking-[-0.045em]
        "
      >
        {/* First line */}

        <div
          className="
            whitespace-nowrap
            text-[2.7rem]
            sm:text-6xl
            md:text-7xl
            lg:text-[5.6rem]
            xl:text-[6rem]
          "
        >
          {firstLine}

          {animated &&
            !secondLine && (
              <TypingCursor />
            )}
        </div>

        {/* Second line */}

        {secondLine && (
          <div
            className="
              mt-2
              whitespace-nowrap
              text-[2.7rem]
              text-yellow-400
              sm:text-6xl
              md:text-7xl
              lg:text-[5.6rem]
              xl:text-[6rem]
            "
          >
            {secondLine}

            {animated && (
              <TypingCursor />
            )}
          </div>
        )}
      </div>
    );
  };

  /* =========================================================
     MOBILE FULL NAME

     Mobile:
     Rotaract Club
     of Sydenham
     College

     All three lines intentionally use the
     SAME font size.
  ========================================================= */

  const renderMobileFullName = (
    animated: boolean
  ) => {
    const text = animated
      ? displayText
      : FULL_NAME;

    const lineOne = text.slice(
      0,
      FIRST_LINE.length
    );

    const remaining = text
      .slice(FIRST_LINE.length)
      .trimStart();

    const sydenhamLength =
      "of Sydenham".length;

    const lineTwo =
      remaining.slice(
        0,
        sydenhamLength
      );

    const lineThree =
      remaining
        .slice(sydenhamLength)
        .trimStart();

    return (
      <div
        className="
          select-none
          caret-transparent
          font-black
          leading-[0.88]
          tracking-[-0.045em]
        "
      >
        {/* =================================================
            ROTARACT CLUB
        ================================================= */}

        <div
          className="
            whitespace-nowrap
            text-[2.55rem]
          "
        >
          {lineOne}

          {animated &&
            !lineTwo && (
              <TypingCursor />
            )}
        </div>

        {/* =================================================
            OF SYDENHAM
        ================================================= */}

        {lineTwo && (
          <div
            className="
              mt-1
              whitespace-nowrap
              text-[2.55rem]
              text-yellow-400
            "
          >
            {lineTwo}

            {animated &&
              !lineThree && (
                <TypingCursor />
              )}
          </div>
        )}

        {/* =================================================
            COLLEGE
        ================================================= */}

        {lineThree && (
          <div
            className="
              mt-1
              whitespace-nowrap
              text-[2.55rem]
              text-yellow-400
            "
          >
            {lineThree}

            {animated && (
              <TypingCursor />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100svh-12px)]
        items-center
        overflow-hidden
        bg-slate-950
        text-white
        sm:min-h-[680px]
        lg:min-h-[700px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Rotaract Club of Sydenham College"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* =====================================================
          OVERLAYS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/95
          via-slate-950/65
          to-slate-950/20
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950
          via-transparent
          to-black/20
        "
      />

      {/* =====================================================
          ATMOSPHERIC GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-400/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-yellow-400/5
          blur-[130px]
        "
      />

      {/* =====================================================
          DESKTOP SIDE ACCENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-6
          top-1/2
          hidden
          h-36
          w-px
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-yellow-400
          to-transparent
          lg:block
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
        "
      >
        <div className="max-w-[1200px]">

          {/* =================================================
              ROTARY INTERNATIONAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mb-5
              sm:mb-8
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              {/* Gold dot */}

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-400/60
                  bg-yellow-400/10
                  sm:h-9
                  sm:w-9
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-yellow-400
                  "
                />
              </span>

              <div className="flex flex-col">

                {/* Rotary International */}

                <span
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white/50
                    sm:text-[10px]
                    sm:tracking-[0.35em]
                  "
                >
                  Rotaract Mumbai
                </span>

                {/* District */}

                <span
                  className="
                    mt-0.5
                    text-[11px]
                    font-black
                    tracking-[0.1em]
                    text-yellow-400
                    sm:text-lg
                    sm:tracking-[0.18em]
                  "
                >
                  {club.district}
                </span>

              </div>
            </div>
          </motion.div>

          {/* =================================================
              IDENTITY AREA
          ================================================= */}

          <div
            className="
              relative
              min-h-[155px]
              sm:min-h-[185px]
              lg:min-h-[190px]
            "
          >

            {/* =================================================
                INITIAL FULL NAME
            ================================================= */}

            {isInitialFullName && (
              <>
                {/* Desktop */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    inset-x-0
                    top-0
                    hidden
                    w-full
                    max-w-[1180px]
                    sm:block
                  "
                >
                  {renderDesktopFullName(
                    false
                  )}
                </motion.div>

                {/* Mobile */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    inset-x-0
                    top-0
                    block
                    sm:hidden
                  "
                >
                  {renderMobileFullName(
                    false
                  )}
                </motion.div>
              </>
            )}

            {/* =================================================
                RCSC / RCSydC
            ================================================= */}

            {isAbbreviation && (
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  flex
                  items-start
                "
              >
                <div
                  className="
                    flex
                    items-center
                    text-6xl
                    font-black
                    leading-none
                    tracking-[-0.075em]
                    text-yellow-400
                    sm:text-8xl
                    md:text-9xl
                    lg:text-[9rem]
                  "
                >
                  <span>
                    {displayText}
                  </span>

                  <TypingCursor />
                </div>
              </div>
            )}

            {/* =================================================
                FINAL FULL NAME
            ================================================= */}

            {isFinalTyping && (
              <>
                {/* Desktop */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    hidden
                    w-full
                    max-w-[1180px]
                    sm:block
                  "
                >
                  {renderDesktopFullName(
                    true
                  )}
                </div>

                {/* Mobile */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    block
                    sm:hidden
                  "
                >
                  {renderMobileFullName(
                    true
                  )}
                </div>
              </>
            )}
          </div>

          {/* =================================================
              GOLD LINE
          ================================================= */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 96,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mt-2
              h-1
              rounded-full
              bg-yellow-400
              sm:mt-4
            "
          />

          {/* =================================================
              TAGLINE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-slate-200
              sm:mt-6
              sm:text-lg
              sm:leading-8
              md:text-xl
            "
          >
            {club.tagline}
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.8,
            }}
            className="
              mt-6
              flex
              w-full
              flex-row
              gap-2.5
              sm:mt-8
              sm:w-auto
              sm:gap-4
            "
          >
            {/* =================================================
                JOIN RCSC
            ================================================= */}

            <Link
              href="/join"
              className="
                group
                inline-flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                bg-yellow-400
                px-4
                py-2.5
                text-xs
                font-bold
                text-slate-950
                transition-all
                duration-300
                hover:bg-yellow-300
                hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
                sm:flex-none
                sm:gap-3
                sm:px-7
                sm:py-3
                sm:text-sm
              "
            >
              <span>
                Join RCSC
              </span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-950
                  text-yellow-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:h-7
                  sm:w-7
                "
              >
                <ArrowRight size={13} />
              </span>
            </Link>

            {/* =================================================
                EXPLORE PROJECTS
            ================================================= */}

            <Link
              href="/projects"
              className="
                group
                inline-flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/35
                bg-white/5
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-400
                hover:text-slate-950
                sm:flex-none
                sm:gap-3
                sm:px-7
                sm:py-3
                sm:text-sm
              "
            >
              <span>
                Explore Projects
              </span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  text-white
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:border-slate-950
                  group-hover:text-slate-950
                  sm:h-7
                  sm:w-7
                "
              >
                <ArrowRight size={13} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          bottom-5
          left-1/2
          z-50
          -translate-x-1/2
          sm:bottom-7
        "
      >
        <ChevronDown
          size={24}
          strokeWidth={2}
          className="
            animate-bounce
            text-yellow-400
            drop-shadow-[0_0_10px_rgba(250,204,21,0.45)]
          "
        />
      </motion.div>

      {/* =====================================================
          HERO → ABOUT TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-20
        "
      >
        {/* Fade */}

        <div
          className="
            absolute
            inset-0
            
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-12
            w-48
            -translate-x-1/2
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />

        {/* Gold line */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-14
            -translate-x-1/2
            rounded-full
            bg-yellow-400
          "
        />
      </div>
    </section>
  );
}

/* ===========================================================
   TYPING CURSOR
=========================================================== */

function TypingCursor() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        ml-1.5
        inline-block
        h-[0.78em]
        w-[2px]
        translate-y-[0.08em]
        rounded-full
        bg-yellow-400
        align-middle
        select-none
        caret-transparent
        sm:ml-3
        sm:w-[5px]
      "
      style={{
        backgroundColor: "#facc15",
      }}
    />
  );
}