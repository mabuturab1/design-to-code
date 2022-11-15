import React from 'react';
import Banner from '../src/components/Banner';
import { NavBar } from '../src/components/navBar';
import PageContainer from '../src/components/PageContainer';
import Services from '../src/components/services';
import RecentWork from '../src/components/recentWork';
import OurProcess from '../src/components/process';

const Home = () => {
  return (
    <PageContainer>
      <NavBar />
      <Banner />
      <Services />
      {/* <OurProcess /> */}
      {/* <RecentWork /> */}
    </PageContainer>
  );
};

export default Home;
