import Image, { ImageProps } from "@/components/Image";
import Process from "@/components/Layouts/Process";
import Section from "@/components/Layouts/Section";
import { getAllProjects, getProjectBySlug } from "@/lib/utils/getProject";
import { MDXRemote } from "next-mdx-remote/rsc";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { rehypePrettyCodeOptions } from "@/styles/rehypePrettyCode";
import Intro from "../_components/Intro";
import Callout from "@/components/Layouts/Callout";
import Overview from "./_sections/dizzycode/Overview";
import Navigator from "../_components/Navigator";

export async function generateStaticParams() {
  const projects = await getAllProjects();

  if (!projects || projects.length === 0) {
    return [{ slug: "not-found" }];
  }

  return projects.map((project) => {
    return {
      slug: project.slug,
    };
  });
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const components = {
  Image: (props: ImageProps) => <Image {...props} height={400} />,
  Box: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  }) => <div className={twMerge("box my-5", className)}>{children}</div>,
  Section: Section,
  "Section.Header": Section.Header,
  "Section.Body": Section.Body,
  "Section.Table": Section.Table,
  "Section.Divider": Section.Divider,
  Process: Process,
  "Process.Item": Process.Item,
  Callout: Callout,
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = params;
  const { source, frontmatter } = await getProjectBySlug(slug);
  return (
    <div>
      <Navigator />
      <Intro data={frontmatter} />
      <Overview />
      <div className="mdx prose-a:font-normal prose-a:text-primary/60 prose-a:underline hover:prose-a:text-main/60">
        <MDXRemote
          source={source}
          components={components}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              rehypePlugins: [
                rehypeAutolinkHeadings,
                [rehypePrettyCode, rehypePrettyCodeOptions],
              ],
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
      {/* TODO: Add footer */}
      <div className="h-80 w-full" />
    </div>
  );
};

export default ProjectPage;
