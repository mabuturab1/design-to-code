import React from 'react';
import About from '../src/components/about';
import { SectionRoot } from '../src/components/custom';

const AboutUs = () => {
  return (
    <SectionRoot mt={2} className='sectionGap' sx={{ position: 'relative' }}>
      <About />
    </SectionRoot>
  );
};

export default AboutUs;
