import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Margin from '../../../component/Margin/Margin';
import Typography from '../../../component/Typography/Typography';
import Flex from '../../../component/Flex/Flex';
import ALL from './ALL.png';
import FE from './FE.png';
import BE from './BE.png';

// 캐러셀을 안썼으므로 3개까지만 예쁘게 보임
const Box = styled(Flex)`
  width: 582px;
  height: 432px;
  border-radius: 10px;
  ${(props) => props.theme.box}
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden; // 사진이 틀밖으로 나가지 않게한다.
  cursor: pointer;
`;

// 사진을 넣을 컴포넌트! 임시로 만들어놨다.
const Photo = styled(Flex)`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MainContent = styled.div`
  width: 513px;
`;

const SideContent = styled(Flex)`
  width: 513px;
  justify-content: space-between;
`;

const Separator = styled.hr`
  width: 513px;
  margin: 14px 0px;
  border: 0;
  height: 1px;
  background-color: #e3eaf0;
`;

const Title = styled.h2`
  ${(props) => props.theme.font.pageTitle};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled(Typography)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoticeBox = ({ id, title, explanation, target, date }) => {
  const navigate = useNavigate();

  return (
    <Box flexCenter column justify='flex-start' onClick={() => navigate(`/notice-info/${id}`)}>
      <Photo flexCenter>
        {target === 'ALL' && <img src={ALL} alt='img' />}
        {target === 'FE' && <img src={FE} alt='img' />}
        {target === 'BE' && <img src={BE} alt='img' />}
      </Photo>
      <Margin height='20' />
      <MainContent>
        <Title>{title}</Title>
        <Margin height='11' />
        <Contents contentText color='darkGray'>
          {explanation}
        </Contents>
      </MainContent>
      <Separator />
      <SideContent flexCenter>
        <Typography contentText>{target}</Typography>
        <Typography sideContentSmall color='gray'>
          작성일: {date}
        </Typography>
      </SideContent>
    </Box>
  );
};

export default NoticeBox;
