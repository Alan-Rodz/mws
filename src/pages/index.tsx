import { Card, CardContent, Chip, Divider, List, ListItem, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CSSProperties } from 'react';

import { appColors, AOSAnimation, appClasses } from '@/ui/constant';
import { Center } from '@/ui/container/Center';
import { Flex } from '@/ui/container/Flex';
import { useAppTheme } from '@/ui/hook/useAppTheme';
import { useIsMdOrBigger } from '@/ui/hook/useIsMdOrBigger';
import { useLanguage } from '@/ui/hook/useLanguage';

const SinglePenguin = dynamic(() => import('../ui/scene/SinglePenguin'), { ssr: false });

// ********************************************************************************
// == Constant ====================================================================
const divProps: Partial<CSSProperties> = { alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '1em', marginTop: '1em' };

const skills = [
  { title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { title: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { title: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { title: 'React', href: 'https://reactjs.org/' },
  { title: 'NextJS', href: 'https://nextjs.org/' },
  { title: 'NodeJS', href: 'https://nodejs.org/' },
  { title: 'Python', href: 'https://www.python.org/' },
  { title: 'SupaBase', href: 'https://supabase.io/' },
],
  libraries = [
    { title: 'ChakraUI', href: 'https://chakra-ui.com/' },
    { title: 'ProseMirror', href: 'https://prosemirror.net/' },
    { title: 'CodeMirror', href: 'https://codemirror.net/' },
    { title: 'MaterialUI', href: 'https://material-ui.com/' },
    { title: 'Prisma', href: 'https://www.prisma.io/' },
    { title: 'RxJS', href: 'https://rxjs.dev/' },
  ],
  csps = [
    { title: 'AWS', href: 'https://aws.amazon.com/' },
    { title: 'Azure', href: 'https://azure.microsoft.com/en-us/' },
    { title: 'Google Cloud Platform', href: 'https://cloud.google.com/' },
    { title: 'Vercel Cloud', href: 'https://vercel.com/' },
  ],
  tools = [
    { title: 'Git', href: 'https://git-scm.com/' },
    { title: 'GitHub', href: 'https://github.com/' },
    { title: 'GitLab', href: 'https://about.gitlab.com/' },
    { title: 'Linux', href: 'https://www.linux.org/' },
  ],
  previousExperience = [
    { title: 'C++', href: 'https://isocpp.org/' },
    { title: 'Clojure', href: 'https://clojure.org/' },
    { title: 'Dart', href: 'https://dart.dev/' },
    { title: 'Java', href: 'https://www.java.com/' },
    { title: 'Rust', href: 'https://www.rust-lang.org/' },
  ],
  certs = [
    { title: 'AWS Developer Associate', href: 'https://aws.amazon.com/certification/certified-developer-associate/' },
    { title: 'Terraform Associate', href: 'https://www.hashicorp.com/certification/terraform-associate' },
    { title: 'Google Cloud Practitioner', href: 'https://cloud.google.com/certification' },
    { title: 'AWS Cloud Practitioner', href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
    { title: 'Microsoft Azure Fundamentals', href: 'https://docs.microsoft.com/en-us/learn/certifications/exams/az-900' },
  ];

// == Component ===================================================================
const LandingPage = () => {
  const isMdOrBigger = useIsMdOrBigger();
  const { theme } = useAppTheme();
  const { translation } = useLanguage();

  // -- UI ------------------------------------------------------------------------
  const flexDir = isMdOrBigger ? 'row' : 'column';
  return (
    <div>
      {/* == About Me ========================================================= */}
      <div>
        <Flex props={{ flexDirection: flexDir, padding: '1em' }}>
          <Flex props={{ flex: '1', flexBasis: '50%' }}>
            <div data-aos={AOSAnimation.FADE_RIGHT} style={{ display: 'flex', flexDirection: 'column', gap: '2em', textAlign: 'justify' }}>
              <Typography fontSize='1.25em' fontWeight='bold'>{translation('pages.home.about_me')}</Typography>
              <Typography>
                {translation('pages.home.intro')}
              </Typography>

              <Card elevation={8}>
                <CardContent>
                  <Typography>{translation('pages.home.skills')}</Typography>
                  <div style={{ ...divProps }}>
                    {skills.map((obj, idx) => (<Link href={obj.href} key={idx}><Chip clickable label={obj.title} variant='outlined' /></Link>))}
                  </div>
                </CardContent>
              </Card>

              <Card elevation={8}>
                <CardContent>
                  <Typography>{translation('pages.home.libraries')}</Typography>
                  <div style={{ ...divProps }}>
                    {libraries.map((obj, idx) => (<Link href={obj.href} key={idx}><Chip clickable label={obj.title} variant='outlined' /></Link>))}
                  </div>
                </CardContent>
              </Card>

              <Card elevation={8}>
                <CardContent>
                  <Typography>{translation('pages.home.csps')}</Typography>
                  <div style={{ ...divProps }}>
                    {csps.map((obj, idx) => (<Link href={obj.href} key={idx}><Chip clickable label={obj.title} variant='outlined' /></Link>))}
                  </div>
                </CardContent>
              </Card>


              <Card elevation={8}>
                <CardContent>
                  <Typography>{translation('pages.home.tools')}</Typography>
                  <div style={{ ...divProps }}>
                    {tools.map((obj, idx) => (<Link href={obj.href} key={idx}><Chip clickable label={obj.title} variant='outlined' /></Link>))}
                  </div>
                </CardContent>
              </Card>

              <Card elevation={8}>
                <CardContent>
                  <Typography>{translation('pages.home.other_languages')}</Typography>
                  <div style={{ ...divProps }}>
                    {previousExperience.map((obj, idx) => (<Link href={obj.title} key={idx}><Chip clickable label={obj.title} variant='outlined' /></Link>))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Flex>
          <Center props={{ flex: '1', flexBasis: '50%', flexDirection: 'column' }}>
            <SinglePenguin />
          </Center>
        </Flex>
      </div>


      {/* == Experience ======================================================= */}
      <Divider color={theme.name === 'dark' ? appColors.WHITE : appColors.BLACK} />
      <Flex props={{ flexDirection: 'column' }}>
        <Typography fontSize='1.25em' fontWeight='bold'>{translation('pages.home.experience.experience')}</Typography>
        <Card elevation={8}>
          <CardContent>
            <Typography>{translation('pages.home.experience.w1.l1')}</Typography>
            <Typography>{translation('pages.home.experience.w1.l2')}</Typography>
            <Flex props={{ flexDirection: isMdOrBigger ? 'row' : 'column' }}>
              <List>
                {
                  [3, 4, 5, 6, 7, 8].map((index) => (
                    <ListItem key={index}>
                      <Typography textAlign='justify'>{translation(`pages.home.experience.w1.l${index}`)}</Typography>
                    </ListItem>
                  ))
                }
              </List>
            </Flex>
          </CardContent>
        </Card>
      </Flex>

      {/* == Certs, Education, Other skills ======================================= */}
      <Divider color={theme.name === 'dark' ? appColors.WHITE : appColors.BLACK} />
      <Flex props={{ flexDirection: flexDir, justifyContent: 'space-evenly' }}>

        <Card elevation={8}>
          <CardContent>
            <Center props={{ flexDirection: 'column', width: '300px' }}>
              <List sx={{ textAlign: 'center' }}>
                <Typography fontSize='1.25em' fontWeight='bold'>{translation('pages.home.certs')}</Typography>
                {certs.map((obj, idx) => (<ListItem key={idx}><Link href={obj.href}><Typography className={`${appClasses.animation.hoverable(theme.name)}`}>{obj.title}</Typography></Link></ListItem>))}
              </List>
            </Center>
          </CardContent>
        </Card>

        <Card elevation={8}>
          <CardContent>
            <Center props={{ flexDirection: 'column', width: '300px' }}>
              <List sx={{ textAlign: 'center' }}>
                <Typography fontSize='1.25em' fontWeight='bold'>{translation('pages.home.education.education')}</Typography>
                {
                  [1, 2, 3].map((idx) => (
                    <ListItem key={idx}>
                      <Typography>{translation(`pages.home.education.l${idx}`)}</Typography>
                    </ListItem>
                  ))
                }
              </List>
            </Center>
          </CardContent>
        </Card>

        <Card elevation={8}>
          <CardContent>
            <Center props={{ flexDirection: 'column', width: '300px' }}>
              <List sx={{ textAlign: 'center' }}>
                <Typography fontSize='1.25em' fontWeight='bold'>{translation('pages.home.other_skills.other_skills')}</Typography>
                {
                  [1, 2, 3, 4].map((idx) => (
                    <ListItem key={idx}>
                      <Typography>{translation(`pages.home.other_skills.l${idx}`)}</Typography>
                    </ListItem>
                  ))
                }
              </List>
            </Center>
          </CardContent>
        </Card>
      </Flex>
    </div>
  );
};

// == Export ======================================================================
export default LandingPage;
