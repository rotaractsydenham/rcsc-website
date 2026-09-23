import Image from "next/image";

const milestones = [
  { year: "2020", title: "Chartered", description: "The Rotaract Club of Sydenham College was officially chartered, marking the beginning of a journey of service and leadership.", image: "/images/about/timeline/2020.jpg" },
  { year: "2021", title: "Building Foundations", description: "The club strengthened its presence through community initiatives and member engagement.", image: "/images/about/timeline/2021.jpg" },
  { year: "2022", title: "Growing Together", description: "Membership expanded and the club began taking on larger service initiatives.", image: "/images/about/timeline/2022.jpg" },
  { year: "2023", title: "Leadership in Action", description: "New projects, stronger collaborations and greater participation across district events.", image: "/images/about/timeline/2023.jpg" },
  { year: "2024", title: "Celebrating 5 Years", description: "A year focused on balance, sustainability and meaningful community impact.", image: "/images/about/timeline/2024.jpg" },
  { year: "2025", title: "Flying High", description: "Building upon the strong foundation while preparing future leaders for the years ahead.", image: "/images/about/timeline/2025.jpg" },
  { year: "2026", title: "A new chapter", description: "Building upon the strong foundation while preparing future leaders for the years ahead.", image: "/images/about/timeline/2026.jpg" },
];

export default function JourneyTimeline() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 dark:bg-slate-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"><div className="mb-5 flex items-center justify-center gap-4"><span className="h-[2px] w-12 rounded-full bg-yellow-400" /><span className="text-xs font-extrabold uppercase tracking-[0.4em] text-yellow-500 sm:text-sm">Our Journey</span><span className="h-[2px] w-12 rounded-full bg-yellow-400" /></div><h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">A Journey Through Time</h2></div>
        <div className="relative"><div className="absolute bottom-0 left-3 top-0 w-[2px] bg-yellow-400 lg:left-1/2 lg:-translate-x-1/2" />
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {milestones.map((item, index) => <div key={item.year} className={`relative pl-10 lg:flex lg:pl-0 ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}><div className="absolute left-0 top-7 h-7 w-7 -translate-x-[12px] rounded-full border-[6px] border-slate-50 bg-yellow-400 dark:border-slate-950 lg:left-1/2 lg:-translate-x-1/2" /><article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:w-[45%]"><div className="grid sm:grid-cols-[0.8fr_1.2fr] lg:block"><Image src={item.image} alt={item.title} width={700} height={500} className="h-full min-h-44 w-full object-cover lg:h-52" /><div className="p-6 sm:p-7"><p className="text-xs font-extrabold uppercase tracking-[0.3em] text-yellow-500">{item.year}</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">{item.title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p></div></div></article></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
