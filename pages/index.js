import React from 'react';
import Head from 'next/head';

import Banner from '../src/components/banner';
import NavBar from '../src/components/navBar';
import Services from '../src/components/ourServices';
import RecentWork from '../src/components/ourWork';
import Testimonials from '../src/components/testimonials';
import Technologies from '../src/components/technologies';
import Footer from '../src/components/footer';
import Process from '../src/components/ourProcess';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clients from '../src/components/ourClients';
import Consultation from '../src/components/consulation';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ConovoTech | Landing Page</title>
      </Head>
      <Banner />
      <Services />
      <Process />
      <RecentWork />
      <Clients />
      <Testimonials />
      <Technologies />
      <Consultation />
    </React.Fragment>
  );
};

export default Home;
