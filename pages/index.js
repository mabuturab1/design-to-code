import React from 'react';
import Banner from '../src/components/banner';
import NavBar from '../src/components/navBar';
import Services from '../src/components/ourServices';
import RecentWork from '../src/components/ourWork';
import Testimonials from '../src/components/testimonials';
import Technologies from '../src/components/technologies';
import Feedbackform from '../src/components/feedback';
import { BodyRoot } from '../src/components/custom';
import { Footer } from '../src/components/footer';
import Process from '../src/components/ourProcess';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clients from '../src/components/ourClients';

import NavigationIcon from '@mui/icons-material/Navigation';

import { IconButton } from '@mui/material';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BodyRoot>
        <Banner />
        <Services />
        {/* <AboutUs /> */}
        <Process />
        <RecentWork />
        <Clients />
        <Testimonials />
        <Technologies />
        <Feedbackform />
      </BodyRoot>
      <Footer />
      {/* <IconButton sx={{ width: 30, height: 30 }}>
        <NavigationIcon />
      </IconButton> */}
    </React.Fragment>
  );
};

export default Home;
