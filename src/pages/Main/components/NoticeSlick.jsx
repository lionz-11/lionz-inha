import { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [noticeList, setNoticeList] = useState([
    {
      title: '',
      explanation: '',
      date: '',
      target: '',
      id: '',
    },
  ]);

  useEffect(() => {
    // 공지 리스트 불러오기
    axios
      .get(`${process.env.REACT_APP_API}/notice`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        console.log(r.data.data);
        setNoticeList(r.data.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    slidesTosShow: 2,
    slidesToScroll: 1,
    dotsClass: 'dots_custom_main',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const moveToNotice = () => {
    navigate('/notice-list');
  };

  return (
    <Flex flexCenter column align='flex-end' style={{ marginTop: '30px' }}>
      <StyledSlider {...settings}>
        {noticeList.map((data) => (
          <NoticeBox
            onClick={() => navigate(`/notice-info/${data.id}`)}
            key={data.id}
            title={data.title}
            explanation={data.explanation}
            target={data.target}
            date={data.date}
          />
        ))}
      </StyledSlider>
      <Margin height='10' />
      <StyledArrow onClick={moveToNotice}>공지 전체보기</StyledArrow>
    </Flex>
  );
};

export default NoticeSlick;
