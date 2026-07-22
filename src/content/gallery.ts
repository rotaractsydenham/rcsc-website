export interface Album {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  description: string;

  images: string[];
}

export const albums: Album[] = [
  {
    id: 1,

    slug: "ambiente-3",

    title: "AMBÎENTE 3.0",

    date: "15 February 2025",

    category: "Community Service",

    cover: "/images/gallery/ambiente/cover.jpg",

    description:
      "A clean-up trek to Irshalgad Fort promoting sustainability and responsible tourism.",

    images: [
      "/images/gallery/ambiente/1.jpg",
      "/images/gallery/ambiente/2.jpg",
      "/images/gallery/ambiente/3.jpg",
      "/images/gallery/ambiente/4.jpg",
      "/images/gallery/ambiente/5.jpg",
      "/images/gallery/ambiente/6.jpg",
    ],
  },

  {
    id: 2,

    slug: "installation-2024",

    title: "Installation Ceremony",

    date: "2024",

    category: "Club Service",

    cover: "/images/gallery/installation/cover.jpg",

    description:
      "Installation of the Board of Directors for RI Year 2024–25.",

    images: [],
  },

  {
    id: 3,

    slug: "teachers-day",

    title: "Teachers' Day",

    date: "5 September 2024",

    category: "Club Service",

    cover: "/images/gallery/teachers/cover.jpg",

    description:
      "Honouring educators who inspire future leaders.",

    images: [],
  },
];