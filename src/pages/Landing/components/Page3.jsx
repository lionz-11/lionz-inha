import React from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import Landing3 from './landing3.png';
import Flex from '../../../component/Flex/Flex';

const SliderWrapper = styled.div`
  width: 920px;
  height: 566px;
  ${(props) => props.theme.flex.flexCenterColumn}
`;

const ImgWrapper = styled.img`
  position: relative;
  z-index: 2;
  top: -40px;
`;

const TextWrapper = styled(Flex)`
  position: relative;
  top: -60px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Title = styled(Typography)`
  position: relative;
  font-family: 'pretendard-semibold';
  font-size: 40px;
  line-height: 48px;
`;

const Detail = styled(Typography)`
  font-family: 'pretendard-regular';
  font-size: 16px;
  line-height: 19px;
  margin-top: 11px;
  text-align: center;
`;

const Page3 = () => (
  <SliderWrapper>
    <ImgWrapper src={Landing3} />
    <TextWrapper flexCenter column>
      <Title>모든건 당신의 손 끝에서.</Title>
      <Detail color='darkGray'>
        멋쟁이사자처럼 11기와 함께할 준비가 되셨나요?
        <br />
        멋쟁이사자처럼과 함께하게 되신 11기 여러분을 환영합니다.
      </Detail>
    </TextWrapper>
  </SliderWrapper>
);

export default Page3;
