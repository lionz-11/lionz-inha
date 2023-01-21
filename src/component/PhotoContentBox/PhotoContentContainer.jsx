import styled from 'styled-components';
import PhotoContentBox from './PhotoContentBox';

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  /* @media (max-width: 1312px) {
    flex-wrap: wrap;
  } */
`;

const PhotoContentContainer = ({ data, haveProfile }) => (
  <List>
    {data.map((d) => (
      <PhotoContentBox key={d.id} data={d} haveProfile={haveProfile} />
    ))}
  </List>
);

export default PhotoContentContainer;
