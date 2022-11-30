import React from 'react';
import { BodyRoot } from '../src/components/custom';
import { Footer } from '../src/components/footer';
import NavBar from '../src/components/navBar';
import About from '../src/components/about';

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BodyRoot>
        <About />
      </BodyRoot>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
