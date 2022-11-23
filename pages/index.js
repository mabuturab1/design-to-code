import React from 'react';
import Banner from '../src/components/banner';
import { NavBar } from '../src/components/navBar';
import Services from '../src/components/ourServices';
import RecentWork from '../src/components/ourWork';
import Testimonials from '../src/components/testimonials';
import Technologies from '../src/components/technologies';
import Feedbackform from '../src/components/feedback';
import { BodyRoot } from '../src/components/custom';
import { Footer } from '../src/components/footer';
import Process from '../src/components/ourProcess';
import AboutUs from '../src/components/aboutUs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clients from '../src/components/ourClients';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BodyRoot>
        <Banner />
        <Services />
        <AboutUs />
        <Process />
        <RecentWork />
        <Clients />
        <Testimonials />
        <Technologies />
        <Feedbackform />
      </BodyRoot>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
