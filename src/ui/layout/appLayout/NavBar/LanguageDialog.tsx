import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useRef, useState, ChangeEvent, FC } from 'react';

import { useLanguage } from '@/ui/hook/useLanguage';

// ********************************************************************************
// == Type ========================================================================
type Props = {
  isOpen: boolean;
  onClose: (value?: string) => void;
}

// == Constant ====================================================================
export const languageList = [
  { locale: 'en', name: 'English' },
  { locale: 'es', name: 'Español' },
];

// == Component ===================================================================
export const LanguageDialog: FC<Props> = ({ isOpen, onClose }) => {
  const radioGroupRef = useRef<HTMLElement>(null);
  const { changeLanguage, currentLocale, translation } = useLanguage();

  // -- State ---------------------------------------------------------------------
  const [chosenLanguage, setChosenLanguage] = useState(currentLocale);

  // -- Handler -------------------------------------------------------------------
  const handleOnEntering = () => {
    if (!radioGroupRef.current) return/*nothing to do*/;
    radioGroupRef.current.focus();

    // ensure sync on open
    setChosenLanguage(currentLocale);
  };
  const handleChosenLanguageChange = (event: ChangeEvent<HTMLInputElement>) =>  setChosenLanguage(event.target.value);
  const handleConfirm = async () => { onClose(chosenLanguage); await changeLanguage(chosenLanguage); };

  // -- UI ------------------------------------------------------------------------
  return (
    <Dialog
      maxWidth='xs'
      open={isOpen}
      sx={{ '& .MuiDialog-paper': { maxHeight: '435px', width: '80%' } }}
      TransitionProps={{ onEntering: handleOnEntering }}
    >
      <DialogTitle>{translation('appLayout.navbar_footer.language_selection.change')}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup ref={radioGroupRef} value={chosenLanguage} onChange={handleChosenLanguageChange}>
          {languageList.map((language, languageIdx) => (<FormControlLabel control={<Radio color='primary' />} key={languageIdx} label={language.name} value={language.locale} /> ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color='primary' onClick={() => onClose()}>{translation('common.cancel')}</Button>
        <Button color='primary' onClick={handleConfirm}>{translation('common.confirm')}</Button>
      </DialogActions>
    </Dialog>
  );
};

