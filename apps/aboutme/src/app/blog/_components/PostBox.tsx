import ButtonTransition from "@/components/Transitions/ButtonTransition";
import { parseDate } from "@/lib/utils/date";
import { BlogFrontMatter } from "@/types";
import Link from "next/link";
import { getCategoryById } from "../_utils/category";

interface PostBoxProps {
  post: BlogFrontMatter;
  slug: string;
}

const PostBox = ({ post, slug }: PostBoxProps) => {
  const { title, description, date, categoryId } = post;

  const parsedDate = parseDate(date);

  return (
    <div className="flex flex-col rounded-xl border border-gray-300 border-opacity-60 p-3 dark:border-neutral-700 dark:bg-neutral-800/30">
      <div className="flex items-center justify-between">
        <Link
          href={`/blog/category/${categoryId}`}
          className={"text-sm text-accent-yellow hover:underline"}
        >
          {categoryId ? getCategoryById(categoryId) : ""}
        </Link>
        <span className="text-xl">🇺🇸</span>
      </div>
      <Link href={`/blog/${slug}`} className="mt-2 p-0 text-xl !no-underline">
        <div className="text-2xl font-bold hover:underline">{title}</div>
      </Link>
      <span className="py-2 text-xs font-thin text-primary/70">
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
