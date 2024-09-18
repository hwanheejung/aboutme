import CV from "contents/cv/cv.mdx";
import { USERMETA } from "contents/meta";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: `${USERMETA.name}'s CV`,
      description: "Welcome!",
    },
    twitter: {
      title: `${USERMETA.name}'s CV`,
      description: "Welcome!",
    },
  };
}

const CVPage = () => {
  return (
    <div className="pt-10">
      {/* <div>Coming Soon :)</div> */}
      <CV />
    </div>
  );
};

export default CVPage;
