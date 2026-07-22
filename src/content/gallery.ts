export interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category:
    | "Projects"
    | "Events"
    | "Installation"
    | "Sports";
}

export const gallery = [
  {
    id: 1,
    title: "AMBÎENTE",
    image: "/images/gallery/ambiente1.jpg",
    category: "Projects",
  },

  {
    id: 2,
    title: "Installation Ceremony",
    image: "/images/gallery/install1.jpg",
    category: "Installation",
  },

  {
    id: 3,
    title: "Community Service",
    image: "/images/gallery/community1.jpg",
    category: "Projects",
  },
];