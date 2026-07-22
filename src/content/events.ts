export interface Event {
  id: number;
  title: string;
  slug: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
  featured: boolean;
  registrationLink?: string;
  status: "Upcoming" | "Completed";
}

export const events: Event[] = [
  {
    id: 1,
    title: "Installation Ceremony 2026",
    slug: "installation-2026",
    date: "15 August 2026",
    time: "5:00 PM",
    venue: "Sydenham College",
    image: "/images/events/installation.jpg",
    description:
      "Official Installation Ceremony of the Board of Directors.",
    featured: true,
    status: "Upcoming",
    registrationLink: "#",
  },
];