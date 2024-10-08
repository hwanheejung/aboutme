import { getAllPosts } from "@/lib/utils/getBlog";
import blogCategories from "contents/meta/blogCategories.json";
import PostBox from "../../_components/PostBox";
import { getCategoryById } from "../../_utils/category";
import { linkedPosts } from "contents/linkedPosts";
import LinkedPostBox from "../../_components/LinkedPostBox";

// /blog/category/all
// /blog/category/[slug]

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

const CategoryPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const posts = await getAllPosts(parseFloat(id));
  // 1 -> 1.1, 1.2
  // 1.1 -> 1.1
  const externalPosts = linkedPosts.filter((post) => {
    const postCategoryId = post.categoryId!.toString();
    const targetCategoryId = id.toString();
    if (targetCategoryId.includes(".")) {
      return postCategoryId === targetCategoryId;
    } else {
      return postCategoryId.startsWith(targetCategoryId);
    }
  });

  return (
    <>
      {posts.length === 0 && externalPosts.length === 0 ? (
        <div className="pt-40 text-center text-xl">No Post Yet...</div>
      ) : (
        <>
          <h3 className="py-10 text-center text-3xl font-bold uppercase">
            {getCategoryById(parseFloat(id))}
          </h3>
          <div className="mx-35 my-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
            {posts.map((post) => (
              <PostBox
                key={post.slug}
                post={post.frontmatter}
                slug={post.slug}
              />
            ))}
            {externalPosts.map((post) => (
              <LinkedPostBox key={post.link} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryPage;
