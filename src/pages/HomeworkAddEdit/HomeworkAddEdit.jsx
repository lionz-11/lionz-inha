import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import homeworkImg from './homeworkImg.png';
import TitleContainer from '../../component/TitleContainer/TitleContainer';
import InputBox from '../../component/InputBox/InputBox';
import Flex from '../../component/Flex/Flex';
import Typography from '../../component/Typography/Typography';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import ArrowButtonContainer from '../../component/ArrowButtonContainer/ArrowButtonContainer';
import InputDateTime from '../../component/InputDateTime/InputDateTime';
import { Toast } from '../../component/Toast/Toast';

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding-left: 13px;
`;

const HomeworkAddEdit = () => {
  const { addOrEdit } = useParams();
  const { homeworkIndex } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState('ALL');
  const [user, setUser] = useState('');
  const [part, setPart] = useState({ user: '', selected: '' });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [homeworkInfo, setHomeworkInfo] = useState({
    date: '',
    deadline: '',
    explanation: '',
    id: -1,
    tag: [],
    target: '',
    title: '',
    link: '',
  });

  useEffect(() => {
    // 유저의 파트 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setPart({ ...part, user: r.data.part });
        setUser(r.data.authority);
        if (r.data.authority !== 'ROLE_ADMIN') {
          Toast('잘못된 접근입니다.');
          navigate('/error');
        }
      })
      .catch((e) => {
        navigate('/error');
      });

    // 현재 날짜 설정
    const today = new Date().toISOString().slice(0, 10);
    const curTime = new Date().toISOString().slice(11, 16);
    setDate(today);
    setTime(curTime);

    // 수정일 경우, 과제 정보 불러오기
    if (addOrEdit === 'edit') {
      axios
        .get(`${process.env.REACT_APP_API}/tasknotice/${homeworkIndex}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((r) => {
          setHomeworkInfo({ ...r.data, tag: r.data.tag.join(',') });
          setCategory(r.data.target);
          setPart({ ...part, selected: r.data.target });
          setDate(r.data.deadline.slice(0, 10));
          setTime(r.data.deadline.slice(11, 16));
        })
        .catch((e) => {
          navigate('/error');
        });
    }
  }, []);

  useEffect(() => {
    console.log(homeworkInfo);
  }, [homeworkInfo]);

  const titleHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, title: target.value });
  };

  const tagHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, tag: target.value });
  };

  const linkHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, link: target.value });
  };

  const explanationHandler = ({ target }) => {
    setHomeworkInfo({ ...homeworkInfo, explanation: target.value });
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  // 과제 생성
  const addNewHomework = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/tasknotice`,
        {
          title: homeworkInfo.title,
          explanation: homeworkInfo.explanation,
          target: category,
          deadline: `${date} ${time}:00`,
          tags: homeworkInfo.tag.split(','),
          link: homeworkInfo.link,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      .then((r) => {
        Toast('과제 생성이 완료되었습니다.');
        navigate('/homework-list');
      });
  };

  // 과제 수정
  const editHomework = () => {
    axios
      .put(
        `${process.env.REACT_APP_API}/tasknotice/${homeworkInfo.id}`,
        {
          title: homeworkInfo.title,
          explanation: homeworkInfo.explanation,
          target: category,
          deadline: `${date} ${time}:00`,
          tags: homeworkInfo.tag.split(','),
          link: homeworkInfo.link,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      .then((r) => {
        Toast('과제 수정이 완료되었습니다.');
        navigate('/homework-list');
      });
  };

  return (
    <Layout size='small'>
      <Header />
      <Margin height='98' />
      {addOrEdit === 'add' && (
        <HeadLine
          src={homeworkImg}
          mainTitle={['과제 작성 페이지입니다.']}
          subTitle={['아기사자들을 위한 과제 작성 페이지입니다.', '업로드 이전에 검토는 필수!']}
        />
      )}

      {addOrEdit === 'edit' && (
        <HeadLine
          src={homeworkImg}
          mainTitle={['과제 수정 페이지입니다.']}
          subTitle={['아기사자들을 위한 과제 수정 페이지입니다.', '수정했다면 아기사자들이 혼란스러워하지 않도록 재공지해주세요.']}
        />
      )}

      <Margin height='8' />
      <TitleContainer
        small
        mainTitle={['제목 작성']}
        subTitle={['과제의 주제를 잘 담고있는 제목으로 만들어 주세요.']}
        component={<InputBox input mainTitle value={homeworkInfo.title} onChange={titleHandler} />}
      />

      <Margin height='71' />
      <TitleContainer
        small
        mainTitle={['태그']}
        subTitle={['이번 과제에서 무엇을 배우나요? 주된 키워드를 작성해 주세요.']}
        component={<InputBox input mainTitle value={homeworkInfo.tag} onChange={tagHandler} />}
      />

      <Margin height='68' />
      <StyledFlex flexCenter>
        <Typography pageTitle style={{ fontSize: '32px' }}>
          마감일
        </Typography>
        <InputDateTime
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onChangeDate={onChangeDate}
          onChangeTime={onChangeTime}
        />
      </StyledFlex>

      <Margin height='51' />
      <StyledFlex flexCenter>
        <Typography pageTitle style={{ fontSize: '32px' }}>
          카테고리
        </Typography>
        <SelectCategoryButton setCategory={setCategory} setPart={setPart} part={part} />
      </StyledFlex>

      <Margin height='59' />
      <TitleContainer
        small
        mainTitle={['과제 참고 링크']}
        subTitle={['깃허브 링크 또는 그 외 참고 링크를 넣어주세요. 하나만요..']}
        component={<InputBox input mainTitle value={homeworkInfo.link} onChange={linkHandler} />}
      />

      <Margin height='89' />
      <TitleContainer
        small
        mainTitle={['과제 설명']}
        subTitle={['이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.', '격려의 말이나 도움을 주는 말을 더해도 되구요.']}
        component={<InputBox text detail value={homeworkInfo.explanation} onChange={explanationHandler} />}
      />
      {addOrEdit === 'add' && <ArrowButtonContainer text='과제 생성 완료하기' onClick={addNewHomework} />}
      {addOrEdit === 'edit' && <ArrowButtonContainer text='과제 수정 완료하기' onClick={editHomework} />}
    </Layout>
  );
};

export default HomeworkAddEdit;
