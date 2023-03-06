import styled from 'styled-components';
import TitleSet from '../TitleSet/TitleSet';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeadLine = ({ src, mainTitle, subTitle }) => (
  <Container>
    <TitleSet mainTitle={mainTitle} subTitle={subTitle} />
    <img src={src} alt='temp' />
  </Container>
);

export default HeadLine;
