import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled,
  Box,
  Avatar,
  Link,
  alpha,
} from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { LinkExt } from '../custom';

const CardExt = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  boxSizing: 'border-box',
  objectFit: 'contain',
  paddingBottom: '1rem',
  transition: 'transform .3s',
  '& img': {
    borderRadius: 15,
  },
  '& .blogImg': {
    width: '100%',
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
    '&:after, a': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '.5rem',
      opacity: 0,
      transition: 'opacity .3s',
    },
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: alpha(theme.palette.primary.dark, 0.8),
      zIndex: 1,
      color: '#fff',
      textDecoration: 'none',
    },
  },
  '&:hover': {
    transform: 'translateY(-1rem)',
    '& .blogImg:after, a': {
      opacity: 1,
    },
  },
}));

const BlogCard = (props) => {
  const { title, publishedOn, blogImg, author } = props;
  return (
    <CardExt>
      <div className='blogImg'>
        <CardMedia component='img' alt={title.split(' ')[0]} image={blogImg} />
        <Link href={`/blog/${title}`} variant='subtitle1'>
          Read Article
          <EastIcon
            sx={{ marginLeft: 1.5, color: '#fff', fontSize: '1.6rem' }}
          />
        </Link>
      </div>
      <Box my={3} display='flex' flexDirection='column' gap={2}>
        <Box display='flex' alignItems='center' flexWrap='nowrap' gap={2}>
          <Avatar
            alt={author.name}
            src={author.img}
            sx={{ width: 48, height: 48 }}
          />
          <Box
            display='flex'
            justifyContent='space-between'
            flexWrap='nowrap'
            gap={1}
            flex='1'
          >
            <Box>
              <Typography variant='subtitle2'>{author.name}</Typography>
              <Typography variant='body2' color='textSecondary'>
                {author.bio}
              </Typography>
            </Box>
            <Typography
              variant='caption'
              color='textSecondary'
              sx={{ minWidth: 75 }}
            >
              {publishedOn}
            </Typography>
          </Box>
        </Box>
      </Box>
      <LinkExt variant='h5' color='text.secondary' component='div'>
        {title}
      </LinkExt>
    </CardExt>
  );
};

export default BlogCard;
