import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import MenuBar from './components/menuBar';
import { Toast } from '../Toast/Toast';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Flex from '../Flex/Flex';
import Margin from '../Margin/Margin';

// onlyTitle 추가.
// header 사용 시에 onlyTitle 추가하면 상단 아이콘 숨겨짐.

const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.colors.white};
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
  margin-right: 20px;
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

const Header = ({ onlyTitle }) => {
  const [menuButton, setMenuButton] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const navigate = useNavigate();

  const menuButtonClicked = () => {
    setMenuButton(!menuButton);
  };

  const searchButtonClicked = () => {
    setSearchButton(!searchButton);
  };

  return (
    <Container>
      <Flex justify='space-between' style={{ width: '100%', maxWidth: '1312px' }}>
        <Margin width='140' />
        <Typography header style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          LIKE LION
        </Typography>
        {!onlyTitle && (
          <>
            <RightWrapper>
              <BiSearch
                size='26px'
                style={{ cursor: 'pointer', marginTop: '2px' }}
                onClick={() => Toast('아직 지원하지 않습니다.. 곧 해올게용')}
              />
              <BiMenu size='29px' style={{ cursor: 'pointer' }} onClick={() => menuButtonClicked()} />
              <ProfileWrapper>
                <BsPersonFill size='31px' color={theme.colors.darkGray} />
              </ProfileWrapper>
            </RightWrapper>
            <MenuBar menuButton={menuButton} menuButtonClicked={menuButtonClicked} />
            <SearchBar searchButton={searchButton} searchButtonClicked={searchButtonClicked} />
          </>
        )}
      </Flex>
    </Container>
  );
};

export default Header;
