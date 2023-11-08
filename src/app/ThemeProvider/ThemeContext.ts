import { createContext } from "react";

export interface ThemeState {
  theme: 'light' | 'dark',
  setTheme: () => void;
}

export default createContext<ThemeState>({
  theme: "light",
  setTheme: () => null
});