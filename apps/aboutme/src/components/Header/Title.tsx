import Link from "next/link";

const Title = () => (
  <Link
    href="/"
    className="flex items-center justify-center gap-3 rounded-full border border-primary/20 px-4 py-3 text-lg"
  >
    <div className="h-4 w-4 rounded-full bg-accent-yellow"></div>
    <h1 className="">J.HH</h1>
  </Link>
);

export default Title;
