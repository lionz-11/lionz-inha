import Button from '../../component/Button/Button';
import Flex from '../../component/Flex/Flex';
import Typography from '../../component/Typography/Typography';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';

const Home = () => (
  <Layout>
    <Header />
    <Margin height={200} />
    <Typography header>hi</Typography>
    <Typography semiHeader>hi</Typography>
    <Typography contentTitle>hi</Typography>
    <Typography small>hi</Typography>
    <Flex justify='space-between'>
      <h1>h1</h1>
      <h1>h1</h1>
    </Flex>
    <Button>🙏 새 글 작성</Button>
    <Button color='darkGray'>🙏 새 글 작성</Button>
    <Button small>✔️ Today</Button>
    <Button textButton color='red'>
      작성
    </Button>
    <Button textButtonSmall color='blue'>
      추가
    </Button>
  </Layout>
);

export default Home;
