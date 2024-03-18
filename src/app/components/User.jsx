"use client";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { ThemeContext } from "@/context/UserContext";

export default function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <h1>User ID: {username}</h1>
      <button
        className="border bg-cyan-200 text-orange-400 p-2"
        onClick={() => setUsername("Daniel")}
      >
        Magic will happen...
      </button>
      <h2>Theme: {theme}</h2>
      <button
        className="border bg-slate-400 text-white p-2"
        onClick={handleThemeToggle}
      >
        Change theme...
      </button>
    </div>
  );
}
