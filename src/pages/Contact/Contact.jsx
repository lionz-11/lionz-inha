import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import TitleSet from '../../component/TitleSet/TitleSet';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import contactImage from './contactImage.png';
import ContactContainer from './ContactContainer';

const TopMargin = styled(Margin)`
  height: 0px;

  @media (max-width: 805px) {
    height: 40px;
  }
`;

const BottomMargin = styled(Margin)`
  height: 0px;

  @media (max-width: 805px) {
    height: 40px;
  }
`;

const Contact = () => {
  const navigate = useNavigate();
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
      <TopMargin />
      <HeadLine
        src={contactImage}
        mainTitle={['이곳은 연락처 페이지입니다.']}
        subTitle={['11기 여러분들을 환영합니다! 앞으로 모르는 것이 있다면 STAFF를 괴롭히면 됩니다.']}
      />
      <BottomMargin />
      {authority === '' ? (
        <>
          <Margin height='50' />
          <Typography contentTitle>로딩중입니다.</Typography>
          <Margin height='10' />
          <Typography contentText color='darkGray'>
            잠시만 기다려주세요.
          </Typography>
        </>
      ) : (
        <ContactContainer isStaff={authority} data={list} />
      )}
    </Layout>
  );
};

export default Contact;
