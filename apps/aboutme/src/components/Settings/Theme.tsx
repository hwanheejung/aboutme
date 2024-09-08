"use client";

import type { Theme as ThemeType } from "@/types/theme";
import DarkIcon from "public/icons/theme/dark.svg";
import LightIcon from "public/icons/theme/light.svg";
import { useEffect, useState } from "react";

const DEFAULT_THEME: ThemeType = "dark";

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
    <button onClick={toggleTheme} className="ml-auto">
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default Theme;
