import { getPosts } from "@/lib/utils/file";
import { FrontMatter } from "@/types";
import { USERMETA } from "contents/meta";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";
import CategoryLink from "./_components/CategoryLink";

export async function generateStaticParams() {
  const posts = getPosts();

  if (!posts || posts.length === 0) {
    return [{ slug: "not-found" }];
  }

  return posts.map((post) => ({
    slug: post.url,
  }));
}

const PostPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const source = fs.readFileSync(
    path.join(process.cwd(), `contents/blog`, slug) + ".mdx",
    "utf8",
  );

  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: {
      mdxOptions: {
        // rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
  });

  return (
    <div>
      <div className="border-b border-primary/30 pb-5 pt-20 text-center">
        {frontmatter.categoryId && (
          <CategoryLink currentCatId={frontmatter.categoryId} />
        )}
        <div className="mb-5 text-4xl text-main">{frontmatter.title}</div>
        <div className="font-thin text-primary/60">
          <div>{frontmatter.date}</div>
          <div>by {USERMETA.name}</div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default PostPage;
