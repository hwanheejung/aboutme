import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import WhatIDo from "./_components/WhatIDo";

export default function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <WhatIDo />
      <div className="h-[400px]"></div>
    </>
  );
}
