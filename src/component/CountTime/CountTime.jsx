import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';

const CountTime = ({ day, hour, min }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
    <Typography contentText color='darkGray'>
      과제 마감까지
    </Typography>
    <Margin height='8' />
    <div style={{ display: 'flex', alignItems: 'end' }}>
      <Typography header style={{ letterSpacing: '0.01em' }}>
        {day}
      </Typography>
      <Typography sideContentBold>일</Typography>
      <Margin width='8' />
      <Typography header style={{ letterSpacing: '0.01em' }}>
        {hour}
      </Typography>
      <Typography sideContentBold>시간</Typography>
      <Margin width='8' />
      <Typography header style={{ letterSpacing: '0.01em' }}>
        {min}
      </Typography>
      <Typography sideContentBold>분</Typography>
    </div>
  </div>
);

export default CountTime;
