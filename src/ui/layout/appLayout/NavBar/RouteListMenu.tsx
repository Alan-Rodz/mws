import { Menu } from '@mui/material';
import { FC } from 'react';

import { RouteListMenuItems } from '@/route';
import { MenuProps } from '@/ui/type';

// ******************************************************************************
// == Component =================================================================
export const RouteListMenu: FC<MenuProps> = ({ anchorElement, isOpen, onClose }) =>
  <Menu anchorEl={anchorElement} open={isOpen} onClose={onClose} onClick={onClose}>
    <RouteListMenuItems onClose={onClose} />
  </Menu>;
