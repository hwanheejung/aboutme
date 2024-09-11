import { getPosts } from "@/lib/utils/file";

export async function generateStaticParams() {
  const posts = getPosts();

  if (!posts || posts.length === 0) {
    return [{ slug: "not-found" }];
  }

  return posts.map((post) => ({
    slug: post.url,
  }));
}

const PostPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  return <div>Post: {slug}</div>;
};

export default PostPage;
