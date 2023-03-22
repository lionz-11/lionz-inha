import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import TitleSet from '../../component/TitleSet/TitleSet';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import contactImage from './contactImage.png';
import ContactContainer from './ContactContainer';

const Contact = () => {
  const [list, setList] = useState([]);
  const [part, setPart] = useState('');
  const [authority, setAuthority] = useState('');

  useEffect(() => {
    // 유저의 파트 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setPart(r.data.part);
        setAuthority(r.data.authority);
      });

    // 모든 유저 정보 받아오기
    axios
      .get(`${process.env.REACT_APP_API}/member/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setList(r.data.data);
      });
  }, []);

  return (
    <Layout>
      <Header />
      <HeadLine
        src={contactImage}
        mainTitle={['이곳은 연락처 페이지입니다.']}
        subTitle={['11기 여러분들을 환영합니다! 앞으로 모르는 것이 있다면 STAFF를 괴롭히면 됩니다.']}
      />
      {part === '' ? '로딩중입니다.' : <ContactContainer isStaff={authority === '"ROLE_ADMIN"'} data={list} />}
    </Layout>
  );
};

export default Contact;
