import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import Typography from '../../component/Typography/Typography';
import Flex from '../../component/Flex/Flex';
import TagContainer from '../../component/TagContainer/TagContainer';
import LikeAndShare from '../../component/LikeAndShare/LikeAndShare';
import CountText from '../../component/CountText/CountText';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import CountTime from '../../component/CountTime/CountTime';

const InnerWrapper = styled(Flex)`
  width: 100%;
  max-width: 852px;
  text-align: left;
  align-items: baseline;
  text-align: left;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.blue};
  ${(props) => props.theme.font.sideContentSmall};
`;

const InfoBox = styled.div`
  width: 100%;
  height: 104px;
  padding: 0px 25px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.veryLightBlue};
  ${(props) => props.theme.flex.flexCenter};
  justify-content: space-between;
`;

const HomeworkInfo = () => {
  const { homeworkIndex } = useParams();
  const [user, setUser] = useState('Admin');
  const [isComplete, setIsComplete] = useState(true);
  const [infoButtonText, setInfoButtonText] = useState('');
  const [subInfoButtonText, setSubInfoButtonText] = useState('');

  const infoArray = useState({
    title: 'React Hooks를 배워보기!',
    category: 'FE',
    date: 'qwdqwd',
    gitUrl: 'https://github.com/pakxe/lionz-fe',
    completed: 8,
    tag: ['React', 'React Router', 'Styled-component'],
    text: '(여기엔 카톡에 공지할때 쓰는 내용을 복붙해서 넣으면 좋습니다~, 과제에 대한 간략한 안내, 설명, 팁같은걸 넣어도 좋구요 리드미에는 과제에 대한 설명만 쓰도록 합시다!) 이번 과제는 서버와 통신하기 위한 도구인 useEffect에 대해서 배워봅시다. 지금 잘 배워둬야 나중에 해커톤에서 잘 쓸 수 있습니다~!! 어려운게 당연하므로 열심히 해봅시다 마감일은 03월 24일 18시 까지입니다.',
  });

  useEffect(() => {
    if (user === 'Admin') {
      setSubInfoButtonText('운영진 이시네요');
      setInfoButtonText('아기사자 과제 구경하러가기');
    } else if (infoArray[0].category === 'FE') {
      if (isComplete) {
        setSubInfoButtonText('이미 제출했다면?');
        setInfoButtonText('과제 구경하러가기');
      } else setInfoButtonText('과제 제출하러가기');
    } else {
      setSubInfoButtonText('제출 대상이 아니라면');
      setInfoButtonText('과제 구경하러가기');
    }
  }, []);

  return (
    <Layout style={{ textAlign: 'left' }}>
      <Header />
      <InnerWrapper flexCenter column>
        <Margin height='160' />
        <Typography header style={{ fontSize: '48px', letterSpacing: '0.04em' }}>
          {infoArray[0].title}
        </Typography>
        <Margin height='30' />
        <Typography contentText color='darkGray'>{`${infoArray[0].category} • 마감일 : ${infoArray[0].date}`}</Typography>
        <Margin height='16' />
        <Flex flexCenter justify='space-between' style={{ width: '100%' }}>
          <TagContainer tag={infoArray[0].tag} />
          <LikeAndShare />
        </Flex>

        <Margin height='28' />
        <LinkContainer>
          <AiFillGithub size='30' style={{ marginRight: '20px' }} />
          <Link href={infoArray[0].gitUrl}>{infoArray[0].gitUrl}</Link>
        </LinkContainer>

        <Margin height='28' />
        <InfoBox>
          <CountTime day={3} hour={12} min={50} />
          <CountText unit='ea' count={infoArray[0].completed} />

          <Flex flexCenter column align='end'>
            {subInfoButtonText !== '' && (
              <Typography sideContentSmall color='darkGray' style={{ marginRight: '20px' }}>
                {subInfoButtonText}
              </Typography>
            )}
            <ArrowButton>{infoButtonText}</ArrowButton>
          </Flex>
        </InfoBox>

        <Margin height='69' />
        <Typography contentText>{infoArray[0].text}</Typography>
      </InnerWrapper>
    </Layout>
  );
};

export default HomeworkInfo;
