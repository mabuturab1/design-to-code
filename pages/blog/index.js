import { Typography, styled, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

import BlogCard from 'components/blog/blogCard';
import SpecCard from 'components/blog/specCard';
import { SectionRoot } from 'components/custom';

import { blogs } from 'data';

import EastIcon from '@mui/icons-material/East';

const BlogSectHeading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  marginTop: '3rem',
  '&:after': {
    content: '""',
    display: 'block',
    flex: 1,
    alignSelf: 'center',
    height: '.0625rem',
    marginLeft: '1.5rem',
    background: '#bfc4cc',
  },
}));

const LinkExt = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  marginInline: 'auto',
  gap: 5,
  marginTop: '2rem',

  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const Blog = () => {
  return (
    <SectionRoot className='sectionGap'>
      <BlogSectHeading variant='h4'>Top Articles</BlogSectHeading>
      <Grid mt={2} mb={7} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <motion.div
            animate={{
              y: [50, 0],
              x: [0, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 1.25,
              ease: 'easeInOut',
              delay: 0.25,
            }}
          >
            <SpecCard {...blogs[0]} />
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div
            animate={{
              y: [50, 0],
              x: [0, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 1.25,
              ease: 'easeInOut',
              delay: 0.25,
            }}
          >
            <SpecCard {...blogs[1]} />
          </motion.div>
        </Grid>
      </Grid>
      <BlogSectHeading variant='h4'>Recent Articles</BlogSectHeading>
      <Grid container spacing={4} mt={3}>
        {blogs.map((el) => (
          <Grid key={el.title} item xs={12} sm={6} md={4}>
            <BlogCard {...el} />
          </Grid>
        ))}
      </Grid>
      <LinkExt href='/' variant='subtitle1' color='primary'>
        More Articles
        <EastIcon sx={{ fontSize: 18, color: 'primary' }} />
      </LinkExt>
    </SectionRoot>
  );
};

export default Blog;
