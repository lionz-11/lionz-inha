import React, { useState } from 'react';
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
import AssignmentBox from '../../component/AssignmentBox/AssignmentBox';
import HomeWorkContentContainer from './HomeWorkContentContainer';

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;
const tempData = [
  {
    name: '김사자1',
    date: '언제언제1',
    link: 'https://github.com/pakxe/lionz-fe',
    detail: '이건 과제설명입니다.1',
  },
  {
    name: '김사자2',
    date: '언제언제2',
    link: 'https://github.com/pakxe/lionz-fe',
    detail: '이건 과제설명입니다.2',
  },
  {
    name: '김사자3',
    date: '언제언제3',
    link: 'https://github.com/pakxe/lionz-fe',
    detail: '이건 과제설명입니다.3',
  },
];

const SubmitHomeWork = ({ data }) => (

  <Layout size='small'>
    <Header />
    <Margin height='98' />
    <HeadLine
      src={homeworkImg}
      mainTitle={['과제 작성 페이지입니다.']}
      subTitle={['아기사자들을 위한 과제 작성 페이지입니다.', '업로드 이전에 검토는 필수!']}
    />
    <Margin height='59' />
    <TitleContainer
      small
      mainTitle={['과제 설명을 작성해주세요.']}
      subTitle={['짧게 적어도 됩니다. 자신의 과제를 마음껏 표현해주세요.']}
      component={<InputBox text homework />}
    />
    <Margin height='68' />
    <TitleContainer
      small
      mainTitle={['과제 참고 링크']}
      subTitle={['깃허브 링크 또는 배포 링크를 첨부하면 됩니다.']}
      component={<InputBox input link />}
    />
    <ArrowButtonContainer text='과제 제출하기' />
    <Margin height='79' />
    <StyledFlex>
      <Typography pageTitle style={{ fontSize: '32px' }}>다른 사람의 과제 구경하기</Typography>
      <CountText count={tempData.length} />
    </StyledFlex>
    <Margin height='12' />
    <HomeWorkContentContainer data={tempData} />
  </Layout>
);

export default SubmitHomeWork;
