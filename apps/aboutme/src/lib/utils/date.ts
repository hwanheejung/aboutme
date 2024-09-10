import { FrontMatter } from "@/types/blog";

export const parseDate = (date: FrontMatter["date"]) => {
  // date is in the format of "YYYY-MM-DD"
  // we want to return "Month DD, YYYY"

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "short" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};
