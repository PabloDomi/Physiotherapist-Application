import React, { useState, createContext } from "react";
import { Theme } from "../Utils/types";

interface ThemeProviderProps { 
    children: React.ReactNode;
}

type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};