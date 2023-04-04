import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import HeadLine from '../../component/HeadLine/HeadLine';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import ScheduleCategory from './components/ScheduleCategory';
import scheduleImg from './scheduleImg.png';

const TitleWrapper = styled.div`
  width: 40vw;
`;

const Schedule = () => {
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {}, [currentCategory]);

  return (
    <Layout>
      <Header />
      <TitleWrapper>
        <HeadLine
          src={scheduleImg}
          mainTitle={['일정 페이지입니다.']}
          subTitle={['멋쟁이사자처럼 11기의 활동 일정을 확인할 수 있어요.', '카테고리별로 일정을 구분해 볼 수 있어요.']}
        />
      </TitleWrapper>
      <Margin height='50' />
      <ScheduleCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
    </Layout>
  );
};

export default Schedule;
