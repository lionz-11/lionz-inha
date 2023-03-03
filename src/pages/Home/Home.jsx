import Layout from '../../component/Layout/Layout';
// const dummy = {
//   title: '이건 과제 제목입니다',
//   contents:
//     '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
//   writer: 'FE',
//   date: '마감일: 2001년 03월 24일',
// };

// const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));
import s from '../../assets/svgs/logo192.png';

const Home = () => (
  <Layout>
    <img src='logo192.png' alt='public안에 사진두기' />
    <img src={require('../../assets/svgs/logo192.png')} alt='src안에 사진두기1' />
    <img src={s} alt='src안에 사진두가2' />
  </Layout>
);

export default Home;
