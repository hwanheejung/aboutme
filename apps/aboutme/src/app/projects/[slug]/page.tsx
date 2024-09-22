import Image, { ImageProps } from "@/components/Image";
import Callout from "@/components/Layouts/Callout";
import Process from "@/components/Layouts/Process";
import Section from "@/components/Layouts/Section";
import CustomMDXRemote from "@/components/MDX/MDXRemote";
import { getAllProjects, getProjectBySlug } from "@/lib/utils/getProject";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Intro from "../_components/Intro";
import Navigator from "../_components/Navigator";
import Timeline from "../_components/Timeline";

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
  OverviewItem: ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => (
    <div className="pr-3">
      <div className="text-primary">{title}</div>
      <div className="flex flex-col !leading-4">{children}</div>
    </div>
  ),
  Timeline: Timeline,
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = params;
  const { source, frontmatter } = await getProjectBySlug(slug);
  return (
    <div>
      <Navigator />
      <Intro data={frontmatter} />
      {/* <Overview /> */}
      <div className="mdx prose-a:font-normal prose-a:text-primary/60 prose-a:underline hover:prose-a:text-main/60">
        <CustomMDXRemote source={source} components={components} />
      </div>
    </div>
  );
};

export default ProjectPage;
