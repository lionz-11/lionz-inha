import styled, { css } from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import Flex from '../../Flex/Flex';
import Margin from '../../Margin/Margin';
import MenuButton from './menuButton';
import { ReactComponent as Menu3D } from '../../../assets/svgs/Menu3D.svg';
import Typography from '../../Typography/Typography';

const Dimmer = styled(motion.div)`
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

const MenuBar = ({ menuButton, menuButtonClicked }) => (
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
        <Menu3D />
      </Flex>
      <Margin height={17} />
      <Flex column>
        <MenuButton title='내 정보 수정' subTitle='작고 소중한 나의 정보..' />
        <MenuButton title='공지사항' subTitle='재밌는 일 없나?' />
        <MenuButton title='과제' subTitle='아 맞다 과제!' />
        <MenuButton title='연락처' subTitle='그 사람.. 누구더라?' />
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

export default MenuBar;
