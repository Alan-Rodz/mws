  import { createContext } from 'react';

// ********************************************************************************
// == Type ========================================================================
type State = Readonly<{ isPageLoading: boolean; }>;

// == Context =====================================================================
export const PageLoadingContext = createContext<State>({ isPageLoading: false/*default*/ });
             PageLoadingContext.displayName = 'PageLoadingContext';
