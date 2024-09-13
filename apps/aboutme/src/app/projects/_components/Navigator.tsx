"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigator = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <div className="fixed right-10 top-16 z-20 text-right text-sm font-thin text-primary/60">
      {pathParts.length > 0 && (
        <div className="">
          {pathParts.map((part, index) => (
            <span key={index}>
              {index !== 0 && <span className="px-2">&gt;</span>}
              {index === pathParts.length - 1 ? (
                <span>{part}</span>
              ) : (
                <Link
                  href={`/${pathParts.slice(0, index + 1).join("/")}`}
                  className="transition-all hover:text-main"
                >
                  {part}
                </Link>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigator;
