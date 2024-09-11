import blogCategories from "./blogCategories.json";

interface MenuBase {
  title: string;
  link: string;
}

export interface Menu extends MenuBase {
  subs?: Menu[];
}

//////////////////////////////////////////////////////////

export const MENUS: Menu[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "CV",
    link: "/cv",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Tech Blog",
    link: "/blog",
    subs: [
      {
        title: "All Posts",
        link: "/blog",
      },
      ...blogCategories.categories.map((category) => ({
        title: category.title,
        link: `/blog/category/${category.id}`,
        subs: category.subs?.map((sub) => ({
          title: sub.title,
          link: `/blog/category/${sub.id}`,
        })),
      })),
    ],
  },
];
