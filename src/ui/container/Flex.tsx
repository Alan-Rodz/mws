import { CSSProperties, FC } from 'react';

import { ChildrenProps } from '../type';

// ********************************************************************************
// == Type ========================================================================
type Props = ChildrenProps & { noPadding?: boolean; props?: Partial<CSSProperties>; }

// == Component ===================================================================
export const Flex: FC<Props> = ({ children, noPadding, props }) =>
  <div style={{ display: 'flex', gap: '1em', padding: noPadding ? '' : '1em', ...props }}>
    {children}
  </div>;
