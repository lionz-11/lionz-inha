import styled from 'styled-components';
import { useState } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';

const Container = styled.div`
  width: 100%;
  max-width: 1312px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
  ${(props) => props.theme.flex.flexCenter};
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 10;
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
  const [menuButton, setMenuButton] = useState(false);
  const [searchButton, setSearchButton] = useState(false);

  const menuButtonClicked = () => {
    setMenuButton(!menuButton);
  };

  const searchButtonClicked = () => {
    setSearchButton(!searchButton);
  };

  return (
    <Container>
      <Typography header style={{ cursor: 'pointer' }}>
        LIKE LION
      </Typography>
      <RightWrapper>
        <BiSearch size='26px' style={{ cursor: 'pointer', marginTop: '2px' }} onClick={() => searchButtonClicked()} />
        <BiMenu size='29px' style={{ cursor: 'pointer' }} onClick={() => menuButtonClicked()} />
        <ProfileWrapper>
          <BsPersonFill size='31px' color={theme.colors.darkGray} />
        </ProfileWrapper>
      </RightWrapper>
      <MenuBar menuButton={menuButton} menuButtonClicked={menuButtonClicked} />
      <SearchBar searchButton={searchButton} searchButtonClicked={searchButtonClicked} />
    </Container>
  );
};

export default Header;
