import { parseDate } from "@/lib/utils/date";
import { FrontMatter } from "@/types/blog";
import Link from "next/link";

interface PostBoxProps {
  post: FrontMatter;
}

const PostBox = async ({ post }: PostBoxProps) => {
  const { title, description, date } = post;

  const parsedDate = parseDate(date);

  return (
    <div className="flex flex-col rounded-lg border border-primary border-opacity-60 p-3 no-underline">
      <span className="text-xs opacity-60">{parsedDate}</span>
      <Link
        href={`/blog/${post.url}`}
        className="mt-2 p-0 text-xl no-underline"
      >
        {title}
      </Link>
      <p className="pb-3 pt-1 font-light opacity-80">{description}</p>
      <Link
        href={`/blog/${post.url}`}
        className="mt-2 rounded-md bg-primary bg-opacity-10 py-1 text-center font-thin !text-primary no-underline transition-all hover:bg-opacity-20"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostBox;
