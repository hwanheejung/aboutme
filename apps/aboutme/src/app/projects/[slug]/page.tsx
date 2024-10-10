import Image, { ImageProps } from "@/components/Image";
import Callout from "@/components/Layouts/Callout";
import Process from "@/components/Layouts/Process";
import CustomMDXRemote from "@/components/MDX/MDXRemote";
import { getAllProjects, getProjectBySlug } from "@/lib/utils/getProject";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Intro from "../_components/Intro";
import Navigator from "../_components/Navigator";
import Timeline from "../_components/Timeline";
import Header from "@/components/Layouts/Header";
import Table from "@/components/Layouts/Table";
import Divider from "@/components/Layouts/Divider";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;
  const { frontmatter } = await getProjectBySlug(slug);
  return {
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
    twitter: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

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

const components = {
  Image: (props: ImageProps) => <Image {...props} height={400} />,
  Box: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  }) => <div className={twMerge("box my-5", className)}>{children}</div>,
  Header: Header,
  Table: Table,
  Divider: Divider,
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
    <div className="py-3 pr-3">
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
      <div className="mdx prose-a:font-normal hover:prose-a:underline prose-table:text-base">
        <CustomMDXRemote source={source} components={components} />
      </div>
    </div>
  );
};

export default ProjectPage;
