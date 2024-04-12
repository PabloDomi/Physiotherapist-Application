import React from "react";

export type Theme = "light" | "dark";

export type Id = number;
export type Name = string;
export type Age = number;
export type Gender = string;

export interface User { 
    id: Id
    name: Name
    age: Age
    gender: Gender
}

export type ModalType = boolean;

export interface ModalProps {
    show: boolean
    title: string
    content: React.ReactNode
}

export interface ButtonToggleThemeProps {
    toggleTheme: () => void
    theme: Theme
}

export interface NavbarProps {
    styledClassName: string // ClassName for the Navbar to set the style of darkTheme or lightTheme
    brandName: string // Name of the brand to display in the Navbar
    imageSrcPath: string // Path of the image to display in the Navbar
}

export interface ScrollableListProps {
    children: React.ReactNode
}

export interface SearchProps {
    details: User[]
    theme: Theme
}

export interface SearchListProps {
    filteredPersons: User[]
}

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export interface EstadisticasProps {
    theme: Theme
}

export interface SearchCardProps {
    key: number;
    person: User;
}

export type ThemeContextType = { 
    theme: Theme; 
    toggleTheme: () => void; 
    showModal: ModalType, 
    toggleModal: () => void 
};


