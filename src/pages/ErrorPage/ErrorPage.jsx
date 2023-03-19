import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import errorPageimg from './errorPageimg.png';
import ArrowButton from '../../component/ArrowButton/ArrowButton';

const Four04 = styled(Typography)`
  font-family: 'pretendard-semibold';
  font-size: 128px;
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Layout hiddenOverflow='hidden'>
      <Header onlyTitle />
      <Flex column align='center' justify='center' style={{ width: '100vw', height: 'calc(100vh - 50px)' }}>
        <Margin height='40' />
        <Four04>404</Four04>
        <Margin height='3' />
        <Typography pageTitle>NOT FOUND</Typography>
        <div style={{ position: 'relative', bottom: '40px' }}>
          <img height='250' src={errorPageimg} alt='errorImage' />
        </div>
        <Margin height='7' />
        <Typography sideContentSmall color='gray'>
          잘못된 접근이에요! 홈으로 돌아갈까요?
        </Typography>
        <Margin height='10' />
        <div onClick={() => navigate('/')}>
          <ArrowButton>홈으로 돌아가기</ArrowButton>
        </div>
      </Flex>
    </Layout>
  );
};

export default ErrorPage;
