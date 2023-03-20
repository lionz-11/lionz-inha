import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../../../component/Flex/Flex';
import Typography from '../../../component/Typography/Typography';
import MainBtn1 from '../images/mainBtn1.png';
import MainBtn2 from '../images/mainBtn2.png';
import MainBtn3 from '../images/mainBtn3.png';

const ButtonWrapper = styled(Flex)`
  width: 206px;
  height: 432px;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  width: 206px;
  height: 132px;
  padding-top: 20px;
  padding-left: 22px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.skyBlue};
  border-radius: 10px;
  ${(props) => props.theme.box}
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
`;

const NewAlert = styled(Typography)`
  font-family: 'pretendard-regular';
  font-size: 12px;
  position: relative;
  top: 42px;
`;

const StyledMainBtn1 = styled.img`
  position: relative;
  top: -50px;
  left: 75px;
`;

const StyledMainBtn2 = styled.img`
  position: relative;
  top: -40px;
  left: 75px;
`;

const StyledMainBtn3 = styled.img`
  position: relative;
  top: -65px;
  left: 65px;
`;

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper flexCenter column>
      <StyledButton>
        <Typography sideContentSmall color='darkGray'>
          오늘 뭐 하지?
        </Typography>
        <Typography buttonText>일정</Typography>
        <NewAlert color='pointRed'>new</NewAlert>
        <StyledMainBtn1 src={MainBtn1} />
      </StyledButton>
      <StyledButton onClick={() => navigate('/homework-list')}>
        <Typography sideContentSmall color='darkGray'>
          마감이 다가온다..
        </Typography>
        <Typography buttonText>과제</Typography>
        <NewAlert color='pointRed'>new</NewAlert>
        <StyledMainBtn2 src={MainBtn2} />
      </StyledButton>
      <StyledButton>
        <Typography sideContentSmall color='darkGray'>
          누구더라?
        </Typography>
        <Typography buttonText>연락처</Typography>
        <NewAlert color='pointRed'>new</NewAlert>
        <StyledMainBtn3 src={MainBtn3} />
      </StyledButton>
    </ButtonWrapper>
  );
};
export default Buttons;
