import Link from "next/link";

interface CalloutProps {
  description?: string;
  link: string;
  linkText?: string;
}

const Callout = ({
  description = "If you'd like to learn more about my problem-solving journey, feel free to check out my detailed blog post!",
  link,
  linkText = "Learn More",
}: CalloutProps) => (
  <div className="flex flex-col items-center gap-4 bg-primary/5 px-4 py-8">
    <p className="">{description}</p>
    <Link
      href={link}
      className="rounded-lg bg-white px-3 py-1 text-black transition-all hover:bg-main"
    >
      {linkText}
    </Link>
  </div>
);

export default Callout;
