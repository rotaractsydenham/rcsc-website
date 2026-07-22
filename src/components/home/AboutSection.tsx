import Image from "next/image";
import { Users, HeartHandshake, Briefcase, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Leadership",
    description: "Develop confident leaders through hands-on experiences."
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description: "Create meaningful impact in the community."
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Build skills for careers and entrepreneurship."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with Rotaractors around the world."
  }
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="w-full min-w-0">

            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Rotaract Club of
              <br />
              Sydenham College
            </h2>

            <p className="mt-8 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300 break-words whitespace-normal max-w-full">              Chartered in 2020 under Rotary International District 3141,
              
              the Rotaract Club of Sydenham College empowers young people
              through leadership, community service, professional
              development, and fellowship.
              
              Our members believe in creating meaningful change while
              developing lifelong friendships and leadership skills.
            </p>

            <div className="mt-10">
              <button className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-slate-900 hover:bg-yellow-400">
                Learn More
              </button>
            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <Image
              src="/images/about/about.jpg"
              alt="Rotaract Club"
              width={700}
              height={500}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>

        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-2xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900"
              >

                <Icon
                  className="mb-6 text-yellow-500"
                  size={40}
                />

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}