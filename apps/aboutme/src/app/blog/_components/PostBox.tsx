import { parseDate } from "@/lib/utils/date";
import { BlogFrontMatter } from "@/types";
import Link from "next/link";
import { getCategoryById, getCategoryColorById } from "../_utils/category";
import ButtonTransition from "@/components/Transitions/ButtonTransition";
import { twMerge } from "tailwind-merge";

interface PostBoxProps {
  post: BlogFrontMatter;
  slug: string;
}

const PostBox = async ({ post, slug }: PostBoxProps) => {
  const { title, description, date, categoryId } = post;

  const parsedDate = parseDate(date);
  const accentColor = categoryId
    ? getCategoryColorById(categoryId)
    : "var(--color-primary)";

  const textColor = `text-[${accentColor}]`;

  return (
    <div className="flex flex-col rounded-xl border border-gray-300 border-opacity-60 bg-gray-100 p-3 text-center dark:border-neutral-700 dark:bg-neutral-800/30">
      <Link
        href={`/blog/category/${categoryId}`}
        className={twMerge("text-sm hover:underline", textColor)}
      >
        {categoryId ? getCategoryById(categoryId) : ""}
      </Link>
      <Link href={`/blog/${slug}`} className="mt-2 p-0 text-xl !no-underline">
        <div className="text-2xl font-bold hover:underline">{title}</div>
      </Link>
      <span className="py-2 text-xs font-thin text-primary/60">
        {parsedDate}
      </span>
      <p className="pb-6 pt-2 text-sm opacity-70">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="mt-auto w-full rounded-full border border-gray-300 py-2 dark:border-neutral-700"
      >
        <ButtonTransition className="flex items-center justify-center">
          Read More!
        </ButtonTransition>
      </Link>
    </div>
  );
};

export default PostBox;
