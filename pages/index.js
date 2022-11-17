import React from 'react';
import Banner from '../src/components/Banner';
import { NavBar } from '../src/components/navBar';
import Services from '../src/components/services';
import RecentWork from '../src/components/recentWork';
import Testimonials from '../src/components/testimonials';
import Technologies from '../src/components/technologies';
import Feedbackform from '../src/components/feedbackform';
import { BodyRoot } from '../src/components/RootStyles';
import Footer from '../src/components/footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BodyRoot>
        <Banner />
        <Services />
        {/* <OurProcess /> */}
        <RecentWork />
        <Testimonials />
        <Technologies />
        <Feedbackform />
      </BodyRoot>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
