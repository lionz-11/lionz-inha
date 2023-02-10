import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import Profile from '../Profile/Profile';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';

const Box = styled(motion.article)`
  // 단순 스타일링
  cursor: pointer;
  margin: 0 10px;
  max-width: 854px;
  width: 100%;
  height: 97px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  ${(props) => props.theme.box};
  ${(props) => props.theme.flex.flexCenterColumn};

  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.6rem 1.5rem;
  white-space: nowrap;

  ${({ isOpen }) => isOpen && 'height: 210px;'};
`;

const Title = styled.h1`
  padding-left: 0.7rem;
  padding-top: 0.2rem;
  ${(props) => props.theme.font.contentTitle};
  flex-grow: 1;

  // 제목 overflow를 위한 속성
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LeftBox = styled.div`
  ${(props) => props.theme.flex.flexCenter};
  justify-content: start;
  flex-grow: 1;

  // 제목 overflow를 위한 속성
  overflow: hidden;
`;

const RightBox = styled.div`
  ${(props) => props.theme.flex.flexCenter};
`;

const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentDetail = styled.div`
  padding: 2rem 0.2rem;
`;

// const Logo = styled.div`
//   height: 30px;
//   width: 30px;
//   background-color: pink;
//   border-radius: 50px;
//   margin-right: 20px;
// `;

const Detail = styled.div`
  height: 30px;
  width: 100%;
  margin-bottom: 24px;

  // 여러 줄 말줄임표 Css
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Link = styled.a`
  ${(props) => props.theme.font.sideContentSmall}
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AssignmentBox = ({ detail, date, link, name, src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => setIsOpen(!isOpen);

  return (
    <Box isOpen={isOpen} onClick={openHandler} whileHover={theme.animation.box}>
      <ContentTitle>
        <LeftBox>
          <Profile src={src} />
          <Title>{name}의 과제입니다.adsfasdfsfadfadfasdfasdfasdfasdfsad</Title>
        </LeftBox>
        <RightBox>
          <Typography sideContent color='darkGray'>
            {date}
          </Typography>
        </RightBox>
      </ContentTitle>
      <ContentDetail>
        <Detail>{detail}</Detail>
        {/* <Detail>
          안녕ㅁ낭러만오러ㅏㅓㅁㅁㄴㄴㅇㅁㄴㄴㄴㅇㄴㅇㄴㅇㄴㅇㄴㅇㄴ오라멍노람ㄴ안녕ㅁ엄ㅇ놔ㅓㄹ몬어ㅏ로머낭로낭러만오러ㅏㅓㅁㄴ오라멍노람ㄴ안녕ㅁ낭러만오러ㅏㅓㅁㄴ오라멍노람ㄴ안녕ㅁ낭러만오러ㅏㅓㅁㄴ오라멍노람ㄴ안녕ㅁ낭러만오러ㅏㅓㅁㄴ오라멍노람ㄴ
        </Detail> */}
        <LinkContainer>
          <AiFillGithub size='30' style={{ marginRight: '20px' }} />
          <Link href={link}>{link}</Link>
        </LinkContainer>
      </ContentDetail>
    </Box>
  );
};

export default AssignmentBox;
