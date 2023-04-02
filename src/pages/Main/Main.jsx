import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainImg from './images/mainImg.png';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Flex from '../../component/Flex/Flex';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import NoticeSlick from './components/NoticeSlick';
import Buttons from './components/Buttons';

const TopWrapper = styled(Flex)`
  width: 805px;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  padding-left: 21px;
  position: relative;
  top: 20px;
`;

const BottomWrapper = styled(Flex)`
  width: 805px;
  justify-content: space-between;
  position: relative;
  top: -140px;
`;

const Main = () => {
  const [name, setName] = useState('');
  const [part, setPart] = useState('');

  useEffect(() => {
    // user 정보 불러오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setName(r.data.name);
        setPart(r.data.part);
      });
  }, []);

  return (
    <Layout hiddenOverflow='hidden'>
      <Header />
      <Flex
        flexCenter
        column
        align='center'
        justify='center'
        style={{ width: '100vw', height: 'calc(100vh - 50px)', verticalAlign: 'middle' }}
      >
        <TopWrapper flexCenter>
          <Flex flexCenter column align='flex-start'>
            <Typography pageTitle style={{ textAlign: 'left' }}>
              모든건 당신의
              <br />손 끝에서.
            </Typography>
            <Margin height='10' />
            <Typography sideContent color='darkGray' style={{ textAlign: 'left' }}>
              <span style={{ color: part === 'FE' ? '#4a90e2' : '#e36675' }}>
                {part} {name}
              </span>
              님, 환영합니다.
            </Typography>
          </Flex>
          <img src={MainImg} alt='mainImage' />
        </TopWrapper>
        <BottomWrapper>
          <NoticeSlick />
          <Buttons />
        </BottomWrapper>
      </Flex>
    </Layout>
  );
};

export default Main;
