import { CSSProperties, FC } from 'react';

import { ChildrenProps } from '../type';

// ********************************************************************************
// == Type ========================================================================
type Props = ChildrenProps & { props?: Partial<CSSProperties>; }

// == Component ===================================================================
export const Center: FC<Props> = ({ children, props }) =>
  <div style={{ alignItems: 'center', display: 'flex', gap: '1em', justifyContent: 'center', ...props }}>
    {children}
  </div>;
