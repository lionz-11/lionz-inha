import React from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import Landing2 from '../images/landing2.png';
import Flex from '../../../component/Flex/Flex';

const SliderWrapper = styled.div`
  width: 920px;
  height: 566px;
  ${(props) => props.theme.flex.flexCenter}
`;

const ImgWrapper = styled.img`
  position: relative;
`;

const TextWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: flex-end;
`;

const Title = styled(Typography)`
  position: relative;
  font-family: 'pretendard-semibold';
  font-size: 40px;
  line-height: 48px;
  text-align: right;
`;

const Detail = styled(Typography)`
  font-family: 'pretendard-regular';
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  margin-top: 35px;
`;

const Page1 = () => (
  <SliderWrapper>
    <ImgWrapper src={Landing2} />
    <TextWrapper flexCenter column>
      <Title>
        공지,
        <br />
        과제,
        <br />
        일정을
        <br />한 곳에서
      </Title>
      <Detail color='darkGray'>
        멋쟁이사자처럼 11기 활동에
        <br />
        필요한 정보를 한 눈에 확인해보세요.
      </Detail>
    </TextWrapper>
  </SliderWrapper>
);

export default Page1;
