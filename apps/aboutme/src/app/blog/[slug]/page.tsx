import { getPosts } from "@/lib/utils/file";
import { FrontMatter } from "@/types";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

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
      <div>Title: {frontmatter.title}</div>
      <div>{frontmatter.description}</div>
      <div>{content}</div>
    </div>
  );
};

export default PostPage;
