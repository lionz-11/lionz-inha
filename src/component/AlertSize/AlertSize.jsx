import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  text-align: center;
  z-index: 100;
  display: none;
  @media (max-width: 1312px) {
    ${(props) => props.theme.flex.flexCenterColumn}
  }
  @media (max-height: 800px) {
    ${(props) => props.theme.flex.flexCenterColumn}
  }
`;

const AlertSize = () => (
  <Wrapper>
    <Typography header color='white'>
      이런!
    </Typography>
    <Margin height='20' />
    <Typography buttonText color='white'>
      LIONZ는 1312px : 800px 미만 환경을 지원하지 않아요.
    </Typography>
    <Margin height='13' />
    <Typography buttonText color='gray'>
      창 크기를 전체 화면으로 변경하거나,
    </Typography>
    <Margin height='4' />
    <Typography buttonText color='gray'>
      더 큰 화면의 기기에서 접속해주세요.
    </Typography>
  </Wrapper>
);

export default AlertSize;
