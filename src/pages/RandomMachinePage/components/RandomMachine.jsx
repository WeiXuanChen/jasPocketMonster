import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { Question } from "@styled-icons/icomoon";
// import { Place } from "@styled-icons/material";
// import { Restaurant } from "@styled-icons/boxicons-regular";

const Container = styled.div`
  width: 100px;
  background-color: #fbfd63;
  padding: 10px;
  width: 80vw;
  margin: 25vh 10vw;
  height: 25vh;
`;

// const LoadingContainer = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// const LoadingPic = styled.div`
//   width: 80px;
//   height: 80px;
//   display: inline-block;
//   position: relative;
//   &:after {
//     content: ' ';
//     display: block;
//     border-radius: 50%;
//     width: 0;
//     height: 0;
//     margin: 8px;
//     box-sizing: border-box;
//     border: 32px solid #cef;
//     border-color: #ef85a9 transparent #cef transparent;
//     animation: lds-hourglass 1.2s infinite;
//   }
//   @keyframes lds-hourglass {
//     0% {
//       transform: rotate(0);
//       animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     }
//     50% {
//       transform: rotate(900deg);
//       animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     }
//     100% {
//       transform: rotate(1800deg);
//     }
//   }
// `;

const Block = styled.div`
  width: 60vw;
  height: 14vh;
  margin: 4vh auto 1.5vh;
  background-color: white;
  text-align: center;
  line-height: 14vh;
  border-radius: 10px;
  color: #79858e;
  font-size: 4vh;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  width: 40vw;
  height: 5vh;
  margin: auto;
  background-color: white;
  color: #79858e;
  border: 0px;
  border-radius: 5px;
  line-height: 5vh;
  cursor: pointer;
  font-size: 3.5vh;
`;

const RandomMachine = () => {
  const [randomText, setRandomText] = useState('啊 要吃什麼？');
  const [isRun, setIsRun] = useState(false);
  const [ranInterval, setRanInterval] = useState();
  const nameList = [
    '牛肉麵',
    '拉麵',
    '生魚片',
    '早午餐',
    '義大利麵',
    '火鍋',
    '燒臘',
    '台式小吃',
    '輕食沙拉',
  ];

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
      {/* <LoadingContainer>
        <LoadingPic />
      </LoadingContainer> */}
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
