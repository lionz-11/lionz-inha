import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';
import theme from '../../assets/theme/Theme';

// 캐러셀을 안썼으므로 3개까지만 예쁘게 보임
const Box = styled(motion.article)`
  max-width: 415px;
  border-radius: 10px;
  ${(props) => props.theme.shadow.componentShadow}
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden; // 사진이 틀밖으로 나가지 않게한다.
`;

// 사진을 넣을 컴포넌트! 임시로 만들어놨다.
const Photo = styled.div`
  width: 100%;
  padding-top: 56%;
  background-color: #a7bdc1;
`;

const MainContent = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

const SideContent = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
  padding: 1rem 1.5rem;

  p {
    height: 1rem;
  }
`;

const Separator = styled.div`
  margin: 0 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const Title = styled.h2`
  ${(props) => props.theme.font.contentTitle};
  padding-bottom: 1.1rem;
`;

const Contents = styled(Typography)`
  height: 2.3rem;
  overflow: hidden;

  ${(props) =>
    props.haveProfile &&
    css`
      height: 3.5rem;
    `}
`;

const Profile = styled.img`
  height: 1.7rem;
  width: 1.7rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  margin-right: 1rem;
`;

const ProfileWrapper = styled(Flex)``;

const PhotoContentBox = ({ data, haveProfile }) => {
  const { title, contents, writer, date } = data;

  return (
    <Box whileHover={theme.animation.box}>
      <Photo />
      <MainContent>
        <Title>{title}</Title>
        <Contents haveProfile={haveProfile} contentText>
          {contents}
        </Contents>
      </MainContent>
      <Separator />
      <SideContent>
        {haveProfile ? (
          <ProfileWrapper>
            <Profile />
            <Typography contentText>{writer}</Typography>
          </ProfileWrapper>
        ) : (
          <Typography contentText>{writer}</Typography>
        )}
        <Typography sideContentSmall color='gray'>
          {date}
        </Typography>
      </SideContent>
    </Box>
  );
};

export default PhotoContentBox;
