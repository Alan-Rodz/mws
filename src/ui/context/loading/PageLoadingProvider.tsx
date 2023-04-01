import { Router } from 'next/router';
import { useEffect, useState, FC } from 'react';

import { ChildrenProps } from '@/ui/type';

import { LoadingScreen } from './LoadingScreen';
import { PageLoadingContext } from './PageLoadingContext';

// ********************************************************************************
// == Provider ====================================================================
export const PageLoadingProvider: FC<ChildrenProps> = ({ children }) => {
  // -- State ---------------------------------------------------------------------
  const [isPageLoading, setIsPageLoading] = useState(false);

  // -- Effect --------------------------------------------------------------------
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsPageLoading(true));
    Router.events.on('routeChangeComplete', () => setIsPageLoading(false));
    Router.events.on('routeChangeError', () => setIsPageLoading(false));

    return () => {
      Router.events.off('routeChangeStart', () => setIsPageLoading(true));
      Router.events.off('routeChangeComplete', () => setIsPageLoading(false));
      Router.events.off('routeChangeError', () => setIsPageLoading(false));
    };

  }, [/*on mount*/]);

  // -- UI ------------------------------------------------------------------------
  return (
    <PageLoadingContext.Provider value={{ isPageLoading }}>
      {isPageLoading ? <LoadingScreen /> : children}
    </PageLoadingContext.Provider>
  );
};
