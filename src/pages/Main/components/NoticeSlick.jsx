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
import Typography from '../../../component/Typography/Typography';

const StyledSlider = styled(Slider)`
  width: 582px;
  height: 432px;
  border-radius: 10px;
  ${(props) => props.theme.box}
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.white};
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

  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    hour = hour >= 10 ? hour : `0${hour}`;
    minute = minute >= 10 ? minute : `0${minute}`;
    second = second >= 10 ? second : `0${second}`;

    return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  useEffect(() => {
    // 공지 리스트 불러오기
    axios
      .get(`${process.env.REACT_APP_API}/notice`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setNoticeList(
          r.data.data.reverse().map((cur) => {
            const curDate = new Date(cur.date);
            curDate.setHours(curDate.getHours() + 9);
            return { ...cur, date: dateFormat(curDate) };
          }),
        );
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    fade: false,
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
        {noticeList.length === 0 ? (
          <div>
            <Flex column justify='center' align='center' style={{ width: '582px', height: '432px', textAlign: 'center' }}>
              <Typography pageTitle>공지가 존재하지 않습니다</Typography>
              <Margin height='20' />
              <Typography sideContent color='darkGray'>
                업로드된 공지가 존재하지 않습니다. <br />
                관련 사항은 운영진에게 문의해주세요.
              </Typography>
            </Flex>
          </div>
        ) : (
          noticeList
            .slice(0, 6)
            .map((notice) => (
              <NoticeBox
                id={notice.id}
                key={notice.id}
                title={notice.title}
                explanation={notice.explanation}
                target={notice.target}
                date={notice.date}
              />
            ))
        )}
      </StyledSlider>
      <Margin height='10' />
      <StyledArrow onClick={moveToNotice}>공지 전체보기</StyledArrow>
    </Flex>
  );
};

export default NoticeSlick;
