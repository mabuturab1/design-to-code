import {
  alpha,
  Avatar,
  Box,
  CardMedia,
  Link,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';

const Wrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  boxSizing: 'border-box',
  objectFit: 'contain',
  borderRadius: 15,
  overflow: 'hidden',
  color: '#fff',
  transition: 'transform .3s',
  '&:hover': {
    transform: 'translateY(-1rem)',
  },
}));

const BlogHeading = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
}));

const SpecCard = (props) => {
  const { title, author, publishedOn, blogImg } = props;
  return (
    <Link variant='h5' color='inherit' underline='none'>
      <Wrapper>
        <CardMedia component='img' alt={title.split(' ')[0]} image={blogImg} />
        <Box
          position='absolute'
          height='100%'
          width='100%'
          top='0'
          zIndex='2'
          sx={{
            backgroundColor: 'rgb(28 28 28 / 55%)',
          }}
        />
        <Box
          position='absolute'
          bottom={0}
          p={4}
          zIndex='4'
          sx={{
            backgroundImage:
              'linear-gradient(180deg, hsla(0, 0%, 35.29%, 0) 0%, hsla(0, 0%, 34.53%, 0.034375) 16.36%, hsla(0, 0%, 32.42%, 0.125) 33.34%, hsla(0, 0%, 29.18%, 0.253125) 50.1%, hsla(0, 0%, 24.96%, 0.4) 65.75%, hsla(0, 0%, 19.85%, 0.546875) 79.43%, hsla(0, 0%, 13.95%, 0.675) 90.28%, hsla(0, 0%, 7.32%, 0.765625) 97.43%, hsla(0, 0%, 0%, 0.8) 100%)',
          }}
        >
          <Typography variant='h5' color='inherit'>
            {title}
          </Typography>
          <Box mt={1} display='flex' alignItems='center' gap={2}>
            <Avatar
              alt={author.name}
              src={author.img}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant='subtitle2'>{author.name}</Typography>
              <Typography variant='subtitle2'>{publishedOn}</Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Link>
  );
};

export default SpecCard;
