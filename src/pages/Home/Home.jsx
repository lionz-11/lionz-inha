import BarContentBox from '../../component/BarContentBox/BarContentBox';
import Layout from '../../component/Layout/Layout';
import Flex from '../../component/Flex/Flex';
import Margin from '../../component/Margin/Margin';

const dummy = {
  title: '이건 바컨텐츠박스의 제목입니다',
  tag: 'FE',
  maximum: 8,
  current: 3,
  date: '03월 24일 18시',
  writer: '박사자',
  end: false,
};

const Home = () => (
  <Layout>
    <Margin height='50px' />
    <Flex column style={{ width: '100%' }}>
      <BarContentBox {...dummy} />
      <BarContentBox {...dummy} assignment />
      <BarContentBox
        {...dummy}
        title='이건 overflow 테스트를 위한 긴 글입니다. 이건 overflow 테스트를 위한 긴 글입니다. 이건 overflow 테스트를 위한 긴 글입니다.'
      />
    </Flex>
  </Layout>
);

export default Home;
