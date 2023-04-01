import { FC } from 'react';

import { ChildrenProps } from '../type';

// ********************************************************************************
// == Component ===================================================================
export const FullPageLayout: FC<ChildrenProps> = ({ children }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-between',
      overflowX: 'auto',
      overflowY: 'auto',
      position: 'relative',
      width: '100vw',
    }}
  >
    {children}
  </div>;
