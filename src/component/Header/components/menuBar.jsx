import styled, { css } from 'styled-components';
import { BiX } from 'react-icons/bi';
import Flex from '../../Flex/Flex';
import Margin from '../../Margin/Margin';
import Typography from '../../Typography/Typography';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
  ${(props) =>
    !props.menuButton &&
    css`
      background: none;
      backdrop-filter: blur(0);
      z-index: -1;
    `}
`;

const MenuWrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
  z-index: 2;
  transition: 0.5s;
  ${(props) =>
    !props.menuButton &&
    css`
      right: -300px;
    `}
`;

const StyledTypo = styled(Typography)`
  width: 250px;
  height: 50px;
  padding-left: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  line-height: 50px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${(props) => props.theme.colors.skyBlue};
    transition: 0.5s;
  }
`;

const MenuBar = ({ menuButton, menuButtonClicked }) => (
  <>
    <Background menuButton={menuButton} onClick={menuButtonClicked} />
    <MenuWrapper menuButton={menuButton}>
      <Margin height={12} />
      <Flex flexCenter>
        <Margin width={229} />
        <BiX size='31px' style={{ cursor: 'pointer' }} onClick={menuButtonClicked} />
      </Flex>
      <Margin height={52} />
      <Flex column>
        <StyledTypo contentTitle>내 정보</StyledTypo>
        <StyledTypo contentTitle>일정</StyledTypo>
        <StyledTypo contentTitle>홍보</StyledTypo>
        <StyledTypo contentTitle>소모임</StyledTypo>
        <StyledTypo contentTitle>과제</StyledTypo>
        <StyledTypo contentTitle>연락처</StyledTypo>
      </Flex>
    </MenuWrapper>
  </>
);

export default MenuBar;
