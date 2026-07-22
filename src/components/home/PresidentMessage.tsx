import Image from "next/image";

export default function PresidentMessage() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="flex justify-center">
          <Image
            src="/images/board/president.jpg"
            alt="President"
            width={450}
            height={550}
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Message */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            President's Message
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Welcome to the Rotaract Club
            of Sydenham College
          </h2>

          <p className="mt-8 leading-8 text-lg text-slate-600 dark:text-slate-300">
            Welcome to the official website of the Rotaract Club of
            Sydenham College.

            We are a community of passionate young leaders committed to
            creating meaningful change through service, leadership,
            fellowship and professional development.

            Every project we undertake reflects our belief that even the
            smallest action can create lasting impact.

            Thank you for visiting our website. We invite you to explore
            our initiatives and become a part of our journey.
          </p>

          <div className="mt-10">

            <h3 className="text-2xl font-bold">
              Rtr. Kevin Thomas
            </h3>

            <p className="text-yellow-500">
              President 2026-27
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}