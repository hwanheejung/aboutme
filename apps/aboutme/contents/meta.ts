interface UserMeta {
  name: string;
  github?: string;
  linkedIn?: string;
  email?: string;
  location?: string;
  school?: string;
}

export const USERMETA: UserMeta = {
  name: "Hwanhee Jeong",
  github: "https://github.com/hwanheejung",
  linkedIn: "www.linkedin.com/in/hwanhee-jeong-9b12711a6",
  email: "hwanheejung117@gmail.com",
  location: "Seoul, South Korea",
  school: "Yonsei University",
};

interface MenuBase {
  title: string;
  link: string;
}

export interface Menu extends MenuBase {
  subs?: Menu[];
}

export const MENUS: Menu[] = [
  {
    title: "CV",
    link: "/cv",
  },
  {
    title: "Tech Blog",
    link: "/blog",
    subs: [
      {
        title: "All Posts",
        link: "/blog",
      },
      {
        title: "Projects/Activities",
        link: "/blog/category/1",
        subs: [
          {
            title: "DizzyCode",
            link: "/blog/category/2",
          },
          {
            title: "Polabo",
            link: "/blog/category/3",
          },
        ],
      },
      {
        title: "Computer Science",
        link: "/blog/category/4",
        subs: [
          {
            title: "Network",
            link: "/blog/category/5",
          },
          {
            title: "Algoritms",
            link: "/blog/category/6",
          },
        ],
      },
    ],
  },
  {
    title: "Projects",
    link: "/projects",
  },
];
