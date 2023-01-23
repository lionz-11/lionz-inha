import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';
// https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg

const Home = () => (
  <Layout>
    <Header />
    <Footer />
    <BarContentBox
      tag='FE'
      title='이건 과제임'
      date='03월 24일 18시'
      submissionStatus='제출 완료'
      writer='박사자'
      maximum='6'
      current='3'
      img='https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg'
    />
  </Layout>
);

export default Home;
