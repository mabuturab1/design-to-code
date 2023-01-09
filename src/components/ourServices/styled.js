import { alpha, Box, Card, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const ServCardCont = styled(motion.div)(({ theme }) => ({
  marginTop: '4rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('md')]: {
    gap: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '2rem',
  },
}));

export const CardRoot = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  maxWidth: 340,
  height: 'auto',
  alignSelf: 'stretch',

  [theme.breakpoints.down('md')]: {
    maxWidth: 295,
  },
}));

export const Card_Sec_Root = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: '2rem',
  padding: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  // backgroundColor: alpha(theme.palette.primary.main, 0.1),
  // borderLeft: `5px solid ${theme.palette.primary.main}`,
  // boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0px 0px 0px 3px`,
  boxShadow:
    'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
}));

export const ContentList = styled('ul')(({ theme }) => ({
  margin: '0 auto',
  '& li': {
    listStyleType: 'none',
    position: 'relative',
    paddingLeft: 40,
    '&:not(:last-of-type)': {
      marginBottom: '1.5rem',
    },
  },
  '& svg': {
    position: 'absolute',
    color: theme.palette.primary.main,
    left: 0,
    top: 0,
  },
}));

export const IndustryVertiCard = styled('ul')(({ theme }) => ({
  backgroundImage: 'url("/static/images/t-bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0px 0px 40px #efefef',
  backgroundColor: '#fff',
  padding: 40,
  paddingRight: 0,
  '& li': {
    margin: '20px 0px',
    display: 'inline-block',
    listStyle: 'none',
    width: '32%',
    position: 'relative',
    '& span': {
      border: `2px solid ${theme.palette.primary.dark}`,
      background: 'transparent',
      borderRadius: 4,
      padding: '5px 8px',
      marginBottom: 20,
      fontSize: 12,
      fontWeight: 'bold',
      position: 'relative',
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      height: 25,
      width: 25,
      background: theme.palette.primary.main,
      borderRadius: '50%',
      marginLeft: '-14px',
      marginTop: '-10px',
    },
  },
}));

export const TabPanelCont = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: 600,
}));

export const TabLayoutCon = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  bgcolor: theme.palette.background.paper,
  display: 'flex',
  // width: '100%',

  '& > .MuiTabs-root': {
    flex: 1,
    flexShrink: 0,
  },
}));
