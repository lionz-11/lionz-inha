import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import theme from '../../assets/theme/Theme';
import errorPageimg from './errorPageimg.png';

const Four04 = styled.p`
  font-family:'pretendard-semibold';
  weight:600;
  font-size:128px;
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <Layout>
      <Header />
      <Flex column>
        <Margin height='40' />
        <Four04>404</Four04>
        <Margin height='3' />
        <Typography pageTitle>NOT FOUND</Typography>
        <div style={{ position: 'relative', bottom: '40px' }}><img height='250' src={errorPageimg} alt='errorImage' /></div>
        <Margin height='7' />
        <Typography sideContentSmall color='gray'>잘못된 접근이에요! 홈으로 돌아갈까요?</Typography>
        <Margin height='10' />
        <Flex onClick={navigateToHome}>
          <Typography sideContent color='blue'>홈으로 돌아가기</Typography>
          <BsChevronRight color={theme.colors.blue} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default ErrorPage;
