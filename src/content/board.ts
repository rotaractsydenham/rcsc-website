export type BoardGroup =
  | "CORE"
  | "MAIN_AVENUES"
  | "SUPPORTING_FUNCTIONS";

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  group: BoardGroup;
  email?: string;
  instagram?: string;
  linkedin?: string;
}
export const board: BoardMember[] = [

  // ===========================
  // CORE TEAM
  // ===========================

 {
  id: 1,
  name: "Rtr. Kevin Thomas",
  position: "President",
  image: "/images/board/president.jpg",
  group: "CORE",

  email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
},
{
  id: 17,
  name: "Rtr. Trissha Desai",
  position: "Immediate Past President & Advisor",
  image: "/images/board/immpresident.jpeg",
  group: "CORE",

  email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
},

  {
    id: 2,
    name: "Rtr. Vice President Name",
    position: "Vice President",
    image: "/images/board/vice-president.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },

  {
    id: 3,
    name: "Rtr. Secretary Name",
    position: "Secretary",
    image: "/images/board/secretary.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },

  {
    id: 4,
    name: "Rtr. Joint Secretary Name",
    position: "Joint Secretary",
    image: "/images/board/joint-secretary.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },

  {
    id: 5,
    name: "Rtr. Treasurer Name",
    position: "Treasurer",
    image: "/images/board/treasurer.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 18,
    name: "Rtr. SAA Name",
    position: "Sergeant-At-Arms",
    image: "/images/board/SAA.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 16,
    name: "Rtr. HRD Name",
    position: "HRD Officer",
    image: "/images/board/HRD.jpg",
    group: "CORE",
    email: "president@rotaractsydenham.in",

  instagram: "https://instagram.com/username",

  linkedin: "https://linkedin.com/in/username",
  },

  // ===========================
  // MAIN AVENUES
  // ===========================

  {
    id: 6,
    name: "Rtr. Name",
    position: "Club Service Director",
    image: "/images/board/club-service.jpg",
    group: "MAIN_AVENUES",
  },

  {
    id: 7,
    name: "Rtr. Name",
    position: "Community Service Director",
    image: "/images/board/community.jpg",
    group: "MAIN_AVENUES",
  },

  {
    id: 8,
    name: "Rtr. Name",
    position: "Professional Development Director",
    image: "/images/board/professional.jpg",
    group: "MAIN_AVENUES",
  },

  {
    id: 9,
    name: "Rtr. Name",
    position: "International Service Director",
    image: "/images/board/international.jpg",
    group: "MAIN_AVENUES",
  },

  {
    id: 10,
    name: "Rtr. Name",
    position: "Sports Director",
    image: "/images/board/sports.jpg",
    group: "MAIN_AVENUES",
  },

  // ===========================
  // SUPPORTING FUNCTIONS
  // ===========================

  {
    id: 11,
    name: "Rtr. Name",
    position: "Public Relations Director",
    image: "/images/board/pr.jpg",
    group: "SUPPORTING_FUNCTIONS",
  },

  {
    id: 12,
    name: "Rtr. Name",
    position: "Marketing Director",
    image: "/images/board/marketing.jpg",
    group: "SUPPORTING_FUNCTIONS",
  },

  {
    id: 13,
    name: "Rtr. Name",
    position: "Digital Communications Director",
    image: "/images/board/digital.jpg",
    group: "SUPPORTING_FUNCTIONS",
  },

  {
    id: 14,
    name: "Rtr. Name",
    position: "Editorial Director",
    image: "/images/board/editorial.jpg",
    group: "SUPPORTING_FUNCTIONS",
  },

  {
    id: 15,
    name: "Rtr. Name",
    position: "Partners in Service Director",
    image: "/images/board/partners.jpg",
    group: "SUPPORTING_FUNCTIONS",
  },
];