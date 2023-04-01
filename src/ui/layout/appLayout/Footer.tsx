import { Divider, IconButton, Tooltip, Typography } from '@mui/material';
import { BsCode } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { navigateOrReplace, RouteList } from '@/route';
import { appColors, GITHUB_URL, LINKEDIN_URL, REPO_URL, WEBSITE_OWNER, YOUTUBE_URL } from '@/ui/constant';
import { Center } from '@/ui/container/Center';
import { useAppTheme } from '@/ui/hook/useAppTheme';
import { useLanguage } from '@/ui/hook/useLanguage';

// ********************************************************************************
export const Footer = () => {
  const { theme } = useAppTheme();
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <Divider color={theme.name === 'dark' ? appColors.WHITE : appColors.BLACK} />
      <Center>
        <Typography fontWeight='bold'>{WEBSITE_OWNER}</Typography>
      </Center>

      <RouteList />

      <Center>
        <Tooltip title={translation('appLayout.navbar_footer.social_media.code')}>
          <IconButton aria-label='Repository-URL' sx={{ color: 'palette.text.primary' }} onClick={() => navigateOrReplace(REPO_URL)}>
            <BsCode />
          </IconButton>
        </Tooltip>

        <Tooltip title={translation('appLayout.navbar_footer.social_media.youtube')}>
          <IconButton aria-label='YouTube' sx={{ color: 'palette.text.primary' }} onClick={() => navigateOrReplace(YOUTUBE_URL)}>
            <FaYoutube />
          </IconButton>
        </Tooltip>

        <Tooltip title={translation('appLayout.navbar_footer.social_media.github')}>
          <IconButton aria-label='GitHub' sx={{ color: 'palette.text.primary' }} onClick={() => navigateOrReplace(GITHUB_URL)}>
            <FaGithub />
          </IconButton>
        </Tooltip>

        <Tooltip title={translation('appLayout.navbar_footer.social_media.linkedin')}>
          <IconButton aria-label='LinkedIn' sx={{ color: 'palette.text.primary' }} onClick={() => navigateOrReplace(LINKEDIN_URL)}>
            <FaLinkedin />
          </IconButton>
        </Tooltip>
      </Center>

      <Center props={{ marginBottom: '1em' }}>
        <Typography fontSize='0.85em'>
          {new Date().getFullYear()}
        </Typography>
      </Center>
    </div>
  );
};
