export interface MemberOfTheMonth {
  id: number;
  name: string;
  slug: string;
  month: string;
  description: string;
  image: string;
  featured: boolean;
}

export const membersOfTheMonth: MemberOfTheMonth[] = [];