import { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import LikeAndShare from '../../component/LikeAndShare/LikeAndShare';
import Typography from '../../component/Typography/Typography';
import Header from '../../component/Header/Header';
// const dummy = {
//   title: '이건 과제 제목입니다',
//   contents:
//     '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
//   writer: 'FE',
//   date: '마감일: 2001년 03월 24일',
// };

// const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));

const Home = () => {
  const [like, setLike] = useState(false);

  return (
    <Layout>
      <Header />
      <Typography pageTitle>이건 헤더</Typography>
      <Typography sideContent>hi</Typography>
      <Typography header>LIKELION</Typography>
      <LikeAndShare like={like} setLike={() => setLike(!like)} />
    </Layout>
  );
};

export default Home;
