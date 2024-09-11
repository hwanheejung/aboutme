export interface FrontMatter {
  url: string;
  title: string;
  description: string;
  date: `${number}-${number}-${number}`;
  categoryId?: number | string;
}
