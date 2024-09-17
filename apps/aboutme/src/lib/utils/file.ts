import { rehypePrettyCodeOptions } from "@/styles/rehypePrettyCode";
import { FrontMatter } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const blogDirectory = path.join(process.cwd(), "contents/blog");

// get all posts or posts by category
export const getAllPosts = (categoryId?: number) => {
  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((file) => {
    const url = file.replace(/\.mdx$/, "");

    const fullPath = path.join(blogDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const postMatter: FrontMatter = {
      url,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      categoryId: matterResult.data.categoryId,
    };

    // filter by category
    if (categoryId) {
      if (
        postMatter.categoryId &&
        isCategoryOrSubcategory(postMatter.categoryId, categoryId)
      ) {
        return postMatter;
      } else {
        return undefined;
      }
    }

    // if no category, return all posts
    return postMatter;
  });

  // sort by date
  return posts
    .filter((post): post is FrontMatter => post !== undefined)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0; // if no date, return 0
      return a.date < b.date ? 1 : -1;
    });
};

// check if the post is in the category or subcategory
function isCategoryOrSubcategory(blogCategoryId: number, categoryId: number) {
  const blogCategoryString = blogCategoryId.toString();
  const categoryString = categoryId.toString();

  return (
    blogCategoryString === categoryString ||
    blogCategoryString.startsWith(categoryString + ".")
  );
}

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(process.cwd(), `contents/blog`, slug) + ".mdx",
    "utf8",
  );

  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeAutolinkHeadings,
          [rehypePrettyCode, rehypePrettyCodeOptions],
          // [rehypeImgSize, { dir: "public" }],
        ],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
  });

  return { frontmatter, content };
};
