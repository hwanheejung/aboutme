import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { rehypePrettyCodeOptions } from "@/styles/rehypePrettyCode";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

interface CustomMDXRemoteProps extends MDXRemoteProps {
  source: string;
  components: {
    [key: string]: any;
  };
}

const CustomMDXRemote = (props: CustomMDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      source={props.source}
      components={props.components}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeAutolinkHeadings,
            [rehypePrettyCode, rehypePrettyCodeOptions],
          ],
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
};

export default CustomMDXRemote;
