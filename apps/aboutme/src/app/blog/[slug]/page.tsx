import Image, { ImageProps } from "@/components/Image";
import Process from "@/components/Layouts/Process";
import Section from "@/components/Layouts/Section";
import CustomMDXRemote from "@/components/MDX/MDXRemote";
import { parseDate } from "@/lib/utils/date";
import { getAllPosts, getPostBySlug } from "@/lib/utils/getBlog";
import { USERMETA } from "contents/meta";
import { Metadata } from "next";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { getCategoryColorById } from "../_utils/category";
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

  const titleColor = frontmatter.categoryId
    ? `text-[${getCategoryColorById(frontmatter.categoryId)}]`
    : "text-primary";

  const components = {
    Image: (props: ImageProps) => <Image {...props} height={400} />,
    Box: ({
      children,
      className,
    }: {
      children: ReactNode;
      className?: HTMLAttributes<HTMLDivElement>["className"];
    }) => <div className={twMerge("box my-5", className)}>{children}</div>,
    Section: Section,
    "Section.Header": Section.Header,
    "Section.Body": Section.Body,
    "Section.Table": Section.Table,
    "Section.Divider": Section.Divider,
    Process: Process,
    "Process.Item": Process.Item,
  };

  return (
    <div>
      <div className="border-b border-primary/30 pb-5 pt-20 text-center">
        {frontmatter.categoryId && (
          <CategoryLink currentCatId={frontmatter.categoryId} />
        )}
        <div className={twMerge("mb-5 text-4xl font-bold", titleColor)}>
          {frontmatter.title}
        </div>
        <div className="font-thin text-primary/60">
          <div>{parseDate(frontmatter.date)}</div>
          <div>by {USERMETA.name}</div>
        </div>
      </div>
      <div className="mdx prose-a:font-normal prose-a:text-primary/60 prose-a:underline hover:prose-a:text-main/60">
        <CustomMDXRemote source={source} components={components} />
      </div>
    </div>
  );
};

export default PostPage;
