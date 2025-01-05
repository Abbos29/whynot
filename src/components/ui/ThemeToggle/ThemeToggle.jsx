import React, { useEffect, useState } from "react";
import s from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={s.btn} onClick={toggleTheme}>
      Кликк
    </button>
  );
};

export default ThemeToggle;
