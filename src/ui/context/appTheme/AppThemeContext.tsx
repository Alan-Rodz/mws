import { createContext } from 'react';

import { Theme } from '@mui/material';

// ********************************************************************************
// == Type ========================================================================
export type ThemeWithName = Theme & { name: 'dark' | 'light'; };

type State = Readonly<{ theme: ThemeWithName | null; toggleTheme: (() => void) | null; }>;

// == Context =====================================================================
export const AppThemeContext = createContext<State>({ theme: null/*default*/, toggleTheme: null/*default*/ });
             AppThemeContext.displayName = 'AppThemeContext';
