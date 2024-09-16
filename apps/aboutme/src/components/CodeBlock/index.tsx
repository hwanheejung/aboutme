"use client";

import { CodeBlock } from "@aboutme/code-block/codeblock";
import { Children, ReactNode } from "react";

const CustomCodeBlock = ({
  children,
  className = "",
  lines = [],
  words = [],
  showLineNumbers = false,
}: {
  children: ReactNode;
  className?: string;
  lines?: (number | string)[];
  words?: string[];
  showLineNumbers?: boolean;
}) => {
  const codeString =
    typeof children === "string"
      ? children
      : Children.toArray(children).join("");
  return (
    <CodeBlock code={codeString} language="js" lines={lines} words={words}>
      <CodeBlock.Code className="rounded-xl bg-gray-100 p-6 shadow-lg">
        <div className="table-row">
          {showLineNumbers && (
            <CodeBlock.LineNumber className="table-cell select-none pr-4 text-right text-sm text-gray-500" />
          )}
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
};

export default CustomCodeBlock;
