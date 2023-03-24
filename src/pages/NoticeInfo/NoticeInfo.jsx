import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import TagContainer from '../../component/TagContainer/TagContainer';
import LikeAndShare from '../../component/LikeAndShare/LikeAndShare';
import TextButton from '../../component/TextButton/TextButton';

const InnerWrapper = styled(Flex)`
  width: 100%;
  max-width: 852px;
  text-align: left;
  align-items: baseline;
  text-align: left;
`;

const NoticeInfo = () => {
  const { noticeIndex } = useParams();
  const [user, setUser] = useState('Admin');
  const [category, setCategory] = useState('ALL');
  const [part, setPart] = useState({ user: '', selected: '' });
  const [noticeInfo, setNoticeInfo] = useState({
    date: '',
    deadline: '',
    explanation: '',
    id: -1,
    tag: [],
    target: '',
    title: '',
  });

  useEffect(() => {
    // 유저의 파트 정보 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        setPart({ ...part, user: r.data.part });
        setUser(r.data.authority);
      });
    // 공지 내용 얻어오기
    axios
      .get(`${process.env.REACT_APP_API}/notice/${noticeIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setNoticeInfo(r.data);
      });
  }, []);

  return (
    <Layout style={{ textAlign: 'left' }}>
      <Header />
      <InnerWrapper flexCenter column>
        <Margin height='160' />
        <Flex flexCenter justify='space-between' style={{ width: '100%' }}>
          <Typography header style={{ fontSize: '48px', letterSpacing: '0.04em' }}>
            {noticeInfo.title}
          </Typography>
          {user === 'ROLE_ADMIN' && <TextButton haveDelete />}
        </Flex>
        <Margin height='30' />
        <Typography contentText color='darkGray'>{`${noticeInfo.target} • 게시일 : ${noticeInfo.date}`}</Typography>
        <Margin height='16' />
        <Flex flexCenter justify='space-between' style={{ width: '100%' }}>
          <TagContainer tag={noticeInfo.tag} />
          <LikeAndShare />
        </Flex>

        <Margin height='69' />
        <Typography contentText>{noticeInfo.explanation}</Typography>
      </InnerWrapper>
    </Layout>
  );
};

export default NoticeInfo;
