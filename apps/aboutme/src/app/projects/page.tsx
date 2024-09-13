import type {
  Preview as PreviewType,
  Project as ProjectType,
} from "@/types/project";
import Preview from "./_components/Preview";

const projects: Record<ProjectType, PreviewType> = {
  POLABO: {
    title: "Polabo",
    description:
      "Friends or lovers can create a board and decorate it by attaching Polaroid photos to it and share memories.",
    num: 1,
    role: "Frontend Developer",
    imgSrc: "preview_polabo.png",
    hoverBg: "preview_polabo_bg.png",
    platform: "WEB",
  },
  DIZZYCODE: {
    title: "DizzyCode",
    description:
      "Focused on 'chatting' using websockets and 'video conferencing' using WebRTC.",
    num: 2,
    role: "Frontend Developer",
    imgSrc: "preview_polabo.png",
    platform: "WEB",
  },
  ABOUTME: {
    title: "AboutMe",
    description:
      "A customizable static site generator built with Next.js, designed to create and showcase personal portfolios effortlessly.",
    num: 3,
    role: "Full-stack Developer",
    imgSrc: "preview_polabo.png",
    platform: "WEB",
  },
  TASKSTOCK: {
    title: "TaskStock",
    description:
      "A to-do list platform that incorporates stock market concepts to motivate users by tracking their growth in real-time.",
    num: 4,
    role: "Frontend Developer",
    imgSrc: "preview_taskstock.png",
    hoverBg: "preview_taskstock_bg.png",
    platform: "APP",
  },
  PIROGRAMMING_WEB: {
    title: "Pirogramming Web",
    description: "Built the official club website as Vice President",
    num: 5,
    role: "Frontend Developer, UI/UX Designer",
    imgSrc: "preview_polabo.png",
    hoverBg: "preview_piroWeb.gif",
    platform: "WEB",
  },
  PIROGRAMMING_APP: {
    title: "Pirogramming App",
    description: "An automated club management system",
    num: 6,
    role: "Frontend Developer, UI/UX Designer",
    imgSrc: "preview_piroApp.png",
    hoverBg: "preview_piroApp_bg.png",
    platform: "APP",
  },
};

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto flex flex-col gap-10 py-40">
        {Object.entries(projects).map(([key, project]) => (
          <Preview key={key} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
