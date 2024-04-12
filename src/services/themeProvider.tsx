import React, { useState, createContext } from "react";
import { ModalType, Theme } from "../Utils/types";
import { ThemeProviderProps } from '../Utils/types'
import { type ThemeContextType } from "../Utils/types";

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [showModal, setShowModal] = useState<ModalType>(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, showModal, toggleModal }}>
      {children}
    </ThemeContext.Provider>
  );
};