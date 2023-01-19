import styled from 'styled-components';
import { BiX } from 'react-icons/bi';
import Flex from '../../Flex/Flex';
import Margin from '../../Margin/Margin';
// import { BsPersonFill } from 'react-icons/bs';
import Typography from '../../Typography/Typography';
// import theme from '../../assets/theme/Theme';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

const MenuWrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
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

const MenuBar = () => (
  <Background>
    <MenuWrapper>
      <Margin height={12} />
      <Flex flexCenter>
        <Margin width={229} />
        <BiX size='31px' style={{ cursor: 'pointer' }} />
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
  </Background>
);

export default MenuBar;
