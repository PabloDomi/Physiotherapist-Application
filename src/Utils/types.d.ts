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