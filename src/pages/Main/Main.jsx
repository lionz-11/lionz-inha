import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MainImg } from './svgs/mainImg.svg';
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
`;

const BottomWrapper = styled(Flex)`
  width: 805px;
  justify-content: space-between;
`;

const Main = () => (
  <Layout>
    <Header />
    <TopWrapper flexCenter>
      <Flex flexCenter column align='flex-start'>
        <Typography pageTitle style={{ textAlign: 'left' }}>
          모든건 당신의
          <br />손 끝에서.
        </Typography>
        <Margin height='10' />
        <Typography sideContent color='darkGray' style={{ textAlign: 'left' }}>
          <span style={{ color: '#4A90E2' }}>FE 박사자</span>님, 환영합니다.
        </Typography>
      </Flex>
      <MainImg />
    </TopWrapper>
    <BottomWrapper>
      <NoticeSlick />
      <Buttons />
    </BottomWrapper>
  </Layout>
);

export default Main;
