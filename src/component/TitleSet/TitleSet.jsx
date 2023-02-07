import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';
import Flex from '../Flex/Flex';

// 컬러 변경과 사이즈 지정을 위해 props 사용
const StyledTypo = styled(Typography)`
  color: ${(props) => (props.alert === 'red' ? props.theme.colors.pointRed : props.theme.colors.black)};
  font-size: ${(props) => (props.size === 'small' ? 32 : 40)}px;
`;

const TitleSet = ({ title, subtitle, size, alert }) => (
  <Flex flexCenter column align='baseline'>
    <StyledTypo pageTitle size={size} alert={alert}>
      {title}
    </StyledTypo>
    <Margin height={9} />
    <Typography contentText color='darkGray'>
      {subtitle}
    </Typography>
  </Flex>
);

export default TitleSet;

/*
아래와 같이 줄바꿈이 필요한 경우, 배열의 형태로 넘겨줄 것.

<TitleSet
    title='과제 설명'
    subtitle={[
        '이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.',
        <br />,
        '격려의 말이나 도움을 주는 말을 더해도 되구요.',
    ]}
    size='small'
    alert='red'
/>

*/
