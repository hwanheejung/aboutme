import { USERMETA } from "contents/meta";
import { Metadata } from "next";
import Preview from "./_components/Preview";
import { getAllProjects } from "@/lib/utils/getProject";
import Footer from "@/components/Footer";

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
      <h1 className="mb-10 mt-20 text-center text-xl font-thin uppercase tracking-wider">
        Current Works
      </h1>
      <div className="mx-auto flex flex-col gap-10 pb-40">
        {ongoingProjects.map((project) => (
          <Preview
            key={project.slug}
            slug={project.slug}
            {...project.frontmatter}
          />
        ))}
      </div>
      <h1 className="mb-10 mt-20 text-center text-xl font-thin uppercase tracking-wider">
        Completed Works
      </h1>
      <div className="mx-auto flex flex-col gap-10 pb-40">
        {completedProjects.map((project) => (
          <Preview
            key={project.slug}
            slug={project.slug}
            {...project.frontmatter}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
