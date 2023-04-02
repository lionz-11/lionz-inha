import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import homeworkImg from './homeworkImg.png';
import TitleContainer from '../../component/TitleContainer/TitleContainer';
import InputBox from '../../component/InputBox/InputBox';
import Flex from '../../component/Flex/Flex';
import Typography from '../../component/Typography/Typography';
import ArrowButtonContainer from '../../component/ArrowButtonContainer/ArrowButtonContainer';
import CountText from '../../component/CountText/CountText';
import HomeWorkContentContainer from './HomeWorkContentContainer';
import { Toast } from '../../component/Toast/Toast';
import TextButton from '../../component/TextButton/TextButton';

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

const Link = styled.a`
  ${(props) => props.theme.font.sideContentSmall}
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitHomeWork = () => {
  const { homeworkIndex } = useParams();
  const [user, setUser] = useState('');
  const [userPart, setUserPart] = useState('');
  const [state, setState] = useState('');
  const [homeworkList, setHomeworkList] = useState([]);
  const [homeworkNoticeInfo, setHomeworkNoticeInfo] = useState({
    date: '',
    deadline: '',
    explanation: '',
    id: -1,
    tag: [],
    target: '',
    title: '',
    link: '',
  });
  const [homeworkInfo, setHomeworkInfo] = useState({
    explanation: '',
    target: '',
    link: '',
    id: -1,
  });

  const getHomeworkInfo = () => {
    // 내가 제출한 과제 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/task/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        const taskInfo = r.data.data.filter((data) => data.tasknotice.id === Number(homeworkIndex));
        if (taskInfo.length === 0) setState('NEED_TO_SUBMIT');
        else {
          setState('SUBMITED');
          const temp = taskInfo[0].explanation;
          setHomeworkInfo({ ...taskInfo[0], explanation: temp.replaceAll('(next_line)', '\r\n') });
        }
      });

    // 유저 과제 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/task/tasknotice/${homeworkIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setHomeworkList(r.data.data);
      });
  };

  useEffect(() => {
    // 유저의 파트 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setUser(r.data.authority);
        setUserPart(r.data.part);
      });

    // 과제 공지 정보 불러오기
    axios
      .get(`${process.env.REACT_APP_API}/tasknotice/${homeworkIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setHomeworkNoticeInfo({ ...r.data });
      });

    // 과제 정보 불러오기
    getHomeworkInfo();
  }, []);

  const linkHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, link: target.value });
  };

  const explanationHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, explanation: target.value });
  };

  const checkLink = () => {
    if (homeworkInfo.link.indexOf('https://')) {
      Toast('https://로 시작하지 않는 잘못된 링크입니다.');
      return false;
    }
    return true;
  };

  const homeworkSubmit = () => {
    if (checkLink) {
      const temp = homeworkInfo.explanation;

      axios
        .post(
          `${process.env.REACT_APP_API}/task`,
          {
            explanation: temp.replace(/(?:\r\n|\r|\n)/g, '(next_line)'),
            link: homeworkInfo.link,
            tasknotice_id: homeworkNoticeInfo.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          },
        )
        .then((r) => {
          Toast('과제 제출이 완료되었습니다.');
          setState('SUBMITED');
        });
    }
  };

  const homeworkEdit = () => {
    if (checkLink) {
      const temp = homeworkInfo.explanation;

      axios
        .put(
          `${process.env.REACT_APP_API}/task/${homeworkInfo.id}`,
          {
            explanation: temp.replace(/(?:\r\n|\r|\n)/g, '(next_line)'),
            link: homeworkInfo.link,
            tasknotice_id: homeworkNoticeInfo.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          },
        )
        .then((r) => {
          Toast('과제 수정이 완료되었습니다.');
          getHomeworkInfo();
        });
    }
  };

  return (
    <Layout size='small'>
      <Header />
      <Margin height='98' />
      <HeadLine
        src={homeworkImg}
        mainTitle={['과제 제출 페이지입니다.']}
        subTitle={['과제물을 제출하기 위한 페이지입니다.', '업로드 이전에 검토는 필수!']}
      />

      <Margin height='59' />
      {user === 'ROLE_ADMIN' && (
        <TitleContainer
          small
          mainTitle={['HELLO STAFF']}
          subTitle={['운영진이시네요.', <br />, '과제 검사를 하러 오셨나요?', '아기사자들의 과제 제출물을 확인해보세요.']}
        />
      )}

      {user !== 'ROLE_ADMIN' && userPart !== homeworkNoticeInfo.target && (
        <TitleContainer
          small
          mainTitle={['나의 제출 상태']}
          subTitle={[
            '이런.. 제출 대상이 아니시네요.',
            <br />,
            '다른 파트의 과제를 구경하러 오셨군요!',
            '모두가 노력해서 만든 제출물이니 즐겁게 구경하다 가볼까요?',
          ]}
        />
      )}

      {user !== 'ROLE_ADMIN' && userPart === homeworkNoticeInfo.target && (state === 'NEED_TO_SUBMIT' || state === 'EDIT') && (
        <>
          <TitleContainer
            small
            mainTitle={['과제 설명을 작성해주세요.']}
            subTitle={['짧게 적어도 됩니다. 자신의 과제를 마음껏 표현해주세요.']}
            component={<InputBox text homework value={homeworkInfo.explanation} onChange={explanationHandler} />}
          />

          <Margin height='68' />
          <TitleContainer
            small
            mainTitle={['과제 참고 링크']}
            subTitle={['깃허브 링크 또는 배포 링크를 첨부하면 됩니다.']}
            component={<InputBox input link value={homeworkInfo.link} onChange={linkHandler} />}
          />
          {state === 'NEED_TO_SUBMIT' && <ArrowButtonContainer text='과제 제출하기' onClick={homeworkSubmit} />}
          {state === 'EDIT' && <ArrowButtonContainer text='수정 완료하기' onClick={homeworkEdit} />}
        </>
      )}

      {user !== 'ROLE_ADMIN' && userPart === homeworkNoticeInfo.target && state === 'SUBMITED' && (
        <>
          <TitleContainer
            small
            mainTitle={['나의 제출 상태']}
            subTitle={['제출 완료된 과제입니다.']}
            component={<InputBox text homework disabled value={homeworkInfo.explanation} />}
          />
          <Margin height='11' />
          <Flex justify='space-between' style={{ width: '100%', padding: '0px 13px' }}>
            <LinkContainer>
              <AiFillGithub size='30' style={{ marginRight: '20px' }} />
              <Link href={homeworkInfo.link} style={{ color: '#4a90e2' }} target='_blank' rel='noreferrer'>
                {homeworkInfo.link}
              </Link>
            </LinkContainer>
            <TextButton color='gray' onClick={() => setState('EDIT')}>
              수정하기
            </TextButton>
          </Flex>
        </>
      )}

      <Margin height='79' />
      <StyledFlex>
        <Typography pageTitle style={{ fontSize: '32px' }}>
          {user === 'ROLE_ADMIN' ? '아기사자 과제 확인하기' : '다른 사람의 과제 구경하기'}
        </Typography>
        <CountText count={homeworkList.length} />
      </StyledFlex>
      <Margin height='12' />
      {homeworkList.length === 0 ? (
        <>
          <Margin height='50' />
          <Typography contentTitle>제출된 과제가 없습니다.</Typography>
          <Margin height='10' />
          <Typography contentText color='darkGray'>
            가장 먼저 과제를 제출해보세요!
          </Typography>
        </>
      ) : (
        <HomeWorkContentContainer data={homeworkList} />
      )}
    </Layout>
  );
};

export default SubmitHomeWork;
