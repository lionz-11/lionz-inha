import Layout from '../../component/Layout/Layout';
import BarContentBox from '../../component/BarContentBox/BarContentBox';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
// https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg

const dummy = {
  title: '이건 과제 제목입니다',
  contents:
    '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
  writer: 'FE',
  date: '마감일: 2001년 03월 24일',
  profileImg: 'https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg',
  photo: 'https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg',
};

const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));

const Home = () => (
  <Layout>
    <PhotoContentContainer haveProfile data={a} />
    <PhotoContentContainer data={a} />
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
