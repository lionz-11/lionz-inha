import React from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import { ReactComponent as Landing1 } from './landing1.svg';
import Flex from '../../../component/Flex/Flex';

const SliderWrapper = styled.div`
  width: 920px;
  height: 566px;
`;

const Hello = styled(Typography)`
  position: relative;
  top: -375px;
  left: 145px;
  font-family: 'pretendard-semibold';
  font-size: 64px;
`;

const TextWrapper = styled(Flex)`
  position: relative;
  top: -190px;
  right: -135px;
`;

const Likelion = styled(Typography)`
  font-family: 'pretendard-semibold';
  font-size: 64px;
`;

const InhaUniv = styled(Typography)`
  font-family: 'pretendard-semibold';
  font-size: 20px;
`;

const Page1 = () => (
  <SliderWrapper>
    <Landing1 style={{ position: 'relative', left: '180px', zIndex: '2', top: '-8px' }} />
    <Hello>HELLO</Hello>
    <TextWrapper flexCenter column justify='center'>
      <Likelion>LIKE LION</Likelion>
      <InhaUniv color='darkGray'>INHA UNIV</InhaUniv>
    </TextWrapper>
  </SliderWrapper>
);

export default Page1;
