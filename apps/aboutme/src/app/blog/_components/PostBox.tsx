import { parseDate } from "@/lib/utils/date";
import { BlogFrontMatter } from "@/types";
import Link from "next/link";
import { getCategoryById } from "../_utils/getCategoryById";

interface PostBoxProps {
  post: BlogFrontMatter;
  slug: string;
}

const PostBox = async ({ post, slug }: PostBoxProps) => {
  const { title, description, date, categoryId } = post;

  const parsedDate = parseDate(date);

  return (
    <div className="flex flex-col rounded-lg border border-gray-300 border-opacity-60 bg-gray-100 p-3 text-center dark:border-neutral-700 dark:bg-neutral-800/30">
      <span className="text-sm text-main/80">
        {categoryId ? getCategoryById(categoryId) : ""}
      </span>
      <Link href={`/blog/${slug}`} className="mt-2 p-0 text-xl !no-underline">
        <div className="text-main hover:underline">{title}</div>
      </Link>
      <span className="py-2 text-xs font-thin text-primary/60">
        {parsedDate}
      </span>
      <p className="pb-6 pt-2 text-sm font-light opacity-70">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="mt-auto rounded-md bg-primary bg-opacity-10 py-1 text-center !font-thin !text-primary transition-all hover:bg-opacity-20"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostBox;
