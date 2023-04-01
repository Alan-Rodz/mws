import { CircularProgress } from '@mui/material';
import { CSSProperties, FC } from 'react';

import { Center } from '@/ui/container/Center';

// ********************************************************************************
// == Type ========================================================================
type Props = { centerProps?: Partial<CSSProperties>; }

// == Component ===================================================================
export const LoadingScreen: FC<Props> = ({ centerProps }) =>
    <Center props={centerProps}>
      <CircularProgress color='inherit' />
    </Center>;
