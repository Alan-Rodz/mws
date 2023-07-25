import type { AppProps } from 'next/app';
import { FC } from 'react';

import { AppThemeProvider } from '@/ui/context/appTheme/AppThemeProvider';
import { LanguageProvider } from '@/ui/context/language/LanguageProvider';
import { PageLoadingProvider } from '@/ui/context/loading/PageLoadingProvider';
import { AppLayout } from '@/ui/layout/appLayout/AppLayout';

import '../style/global.css';

// ********************************************************************************
// == Component ===================================================================
const App: FC<AppProps> = ({ pageProps, Component }) => {
  // -- UI ------------------------------------------------------------------------
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <AppLayout>
          <PageLoadingProvider>
            <Component {...pageProps} />
          </PageLoadingProvider>
        </AppLayout>
      </LanguageProvider>
    </AppThemeProvider>
  );
};

// == Export ======================================================================
export default App;
