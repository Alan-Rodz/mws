// ********************************************************************************
// == Constant ====================================================================
export const WEBSITE_OWNER = 'Alan Rodz',
             WEBSITE_NAME = 'alanrodz.com';

export const REPO_URL = 'https://github.com/Alan-Rodz/mws',
             YOUTUBE_URL = 'https://www.youtube.com/@LaGemaArtificial',
             GITHUB_URL = 'https://github.com/Alan-Rodz',
             LINKEDIN_URL = 'https://www.linkedin.com/in/alan-rodriguez-16b074192/';

export const BORDER_RADIUS = '16px';

// == Class =======================================================================
export enum AOSAnimation {
  FADE_UP = 'fade-up',
  FADE_DOWN = 'fade-down',
  FADE_LEFT = 'fade-left',
  FADE_RIGHT = 'fade-right',
}

// == Class =======================================================================
export const appClasses = {
  animation: {
    hoverable: (themeName: 'light' | 'dark') => `hoverable_${themeName}`,
    scalable: 'scalable',
  },
};

// == Color =======================================================================
export const appColors = {
  WHITE: '#FFFFFF',
  BLACK: '#121212',
};
