import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogCache, Post } from "@/types";

const DIR = path.join(process.cwd(), "contents/blog");

const blogCache: BlogCache = {
  categories: {},
  tags: {},
  posts: {},
};

export const cachePosts = async () => {
  const posts: BlogCache["posts"] = {};
  const categories: BlogCache["categories"] = {};
  const tags: BlogCache["tags"] = {};

  // 디렉토리 내 모든 파일 읽기
  const readDirectory = (dirPath: string) => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        readDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContents);

        const post: Post = {
          slug: entry.name.replace(".mdx", ""),
          title: data.title,
          description: data.description,
          category: path.basename(dirPath),
          tags: data.tags,
          date: data.date,
        };

        // 포스트 저장
        if (!posts[post.slug]) {
          posts[post.slug] = [];
        }
        posts[post.slug].push(post);

        // 카테고리 저장
        if (!categories[post.category]) {
          categories[post.category] = [];
        }
        categories[post.category].push(post);

        // 태그 저장
        post.tags.forEach((tag) => {
          if (!tags[tag]) {
            tags[tag] = [];
          }
          tags[tag].push(post);
        });
      }
    });
  };

  await readDirectory(DIR);

  // 캐시 저장
  blogCache.posts = posts;
  blogCache.categories = categories;
  blogCache.tags = tags;
};

// 캐시된 데이터 반환 함수
export const getPostsByCategory = (category: string) => {
  return blogCache.categories[category] || [];
};

export const getPostsByTag = (tag: string) => {
  return blogCache.tags[tag] || [];
};

export const getPostBySlug = (slug: string) => {
  return blogCache.posts[slug] || null;
};
