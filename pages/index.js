import React from 'react';
import Head from 'next/head';

import Banner from 'components/banner';
import Services from 'components/ourServices';
import RecentWork from 'components/ourWork';
import Testimonials from 'components/testimonials';
import Technologies from 'components/technologies';
import Process from 'components/ourProcess';
import Clients from 'components/ourClients';
import Consultation from 'components/consulation';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurJourney from 'components/ourJourney';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ConovoTech | Web & Mobile App Development Services</title>
      </Head>
      <Banner />
      <Services />
      <Process />
      <OurJourney />
      <RecentWork />
      <Clients />
      <Testimonials />
      <Technologies />
      <Consultation />
    </React.Fragment>
  );
};

export default Home;
