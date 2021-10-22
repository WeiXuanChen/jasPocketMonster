import React, { useState } from 'react';

import Header from '../App/Header';
import Footer from '../App/Footer';
import Content from '../App/Content';
import Auth from '../components/auth';

const MainLayout = () => {
  const [openAuthModal, setShowAuthModal] = useState(true);
  return (
    <>
      <div>
        <div style={{ height: '6vh' }}>
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <Auth
        isOpen={openAuthModal}
        handleClick={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default MainLayout;
