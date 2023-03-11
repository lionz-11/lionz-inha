import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';

// 하단 정렬을 해보려고 했는데, 숫자가 말썽이라 숫자에 마진 주는걸로 해결했습니다.
// 좋은 방법 생각나시면 추천해주세요.
const CountText = ({ unit, count }) => (
  <div style={{ display: 'flex', alignItems: 'end' }}>
    <Typography contentText color='darkGray'>
      {unit === 'ea' ? '지금까지 제출한 과제' : '현재 제출 인원'}
    </Typography>
    <Margin width='13' />
    <Typography header>{count}</Typography>
    <Typography sideContentBold>{unit === 'ea' ? '개' : '명'}</Typography>
  </div>
);

export default CountText;
