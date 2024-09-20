import blogCategories from "contents/meta/blogCategories.json";

export const getCategoryById = (categoryId: number) => {
  const categories = blogCategories.categories;

  for (const category of categories) {
    if (category.id === categoryId) {
      return category.title;
    }

    if (category.subs) {
      for (const sub of category.subs) {
        if (sub.id === categoryId) {
          return sub.title;
        }
      }
    }
  }

  return null;
};
