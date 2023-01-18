import Button from '../../component/Button/Button';
import Flex from '../../component/Flex/Flex';
import Typography from '../../component/Typography/Typography';

const Home = () => (
  <>
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
  </>
);

export default Home;
