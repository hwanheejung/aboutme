export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mdx prose-h1:text-main prose-blockquote:font-normal prose-blockquote:text-primary/60">
      {children}
    </div>
  );
}
