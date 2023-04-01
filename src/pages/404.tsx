import { Button, Typography } from '@mui/material';

import { appRouter, navigateOrReplace } from '@/route';
import { Center } from '@/ui/container/Center';
import { appClasses } from '@/ui/constant';
import { useLanguage } from '@/ui/hook/useLanguage';

// ********************************************************************************
// == Component ===================================================================
const NotFoundPage = () => {
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <Center props={{ flexDirection: 'column' }}>
      <Typography fontSize='5em' fontWeight='bold'>404</Typography>
      <Typography fontSize='1.1em'>{translation('common.non_existent_page')}</Typography>
      <Button className={`${appClasses.animation.scalable}`} color='inherit' variant='outlined' onClick={() => navigateOrReplace(appRouter.common.home.path)}>
        {translation('common.go_home')}
      </Button>
    </Center>
  );
};

// == Export ======================================================================
export default NotFoundPage;
