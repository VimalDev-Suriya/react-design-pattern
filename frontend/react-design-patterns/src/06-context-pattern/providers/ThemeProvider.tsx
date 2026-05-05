import React, { useState } from 'react';
import { ThemeContext } from '../contexts';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // * In React 19 we dont want to use ThemeContext.Provider, by default it has the ability to handle those cases
  return (
    <ThemeContext
      value={{
        isDark,
        toggleDark: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
