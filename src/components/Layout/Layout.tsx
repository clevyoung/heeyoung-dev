import React, { useState } from 'react';
import { Global } from '@emotion/react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { styles } from './styles';

const Layout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Global styles={styles} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
