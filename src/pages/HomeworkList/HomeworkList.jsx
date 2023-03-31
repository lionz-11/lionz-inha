import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
import Layout from '../../component/Layout/Layout';
import BarComponentContainer from '../../component/BarComponentContainer/BarComponentContainer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import CountText from '../../component/CountText/CountText';
import TitleSet from '../../component/TitleSet/TitleSet';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import Flex from '../../component/Flex/Flex';

const HeadLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;

  div {
    margin-left: 0px;
  }

  padding: 0 20px;
`;

const HomeworkList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('ALL');
  const [temp, setTemp] = useState([]);
  const [allOfTask, setAllOfTask] = useState([]);
  const [part, setPart] = useState({ user: '', selected: '' });
  const [myTask, setMyTask] = useState([]);
  const [authority, setAuthority] = useState('');

  // const handleCategory = () => {};
  // useEffect(async () => {
  //   const response = await axios.get('https://lionz.kro.kr/member/img/1678277078161null20210221_121622.jpg', {
  //     headers: {
  //       Authorization:
  //         'Bearer ',
  //     },
  //   });
  //   console.log(response.data);
  // });

  // 카테고리 정렬
  useEffect(() => {
    setTemp(allOfTask.filter(({ target }) => target === category));
  }, [category, allOfTask]);

  useEffect(() => {
    // 유저의 파트 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setAuthority(r.data.authority);
        setPart({ ...part, user: r.data.part });
      });

    // 모든 과제 조회 + 나의 과제 조회
    axios
      .get(`${process.env.REACT_APP_API}/tasknotice`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setMyTask(r.data.data);
        setAllOfTask(r.data.data);
      });
  }, []);

  useEffect(() => {
    // 내 과제 길이가 0이 아닐때만 실행
    setMyTask(myTask.filter(({ target }) => target === 'ALL' || target === part.user));
  }, [allOfTask, part]);

  return (
    <Layout>
      <Header />
      <Margin height='160' />
      <HeadLine>
        <TitleSet
          mainTitle={['나의 과제 목록입니다.']}
          subTitle={['우리 파트의 과제들이 있네요. 남은 반년동안 열심히 달려봐요! 화이팅(운영진 일동)']}
        />

        {authority === 'ROLE_ADMIN' ? (
          <Flex flexCenter column align='end'>
            <Typography sideContentSmall color='darkGray' style={{ marginBottom: '4px' }}>
              아기사자를 괴롭히고 싶다면?
            </Typography>
            <ArrowButton onClick={() => navigate('/homework/add/new')}>과제 생성하러가기</ArrowButton>
          </Flex>
        ) : (
          <CountText unit='ea' count={myTask.length} />
        )}
      </HeadLine>
      <PhotoContentContainer data={myTask} />

      {/* <HeadLine
      mainTitle={['다른 파트의 과제도 구경하고 싶다면..']}
      subTitle={['해커톤을 위해선 다른 파트의 이해도 중요합니다. 어떤 것들을 만들며 공부하고 있는지 알아볼까요?']}
    /> */}
      <Margin height='132' />

      <HeadLine>
        <TitleSet
          mainTitle={['다른 파트의 과제도 구경하고 싶다면..']}
          subTitle={['해커톤을 위해선 다른 파트의 이해도 중요합니다. 어떤 것들을 만들며 공부하고 있는지 알아볼까요?']}
        />

        <SelectCategoryButton setCategory={setCategory} setPart={setPart} part={part} />
      </HeadLine>
      {temp.length === 0 ? (
        <>
          <Margin height='50' />
          <Typography contentTitle>
            {category === 'ALL' ? '11기 공통 과제는 아직 없습니다.' : `${category} 파트의 과제는 아직 없습니다.`}
          </Typography>
          <Margin height='10' />
          <Typography contentText color='darkGray'>
            다른 파트의 과제를 구경해보세요.
          </Typography>
        </>
      ) : (
        <BarComponentContainer bars={temp} renderProp={(data) => <BarContentBox part={part} {...data} />} />
      )}
    </Layout>
  );
};

export default HomeworkList;
