import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import { Toast } from '../Toast/Toast';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Flex from '../Flex/Flex';
import Margin from '../Margin/Margin';
import UserInfo from './components/UserInfo';

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
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 31px;
  height: 31px;
  object-fit: cover;
`;

const Header = ({ onlyTitle }) => {
  const [profile, setProfile] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [part, setPart] = useState('');
  const [comment, setComment] = useState('');
  const [menuButton, setMenuButton] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // user 정보 불러오기
    if (!onlyTitle) {
      axios
        .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((r) => {
          console.log(r.data);
          setProfile(r.data.image?.img_link);
          setId(r.data.id);
          setName(r.data.name);
          setPart(r.data.part);
          setComment(r.data.comment);
        })
        .catch((e) => {
          Toast('로그인 페이지로 이동합니다.');
          navigate('/login');
        });
    }
  }, []);

  const titleClicked = () => {
    if (!onlyTitle) {
      navigate('/');
    }
  };

  const menuButtonClicked = () => {
    setMenuButton(!menuButton);
  };

  const searchButtonClicked = () => {
    setSearchButton(!searchButton);
  };

  return (
    <Container>
      <Flex justify={onlyTitle ? 'center' : 'space-between'} style={{ width: '100%', maxWidth: '1312px' }}>
        {!onlyTitle && <Margin width='140' />}
        <Typography header style={{ cursor: 'pointer' }} onClick={titleClicked}>
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
                {profile !== '' ? (
                  <ProfileImg src={profile} />
                ) : (
                  <BsPersonFill size='31px' color={theme.colors.darkGray} style={{ marginTop: '4px' }} />
                )}
              </ProfileWrapper>
            </RightWrapper>
            <MenuBar menuButton={menuButton} menuButtonClicked={menuButtonClicked} />
            <SearchBar searchButton={searchButton} searchButtonClicked={searchButtonClicked} />
          </>
        )}
        <UserInfo id={id} name={name} part={part} comment={comment} />
      </Flex>
    </Container>
  );
};

export default Header;
