import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';
import Margin from '../Margin/Margin';

const CountText = ({ unit, count }) => (
  <Flex flexCenter>
    <Typography contentText color='darkGray'>
      {unit === 'ea' ? '지금까지 제출한 과제' : '현재 제출 인원'}
    </Typography>
    <Margin width='13' />
    <Typography header style={{ fontSize: '30px', marginBottom: '10px' }}>
      {count}
    </Typography>
    <Typography sideContentBold>{unit === 'ea' ? '개' : '명'}</Typography>
  </Flex>
);

export default CountText;
