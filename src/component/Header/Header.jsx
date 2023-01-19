import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import MenuBar from './components/menuBar';

const Container = styled.div`
  width: 100%;
  max-width: 1213px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
  position: fixed;
  top: 0;
  ${(props) => props.theme.flex.flexCenter}
`;

const RightWrapper = styled.div`
  width: 120px;
  ${(props) => props.theme.flex.flexCenter}
  vertical-align: middle;
  justify-content: space-between;
  position: absolute;
  right: 20px;
`;

const ProfileWrapper = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGray};
  overflow: hidden;
  padding-top: 4px;
  cursor: pointer;
`;

const Header = () => {
  const [menuButtonClicked, setMenuButtonClicked] = useState();

  useEffect(() => {
    setMenuButtonClicked(false);
  }, []);

  return (
    <Container>
      <Typography header style={{ cursor: 'pointer' }}>
        LIKE LION
      </Typography>
      <RightWrapper>
        <BiSearch size='29px' style={{ cursor: 'pointer' }} />
        <BiMenu size='29px' style={{ cursor: 'pointer' }} />
        <ProfileWrapper>
          <BsPersonFill size='31px' color={theme.colors.darkGray} />
        </ProfileWrapper>
      </RightWrapper>
      <MenuBar />
    </Container>
  );
};

export default Header;
