import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Header from '../../component/Header/Header';

const Home = () => (
  <Layout>
    <Header />
    <Typography pageTitle>이건 헤더</Typography>
    <Typography sideContent>hi</Typography>
    <Typography header>LIKELION</Typography>
  </Layout>
);

export default Home;
