export interface Project {
  id: number;
  title: string;
  slug: string;
  avenue: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  date: string;
  beneficiaries: string;
  featured: boolean;
  status: "Active" | "Completed";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AMBÎENTE",
    slug: "ambiente",
    avenue: "Community Service",
    image: "/images/projects/ambiente.jpg",
    shortDescription: 
        "A cleanliness and environmental awareness initiative through trekking.",
    
    fullDescription: 
        "AMBÎENTE is a cleanliness and environmental awareness initiative that combines the love for trekking with the responsibility of keeping our surroundings clean. Through this project, we aim to raise awareness about the importance of environmental conservation and encourage individuals to take action in preserving our natural habitats.",
    
    date: "15 February 2025",
    beneficiaries: "80+ Volunteers",
    featured: true,

    status: "Completed",
  },

  {
    id: 2,
    title: "Shining Paws",
    slug: "shining-paws",
    avenue: "Community Service",
    image: "/images/projects/shining-paws.jpg",
    shortDescription:
      "Reflective collars for street dogs to improve road safety.",
    fullDescription:
      "Shining Paws is a community service project aimed at improving the safety of street dogs by providing them with reflective collars. These collars make the dogs more visible to drivers at night, reducing the risk of accidents and promoting a safer environment for both animals and humans.",
    date: "3 January 2025",
    beneficiaries: "16 Dogs",
    featured: true,

    status: "Completed",
  },

  {
    id: 3,
    title: "Water Bowl",
    slug: "water-bowl",
    avenue: "Community Service",
    image: "/images/projects/water-bowl.jpg",
    shortDescription:
      "Providing water bowls for birds and stray animals during summer.",
    fullDescription:
      "Water Bowl is a community service initiative that focuses on providing water bowls for birds and stray animals during the hot summer months. By placing water bowls in public areas, we aim to ensure that these animals have access to clean drinking water, helping them stay hydrated and healthy.",
    date: "2 June 2025",
    beneficiaries: "Hundreds of Animals",
    featured: true,

    status: "Completed",
  },
];