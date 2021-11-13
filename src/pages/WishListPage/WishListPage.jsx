import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { AddCircle } from '@styled-icons/fluentui-system-regular'
// import { getEventList, createEvent } from '../../api/user';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AddItemModal from './components/AddItemModal';

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
  height: 10vh;
`;


const WishListPage = () => {
  const [showAddModal, setOpenAddModal] = useState(false);
  const [itemList, setItemList] = useState([]);

  // const getEventListMuta = useMutation(getEventList);
  // const eventList = getEventListMuta?.data?.data?.data;
  // console.log('[eventList]: ', eventList);

  // // eslint-disable-next-line no-unused-vars
  // const createEventMuta = useMutation(createEvent);

  const addItem = (item) => {
    setOpenAddModal(false);
    itemList.push(item);
    setItemList(itemList);
  }

  useEffect(() => {
    // createEventMuta.mutate({
    //   id: '000000',
    //   name: 'event1',
    // });
    // getEventListMuta.mutate();
  }, []);

  const colorList = ['#554A35', '#E10032', '#FFC363', '#1C4508'];

  return (
    <>
      <Header title="Wish List" />
      <Container>
        {
          itemList.map((el, index) => (
            <ListItem text={el} color={colorList[index % 4]} />
          ))
        }
        <StyledButton>
          <AddCircle size="100" color="#54627B" onClick={() => setOpenAddModal(true)}/>
        </StyledButton>
      </Container>
      <AddItemModal isOpen={showAddModal} onSave={(e) => addItem(e)} onClose={() => setOpenAddModal(false)}/>
    </>
  );
};

export default WishListPage;
