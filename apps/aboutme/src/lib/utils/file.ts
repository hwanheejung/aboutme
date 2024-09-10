import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { FrontMatter } from "@/types/blog";

export const getAllPosts = () => {
  const folder = path.join(process.cwd(), "contents/blog");
  const files = fs.readdirSync(folder);

  const posts = files.map((file) => {
    const id = file.replace(/\.mdx$/, "");

    const fullPath = path.join(folder, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const postMatter: FrontMatter = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
    };
    return postMatter;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};
