import { getPosts } from "@/lib/utils/file";
import Hero from "./_components/Hero";
import PostBox from "./_components/PostBox";

const BlogPage = () => {
  const posts = getPosts();
  return (
    <>
      <Hero
        emoji={<span className="h-6 text-5xl">💻</span>}
        title={"Welcome to my Tech Blog"}
        description="I'm currently focusing on Next.js, Tailwind.css"
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
