import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

const NavFootrLayout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default NavFootrLayout;
