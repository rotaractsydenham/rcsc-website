export interface Achievement {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: string;
  featured: boolean;
}

export const achievements: Achievement[] = [];