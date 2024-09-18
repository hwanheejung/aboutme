import { rehypePrettyCodeOptions } from "@/styles/rehypePrettyCode";
import { BlogFrontMatter } from "@/types";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const blogDirectory = path.join(process.cwd(), "contents/blog");

// get all posts or posts by category
export const getAllPosts = async (categoryId?: number) => {
  const files = fs.readdirSync(blogDirectory);

  const projectPromises = files.map(async (file) => {
    const source = fs.readFileSync(path.join(blogDirectory, file), "utf8");
    const slug = file.replace(/\.mdx$/, "");

    const { frontmatter } = await compileMDX<BlogFrontMatter>({
      source,
      options: {
        mdxOptions: {
          rehypePlugins: [
            rehypeAutolinkHeadings,
            [rehypePrettyCode, rehypePrettyCodeOptions],
          ],
          remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: true,
      },
    });

    // filter by category
    if (categoryId) {
      if (
        frontmatter.categoryId &&
        isCategoryOrSubcategory(frontmatter.categoryId, categoryId)
      ) {
        return { frontmatter, slug };
      } else {
        return undefined;
      }
    }

    // if no category, return all posts
    return { frontmatter, slug };
  });

  const posts = await Promise.all(projectPromises);

  if (!posts || posts.length === 0) {
    return [];
  }
  return posts
    .filter(
      (post): post is { frontmatter: BlogFrontMatter; slug: string } =>
        post !== undefined,
    )
    .sort((a, b) => {
      if (!a.frontmatter.date && !b.frontmatter.date) return 0;
      if (!a.frontmatter.date) return 1;
      if (!b.frontmatter.date) return -1;
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
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
    path.join(blogDirectory, `${slug}.mdx`),
    "utf8",
  );

  const { frontmatter } = await compileMDX<BlogFrontMatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return { source, frontmatter };
};
