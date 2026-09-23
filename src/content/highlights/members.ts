export interface MemberOfTheMonth {
  id: number;
  name: string;
  slug: string;
  month: string;
  description: string;
  image: string;
  featured: boolean;
}

export const membersOfTheMonth: MemberOfTheMonth[] = [
  {
    id: 1,
    name: "Rtr. Kevin Thomas",
    slug: "kevin-thomas",
    month: "September 2026",
    description:
      "Recognised for consistent participation, enthusiasm and contribution towards RCSC activities and initiatives.",
    image: "/images/members/kevin-thomas.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Rtr. Trissha Desai",
    slug: "trissha-desai",
    month: "August 2026",
    description:
      "Recognised for taking initiative, supporting fellow members and actively contributing to the club's projects.",
    image: "/images/members/trissha-desai.jpg",
    featured: false,
  },
  {
    id: 3,
    name: "Rtr. Himanshu Bakrania",
    slug: "himanshu-bakrania",
    month: "July 2026",
    description:
      "Recognised for dedication, teamwork and active involvement in creating meaningful experiences for the RCSC community.",
    image: "/images/members/himanshu-bakrania.jpg",
    featured: false,
  },
];