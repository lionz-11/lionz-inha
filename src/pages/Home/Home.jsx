import PageTitle from '../../component/PageTitle/PageTitle';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';

const Home = () => (
  <Layout>
    <Header />
    <Margin height={200} />
    <PageTitle>
      페이지
      <span> 타이틀 </span>
      입니다.
    </PageTitle>
  </Layout>
);

export default Home;
