import { getAllProjects } from "@/lib/utils/getProject";
import { USERMETA } from "contents/meta/user";
import { Metadata } from "next";
import Preview from "./_components/Preview";

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

  const ongoingProjects = projects.filter(
    (project) => project.frontmatter.status === "ONGOING",
  );
  const completedProjects = projects.filter(
    (project) => project.frontmatter.status === "COMPLETED",
  );

  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-10 mt-20 text-center text-3xl font-bold uppercase text-accent-teal">
        Current Works
      </h3>
      <div className="mx-auto flex flex-col gap-10 pb-40">
        {ongoingProjects.map((project) => (
          <Preview
            key={project.slug}
            slug={project.slug}
            {...project.frontmatter}
          />
        ))}
      </div>
      <h3 className="mb-10 mt-20 text-center text-3xl font-bold uppercase text-accent-lime">
        Completed Works
      </h3>
      <div className="mx-auto flex flex-col gap-10 pb-40">
        {completedProjects.map((project) => (
          <Preview
            key={project.slug}
            slug={project.slug}
            {...project.frontmatter}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
