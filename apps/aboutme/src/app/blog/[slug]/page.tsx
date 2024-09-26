import Image, { ImageProps } from "@/components/Image";
import Divider from "@/components/Layouts/Divider";
import Header from "@/components/Layouts/Header";
import Process from "@/components/Layouts/Process";
import Table from "@/components/Layouts/Table";
import CustomMDXRemote from "@/components/MDX/MDXRemote";
import { parseDate } from "@/lib/utils/date";
import { getAllPosts, getPostBySlug } from "@/lib/utils/getBlog";
import { USERMETA } from "contents/meta/user";
import { Metadata } from "next";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import CategoryLink from "./_components/CategoryLink";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const { frontmatter } = await getPostBySlug(slug);

  return {
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
    twitter: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return [{ slug: "not-found" }];
  }

  return posts.map((post) => ({
    slug: post?.slug,
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params;
  const { source, frontmatter } = await getPostBySlug(slug);

  const components = {
    Image: (props: ImageProps) => <Image {...props} height={400} />,
    Box: ({
      children,
      className,
    }: {
      children: ReactNode;
      className?: HTMLAttributes<HTMLDivElement>["className"];
    }) => <div className={twMerge("box my-5", className)}>{children}</div>,
    Header: Header,
    Table: Table,
    Divider: Divider,
    Process: Process,
    "Process.Item": Process.Item,
  };

  return (
    <div>
      <div className="border-b border-primary/30 pb-5 pt-20 text-center">
        {frontmatter.categoryId && (
          <CategoryLink currentCatId={frontmatter.categoryId} />
        )}
        <div className={"mb-5 text-4xl font-bold text-accent-yellow"}>
          {frontmatter.title}
        </div>
        <div className="font-thin text-primary/60">
          <div>{parseDate(frontmatter.date)}</div>
          <div>by {USERMETA.name}</div>
        </div>
      </div>
      <div className="mdx hover:prose-a:underline">
        <CustomMDXRemote source={source} components={components} />
      </div>
    </div>
  );
};

export default PostPage;
