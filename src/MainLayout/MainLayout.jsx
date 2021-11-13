import React, { useState } from 'react';

import Footer from '../App/Footer';
import Content from '../App/Content';
import Auth from '../components/auth';

const MainLayout = () => {
  const [openAuthModal, setShowAuthModal] = useState(true);
  return (
    <>
      <div>
        <div>
          <Content />
        </div>
        <Footer />
      </div>
      <Auth
        isOpen={openAuthModal}
        handleClick={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default MainLayout;
