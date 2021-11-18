import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { AddCircle } from '@styled-icons/fluentui-system-regular';
import { getWishList, updateUser } from '../../api/user';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AddItemModal from './components/AddItemModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 3vh 5vw;
  overflow: auto;
  height: 87vh;
`;

const StyledButton = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  height: 10vh;
`;

const colorList = ['#554A35', '#E10032', '#FFC363', '#1C4508'];

const WishListPage = () => {
  const userName = window.sessionStorage.getItem('userName');
  const [showAddModal, setOpenAddModal] = useState(false);
  const [itemList, setItemList] = useState([]);

  const getWishListMuta = useMutation((payload) => {
    const result = getWishList(payload);
    return result;
  });
  const wishList = getWishListMuta?.data?.data?.data;

  const updateUserMuta = useMutation(updateUser);
  // const updateUserResult = updateUserMuta?.data?.data?.data;

  const addItem = (item) => {
    setOpenAddModal(false);
    itemList.push(item);
    setItemList(itemList);
    // update wishList
    updateUserMuta.mutate({
      userName,
      wishList: itemList,
    });
  };

  const handleDeleteItem = (text) => {
    const newList = itemList.filter((el) => el !== text);
    setItemList(newList);
    updateUserMuta.mutate({
      userName,
      wishList: newList,
    });
  };

  useEffect(() => {
    getWishListMuta.mutate({ userName });
  }, []);

  useEffect(() => {
    if (wishList && !getWishListMuta.isLoading) {
      setItemList(wishList);
    }
  }, [getWishListMuta.isLoading]);


  return (
    <>
      <Header title="Wish List" />
      <Container>
        {itemList.map((el, index) => (
          <ListItem
            text={el}
            color={colorList[index % 4]}
            deleteItem={(text) => handleDeleteItem(text)}
          />
        ))}
        <StyledButton>
          <AddCircle
            size="100"
            color="#54627B"
            onClick={() => {
              console.log('[Click AddCircle]');
              setOpenAddModal(true);
            }}
          />
        </StyledButton>
      </Container>
      <AddItemModal
        isOpen={showAddModal}
        onSave={(e) => addItem(e)}
        onClose={() => setOpenAddModal(false)}
      />
    </>
  );
};

export default WishListPage;
