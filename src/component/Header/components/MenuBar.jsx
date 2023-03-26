import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import Flex from '../../Flex/Flex';
import Margin from '../../Margin/Margin';
import MenuButton from './MenuButton';
import menu3D from './menu3D.png';
import Typography from '../../Typography/Typography';

const Dimmer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
`;

const MenuWrapper = styled.div`
  width: 291px;
  height: calc(100vh - 36px);
  position: fixed;
  top: 18px;
  right: 18px;
  border-radius: 21px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2;
  transition: 0.5s;
  ${(props) =>
    !props.menuButton &&
    css`
      right: -309px;
    `}
`;

const InfoBox = styled.div`
  position: fixed;
  bottom: 34px;
  width: 291px;
  padding-right: 19px;
  text-align: end;
`;

const QuickLink = styled(Typography)`
  transition: 0.5s;
  :hover {
    color: ${(props) => props.theme.colors.blue};
    transition: 0.5s;
  }
`;

const MenuBar = ({ menuButton, menuButtonClicked }) => {
  const navigate = useNavigate();

  const moveToProfileEdit = () => {
    navigate('/profile-edit/0');
  };

  const moveToNotice = () => {
    navigate('/notice-list');
  };

  const moveToHomework = () => {
    navigate('/homework-list');
  };

  const moveToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <AnimatePresence>
        {menuButton && <Dimmer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={menuButtonClicked} />}
      </AnimatePresence>
      <MenuWrapper menuButton={menuButton}>
        <Margin height={22} />
        <Flex flexCenter>
          <BsChevronLeft size='24px' style={{ cursor: 'pointer' }} onClick={menuButtonClicked} />
          <Margin width={233} />
        </Flex>
        <Flex flexCenter>
          <Margin width={103} />
          <img alt='menuImage' src={menu3D} />
        </Flex>
        <Margin height={17} />
        <Flex column>
          <MenuButton title='내 정보 수정' subTitle='작고 소중한 나의 정보..' onClick={moveToProfileEdit} />
          <MenuButton title='공지사항' subTitle='재밌는 일 없나?' onClick={moveToNotice} />
          <MenuButton title='과제' subTitle='아 맞다 과제!' onClick={moveToHomework} />
          <MenuButton title='연락처' subTitle='그 사람.. 누구더라?' onClick={moveToContact} />
          <MenuButton title='일정' subTitle='오늘 뭐 하지?' />
        </Flex>
        <InfoBox>
          <a href='https://www.instagram.com/likelion_inha/'>
            <QuickLink tinyText color='lightGray' style={{ fontFamily: 'pretendard-regular', cursor: 'pointer' }}>
              @likelion_inha
            </QuickLink>
          </a>
          <Typography tinyText color='lightGray' style={{ fontFamily: 'pretendard-regular' }}>
            Designed by Lionz
          </Typography>
        </InfoBox>
      </MenuWrapper>
    </>
  );
};

export default MenuBar;
