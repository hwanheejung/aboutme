import { PROJECTS } from "contents/projects/data";
import Preview from "./_components/Preview";

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
