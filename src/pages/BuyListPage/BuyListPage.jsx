import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { getBuyList } from '../../api/user';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 3vh 5vw;
  overflow: auto;
  height: 87vh;
`;

const colorList = ['#554A35', '#E10032', '#FFC363', '#1C4508'];

const EventListPage = () => {
  const userName = window.sessionStorage.getItem('userName');

  const getBuyListMuta = useMutation((payload) => {
    const result = getBuyList(payload);
    return result;
  });
  const buyList = getBuyListMuta?.data?.data?.data || [];
  console.log('[buyList]: ', buyList);

  useEffect(() => {
    getBuyListMuta.mutate({ buyerName: userName });
  }, []);

  return (
    <>
      <Header title="Buy List" />
      <Container>
        {
          buyList.map((el, index) => (
            <ListItem 
              text={el} color={colorList[index % 4]} 
              showDelete={false}
            />
          ))
        }
      </Container>
    </>
  );
};

export default EventListPage;
