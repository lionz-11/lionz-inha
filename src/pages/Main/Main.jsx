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

const StyledImg = styled.img`
  @media (max-width: 805px) {
    display: none;
  }
`;

const TopWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;

  @media (max-width: 805px) {
    margin-top: 40px;
    margin-bottom: 40px;
    padding-left: 10px;
  }
`;

const BottomWrapper = styled(Flex)`
  width: 805px;
  justify-content: space-between;
  position: relative;
  top: -200px;

  @media (max-width: 805px) {
    top: 0;
    width: 100%;
    flex-direction: column;
  }
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
    <Layout size='main'>
      <Header />
      <TopWrapper>
        <Flex column align='baseline' style={{ width: '100%' }}>
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
        <StyledImg src={MainImg} alt='mainImage' />
      </TopWrapper>
      <BottomWrapper>
        <NoticeSlick />
        <Buttons />
      </BottomWrapper>
    </Layout>
  );
};

export default Main;
