"use client";

import { BlogFrontMatter } from "@/types";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import PostBox from "./PostBox";
import LinkedPostBox from "./LinkedPostBox";
import Link from "next/link";
import ButtonTransition from "@/components/Transitions/ButtonTransition";

interface SectionProps {
  categoryName: string;
  categoryId: number;
  subCategories: { id: number; title: string }[] | undefined;
  posts: {
    frontmatter: BlogFrontMatter;
    slug: string;
  }[];
  externalPosts?: (Omit<BlogFrontMatter, "slug"> & { link: string })[];
}

const Section = ({
  categoryName,
  categoryId,
  subCategories,
  posts,
  externalPosts,
}: SectionProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [sortedExPosts, setSortedExPosts] = useState(externalPosts);

  useEffect(() => {
    let newPosts;
    let newExPosts;
    if (current === 0) {
      newPosts = posts;
      newExPosts = externalPosts;
    } else {
      newPosts = posts.filter(
        (post) => post.frontmatter.categoryId === current,
      );
      newExPosts = externalPosts?.filter((post) => post.categoryId === current);
    }

    setSortedPosts(newPosts);
    setSortedExPosts(newExPosts);
  }, [current]);

  const mergedPosts = [...sortedPosts, ...(sortedExPosts || [])].slice(0, 6);

  return (
    <div className="mb-20">
      <header className="py-10 text-center text-3xl font-bold uppercase text-accent-lime">
        {categoryName}
      </header>
      {subCategories && (
        <div className="flex justify-center gap-5">
          <ButtonTransition>
            <button
              type="button"
              onClick={() => setCurrent(0)}
              className={twMerge(
                "rounded-full border border-primary/20 px-4 py-2",
                current === 0 ? "border-2 border-accent-lime" : "",
              )}
            >
              All
            </button>
          </ButtonTransition>
          {subCategories.map((sub) => (
            <ButtonTransition>
              <button
                key={sub.id}
                type="button"
                onClick={() => setCurrent(sub.id)}
                className={twMerge(
                  "rounded-full border border-primary/20 px-4 py-2",
                  current === sub.id ? "border-2 border-accent-lime" : "",
                )}
              >
                {sub.title}
              </button>
            </ButtonTransition>
          ))}
        </div>
      )}
      {sortedPosts.length > 0 || (sortedExPosts && sortedExPosts.length > 0) ? (
        <div className="mx-35 my-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
          {mergedPosts.map((post) =>
            "slug" in post ? (
              <PostBox
                key={post.slug}
                post={post.frontmatter}
                slug={post.slug}
              />
            ) : (
              <LinkedPostBox key={post.link} post={post} />
            ),
          )}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center opacity-60">
          No Post Yet :(
        </div>
      )}
      <div className="flex justify-end">
        <Link href={`/blog/category/${categoryId}`}>
          <ButtonTransition>See More!</ButtonTransition>
        </Link>
      </div>
    </div>
  );
};

export default Section;
