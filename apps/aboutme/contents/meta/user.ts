interface SiteMeta {
  title: string;
  description: string;
}

export const SITEMETA: SiteMeta = {
  title: "J.Hwanhee",
  description: "About me",
};

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
  linkedIn: "https://www.linkedin.com/in/hwanhee-jeong-9b12711a6",
  email: "hwanheejung117@gmail.com",
  location: "Seoul, South Korea",
  school: "Yonsei University",
};
