import { createContext } from 'react';

// * Always pass the initial State while creating the contexts
// * This will be read
export const ThemeContext = createContext({
  isDark: false,
  toggleDark: () => {},
});
