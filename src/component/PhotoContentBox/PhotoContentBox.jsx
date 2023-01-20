import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Container = styled.article`
  margin: 1rem; // 박스들 사이를 띄우기 위함
  width: 416px; // 뭐로 바꾸던..
  border-radius: 10px;
  box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.25);
  background-color: white;
  overflow: hidden; // 사진이 틀밖으로 나가지 않게한다.
`;

// 사진을 넣을 컴포넌트! 임시로 만들어놨다.
const Photo = styled.div`
  width: 100%;
  padding-top: 56%;
  background-color: #a7bdc1;
`;

const MainContent = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

const SideContent = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const Separator = styled.div`
  margin: 0 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const Title = styled.h2`
  ${(props) => props.theme.font.contentTitle};
  padding-bottom: 1.1rem;
`;

const Contents = styled(Typography)`
  height: 2.3rem;
  overflow: hidden;
`;

const PhotoContentBox = ({ data }) => {
  const { title, contents, writer, date } = data;

  return (
    <Container>
      <Photo />
      <MainContent>
        <Title>{title}</Title>
        <Contents contentText>{contents}</Contents>
      </MainContent>
      <Separator />
      <SideContent>
        <Typography contentText>{writer}</Typography>
        <Typography sideContentSmall color='gray'>
          {date}
        </Typography>
      </SideContent>
    </Container>
  );
};

export default PhotoContentBox;
