"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function PresidentMessage() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">

      {/* Subtle top transition from Events */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12">
        <div className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-yellow-400/70" />
        <div className="absolute left-1/2 top-0 h-12 w-48 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-2xl" />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-48 top-1/4 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[120px]" />

      <div
        className="
          relative mx-auto max-w-7xl
          px-5
          py-16
          sm:px-8 sm:py-20
          lg:px-12 lg:py-24
        "
      >
        <div
          className="
            grid items-center
            gap-10
            sm:gap-12
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-16
            xl:gap-20
          "
        >

          {/* =====================================================
              PRESIDENT IMAGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative mx-auto w-full
              max-w-[330px]
              sm:max-w-[370px]
              lg:max-w-[400px]
            "
          >
            {/* Gold offset frame */}
            <div
              className="
                absolute
                -bottom-2 -left-2
                h-full w-full
                rounded-[1.5rem]
                border-2 border-yellow-400/40
                sm:-bottom-3 sm:-left-3
                sm:rounded-[1.75rem]
              "
            />

            {/* Image */}
            <div
              className="
                group relative
                aspect-[4/5]
                max-h-[440px]
                overflow-hidden
                rounded-[1.5rem]
                bg-slate-900
                shadow-xl
                sm:rounded-[1.75rem]
                sm:max-h-[500px]
                lg:max-h-[520px]
              "
            >
              <Image
                src="/images/board/president.jpg"
                alt="President of Rotaract Club of Sydenham College"
                fill
                priority={false}
                sizes="
                  (max-width: 640px) 85vw,
                  (max-width: 1024px) 370px,
                  400px
                "
                className="
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.03]
                "
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* President label */}
              <div
                className="
                  absolute bottom-4 left-4 right-4
                  rounded-xl
                  border border-white/15
                  bg-black/35
                  px-4 py-3
                  backdrop-blur-md
                  sm:bottom-5 sm:left-5 sm:right-5
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-yellow-400">
                  President
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Rotary Year 2026–27
                </p>
              </div>
            </div>

            {/* Small accent dot */}
            <span
              className="
                absolute
                -right-2 top-8
                h-3 w-3
                rounded-full
                bg-yellow-400
                shadow-[0_0_18px_rgba(250,204,21,0.45)]
                sm:-right-3
              "
            />
          </motion.div>


          {/* =====================================================
              MESSAGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-[2px] w-8 rounded-full bg-yellow-400 sm:w-11" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-yellow-500
                  sm:text-xs
                  sm:tracking-[0.38em]
                "
              >
                President's Message
              </p>
            </div>


            {/* Heading */}
            <h2
  className="
    max-w-3xl
    text-[1.9rem]
    font-black
    leading-[1.02]
    tracking-[-0.04em]
    text-slate-950
    sm:text-[2.7rem]
    lg:text-[3.5rem]
    xl:text-[3.8rem]
    dark:text-white
  "
>
              Leading with
              <br />
              purpose.
              <br />
              <span className="text-yellow-500">
                Serving with heart.
              </span>
            </h2>


            {/* Message */}
            <div className="mt-6 flex gap-3 sm:mt-7 sm:gap-4">

              <Quote
                size={25}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-yellow-400 sm:h-7 sm:w-7"
              />

              <div className="max-w-2xl">
                <p
                  className="
                    text-[14px]
                    leading-6
                    text-slate-600
                    sm:text-base
                    sm:leading-7
                    lg:text-[17px]
                    lg:leading-8
                    dark:text-slate-300
                  "
                >
                  Welcome to the official website of the Rotaract Club of
                  Sydenham College.
                </p>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-6
                    text-slate-600
                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                    lg:text-[17px]
                    lg:leading-8
                    dark:text-slate-300
                  "
                >
                  We are a community of passionate young leaders committed to
                  creating meaningful change through service, leadership,
                  fellowship and professional development.
                </p>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-6
                    text-slate-600
                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                    lg:text-[17px]
                    lg:leading-8
                    dark:text-slate-300
                  "
                >
                  Every project we undertake reflects our belief that even the
                  smallest action can create lasting impact.
                </p>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-6
                    text-slate-600
                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                    lg:text-[17px]
                    lg:leading-8
                    dark:text-slate-300
                  "
                >
                  Thank you for visiting our website. We invite you to explore
                  our initiatives and become a part of our journey.
                </p>
              </div>
            </div>


            {/* President details */}
            <div
              className="
                mt-7
                border-t border-slate-200
                pt-5
                dark:border-slate-800
                sm:mt-8
                sm:pt-6
              "
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-black text-slate-950 sm:text-xl dark:text-white">
                    Rtr. Kevin Thomas
                  </h3>

                  <p className="mt-0.5 text-sm font-semibold text-yellow-500">
                    President 2026–27
                  </p>
                </div>

                <div
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-yellow-400/50
                    sm:h-10 sm:w-10
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>


      {/* =========================================================
          PRESIDENT → PROJECTS TRANSITION
          Seamless in light AND dark mode
      ========================================================= */}
      <div className="pointer-events-none relative h-12 sm:h-16">

        {/* Soft fade, NOT a dark block */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-full
            bg-gradient-to-b
            from-transparent
            via-yellow-50/30
            to-white
            dark:via-yellow-400/[0.02]
            dark:to-slate-950
          "
        />

        {/* Gold transition line */}
        <div
          className="
            absolute
            bottom-4 left-1/2
            h-px w-16
            -translate-x-1/2
            bg-yellow-400/70
            sm:bottom-5 sm:w-24
          "
        />

        {/* Tiny glow */}
        <div
          className="
            absolute
            bottom-4 left-1/2
            h-8 w-32
            -translate-x-1/2
            rounded-full
            bg-yellow-400/10
            blur-xl
          "
        />
      </div>

    </section>
  );
}