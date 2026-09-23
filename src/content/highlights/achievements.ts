export interface Achievement {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Upcomming Club",
    slug: "upcoming-club",
    date: "2025–26",
    description:
      "Recognised by RID 3141 for consistent participation, impactful initiatives and active contribution towards the Rotaract movement throughout the year.",
    image: "/images/achievements/upcoming-club.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Excellence in Community Service",
    slug: "excellence-in-community-service",
    date: "2025–26",
    description:
      "Celebrating the club's continued efforts in planning and executing meaningful community service initiatives with lasting social impact.",
    image: "/images/achievements/community-service.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Best Project Initiative",
    slug: "best-project-initiative",
    date: "2025–26",
    description:
      "Recognising an outstanding project that demonstrated strong planning, teamwork, creativity and meaningful community engagement.",
    image: "/images/achievements/best-project.jpg",
    featured: false,
  },
];