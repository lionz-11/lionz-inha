import { useNavigate } from 'react-router-dom';
import { checkTargetForNewValues, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../assets/theme/Theme';
import Typography from '../Typography/Typography';

const Box = styled(motion.article)`
  cursor: pointer;
  margin: 0 10px;
  max-width: 1312px;
  width: 100%;
  height: 97px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  ${(props) => props.theme.box};
  ${(props) => props.theme.flex.flexCenter};

  overflow: hidden;
  justify-content: space-between;
  padding: 0 1.5rem;
  white-space: nowrap;
`;

const Tag = styled.h4`
  min-width: 90px;
  border-radius: 57px;
  padding: 0.7rem 0rem 0.6rem 0rem;
  color: white;
  ${(props) => props.theme.flex.flexCenter}
  ${(props) => props.theme.font.contentTitle};

  // 모각코, FE, BE, PD 각각의 태그 컬러
  background-color: ${(props) => {
    switch (props.tag) {
      case 'FE':
        return `${props.theme.colors.blue}`;
      case 'BE':
        return `${props.theme.colors.lightRed}`;
      case 'ALL':
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

const Notification = ({ date }) => (
  <Typography sideContent color='darkGray'>
    작성일: {date}
  </Typography>
);

/*
  target이 한템포 늦게 바뀜, 이유는 모르겠다. 
  그래서 이것저것 보다가 part 스테이트에 꽤많은 정보를 넣게 됐는데,,
  유지보수할때 이 파트를 정리하고 나머지 스테이트들도 정리해야할 것 같다.
  일단 target이 바뀌긴 하니까 의존성 배열에 넣어서 상태를 수정하도록 했다.
*/

const Assignment = ({ date, submissionStatus, part, target }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (part.user !== target) setStatus('대상 아님');
    if ((part.user === target && submissionStatus === false) || (target === 'ALL' && submissionStatus === false)) setStatus('미제출');
    if ((part.user === target && submissionStatus === true) || (target === 'ALL' && submissionStatus === true)) setStatus('제출 완료');
  }, [part.selected, target]);

  return (
    <>
      <Typography sideContent color='darkGray'>
        마감일: {date}
      </Typography>
      <Submission part={part} target={target} submissionStatus={status} sideContentBold>
        {status}
      </Submission>
    </>
  );
};

const BarContentBox = (props) => {
  const { id, title, target, deadline, date, notification, isSubmit, part } = props;
  const navigate = useNavigate();

  const moveToPage = (e) => {
    // 과제 페이지로 이동
    if (!notification) {
      navigate(`/homework-info/${id}`);
    } else {
      // 공지 페이지로 이동
      navigate(`/notice-info/${id}`);
    }
  };

  return (
    <>
      {props.id === '' ? (
        <div>로딩중 입니다.</div>
      ) : (
        <Box whileHover={theme.animation.box} id={id} notification={notification} onClick={moveToPage}>
          <LeftBox>
            <Tag tag={target} end={props.end}>
              {target}
            </Tag>
            <Title>{title}</Title>
          </LeftBox>
          <RightBox>
            {notification ? (
              <Notification date={date} />
            ) : (
              <Assignment target={target} part={part} date={deadline} submissionStatus={isSubmit} />
            )}
          </RightBox>
        </Box>
      )}
    </>
  );
};

export default BarContentBox;
