import { USERMETA } from "contents/meta";
import { Metadata } from "next";
import Preview from "./_components/Preview";
import { getAllProjects } from "@/lib/utils/getProject";

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: `${USERMETA.name}'s Projects`,
      description: "Welcome!",
    },
    twitter: {
      title: `${USERMETA.name}'s Projects`,
      description: "Welcome!",
    },
  };
}

const ProjectsPage = async () => {
  const projects = await getAllProjects();
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto flex flex-col gap-10 pb-40 pt-20">
        {Object.entries(projects).map(([key, project]) => (
          <Preview key={key} slug={project.slug} {...project.frontmatter} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
