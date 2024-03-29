import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import noticeListImg from './noticeListImg.png';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import BarComponentContainer from '../../component/BarComponentContainer/BarComponentContainer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';

const StyledImg = styled.img`
  @media (max-width: 805px) {
    display: none;
  }
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

const NoticeList = () => {
  const notification = true;
  const [user, setUser] = useState('Admin');
  const [notice, setNotice] = useState([]);
  const [temp, setTemp] = useState([]);
  const [category, setCategory] = useState('ALL');
  const [part, setPart] = useState({ user: '', selected: '' });

  const navigate = useNavigate();

  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    hour = hour >= 10 ? hour : `0${hour}`;
    minute = minute >= 10 ? minute : `0${minute}`;
    second = second >= 10 ? second : `0${second}`;

    return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
  }

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
      });
    // 공지 전체 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/notice`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setNotice(
          r.data.data.reverse().map((cur) => {
            const curDate = new Date(cur.date);
            curDate.setHours(curDate.getHours() + 9);
            return { ...cur, date: dateFormat(curDate) };
          }),
        );
      });
  }, []);

  useEffect(() => {
    setTemp(notice.filter(({ target }) => target === category));
  }, [category, notice]);

  return (
    <Layout>
      <Header />
      <Margin height='99' />
      <Flex flexCenter justify='space-between' style={{ width: '100%', marginLeft: '13px' }}>
        <Flex flexCenter column align='baseline' style={{ wordBreak: 'keep-all' }}>
          <Typography pageTitle>공지사항 페이지입니다.</Typography>
          <Margin height='9' />
          <Typography contentText color='darkGray'>
            LIKE LION 11기의 활동과 관련된 공지사항들이 모여있어요.
          </Typography>
          <Typography contentText color='darkGray'>
            중요한 공지들을 빠뜨리지 않도록 한 눈에 확인해보세요.
          </Typography>
          {user === 'ROLE_ADMIN' && (
            <>
              <Margin height='30' />{' '}
              <Typography sideContentSmall color='darkGray'>
                아기사자를 괴롭히고 싶다면?
              </Typography>
              <Margin height='5' />
              <div onClick={() => navigate('/notice/add/new')}>
                <ArrowButton>공지 생성하러가기</ArrowButton>
              </div>
            </>
          )}
        </Flex>
        <StyledImg alt='noticeListImg' src={noticeListImg} />
      </Flex>
      <Margin height='50' />
      <Flex flexCenter justify='space-between' style={{ width: '100%', marginLeft: '13px', flexWrap: 'wrap', gap: '10px' }}>
        <Typography pageTitle>공지사항 목록</Typography>
        <SelectCategoryButton setCategory={setCategory} setPart={setPart} part={part} />
      </Flex>

      <Margin height='20' />
      {temp.length === 0 ? (
        <>
          <Margin height='50' />
          <Typography contentTitle>
            {category === 'ALL' ? '11기 공통 공지는 아직 없습니다.' : `${category} 파트의 공지는 아직 없습니다.`}
          </Typography>
          <Margin height='10' />
          <Typography contentText color='darkGray'>
            다른 파트의 공지를 구경해보세요.
          </Typography>
        </>
      ) : (
        <>
          <ResultWrapper>
            <BarComponentContainer bars={temp} renderProp={(data) => <BarContentBox notification {...data} />} />
          </ResultWrapper>
          <Margin height='20' />
        </>
      )}
    </Layout>
  );
};

export default NoticeList;
