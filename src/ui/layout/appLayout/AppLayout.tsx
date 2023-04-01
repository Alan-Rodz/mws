import Head from 'next/head';
import { FC } from 'react';

import { ChildrenProps } from '@/ui/type';

import { FullPageLayout } from '../FullPageLayout';
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer';

// ********************************************************************************
// == Component ===================================================================
export const AppLayout: FC<ChildrenProps> = ({ children }) =>
  <FullPageLayout>
    <Head>
      <title>Alan Rodz</title>
      <meta name='description' content="Alan Rodz" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <NavBar />
    {children}
    <Footer />
  </FullPageLayout>;
