import { parseDate } from "@/lib/utils/date";
import { BlogFrontMatter } from "@/types";
import Link from "next/link";

interface PostBoxProps {
  post: BlogFrontMatter;
  slug: string;
}

const PostBox = async ({ post, slug }: PostBoxProps) => {
  const { title, description, date } = post;

  const parsedDate = parseDate(date);

  return (
    <div className="flex flex-col rounded-lg border border-gray-300 border-opacity-60 bg-gray-100 p-3 dark:border-neutral-700 dark:bg-neutral-800/30">
      <span className="text-xs opacity-50">{parsedDate}</span>
      <Link href={`/blog/${slug}`} className="mt-2 p-0 text-xl !no-underline">
        <div className="text-main hover:text-main/80">{title}</div>
      </Link>
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
