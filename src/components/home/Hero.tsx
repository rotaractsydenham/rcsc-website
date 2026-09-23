"use client";

import { club } from "@/content/club";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type AnimationPhase =
  | "full"
  | "typing-rcsc"
  | "typing-rcsydc"
  | "back-rcsc"
  | "typing-final";

const FULL_NAME = "Rotaract Club of Sydenham College";


const FIRST_LINE = "Rotaract Club";
const FIRST_LINE_LENGTH = FIRST_LINE.length;

export default function Hero() {
  const [phase, setPhase] = useState<AnimationPhase>("full");

  const [displayText, setDisplayText] = useState(FULL_NAME);

 

  useEffect(() => {
    let cancelled = false;

    let timeout: ReturnType<typeof setTimeout>;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeout = setTimeout(resolve, ms);
      });

    /*
     * Type character-by-character.
     */
    const typeText = async (
      text: string,
      speed: number,
      afterDelay: number
    ) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;

        setDisplayText(text.slice(0, i));

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
      for (let i = text.length - 1; i >= minimumLength; i--) {
        if (cancelled) return;

        setDisplayText(text.slice(0, i));

        await wait(speed);
      }

      await wait(afterDelay);
    };

    const runAnimation = async () => {
      /*
       * ========================================================
       * 1. FULL NAME
       * ========================================================
       */

      setPhase("full");

      await wait(2800);

      /*
       * ========================================================
       * 2. FULL NAME → RCSC
       * ========================================================
       */

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
        setPhase("typing-final");
      }
    };

    runAnimation();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  const isInitialFullName = phase === "full";

  const isAbbreviation =
    phase === "typing-rcsc" ||
    phase === "typing-rcsydc" ||
    phase === "back-rcsc";

  const isFinalTyping = phase === "typing-final";

  
  const renderTypingFullName = () => {
    const firstLine = displayText.slice(
      0,
      FIRST_LINE_LENGTH
    );

    const secondLine = displayText.slice(
      FIRST_LINE_LENGTH
    );

    const hasSecondLine =
      displayText.length > FIRST_LINE_LENGTH;

    return (
      <div
        className="
          max-w-5xl
          text-[2.55rem]
          font-black
          leading-[0.92]
          tracking-[-0.045em]
          sm:text-6xl
          sm:leading-[0.94]
          md:text-7xl
          lg:text-8xl
        "
      >
        {/* First line */}
        <span className="block">
          {firstLine}

          {!hasSecondLine && (
            <TypingCursor />
          )}
        </span>

        {/* Second line */}
        {hasSecondLine && (
          <span className="mt-2 block text-yellow-400">
            {secondLine}

            <TypingCursor />
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

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

      {/* Main overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />

      {/* =========================================================
          GOLD GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-[130px]" />

      {/* =========================================================
          SIDE DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute left-6 top-1/2 hidden h-36 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-yellow-400 to-transparent lg:block" />

      <div className="pointer-events-none absolute right-8 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          pb-24
          pt-28
          sm:px-8
          sm:py-32
          lg:px-12
        "
      >
        <div className="max-w-5xl">

          {/* rotary international */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 sm:mb-9"
          >
            <div className="inline-flex items-center gap-3">

              {/* Gold circle */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400/60 bg-yellow-400/10 sm:h-9 sm:w-9">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
              </span>

              {/* District */}
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-[10px] sm:tracking-[0.35em]">
                  ROTARACT MUMBAI
                </span>

                <span className="mt-0.5 text-base font-black tracking-[0.16em] text-yellow-400 sm:text-lg sm:tracking-[0.18em]">
                  {club.district}
                </span>
              </div>

            </div>
          </motion.div>

          {/* a */}

          <div
            className="
              relative
              min-h-[clamp(175px,22vw,260px)]
            "
          >

            {/* ===================================================
                INITIAL FULL NAME
            =================================================== */}

            {isInitialFullName && (
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
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      inset-x-0
      top-0
      max-w-5xl
      text-[2.55rem]
      font-black
      leading-[0.92]
      tracking-[-0.045em]
      sm:text-6xl
      sm:leading-[0.94]
      md:text-7xl
      lg:text-8xl
    "
  >
    <span className="block">
      Rotaract Club
    </span>

    <span className="mt-2 block text-yellow-400">
      of Sydenham College
    </span>
  </motion.div>
)}

            {/* abbreviation */}

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
                    lg:text-[10rem]
                  "
                >
                  <span>
                    {displayText}
                  </span>

                  <TypingCursor />
                </div>
              </div>
            )}

            {/* final typing */}

            {isFinalTyping && (
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                "
              >
                {renderTypingFullName()}
              </div>
            )}

          </div>

          {/* gold accent */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 h-1 rounded-full bg-yellow-400 sm:mt-5"
          />

          {/* tagline */}

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
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-200
              sm:mt-8
              sm:text-lg
              sm:leading-8
              md:text-xl
            "
          >
            {club.tagline}
          </motion.p>

          {/* 
              CTA BUTTONS
          */}

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
              mt-8
              flex
              flex-col
              gap-4
              sm:mt-10
              sm:flex-row
            "
          >

            {/* Join */}
            <Link
              href="/join"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-yellow-400
                px-8
                py-4
                font-bold
                text-slate-950
                transition-all
                duration-300
                hover:bg-yellow-300
                hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
              "
            >
              Join RCSC

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Projects */}
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-white/40
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-400
                hover:text-slate-950
              "
            >
              Explore Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>
      </div>

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
          absolute
          bottom-7
          left-1/2
          z-10
          -translate-x-1/2
        "
      >
        <ChevronDown
          size={20}
          className="animate-bounce text-yellow-400"
        />
      </motion.div>

     
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

    </section>
  );
}



function TypingCursor() {
  return (
    <motion.span
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        ml-2
        inline-block
        h-[0.78em]
        w-[3px]
        translate-y-[0.08em]
        rounded-full
        bg-yellow-400
        sm:ml-3
        sm:w-[5px]
      "
    />
  );
}