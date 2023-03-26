import styled from 'styled-components';
import Margin from '../../../component/Margin/Margin';
import Typography from '../../../component/Typography/Typography';
import Flex from '../../../component/Flex/Flex';
import Example from './example.png';

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
`;

const Contents = styled(Typography)`
  overflow: hidden;
`;

const NoticeBox = ({ title, explanation, target, date, onClick }) => (
  <Box flexCenter column justify='flex-start' onClick={onClick}>
    <Photo flexCenter>
      <img src={Example} alt='img' />
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

export default NoticeBox;
