export interface Announcement {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: string;
  featured: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Applications for RCSC Membership Open",
    slug: "membership-applications-open",
    date: "September 2026",
    description:
      "Applications are now open for students who wish to join the Rotaract Club of Sydenham College and be part of a community built around service, leadership and fellowship.",
    featured: true,
  },
  {
    id: 2,
    title: "RCSC General Body Meeting",
    slug: "rcsc-general-body-meeting",
    date: "September 2026",
    description:
      "Members are invited to attend the upcoming General Body Meeting to discuss upcoming initiatives, projects and club activities.",
    featured: false,
  },
  {
    id: 3,
    title: "New Projects Coming Soon",
    slug: "new-projects-coming-soon",
    date: "September 2026",
    description:
      "The club is preparing a new set of community service initiatives and activities for the upcoming weeks. Stay connected for further updates.",
    featured: false,
  },
];