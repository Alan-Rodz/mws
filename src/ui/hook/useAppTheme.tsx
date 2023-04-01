import { useContext } from 'react';

import { AppThemeContext } from '../context/appTheme/AppThemeContext';

// ****************************************************************************
export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  const { theme, toggleTheme } = context;
  if (!theme || !toggleTheme) throw new Error('useAppTheme must be used within a AppThemeProvider');

  return { theme, toggleTheme };
};
