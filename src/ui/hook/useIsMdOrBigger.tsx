import { useMediaQuery, useTheme } from '@mui/material';

// ********************************************************************************
export const useIsMdOrBigger = () => {
  const theme = useTheme();
  const useIsMdOrBigger = useMediaQuery(theme.breakpoints.up('md'));

  return useIsMdOrBigger;
};
