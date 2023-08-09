import React from 'react';
import About from 'components/about';
import { SectionRoot } from 'components/custom';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ConovoTech | About-Us</title>
      </Head>
      <SectionRoot mt={2} className='sectionGap' sx={{ position: 'relative' }}>
        <About />
      </SectionRoot>
    </React.Fragment>
  );
};

export default AboutUs;
