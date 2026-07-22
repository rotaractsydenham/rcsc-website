export interface LegacyYear {
  id: number;
  slug: string;
  year: string;
  theme: string;
  president: string;
  secretary: string;
  coverImage: string;
  description: string;
  message: string;

  projects: string[];
  events: string[];
  achievements: string[];
}

export const legacy: LegacyYear[] = [
  {
    id: 1,
    slug: "2020-21",
    year: "2020–21",
    theme: "Mumbai Meri Jaan",

    president: "TBA",
    secretary: "TBA",

    coverImage: "/images/legacy/2020.jpg",

    description:
      "The charter year that laid the foundation of the Rotaract Club of Sydenham College.",

    message:
      "Every great journey begins with one courageous step. This year established the values and traditions that continue to inspire every generation of Rotaractors.",

    projects: [
      "Club Charter",
      "Membership Drive",
      "Community Outreach"
    ],

    events: [
      "Charter Installation",
      "Orientation"
    ],

    achievements: [
      "Official Charter",
      "First Board Formed"
    ]
  },

  {
    id: 2,
    slug: "2021-22",
    year: "2021–22",
    theme: "Rise Together",

    president: "TBA",
    secretary: "TBA",

    coverImage: "/images/legacy/2021.jpg",

    description:
      "Strengthening fellowship and expanding community initiatives.",

    message:
      "Growth happens when every member grows together.",

    projects: [],
    events: [],
    achievements: [],
  },

  {
    id: 3,
    slug: "2022-23",
    year: "2022–23",
    theme: "Ignite",

    president: "TBA",
    secretary: "TBA",

    coverImage: "/images/legacy/2022.jpg",

    description:
      "A year dedicated to leadership development and impactful service.",

    message:
      "Leadership begins with the courage to serve.",

    projects: [],
    events: [],
    achievements: [],
  },

  {
    id: 4,
    slug: "2023-24",
    year: "2023–24",
    theme: "Celestial Beginnings",

    president: "TBA",
    secretary: "TBA",

    coverImage: "/images/legacy/2023.jpg",

    description:
      "A year of innovation and meaningful collaborations.",

    message:
      "Dream beyond the stars.",

    projects: [],
    events: [],
    achievements: [],
  },

  {
    id: 5,
    slug: "2024-25",
    year: "2024–25",
    theme: "Panchtatva: Balance Within and Around Us",

    president: "Rtr. Suyash Save",
    secretary: "TBA",

    coverImage: "/images/legacy/2024.jpg",

    description:
      "A year focused on balance, impactful community service and strengthening club culture.",

    message:
      "True leadership lies in creating balance within ourselves and around us. To harmonize our efforts, fostering a culture of meaningful impact.",

    projects: [
      "AMBÎENTE",
      "Water Bowl",
      "Shining Paws"
    ],

    events: [
      "Installation",
      "Teachers' Day",
      "Rakhi with RCSC"
    ],

    achievements: [
      "Membership Growth",
      "Community Impact"
    ]
  },
  {
    id: 6,
    slug: "2025-26",
    year: "2025–26",
    theme: "Wings of Fire",

    president: "Rtr. Trissha Desai",
    secretary: "TBA",

    coverImage: "/images/legacy/2025.jpg",

    description:
      "Wings of Fire. The year of igniting passion, fostering innovation, and soaring to new heights in service and leadership.",

    message:
      "The height of our aspirations does not depend upon the clouds, but upon the fire within us.",

    projects: [
      "Parties",
      "Visit",
      "Happiness"
    ],

    events: [
      "Installation",
      "Teachers' Day",
      "Rakhi with RCSC 2026"
    ],

    achievements: [
      "AARAS",
      "Club Growth"
    ]
  }
];