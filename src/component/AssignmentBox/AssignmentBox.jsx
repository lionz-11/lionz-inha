import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import Profile from '../Profile/Profile';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';

const StyledTypography = styled(Typography)`
  @media (max-width: 805px) {
    display: none;
  }
`;

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

  ${({ $isOpen }) => $isOpen && 'height: auto;'};
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
  width: 100%;
  padding: 2rem 0.2rem;
  padding-bottom: 1rem;
  word-break: break-all;
`;

// const Logo = styled.div`
//   height: 30px;
//   width: 30px;
//   background-color: pink;
//   border-radius: 50px;
//   margin-right: 20px;
// `;

const Detail = styled(Typography)`
  width: 100%;
  margin-bottom: 24px;

  // 여러 줄 말줄임표 Css
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Link = styled.a`
  width: calc(100% - 50px);
  text-decoration: underline;
  color: ${(props) => props.theme.colors.blue};
  ${(props) => props.theme.font.sideContentSmall};
  word-break: break-all;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AssignmentBox = ({ data }) => {
  const { explanation, member, link, date } = data;
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <Box $isOpen={isOpen} onClick={openHandler} whileHover={theme.animation.box}>
        <ContentTitle>
          <LeftBox>
            <Profile src={member.image.img_link} />
            <Title>{member.name}의 과제입니다.</Title>
          </LeftBox>
          <RightBox>
            <StyledTypography sideContent color='darkGray'>
              {`${date.slice(0, 10)} ${date.slice(11, 16)}`}
            </StyledTypography>
          </RightBox>
        </ContentTitle>
        <ContentDetail>
          <Detail contentText>{explanation.replaceAll('(next_line)', ' ')}</Detail>
          <LinkContainer>
            <AiFillGithub size='30' style={{ marginRight: '20px' }} />
            <Link href={link} style={{ color: '#4a90e2' }} target='_blank' rel='noreferrer'>
              {link}
            </Link>
          </LinkContainer>
        </ContentDetail>
      </Box>
    </>
  );
};

export default AssignmentBox;
