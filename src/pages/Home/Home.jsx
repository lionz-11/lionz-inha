import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';

const Home = () => (
  <Layout>
    <Header />
    <Footer />
    <BarContentBox tag='FE' title='이건 과제임' assignment date='03월 24일 18시' submissionStatus='제출 완료' />
    <BarContentBox tag='FE' title='이건 과제임' assignment date='03월 24일 18시' submissionStatus='대상 아님' />
    <BarContentBox tag='FE' title='이건 과제임' assignment date='03월 24일 18시' submissionStatus='미제출' />
  </Layout>
);

export default Home;
