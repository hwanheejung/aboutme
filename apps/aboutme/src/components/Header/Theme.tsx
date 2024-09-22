"use client";

import type { Theme as ThemeType } from "@/types";
import DarkIcon from "public/icons/theme/dark.svg";
import LightIcon from "public/icons/theme/light.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_THEME: ThemeType = "dark";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Theme = () => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", DEFAULT_THEME);
    } else {
      if (storedTheme !== DEFAULT_THEME) {
        setTheme(storedTheme as ThemeType);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="ml-auto flex items-center gap-2">
      <LightIcon />
      <div
        className={`flex w-10 ${theme === "light" ? "justify-start" : "justify-end"} rounded-full bg-primary/10 p-1`}
      >
        <motion.div
          layout
          transition={spring}
          className="h-4 w-4 rounded-full bg-accent-yellow"
        />
      </div>
      <DarkIcon />
    </button>
  );
};

export default Theme;
