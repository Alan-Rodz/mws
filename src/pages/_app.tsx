import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect, FC } from 'react';

import { AppThemeProvider } from '@/ui/context/appTheme/AppThemeProvider';
import { LanguageProvider } from '@/ui/context/language/LanguageProvider';
import { PageLoadingProvider } from '@/ui/context/loading/PageLoadingProvider';
import { AppLayout } from '@/ui/layout/appLayout/AppLayout';

import 'aos/dist/aos.css';

import '../style/global.css';

// ********************************************************************************
// == Component ===================================================================
const App: FC<AppProps> = ({ pageProps, Component }) => {
  // -- Effect --------------------------------------------------------------------
  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: 'ease-in-out', disable: 'mobile' });
  }, [/*on mount*/]);

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
