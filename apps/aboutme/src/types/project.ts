export interface ProjectFrontMatter {
  num: number;
  title: string;
  description: string;
  role: string;
  img: {
    mockup: "APP" | "WEB";
    mockupSrc: string;
  };
  platform: "WEB" | "APP";
  status: "ONGOING" | "COMPLETED";
  site?: string;
  github?: string;
}
