"use client";

import type { Theme as ThemeType } from "@/types/theme";
import DarkIcon from "public/icons/theme/dark.svg";
import LightIcon from "public/icons/theme/light.svg";
import { useEffect, useState } from "react";

const DEFAULT_THEME: ThemeType = "dark";

const Theme = () => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  useEffect(() => {
    if (localStorage.getItem("theme") !== DEFAULT_THEME) {
      setTheme(localStorage.getItem("theme") as ThemeType);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
