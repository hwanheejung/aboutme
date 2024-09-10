import { ReactNode } from "react";

interface HeroProps {
  emoji: ReactNode;
  title: string;
  description: string;
}

const Hero = ({ title, description, emoji }: HeroProps) => (
  <div className="mt-10 text-center">
    <div className="animate-bounce">{emoji}</div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default Hero;
