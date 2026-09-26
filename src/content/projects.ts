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
    title: "Blood Donation Drive",
    slug: "blood-donation-drive",
    avenue: "Community Service",
    image: "/images/projects/blood-donationDrive.jpg",
    shortDescription:
      "Organizing blood donation drives in collaboration with NSS Unit of Sydenham College.",
    fullDescription:
      "The Blood Donation Drive (with NSS) is a community service initiative that aims to promote blood donation and save lives. In collaboration with the National Service Scheme (NSS), we organize regular blood donation camps to ensure a steady supply of blood for those in need.",
    date: "January 2026",
    beneficiaries: "40+ Donors",
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