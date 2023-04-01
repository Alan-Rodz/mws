import { ReactNode } from 'react';

// ********************************************************************************
// == React =======================================================================
export type ChildrenProps = { children: ReactNode; };

// == Material UI =================================================================
// -- Menu ------------------------------------------------------------------------
export type MenuProps = {
  anchorElement: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
}

// == Object =======================================================================
export type GeneralObject = { [key: string]: string | string[] | number | boolean | Date | null; }
