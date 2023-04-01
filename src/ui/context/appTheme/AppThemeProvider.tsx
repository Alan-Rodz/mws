import { useEffect, useMemo, useState, FC } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { appColors, WEBSITE_NAME } from '@/ui/constant';
import { ChildrenProps } from '@/ui/type';

import { AppThemeContext, ThemeWithName } from './AppThemeContext';

// ********************************************************************************
// == Constant ====================================================================
const THEME_STORAGE_ITEM = `${WEBSITE_NAME}-theme`;

// == Provider ====================================================================
export const AppThemeProvider: FC<ChildrenProps> = ({ children }) => {
  const lightTheme: ThemeWithName = useMemo(() => ({ name: 'light', ...createTheme({ palette: { mode: 'light', primary: { main: appColors.BLACK } } }) }), [/*no deps*/]),
        darkTheme: ThemeWithName = useMemo(() => ({ name: 'dark', ...createTheme({ palette: { mode: 'dark', primary: { main: appColors.WHITE } } }) }), [/*no deps*/]);

  // -- State ---------------------------------------------------------------------
  const [theme, setTheme] = useState<ThemeWithName>(darkTheme/*default*/);

  // -- Effect --------------------------------------------------------------------
  useEffect(() => {
    const theme = localStorage.getItem(THEME_STORAGE_ITEM);
    if (!theme) return/*nothing to do*/;

    setTheme(theme === 'light' ? lightTheme : darkTheme);
  }, [darkTheme, lightTheme]);

  // -- Handler -------------------------------------------------------------------
  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
    localStorage.setItem(THEME_STORAGE_ITEM, theme.name === 'dark' ? 'light' : 'dark');
  };

  // -- UI ------------------------------------------------------------------------
  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider >
    </AppThemeContext.Provider>
  );
};
