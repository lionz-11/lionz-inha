import styled from 'styled-components';
import PhotoContentBox from './PhotoContentBox';

const List = styled.div`
  display: flex;
  width: calc(100%);
  padding: 20px 10px;
  gap: 2rem;
  overflow-x: scroll;
  overflow-y: visible;

  ::-webkit-scrollbar {
    height: 10px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 10px; /* 스크롤바의 길이 */
    background: ${(props) => props.theme.colors.gray}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${(props) => props.theme.colors.veryLightBlue}; /*스크롤바 뒷 배경 색상*/
  }
`;

const PhotoContentContainer = ({ data }) => (
  <List>
    {data.map((d) => (
      <PhotoContentBox key={d.id} data={d} />
    ))}
  </List>
);

export default PhotoContentContainer;
