export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none pb-40 text-primary transition-all prose-headings:mb-3 prose-headings:mt-10 prose-headings:font-mono prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:border-b prose-h2:border-b-primary/40 prose-h2:pb-2 prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-xl prose-h6:text-lg prose-p:m-0 prose-a:text-main hover:prose-a:text-opacity-80 prose-strong:text-primary prose-ul:my-2 prose-li:my-1 prose-li:text-sm prose-li:opacity-80 dark:prose-headings:text-white">
      {children}
    </div>
  );
}
