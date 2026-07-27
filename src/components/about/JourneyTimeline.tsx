import Image from "next/image";

const milestones = [
  {
    year: "2020",
    title: "Chartered",
    description:
      "The Rotaract Club of Sydenham College was officially chartered, marking the beginning of a journey of service and leadership.",
    image: "/images/about/timeline/2020.jpg",
  },
  {
    year: "2021",
    title: "Building Foundations",
    description:
      "The club strengthened its presence through community initiatives and member engagement.",
    image: "/images/about/timeline/2021.jpg",
  },
  {
    year: "2022",
    title: "Growing Together",
    description:
      "Membership expanded and the club began taking on larger service initiatives.",
    image: "/images/about/timeline/2022.jpg",
  },
  {
    year: "2023",
    title: "Leadership in Action",
    description:
      "New projects, stronger collaborations and greater participation across district events.",
    image: "/images/about/timeline/2023.jpg",
  },
  {
    year: "2024",
    title: "Celebrating 5 Years",
    description:
      "A year focused on balance, sustainability and meaningful community impact.",
    image: "/images/about/timeline/2024.jpg",
  },
  {
    year: "2025",
    title: "Flying High",
    description:
      "Building upon the strong foundation while preparing future leaders for the years ahead.",
    image: "/images/about/timeline/2025.jpg",
  },
  {
    year: "2026",
    title: "A new chapter",
    description:
      "Building upon the strong foundation while preparing future leaders for the years ahead.",
    image: "/images/about/timeline/2026.jpg",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
              OUR JOURNEY
            </span>

            <span className="h-[2px] w-14 rounded-full bg-yellow-400" />

          </div>

          <h2 className="text-5xl font-black">

            A Journey Through Time

          </h2>

        </div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-yellow-400 lg:block" />

          {/* Mobile */}

          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-yellow-400 lg:hidden" />

          {milestones.map((item, index) => (

            <div
              key={item.year}
              className={`relative mb-20 flex ${
                index % 2 === 0
                  ? "lg:justify-start"
                  : "lg:justify-end"
              }`}
            >

              <div className="w-full lg:w-[45%]">

                <div className="rounded-[2rem] border bg-white p-8 shadow-sm dark:bg-slate-900">

                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">

                    {item.year}

                  </p>

                  <h3 className="mt-3 text-3xl font-black">

                    {item.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                    {item.description}

                  </p>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="mt-8 rounded-2xl object-cover"
                  />

                </div>

              </div>

              {/* Dot */}

              <div className="absolute left-4 top-8 h-5 w-5 rounded-full border-4 border-white bg-yellow-400 lg:left-1/2 lg:-translate-x-1/2 dark:border-slate-950" />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}