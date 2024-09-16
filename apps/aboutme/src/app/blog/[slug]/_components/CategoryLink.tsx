import blogCategories from "contents/meta/blogCategories.json";
import Link from "next/link";

interface CategoryLinkProps {
  currentCatId: number;
}

const CategoryLink = ({ currentCatId }: CategoryLinkProps) => {
  const categoryMap = new Map();
  const categories = blogCategories.categories;

  // Populate the map
  categories.forEach((category) => {
    // Add the main category
    categoryMap.set(category.id, { title: category.title, parent: null });

    // Add the subcategories
    category.subs.forEach((sub) => {
      categoryMap.set(sub.id, { title: sub.title, parent: category.title });
    });
  });

  const category = categoryMap.get(currentCatId);

  return (
    <div className="mb-3 font-thin text-primary">
      {category.parent && (
        <>
          <Link
            href={`/blog/category/${Math.floor(Number(currentCatId))}`}
            className="!font-thin"
          >
            {category.parent}
          </Link>{" "}
          <span>&gt;</span>
        </>
      )}
      {category && (
        <Link className="!font-thin" href={`/blog/category/${currentCatId}`}>
          {" "}
          {category.title}
        </Link>
      )}
    </div>
  );
};

export default CategoryLink;
