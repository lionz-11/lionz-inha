import { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import AssignmentBox from '../../component/AssignmentBox/AssignmentBox';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
import TextButton from '../../component/TextButton/TextButton';

const dummy = {
  title: '이건 과제 제목입니다',
  contents:
    '이건 과제 소개 입니다.이건 과제 소개 입니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 니다.이건 과제 소개 입니다.이건 과제 소개 입니다.이건',
  writer: 'FE',
  date: '마감일: 2001년 03월 24일',
};

const a = new Array(2).fill(0).map((_, i) => ({ ...dummy, id: i }));
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <PhotoContentContainer data={a} />
      <AssignmentBox
        date='3월 24일 13시 59분'
        src='https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg'
        name='박세현'
        detail='sss'
        link='https://www.naver.com'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <TextButton haveDelete />
      <TextButton />
    </Layout>
  );
};

export default Home;
