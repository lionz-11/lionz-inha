import styled from 'styled-components';
import PhotoContentBox from './PhotoContentBox';

const List = styled.div`
  display: flex;
  width: calc(100% + 20px);
  padding: 10px;
  gap: 2rem;
  overflow-x: scroll;
  overflow-y: visible;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const PhotoContentContainer = ({ data }) => (
  <List>
    {data.map((d) => (
      <PhotoContentBox key={d.id} data={d} />
    ))}
  </List>
);

export default PhotoContentContainer;
