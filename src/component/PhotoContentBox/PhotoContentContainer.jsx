import styled from 'styled-components';
import PhotoContentBox from './PhotoContentBox';

const List = styled.div`
  width: 100%;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;

  // 브라우저 폭이 800보다 작아지면 포토박스가 구겨지지않게 wrap해주기
  @media (max-width: 1060px) {
    flex-wrap: wrap;
  }
`;

// const dummy = {
//   title: '이건 과제 제목입니다',
//   contents: '건 과제 소개 입니다.이건',
//   writer: 'FE',
//   date: '마감일: 2001년 03월 24일',
// };

// const a = new Array(3).fill(0).map((_, i) => ({ ...dummy, id: i }));

// data = title, contents, writer, date 프로퍼티를 포함한다.
const PhotoContentContainer = ({ data }) => (
  <List>
    {data.map((d) => (
      <PhotoContentBox key={d.id} data={d} />
    ))}
  </List>
);

export default PhotoContentContainer;
