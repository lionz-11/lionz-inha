import Layout from '../../component/Layout/Layout';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
import Typography from '../../component/Typography/Typography';

const dummy = {
  title: '이건 과제 제목입니다',
  contents:
    '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
  writer: 'FE',
  date: '마감일: 2001년 03월 24일',
};

const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));

const Home = () => (
  <Layout>
    <Typography pageTitle>이건 헤더</Typography>
    <Typography sideContent>hi</Typography>
    <Typography header>LIKELION</Typography>
    <PhotoContentContainer data={a} />
    <PhotoContentContainer haveProfile data={a} />
  </Layout>
);

export default Home;
