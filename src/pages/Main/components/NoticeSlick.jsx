import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import NoticeBox from './NoticeBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './mainSlick.css';
import ArrowButton from '../../../component/ArrowButton/ArrowButton';
import Flex from '../../../component/Flex/Flex';
import Margin from '../../../component/Margin/Margin';

const StyledSlider = styled(Slider)`
  width: 582px;
  height: 432px;
  border-radius: 10px;
  ${(props) => props.theme.box}
  transition: 0.5s;
`;

const StyledArrow = styled(ArrowButton)`
  position: fixed;
  bottom: 100px;
`;

const NoticeSlick = () => {
  const navigate = useNavigate();
  const dataSet = {
    title: '인하대 멋사 11기 OT 안내',
    contents: '인하대 멋쟁이사자처럼 11기와 함께 하게되신 아기사자 여러분들, 진심으로 환영합니다! ...',
    writer: 'FE',
    date: '2001년 03월 24일',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    slidesTosShow: 2,
    slidesToScroll: 1,
    dotsClass: 'dots_custom_main',
  };

  const moveToNotice = () => {
    navigate('/notice-list');
  };

  return (
    <Flex flexCenter column align='flex-end' style={{ marginTop: '30px' }}>
      <StyledSlider {...settings}>
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
        <NoticeBox data={dataSet} />
      </StyledSlider>
      <Margin height='10' />
      <StyledArrow onClick={moveToNotice}>공지 전체보기</StyledArrow>
    </Flex>
  );
};

export default NoticeSlick;
