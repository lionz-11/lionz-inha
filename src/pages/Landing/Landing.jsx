import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from 'react-slick';
import './components/landingSlick.css';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Flex from '../../component/Flex/Flex';

const StyledSlider = styled(Slider)`
  width: 920px;
  height: 566px;
`;

const StyledLeftArrow = styled(BsChevronLeft)`
  font-size: 24px;
`;

const StyledRightArrow = styled(BsChevronRight)`
  font-size: 24px;
`;

const Landing = () => {
  const settings = {
    dots: true,
    infinite: false,
    fade: true,
    speed: 500,
    arrows: false,
    slidesTosShow: 1,
    slidesToScroll: 1,
    dotsClass: 'dots_custom_landing',
  };

  return (
    <Layout>
      <Header onlyTitle />
      <Flex
        flexCenter
        column
        align='center'
        justify='center'
        style={{ width: '100vw', height: 'calc(100vh - 50px)', verticalAlign: 'middle' }}
      >
        <Flex flexCenter>
          <StyledLeftArrow style={{ cursor: 'pointer' }} />
          <StyledSlider {...settings}>
            <Page1 />
            <Page2 />
            <Page3 />
          </StyledSlider>
          <StyledRightArrow style={{ cursor: 'pointer' }} />
        </Flex>
        <ArrowButton>시작하기</ArrowButton>
      </Flex>
    </Layout>
  );
};

export default Landing;
