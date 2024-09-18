import { rehypePrettyCodeOptions } from "@/styles/rehypePrettyCode";
import { ProjectFrontMatter } from "@/types";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const projectDirectory = path.join(process.cwd(), "contents/projects");

export const getAllProjects = async () => {
  const files = fs.readdirSync(projectDirectory);

  const projectPromises = files.map(async (file) => {
    const source = fs.readFileSync(path.join(projectDirectory, file), "utf8");
    const slug = file.replace(/\.mdx$/, "");

    const { content, frontmatter } = await compileMDX<ProjectFrontMatter>({
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

    return { content, frontmatter, slug };
  });

  const projects = await Promise.all(projectPromises);

  return projects
    .filter((project) => project !== undefined)
    .sort((a, b) => {
      if (!a.frontmatter.num || !b.frontmatter.num) return 0;
      return a.frontmatter.num < b.frontmatter.num ? -1 : 1;
    });
};

export const getProjectBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(projectDirectory, `${slug}.mdx`),
    "utf8",
  );

  const { frontmatter } = await compileMDX<ProjectFrontMatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return { source, frontmatter };
};
