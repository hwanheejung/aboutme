export interface Preview {
  title: string;
  description: string;
  num: number;
  role: string;
  img: {
    mockup: "APP" | "WEB";
    mockupSrc: string;
    bgSrc?: string;
  };
  platform: "WEB" | "APP";
}

export type Project =
  | "DIZZYCODE"
  | "POLABO"
  | "ABOUTME"
  | "TASKSTOCK"
  | "PIROGRAMMING_WEB"
  | "PIROGRAMMING_APP";
