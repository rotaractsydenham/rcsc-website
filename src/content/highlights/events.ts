export interface HighlightEvent {
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

export const highlightEvents: HighlightEvent[] = [
  {
    id: 1,
    title: "Installation Ceremony 2026",
    slug: "installation-2026",
    date: "21 September 2026",
    time: "2:00 PM",
    venue: "Sydenham College",
    image: "/images/highlights/events/installation.jpg",
    description:
      "Official Installation Ceremony of the Board of Directors.",
    featured: true,
    status: "Upcoming",
    registrationLink: "#",
  },

  {
    id: 2,
    title: "Installation Ceremony 2025",
    slug: "installation-2025",
    date: "15 August 2025",
    time: "1:00 PM",
    venue: "Sydenham College room 31",
    image: "/images/highlights/events/installation2025.jpg",
    description:
      "Official Installation Ceremony of the Board of Directors and team.",
    featured: true,
    status: "Completed",
    registrationLink: "google.com",
  },
];