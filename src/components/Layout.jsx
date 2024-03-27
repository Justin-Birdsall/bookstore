
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children, breadcrumbs}) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
