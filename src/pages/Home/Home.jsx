import Layout from '../../component/Layout/Layout';
import TextButton from '../../component/TextButton/TextButton';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import TitleSet from '../../component/TitleSet/TitleSet';
import CountText from '../../component/CountText/CountText';
import InputBox from '../../component/InputBox/InputBox';
import Margin from '../../component/Margin/Margin';
import LikeAndShare from '../../component/LikeAndShare/LikeAndShare';
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
      <TextButton haveDelete />
      <TextButton />
      <SelectCategoryButton />
      <ArrowButton text='시작하기' />
      <ArrowButton text='완료' small />
      <TitleSet
        mainTitle={['검색 페이지입니다.']}
        subTitle={['찾아보고 싶은 공지나 과제를 검색해서 간편하게 확인할 수 있어요.', '태그로도 검색할 수 있어요.']}
      />
      <TitleSet
        small
        alert
        mainTitle={['과제 설명']}
        subTitle={['이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.', '격려의 말이나 도움을 주는 말을 더해도 되구요.']}
      />
      <CountText unit='ea' count='1' />
      <CountText count='8' />
      <InputBox input login placeholder='아이디' />
      <Margin height='10' />
      <InputBox input login pw alert placeholder='비밀번호' />
      <Margin height='10' />
      <InputBox input search placeholder='검색어 입력' />
      <Margin height='10' />
      <InputBox input mainTitle />
      <Margin height='10' />
      <InputBox input link />
      <Margin height='10' />
      <InputBox text detail />
      <Margin height='10' />
      <InputBox text homework />
      <Margin height='10' />
      <InputBox input editPassword />
      <LikeAndShare like={like} setLike={() => setLike(!like)} />
    </Layout>
  );
};

export default Home;
