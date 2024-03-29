import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import theme from '../../assets/theme/Theme';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import TagContainer from '../../component/TagContainer/TagContainer';
import LikeAndShare from '../../component/LikeAndShare/LikeAndShare';
import CountText from '../../component/CountText/CountText';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import CountTime from '../../component/CountTime/CountTime';
import TextButton from '../../component/TextButton/TextButton';
import { Toast } from '../../component/Toast/Toast';
import PopupModal from '../../component/PopupModal/PopupModal';

const StyledFlex = styled(Flex)`
  margin-top: 160px;

  @media (max-width: 805px) {
    margin-top: 40px;
  }
`;

const InnerWrapper = styled(Flex)`
  width: 100%;
  max-width: 852px;
  text-align: left;
  align-items: baseline;
  text-align: left;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  width: calc(100% - 50px);
  text-decoration: underline;
  color: ${(props) => props.theme.colors.blue};
  ${(props) => props.theme.font.sideContentSmall};
  word-break: break-all;
`;

const InfoBox = styled.div`
  width: 100%;
  padding: 25px 25px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.veryLightBlue};
  ${(props) => props.theme.flex.flexCenter};
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
`;

const HomeworkInfo = () => {
  const { homeworkIndex } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [userPart, setUserPart] = useState('');
  const [infoButtonText, setInfoButtonText] = useState('');
  const [homeworkList, setHomeworkList] = useState([]);
  const [subInfoButtonText, setSubInfoButtonText] = useState('');
  // 모달 확인창 관련 state
  const [modalActive, setModalActive] = useState(false);

  const urlPattern =
    // eslint-disable-next-line
    /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=@.~\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=@.~\w]+)*)*/gi;

  const [homeworkInfo, setHomeworkInfo] = useState({
    date: '',
    deadline: '',
    explanation: '',
    id: -1,
    tag: [],
    target: '',
    title: '',
    isSubmit: false,
    url: '',
  });

  // 조금 복잡합니다. 아래와 같은 순서로 판단합니다.
  // 운영진일 경우, 운영진 문구 보여줌
  // 운영진이 아닐 경우, 유저가 해당 과제 파트와 동일한지 판단
  // 동일할 경우, 과제를 제출했는지 판단.
  // 제출했다면 구경하러 가기 / 아니라면 제출하기
  // 해당 과제 파트가 아닌 유저일 경우 과제 구경하러 가기

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
      })
      .catch((e) => {
        navigate('/error');
      });

    // 과제 정보 불러오기
    axios
      .get(`${process.env.REACT_APP_API}/tasknotice/${homeworkIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setHomeworkInfo({ ...r.data });
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
  }, []);

  useEffect(() => {
    // 파트별 텍스트 구분
    if (user === 'ROLE_ADMIN') {
      setSubInfoButtonText('운영진 이시네요');
      setInfoButtonText('아기사자 과제 구경하러가기');
    } else if (homeworkInfo.target === userPart) {
      if (homeworkInfo.isSubmit) {
        setSubInfoButtonText('이미 제출했다면?');
        setInfoButtonText('과제 구경하러가기');
      } else setInfoButtonText('과제 제출하러가기');
    } else {
      setSubInfoButtonText('제출 대상이 아니라면');
      setInfoButtonText('과제 구경하러가기');
    }
  }, [user, userPart, homeworkInfo]);

  const onClickEdit = () => {
    navigate(`/homework/edit/${homeworkIndex}`);
  };

  const onClickDelete = () => {
    setModalActive(true);
  };

  const deleteFunction = () => {
    axios
      .delete(`${process.env.REACT_APP_API}/tasknotice/${homeworkIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        Toast('과제가 삭제되었습니다.');
        navigate('/homework-list');
      });
  };

  return (
    <Layout style={{ textAlign: 'left', wordBreak: 'break-all' }}>
      <Header />
      <InnerWrapper flexCenter column>
        <StyledFlex flexCenter justify='space-between' style={{ width: '100%', flexWrap: 'wrap', gap: '20px' }}>
          <Typography header style={{ fontSize: '48px', letterSpacing: '0.04em', wordBreak: 'keep-all' }}>
            {homeworkInfo.title}
          </Typography>
          {user === 'ROLE_ADMIN' && <TextButton haveDelete onClickEdit={onClickEdit} onClickDelete={onClickDelete} />}
        </StyledFlex>
        <Margin height='30' />
        <Typography contentText color='darkGray'>{`${homeworkInfo.target} • 마감일 : ${homeworkInfo.deadline}`}</Typography>
        <Margin height='16' />
        <Flex flexCenter justify='space-between' align='baseline' style={{ width: '100%' }}>
          <TagContainer tag={homeworkInfo.tag} />
          <LikeAndShare />
        </Flex>

        <Margin height='28' />
        <LinkContainer>
          <AiFillGithub size='30' color={theme.colors.black} style={{ marginRight: '20px' }} />
          <Link href={homeworkInfo.link} target='_blank' rel='noreferrer'>
            {homeworkInfo.link}
          </Link>
        </LinkContainer>

        <Margin height='28' />
        <InfoBox>
          <CountTime deadline={homeworkInfo.deadline} />
          <CountText unit='ea' count={homeworkList.length} />

          <Flex flexCenter column align='end'>
            {subInfoButtonText !== '' && (
              <Typography sideContentSmall color='darkGray' style={{ marginRight: '20px' }}>
                {subInfoButtonText}
              </Typography>
            )}
            <ArrowButton onClick={() => navigate(`/homework-submit/${homeworkIndex}`)}>{infoButtonText}</ArrowButton>
          </Flex>
        </InfoBox>

        <Margin height='69' />
        <Typography contentText style={{ lineHeight: '23px', wordBreak: 'break-all' }}>
          {homeworkInfo.explanation.split('(next_line)').map((cur) => (
            <>
              {cur
                .replace(urlPattern, (url) => `<url>${url}<url>`)
                .split('<url>')
                .map((text) => {
                  if (urlPattern.test(text)) {
                    return (
                      <a key={text} href={text} style={{ color: '#4a90e2' }} target='_blank' rel='noreferrer'>
                        {text}
                      </a>
                    );
                  }
                  return text;
                })}
              <br />
            </>
          ))}
        </Typography>
      </InnerWrapper>
      <PopupModal
        modalActive={modalActive}
        setModalActive={() => setModalActive(false)}
        mainTitle='경고'
        subTitle='과제 삭제 시, 관련된 과제 제출물도 삭제됩니다. 삭제를 진행하시겠습니까?'
        approve={deleteFunction}
        approveComment='삭제하기'
      />
    </Layout>
  );
};

export default HomeworkInfo;
