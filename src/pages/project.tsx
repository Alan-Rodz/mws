import { Card, CardContent, Chip, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';

import { navigateOrReplace } from '@/route';
import { BORDER_RADIUS, GITHUB_URL } from '@/ui/constant';
import { Center } from '@/ui/container/Center';
import { Flex } from '@/ui/container/Flex';
import { useLanguage } from '@/ui/hook/useLanguage';
import { useIsMdOrBigger } from '@/ui/hook/useIsMdOrBigger';

// ********************************************************************************
// == Constant ====================================================================
const projects = [
  { label: 'Notebook', href: 'https://github.com/Alan-Rodz/notebook', imgs: [{ src: '/img/project/notebook.png', big: { width: 800, height: 400 }, small: { width: 325, height: 160 } }], name: 'notebook' },
  { label: 'PM-DevTool', href: 'https://github.com/Alan-Rodz/pm-devtool', imgs: [{ src: '/img/project/pm_devtool.png', big: { width: 800, height: 400 }, small: { width: 325, height: 160 } }], name: 'pm_devtool' },
  { label: 'Evnt', href: 'https://evnt-gilt.vercel.app/', imgs: [{ src: '/img/project/evnt.png', big: { width: 800, height: 250 }, small: { width: 300, height: 160 } }], name: 'evnt' },
  { label: 'Clipboard Injector', href: 'https://clipboard-injector.vercel.app/', imgs: [{ src: '/img/project/clipboard_injector.png', big: { width: 800, height: 400 }, small: { width: 325, height: 160 } }], name: 'clipboard_injector' },
  { label: 'SVG - PoC', href: 'https://github.com/Alan-Rodz/svg-poc', imgs: [{ src: '/img/project/svg_poc.png', big: { width: 800, height: 400 }, small: { width: 325, height: 160 } }], name: 'svg_poc' },
  { label: 'SGB', href: 'https://github.com/Alan-Rodz/SGBReact', imgs: [{ src: '/img/project/sgb.png', big: { width: 800, height: 400 }, small: { width: 300, height: 160 } }], name: 'sgb' },
  { label: 'NatureBase', href: 'https://github.com/Alan-Rodz/NatureBase', imgs: [{ src: '/img/project/naturebase.png', big: { width: 800, height: 400 }, small: { width: 300, height: 160 } }], name: 'naturebase' },
  { label: 'LeoBot', href: 'https://www.facebook.com/cdcelcuceiudg/', imgs: [{ src: '/img/project/leobot.png', big: { width: 800, height: 250 }, small: { width: 300, height: 160 } }], name: 'leobot' },
  { label: 'CloudQuiz', href: 'https://github.com/Alan-Rodz/pm-devtool', imgs: [{ src: '/img/project/cloudquiz.png', big: { width: 400, height: 250 }, small: { width: 300, height: 200 } }], name: 'cloudquiz' },
];

// == Component ===================================================================
const Projects: NextPage = () => {
  const isMdOrBigger = useIsMdOrBigger();
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <Flex props={{ flexDirection: 'column' }}>
      <Flex props={{ justifyContent: 'space-between' }}>
        <Typography fontWeight='bold' variant='h4'>Projects</Typography>
        <Tooltip title={translation('pages.projects.github')}>
          <IconButton aria-label='GitHub' sx={{ color: 'palette.text.primary' }} onClick={() => navigateOrReplace(GITHUB_URL)}>
            <FaGithub />
          </IconButton>
        </Tooltip>
      </Flex>
      {
        projects.map((obj, idx) => (
          <Card elevation={8} key={idx}>
            <CardContent>
              <Flex props={{ flexDirection: isMdOrBigger ? 'row' : 'column' }}>
                {
                  isMdOrBigger ?
                    idx % 2 === 0
                      ? <><Details obj={obj} /><Images obj={obj} /></>
                      : <><Images obj={obj} /><Details obj={obj} /></>
                    : <><Details obj={obj} /><Images obj={obj} /></>
                }
              </Flex>
            </CardContent>
          </Card>
        ))
      }
    </Flex>
  );
};

// ================================================================================
const Details: FC<{ obj: typeof projects[number]; }> = ({ obj }) => {
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  return (
    <div style={{ flex: '1', flexBasis: '40%' }}>
      <Typography fontWeight='bold' variant='h5'>{obj.label}</Typography>
      <List>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l1`)}</Typography></ListItem>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l2`)}</Typography></ListItem>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l3`)}</Typography></ListItem>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l4`)}</Typography></ListItem>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l5`)}</Typography></ListItem>
        <ListItem><Typography>{translation(`pages.projects.${obj.name}.l6`)}</Typography></ListItem>
        <ListItem><Link href={obj.href}><Chip clickable label={translation('common.see_more')} variant='outlined' /></Link></ListItem>
      </List>
    </div>
  );
};

// ================================================================================
const Images: FC<{ obj: typeof projects[number]; }> = ({ obj }) => {
  const isMdOrBigger = useIsMdOrBigger();

  // -- UI ------------------------------------------------------------------------
  return (
    <Center props={{ flex: '1', flexBasis: '60%' }}>
      {obj.imgs.map((img, idx) => (
        <Image
          alt='project-img'
          height={isMdOrBigger ? img.big.height : img.small.height}
          key={idx}
          src={img.src}
          style={{ borderRadius: BORDER_RADIUS }}
          width={isMdOrBigger ? img.big.width : img.small.width}
        />
      ))}
    </Center>
  );
};

// == Export ======================================================================
export default Projects;
