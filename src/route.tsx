import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import Router from 'next/router';
import { FC } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';

import { appClasses } from './ui/constant';
import { Center } from './ui/container/Center';
import { useAppTheme } from './ui/hook/useAppTheme';
import { useLanguage } from './ui/hook/useLanguage';

// ********************************************************************************
// == Constant ====================================================================
export const ROOT = '/';

// == Router ======================================================================
export const appRouter = {
  common: {
    home: {
      name: 'home',
      icon: () => <AiOutlineHome />,
      path: `${ROOT}`,
    },

    project: {
      name: 'project',
      icon: () => <MdOutlineWorkOutline />,
      path: `${ROOT}project`,
    },
  },
};

// == Component ===================================================================
export const RouteList: FC = () => {
  const { theme } = useAppTheme();
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <Center>
      {
        Object.entries(appRouter.common).map(([_, entry], entryIdx) => (
          <Link key={entryIdx} href={entry.path}>
            <Typography className={`${appClasses.animation.hoverable(theme.name)} ${appClasses.animation.scalable}`} color='palette.text.primary'>
              {translation(`appLayout.navbar_footer.${entry.name}`)}
            </Typography>
          </Link>
        ))
      }
    </Center>
  );
};

export const RouteListMenuItems: FC<{ onClose: () => void; }> = ({ onClose }) => {
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <>
      {
        Object.entries(appRouter.common).map(([_, entry], entryIdx) => (
          <Link key={entryIdx} href={entry.path}>
            <MenuItem onClick={onClose}>
              <ListItemIcon>
                {entry.icon()}
              </ListItemIcon>
              {translation(`appLayout.navbar_footer.${entry.name}`)}
            </MenuItem>
          </Link>
        ))
      }
    </>
  );
};

// == Util ========================================================================
/** navigate to a Route or reload if already there */
export const navigateOrReplace = (pathName: string) => {
  if (Router.asPath === pathName) Router.reload();
  else Router.push(pathName);
};
