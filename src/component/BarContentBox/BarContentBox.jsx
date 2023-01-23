import { motion } from 'framer-motion';
import styled from 'styled-components';
import theme from '../../assets/theme/Theme';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';

const Box = styled(motion.article)`
  margin: 0 10px;
  max-width: 1312px;
  width: 100%;
  height: 97px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  ${(props) => props.theme.shadow.componentShadow};
  ${(props) => props.theme.flex.flexCenter};

  overflow: hidden;
  justify-content: space-between;
  padding: 0 1.5rem;
  white-space: nowrap;
`;

const Tag = styled.h4`
  min-width: 100px;
  width: 100px;
  border-radius: 57px;
  padding: 1.2rem 1.4rem 1rem 1.4rem;
  color: white;
  ${(props) => props.theme.flex.flexCenter}
  ${(props) => props.theme.font.contentTitle};

  // 모각코, FE, BE, PD 각각의 태그 컬러
  background-color: ${(props) => {
    switch (props.tag) {
      case '모각코':
      case 'FE':
        return `${props.theme.colors.blue}`;
      case 'BE':
        return `${props.theme.colors.lightRed}`;
      case 'PD':
        return `${props.theme.colors.yellow}`;
      default:
        return '';
    }
  }};

  // 마감시 태그 컬러
  ${(props) => props.end && `background-color: ${props.theme.colors.lightGray}`}
`;

const Title = styled.h1`
  padding-left: 1.8rem;
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

  > * {
    padding-left: 1.8rem;
  }

  p {
    padding-top: 0.2rem;
  }
`;

const Profile = styled.img`
  height: 1.7rem;
  width: 1.7rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  margin-right: 1rem;
`;

const ProfileWrapper = styled(Flex)``;

const Submission = styled(Typography)`
  width: 7rem;
  text-align: center;

  color: ${(props) => {
    switch (props.submissionStatus) {
      case '제출 완료':
        return `${props.theme.colors.blue}`;
      case '대상 아님':
        return `${props.theme.colors.darkGray}`;
      case '미제출':
        return `${props.theme.colors.red}`;
      default:
        return '';
    }
  }};
`;

const BarContentBox = (props) => {
  const { title, tag, date, assignment } = props;

  return (
    <Box whileHover={theme.animation.box} onClick={props.onClick}>
      <LeftBox>
        <Tag tag={tag} end={props.end}>
          {tag}
        </Tag>
        <Title>{title}</Title>
      </LeftBox>
      {assignment ? (
        <RightBox>
          <Typography sideContent color='darkGray'>
            마감일: {date}
          </Typography>
          <Submission submissionStatus={props.submissionStatus} sideContentBold>
            {props.submissionStatus}
          </Submission>
        </RightBox>
      ) : (
        <RightBox>
          <Typography sideContent color='darkGray'>
            {props.current}/{props.maximum}
          </Typography>
          <Typography sideContent color='darkGray'>
            {date}
          </Typography>
          <ProfileWrapper>
            <Profile src={props.img} alt='img' />
            <Typography contentText style={{ width: '3.5rem' }}>
              {props.writer}
            </Typography>
          </ProfileWrapper>
        </RightBox>
      )}
    </Box>
  );
};

export default BarContentBox;
