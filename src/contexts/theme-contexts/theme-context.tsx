import { createContext } from "react";
import type { Theme } from "./theme-provider";

export interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
