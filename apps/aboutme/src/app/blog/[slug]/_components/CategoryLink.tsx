import ButtonTransition from "@/components/Transitions/ButtonTransition";
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
    category.subs?.forEach((sub) => {
      categoryMap.set(sub.id, { title: sub.title, parent: category.title });
    });
  });

  const category = categoryMap.get(currentCatId);

  return (
    <div className="mb-3 flex justify-center gap-2 text-primary/60">
      {category.parent && (
        <>
          <Link href={`/blog/category/${Math.floor(Number(currentCatId))}`}>
            <ButtonTransition>{category.parent}</ButtonTransition>
          </Link>{" "}
          <span>&gt;</span>
        </>
      )}
      {category && (
        <Link href={`/blog/category/${currentCatId}`}>
          <ButtonTransition> {category.title}</ButtonTransition>
        </Link>
      )}
    </div>
  );
};

export default CategoryLink;
