import type { Preview as PreviewType, Project as ProjectType } from "@/types";

export const PROJECTS: Record<ProjectType, PreviewType> = {
  POLABO: {
    title: "Polabo",
    description:
      "Friends or lovers can create a board and decorate it by attaching Polaroid photos to it and share memories.",
    num: 1,
    role: "Frontend Developer",
    img: {
      mockup: "APP",
      mockupSrc: "preview_polabo.png",
      bgSrc: "preview_polabo_bg.png",
    },
    platform: "WEB",
    link: "/projects/polabo",
  },
  DIZZYCODE: {
    title: "DizzyCode",
    description:
      "Discord clone project focused on 'chatting' using websockets and 'video conferencing' using WebRTC.",
    num: 2,
    role: "Frontend Developer",
    img: {
      mockup: "WEB",
      mockupSrc: "preview_dizzycode.png",
      bgSrc: "preview_dizzycode_bg.png",
    },
    platform: "WEB",
    link: "/projects/dizzycode",
  },
  ABOUTME: {
    title: "AboutMe",
    description:
      "A customizable static site generator built with Next.js, designed to create and showcase personal portfolios effortlessly.",
    num: 3,
    role: "Full-stack Developer & Designer",
    img: {
      mockup: "WEB",
      mockupSrc: "preview_aboutme.png",
    },
    platform: "WEB",
    link: "/projects/aboutme",
  },
  TASKSTOCK: {
    title: "TaskStock",
    description:
      "A to-do list platform that incorporates stock market concepts to motivate users by tracking their growth in real-time.",
    num: 4,
    role: "Frontend Developer",
    img: {
      mockup: "APP",
      mockupSrc: "preview_taskstock.png",
      bgSrc: "preview_taskstock_bg.png",
    },
    platform: "APP",
    link: "/projects/taskstock",
  },
  PIROGRAMMING_WEB: {
    title: "Pirogramming",
    description: "Built the official club website as Vice President",
    num: 5,
    role: "Frontend Developer, UI/UX Designer",
    img: {
      mockup: "WEB",
      mockupSrc: "preview_piroWeb.gif",
      bgSrc: "preview_piroApp_bg.png",
    },
    platform: "WEB",
    link: "/projects/piroweb",
  },
  PIROGRAMMING_APP: {
    title: "Pirogramming App",
    description: "An automated club management system",
    num: 6,
    role: "Frontend Developer, UI/UX Designer",
    img: {
      mockup: "APP",
      mockupSrc: "preview_piroApp.png",
      bgSrc: "preview_piroApp_bg.png",
    },
    platform: "APP",
    link: "/projects/piroapp",
  },
};
