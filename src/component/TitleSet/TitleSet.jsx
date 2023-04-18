import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';
import Flex from '../Flex/Flex';

// 컬러 변경과 사이즈 지정을 위해 props 사용
const StyledTypo = styled(Typography)`
  color: ${(props) => (props.alert ? props.theme.colors.pointRed : props.theme.colors.black)};
  font-size: ${(props) => (props.small ? 32 : 40)}px;
`;

const TitleSet = ({ mainTitle, subTitle, small, alert, margin }) => (
  <Flex flexCenter column align='baseline' margin={margin} style={{ wordBreak: 'keep-all' }}>
    {mainTitle.map((m) => (
      <StyledTypo key={m} pageTitle small={small} alert={alert}>
        {m}
      </StyledTypo>
    ))}
    <Margin height={small ? 0 : 9} />
    {subTitle.map((s) => (
      <Typography key={s} contentText color='darkGray'>
        {s}
      </Typography>
    ))}
  </Flex>
);

export default TitleSet;

/*
아래와 같이 줄바꿈이 필요한 경우, 배열의 형태로 넘겨줄 것.

      <TitleSet
        small
        alert
        maintitle={['과제 설명']}
        subtitle={['이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.', '격려의 말이나 도움을 주는 말을 더해도 되구요.']}
      />

*/
