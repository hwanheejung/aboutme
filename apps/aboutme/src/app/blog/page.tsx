import { getAllPosts } from "@/lib/utils/getBlog";
import { linkedPosts } from "contents/linkedPosts";
import { USERMETA } from "contents/meta/user";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import LinkedPostBox from "./_components/LinkedPostBox";
import PostBox from "./_components/PostBox";
import blogCategories from "contents/meta/blogCategories.json";
import Section from "./_components/Section";

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: `${USERMETA.name}'s Tech Blog`,
      description: "Welcome!",
    },
    twitter: {
      title: `${USERMETA.name}'s Tech Blog`,
      description: "Welcome!",
    },
  };
}

const BlogPage = async () => {
  const posts = await getAllPosts();
  const previousPosts = linkedPosts;

  return (
    <>
      {blogCategories.categories.map((item) => (
        <Section
          categoryName={item.title}
          categoryId={item.id}
          subCategories={item.subs}
          key={item.id}
          posts={posts.filter(
            (post) => Math.floor(post.frontmatter.categoryId!) === item.id,
          )}
          externalPosts={previousPosts.filter(
            (post) => Math.floor(post.categoryId!) === item.id,
          )}
        />
      ))}
    </>
  );
};

export default BlogPage;
