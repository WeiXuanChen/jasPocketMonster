/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { getUserList, createUser, deleteUser, login } from '../api/user';

import Footer from '../App/Footer';
import Content from '../App/Content';
import Auth from '../components/auth';

const MainLayout = () => {
  const [openAuthModal, setShowAuthModal] = useState(true);
  const [showLoginError, setShowLoginError] = useState(false);

  const getUserListMuta = useMutation(getUserList);
  const userList = getUserListMuta.data;

  // const createUserMuta = useMutation(createUser);
  // const createUserResult = createUserMuta?.data?.data?.data;

  // const deleteUserMuta = useMutation(deleteUser);
  // const deleteUserResult = deleteUserMuta?.data?.data?.data;

  const loginMuta = useMutation((payload) => {
    const result = login(payload);
    return result;
  });
  const loginResult = loginMuta?.data?.data;

  useEffect(() => {
    // getUserListMuta.mutate();
    // deleteUserMuta.mutate({ _id: '618fc355a3df351ecc2ca458' });
    // createUserMuta.mutate({
    //   userId: '',
    //   userName: "",
    //   userPassword: "",
    // });
  }, []);

  useEffect(() => {
    if (loginResult && !loginMuta.isLoading) {
      if (loginResult?.login === 'success') {
        window.sessionStorage.setItem('userName', loginResult?.userName);
        setShowAuthModal(false);
      } else {
        setShowLoginError(true);
      }
    }
  }, [loginMuta.isLoading]);

  return (
    <>
      {window.sessionStorage.getItem('userName') ? (
        <div style={{ overflow: 'hidden' }}>
          <div>
            <Content />
          </div>
          {/* <Footer /> */}
        </div>
      ) : (
        <Auth
          isOpen={openAuthModal}
          handleClick={(data) => loginMuta.mutate(data)}
          showError={showLoginError}
        />
      )}
    </>
  );
};

export default MainLayout;
