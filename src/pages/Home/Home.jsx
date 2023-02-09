import { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import AssignmentBox from '../../component/AssignmentBox/AssignmentBox';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
import TextButton from '../../component/TextButton/TextButton';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import TitleSet from '../../component/TitleSet/TitleSet';
import CountText from '../../component/CountText/CountText';
import InputBox from '../../component/InputBox/InputBox';
import Margin from '../../component/Margin/Margin';

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
      <SelectCategoryButton />
      <ArrowButton text='시작하기' />
      <ArrowButton text='완료' size='small' />
      <TitleSet
        title='검색 페이지입니다.'
        subtitle={['찾아보고 싶은 공지나 과제를 검색해서 간편하게 확인할 수 있어요.', <br />, '태그로도 검색할 수 있어요.']}
      />
      <TitleSet
        title='과제 설명'
        subtitle={[
          '이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.',
          <br />,
          '격려의 말이나 도움을 주는 말을 더해도 되구요.',
        ]}
        size='small'
        alert='red'
      />
      <CountText unit='ea' count='1' />
      <CountText count='8' />
      <InputBox input login placeholder='아이디' />
      <Margin height='10' />
      <InputBox input login alert placeholder='비밀번호' />
      <Margin height='10' />
      <InputBox input search placeholder='검색어 입력' />
      <Margin height='10' />
      <InputBox input title />
      <Margin height='10' />
      <InputBox input link />
      <Margin height='10' />
      <InputBox text detail />
    </Layout>
  );
};

export default Home;
