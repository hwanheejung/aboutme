import { USERMETA } from "contents/meta";
import { PROJECTS } from "contents/projects/data";
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

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto flex flex-col gap-10 pb-40 pt-20">
        {Object.entries(PROJECTS).map(([key, project]) => (
          <Preview key={key} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
