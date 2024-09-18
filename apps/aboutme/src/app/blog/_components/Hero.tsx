import { ReactNode } from "react";

interface HeroProps {
  emoji: ReactNode;
  title: string;
  description: string;
}

const Hero = ({ title, description, emoji }: HeroProps) => (
  <div className="mt-10 text-center">
    <div className="animate-bounce">{emoji}</div>
    <h1 className="mb-3 mt-5 text-4xl">{title}</h1>
    <p className="text-primary/60">{description}</p>
  </div>
);

export default Hero;
