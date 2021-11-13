import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
// import { getEventList } from '../../api/user';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1vh 5vw;
`;

const StyledButton = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
`;


const EventListPage = () => {
  // const getEventListMuta = useMutation(getEventList);
  // const eventList = getEventListMuta?.data?.data?.data;
  // console.log('[eventList]: ', eventList);

  // useEffect(() => {
  //   // getEventListMuta.mutate();
  // }, []);

  const colorList = ['#554A35', '#E10032', '#FFC363', '#1C4508'];
  const itemList = [];

  return (
    <>
      <Header title="Buy List" />
      <Container>
        {
          itemList.map((el, index) => (
            <ListItem text={el} color={colorList[index % 4]} />
          ))
        }
      </Container>
    </>
  );
};

export default EventListPage;
