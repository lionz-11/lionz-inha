import { useState, useEffect } from 'react';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';

const CountTime = ({ deadline }) => {
  const [restDate, setRestDate] = useState(0);
  const [restHour, setRestHour] = useState(0);
  const [restMinute, setRestMinute] = useState(0);
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const curTime = new Date();
      const diff = new Date(deadline) - curTime;
      if (diff >= 0) {
        setRestDate(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setRestHour(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setRestMinute(Math.floor((diff / (1000 * 60)) % 60));
      }
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, [deadline]);

  useEffect(() => {
    if (restDate === 0 && restHour === 0 && restMinute === 0) setIsZero(true);
    else setIsZero(false);
  }, [restDate, restHour, restMinute]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Typography contentText color='darkGray'>
        과제 마감까지
      </Typography>
      <Margin height='8' />
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <Typography header color={isZero ? 'red' : 'black'} style={{ letterSpacing: '0.01em' }}>
          {restDate}
        </Typography>
        <Margin width='3' />
        <Typography sideContentBold color={isZero ? 'red' : 'black'}>
          일
        </Typography>
        <Margin width='8' />
        <Typography header color={isZero ? 'red' : 'black'} style={{ letterSpacing: '0.01em' }}>
          {restHour}
        </Typography>
        <Margin width='3' />
        <Typography sideContentBold color={isZero ? 'red' : 'black'}>
          시간
        </Typography>
        <Margin width='8' />
        <Typography header color={isZero ? 'red' : 'black'} style={{ letterSpacing: '0.01em' }}>
          {restMinute}
        </Typography>
        <Margin width='3' />
        <Typography sideContentBold color={isZero ? 'red' : 'black'}>
          분
        </Typography>
      </div>
    </div>
  );
};

export default CountTime;
