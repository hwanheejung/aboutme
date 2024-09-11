import { getPosts } from "@/lib/utils/file";
import blogCategories from "contents/meta/blogCategories.json";
import Hero from "../../_components/Hero";
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
  const posts = getPosts(id);
  return (
    <>
      <div className="mx-35 my-10 grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostBox key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
