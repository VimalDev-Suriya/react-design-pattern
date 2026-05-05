import { use } from 'react';
import { ThemeContext } from '../contexts';

export const useTheme = () => {
  // * instead of useContext we can also use "use" hook to access.
  // Both useContext and use actually works same in here
  const { isDark, toggleDark } = use(ThemeContext);

  return {
    isDark,
    toggleDark,
  };
};
