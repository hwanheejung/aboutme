export interface BlogFrontMatter {
  slug: string;
  title: string;
  description: string;
  date: `${number}-${number}-${number}`;
  categoryId?: number;
}

type PostSlug = string;
type CategorySlug = string;

export interface Post {
  slug: PostSlug;
  title: string;
  description: string;
  date: `${number}-${number}-${number}`;
  category: CategorySlug;
  tags: string[];
}

export interface BlogCache {
  posts: Record<PostSlug, Post[]>;
  categories: Record<CategorySlug, Post[]>;
  tags: Record<string, Post[]>;
}
