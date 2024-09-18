export interface BlogFrontMatter {
  slug: string;
  title: string;
  description: string;
  date: `${number}-${number}-${number}`;
  categoryId?: number;
}
