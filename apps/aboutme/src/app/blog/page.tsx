import { getAllPosts } from "@/lib/utils/getBlog";
import { USERMETA } from "contents/meta/user";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import PostBox from "./_components/PostBox";
import { linkedPosts } from "contents/linkedPosts";
import LinkedPostBox from "./_components/LinkedPostBox";

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
      <Hero
        emoji={<span className="h-6 text-5xl">💻</span>}
        title={"Welcome to my Tech Blog :)"}
        description="I'm currently focusing on Next.js"
      />
      {posts.length === 0 && previousPosts.length === 0 ? (
        <div className="pt-40 text-center text-xl">No Post Yet...</div>
      ) : (
        <div className="mx-35 my-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
          {posts.map((post) => (
            <PostBox key={post.slug} post={post.frontmatter} slug={post.slug} />
          ))}
          {previousPosts.map((post) => (
            <LinkedPostBox key={post.link} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPage;
