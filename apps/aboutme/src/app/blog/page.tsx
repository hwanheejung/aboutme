import { getAllPosts } from "@/lib/utils/file";
import { USERMETA } from "contents/meta";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import PostBox from "./_components/PostBox";

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

const BlogPage = () => {
  const posts = getAllPosts();
  return (
    <>
      <Hero
        emoji={<span className="h-6 text-5xl">💻</span>}
        title={"Welcome to my Tech Blog :)"}
        description="I'm currently focusing on Next.js"
      />
      <div className="mx-35 my-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
        {posts.map((post) => (
          <PostBox key={post.url} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
