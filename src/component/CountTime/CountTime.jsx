import { useState, useEffect } from 'react';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';

const CountTime = ({ day, hour, min }) => {
  const endTime = new Date('2023-03-26');
  const [restDate, setRestDate] = useState(0);
  const [restHour, setRestHour] = useState(0);
  const [restMinute, setRestMinute] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const curTime = new Date();
      const diff = endTime - curTime;
      if (diff >= 0) {
        setRestDate(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setRestHour(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setRestMinute(Math.floor((diff / (1000 * 60)) % 60));
      }
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Typography contentText color='darkGray'>
        과제 마감까지
      </Typography>
      <Margin height='8' />
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <Typography header style={{ letterSpacing: '0.01em' }}>
          {restDate}
        </Typography>
        <Typography sideContentBold>일</Typography>
        <Margin width='8' />
        <Typography header style={{ letterSpacing: '0.01em' }}>
          {restHour}
        </Typography>
        <Typography sideContentBold>시간</Typography>
        <Margin width='8' />
        <Typography header style={{ letterSpacing: '0.01em' }}>
          {restMinute}
        </Typography>
        <Typography sideContentBold>분</Typography>
      </div>
    </div>
  );
};

export default CountTime;
