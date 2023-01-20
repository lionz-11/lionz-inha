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

const PhotoContentContainer = ({ data, haveProfile }) => (
  <List>
    {data.map((d) => (
      <PhotoContentBox key={d.id} data={d} haveProfile={haveProfile} />
    ))}
  </List>
);

export default PhotoContentContainer;
