"use client";

import { useState, useEffect } from "react";

const ToggleThemeBtn = () => {
  // 처음 로드 시 localStorage에서 테마를 가져오거나, 기본값으로 "light" 설정
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // 테마가 변경될 때마다 localStorage에 저장하고, 문서에 적용
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleThemeBtn;
