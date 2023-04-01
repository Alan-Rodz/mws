import { Button, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { useState, FC } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FiMoon, FiSun } from 'react-icons/fi';

import { RouteList, ROOT } from '@/route';
import { appClasses, appColors, WEBSITE_OWNER } from '@/ui/constant';
import { Center } from '@/ui/container/Center';
import { useIsMdOrBigger } from '@/ui/hook/useIsMdOrBigger';
import { useAppTheme } from '@/ui/hook/useAppTheme';
import { useLanguage } from '@/ui/hook/useLanguage';

import { LanguageDialog } from './LanguageDialog';
import { RouteListMenu } from './RouteListMenu';

// ********************************************************************************
// == NavBar ======================================================================
export const NavBar: FC = () => {
  const { currentLocale, translation } = useLanguage();
  const isMdOrBigger = useIsMdOrBigger();
  const { theme, toggleTheme } = useAppTheme();

  // -- State ---------------------------------------------------------------------
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [routeListMenuAnchor, setRouteListMenuAnchor] = useState<null | HTMLElement>(null);

  // -- Handler -------------------------------------------------------------------
  const handleOpenLanguageModal = () => setIsLanguageModalOpen(true);
  const handleCloseLanguageModal = () => setIsLanguageModalOpen(false);

  const handleOpenRouteListMenu = (event: React.MouseEvent<HTMLElement>) => setRouteListMenuAnchor(event.currentTarget);
  const handleCloseRouteListMenu = () => setRouteListMenuAnchor(null);

  // -- UI ------------------------------------------------------------------------
  const isRouteListMenuOpen = Boolean(routeListMenuAnchor);
  return (
    <div>
      <Center props={{ justifyContent: 'space-between', padding: '1em' }}>
        {/* .. Title .......................................................... */}
        <Link href={ROOT}>
          <div style={{ alignItems: 'center', display: 'flex', gap: '1em' }} className={appClasses.animation.scalable}>
            <Typography fontSize='1.2em' fontWeight='bold'>{WEBSITE_OWNER}</Typography>
          </div>
        </Link>

        <Center>
          <Center>
            <Button onClick={handleOpenLanguageModal}>{currentLocale}</Button>
            <LanguageDialog isOpen={isLanguageModalOpen} onClose={handleCloseLanguageModal} />
            <Tooltip title={theme.name === 'dark' ? translation('appLayout.navbar_footer.theme.dark') : translation('appLayout.navbar_footer.theme.light')}>
              <IconButton sx={{ color: 'palette.text.primary' }} onClick={() => toggleTheme()}>
                {theme.name === 'dark' ? <FiSun /> : <FiMoon />}
              </IconButton>
            </Tooltip>
          </Center>

          {/* .. RouteList .................................................... */}
          {
            isMdOrBigger
              ? <RouteList />
              : <IconButton color='inherit' onClick={handleOpenRouteListMenu}><BiMenu /></IconButton>
          }
        </Center>

        {/* .. Menu ........................................................... */}
        <RouteListMenu anchorElement={routeListMenuAnchor} isOpen={isRouteListMenuOpen} onClose={handleCloseRouteListMenu} />
      </Center>
      <Divider color={theme.name === 'dark' ? appColors.WHITE : appColors.BLACK} />
    </div>
  );
};
