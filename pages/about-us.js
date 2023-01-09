import React from 'react';
import About from 'components/about';
import { SectionRoot } from 'components/custom';

const AboutUs = () => {
  return (
    <SectionRoot mt={2} className='sectionGap' sx={{ position: 'relative' }}>
      <About />
    </SectionRoot>
  );
};

export default AboutUs;
