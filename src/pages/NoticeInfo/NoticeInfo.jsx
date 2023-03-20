import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  const infoArray = useState({
    title: '멋쟁이 사자처럼 11기 OT 안내',
    category: 'ALL',
    date: 'qwdqwd',
    tag: ['React', 'React Router', 'Styled-component'],
    text: '(여기엔 카톡에 공지할때 쓰는 내용을 복붙해서 넣으면 좋습니다~, 과제에 대한 간략한 안내, 설명, 팁같은걸 넣어도 좋구요 리드미에는 과제에 대한 설명만 쓰도록 합시다!) 이번 과제는 서버와 통신하기 위한 도구인 useEffect에 대해서 배워봅시다. 지금 잘 배워둬야 나중에 해커톤에서 잘 쓸 수 있습니다~!! 어려운게 당연하므로 열심히 해봅시다 마감일은 03월 24일 18시 까지입니다.',
  });

  return (
    <Layout style={{ textAlign: 'left' }}>
      <Header />
      <InnerWrapper flexCenter column>
        <Margin height='160' />
        <Flex flexCenter justify='space-between' style={{ width: '100%' }}>
          <Typography header style={{ fontSize: '48px', letterSpacing: '0.04em' }}>
            {infoArray[0].title}
          </Typography>
          {user === 'Admin' && <TextButton haveDelete />}
        </Flex>
        <Margin height='30' />
        <Typography contentText color='darkGray'>{`${infoArray[0].category} • 게시일 : ${infoArray[0].date}`}</Typography>
        <Margin height='16' />
        <Flex flexCenter justify='space-between' style={{ width: '100%' }}>
          <TagContainer tag={infoArray[0].tag} />
          <LikeAndShare />
        </Flex>

        <Margin height='69' />
        <Typography contentText>{infoArray[0].text}</Typography>
      </InnerWrapper>
    </Layout>
  );
};

export default NoticeInfo;
