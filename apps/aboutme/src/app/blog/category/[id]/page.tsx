import { getPosts } from "@/lib/utils/file";
import blogCategories from "contents/meta/blogCategories.json";
import PostBox from "../../_components/PostBox";

// /blog/category/1, /blog/category/2
export async function generateStaticParams() {
  const params: { id: string }[] = [];

  blogCategories.categories.forEach((category) => {
    params.push({ id: category.id.toString() });

    if (category.subs) {
      category.subs.forEach((sub) => {
        params.push({ id: sub.id.toString() });
      });
    }
  });

  return params;
}

const CategoryPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const posts = getPosts(parseInt(id));
  return (
    <>
      <div className="mx-35 my-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
        {posts.map((post) => (
          <PostBox key={post.url} post={post} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
