"use client";

import { createContext } from "react";
import { useState } from "react";

// username context
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("Dan");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

// Theme context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
