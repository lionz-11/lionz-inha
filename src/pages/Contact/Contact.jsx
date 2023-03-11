import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import TitleSet from '../../component/TitleSet/TitleSet';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import contactImage from './contactImage.png';
import ContactContainer from './ContactContainer';

const list = [
  {
    name: '가나다',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '가나라',
    job: 'BE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'STF',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '가',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '가',
    job: 'STF',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '나',
    job: 'STF',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
  {
    name: '박사자',
    job: 'FE',
    config:
      '안녕하세요. 잘부탁드립니다.안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다안녕하세요. 잘부탁드립니다',
    phone: '010-1111-1111',
    subject: '미디어커뮤니케이션학과',
    studentId: '12222222',
  },
];

const Contact = () => (
  <Layout>
    <Header />
    <HeadLine
      src={contactImage}
      mainTitle={['이곳은 연락처 페이지입니다.']}
      subTitle={['11기 여러분들을 환영합니다! 앞으로 모르는 것이 있다면 STAFF를 괴롭히면 됩니다.']}
    />
    <ContactContainer isStaff data={list} />
  </Layout>
);

export default Contact;
