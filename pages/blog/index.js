import { Typography, Box, styled, Grid, Link } from '@mui/material';
import React from 'react';
import BlogCard from '../../src/components/blog/blogCard';
import SpecCard from '../../src/components/blog/specCard';
import { BodyRoot, SectionRoot } from '../../src/components/custom';
import { Footer } from '../../src/components/footer';
import NavBar from '../../src/components/navBar';
import { blogs } from '../../src/data';
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
    <React.Fragment>
      <NavBar />
      <BodyRoot>
        <SectionRoot className='sectionGap'>
          <BlogSectHeading variant='h4'>Top Articles</BlogSectHeading>
          <Grid mt={2} mb={12} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SpecCard {...blogs[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SpecCard {...blogs[1]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SpecCard {...blogs[2]} />
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
      </BodyRoot>
      <Footer />
    </React.Fragment>
  );
};

export default Blog;
