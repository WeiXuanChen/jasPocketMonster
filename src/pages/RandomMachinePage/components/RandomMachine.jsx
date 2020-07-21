import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { Question } from "@styled-icons/icomoon";
// import { Place } from "@styled-icons/material";
// import { Restaurant } from "@styled-icons/boxicons-regular";

const Container = styled.div`
  width: 100px;
  background-color: #fbfd63;
  padding: 10px;
`;

const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const LoadingPic = styled.div`
  width: 80px;
  height: 80px;
  display: inline-block;
  position: relative;
  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #cef;
    border-color: #ef85a9 transparent #cef transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

const Block = styled.div`
  width: 70px;
  height: 50px;
  margin: 10px auto;
  background-color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  color: #79858e;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 20px;
  margin: auto;
  background-color: white;
  color: #79858e;
  border: 0px;
  border-radius: 5px;
  line-height: 20px;
  cursor: pointer;
`;

const RandomMachine = () => {
  const [randomText, setRandomText] = useState('123');
  const [isRun, setIsRun] = useState(false);
  const [ranInterval, setRanInterval] = useState();
  const nameList = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH'];

  useEffect(() => {
    if (isRun === true) {
      console.log('[run]:');
      setRanInterval(
        setInterval(() => {
          let index = Math.floor(Math.random() * nameList.length);
          if (index === nameList.length) index -= 1;
          console.log('[index]: ', index);
          setRandomText(nameList[index]);
        }, 500)
      );
    } else {
      console.log('[Clear]');
      clearInterval(ranInterval);
    }
  }, [isRun]);
  return (
    <Container>
      <LoadingContainer>
        <LoadingPic />
      </LoadingContainer>
      <Block>{randomText}</Block>
      <ButtonContainer>
        <StyledButton
          onClick={() => {
            setIsRun(!isRun);
          }}
        >
          {isRun ? 'Stop' : 'Start'}
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default RandomMachine;
