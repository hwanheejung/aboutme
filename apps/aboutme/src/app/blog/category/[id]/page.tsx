import blogCategories from "contents/meta/blogCategories.json";

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
  return <div>Category Main Page {id}</div>;
};

export default CategoryPage;
