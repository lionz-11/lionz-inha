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
        console.log(r.data.data);
        setNotice(r.data.data);
        setTemp(notice.filter(({ target }) => target === category));
      });
  }, []);

  useEffect(() => {
    setTemp(notice.filter(({ target }) => target === category));
  }, [category]);

  return (
    <Layout>
      <Header />
      <Margin height='99' />
      <Flex flexCenter justify='space-between' style={{ width: '100%', marginLeft: '13px' }}>
        <Flex flexCenter column align='baseline'>
          <Typography pageTitle>공지사항 페이지입니다.</Typography>
          <Margin height='9' />
          <Typography contentText color='darkGray'>
            LIKE LION 11기의 활동과 관련된 다양한 공지사항들이 모여있어요.
          </Typography>
          <Typography contentText color='darkGray'>
            중요한 공지들을 빠뜨리지 않도록 한 눈에 확인해볼 수 있어요.
          </Typography>
          {user === 'ROLE_ADMIN' && (
            <>
              <Margin height='30' />{' '}
              <Typography sideContentSmall color='darkGray'>
                아기사자를 괴롭히고 싶다면?
              </Typography>
              <Margin height='5' />
              <div onClick={() => navigate('/notice/add/new')}>
                <ArrowButton>과제 생성하러가기</ArrowButton>
              </div>
            </>
          )}
        </Flex>
        <img alt='noticeListImg' src={noticeListImg} />
      </Flex>
      <Margin height='50' />
      <Flex flexCenter justify='space-between' style={{ width: '100%', marginLeft: '13px' }}>
        <Typography pageTitle>공지사항 목록</Typography>
        <SelectCategoryButton setCategory={setCategory} setPart={setPart} part={part} />
      </Flex>

      <Margin height='20' />
      <ResultWrapper>
        <BarComponentContainer bars={temp} renderProp={(props) => <BarContentBox noti {...props} />} />
      </ResultWrapper>
      <Margin height='20' />
    </Layout>
  );
};

export default NoticeList;
