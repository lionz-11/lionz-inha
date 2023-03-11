import styled from 'styled-components';
import TitleSet from '../TitleSet/TitleSet';

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  flex-direction: column;
  gap: 18px;

  p {
    margin-left: 13px;
  }
`;

const TitleContainer = ({ width, mainTitle, subTitle, component, small }) => (
  <Container width={width}>
    <TitleSet small={small} mainTitle={mainTitle} subTitle={subTitle} />
    {component}
  </Container>
);

export default TitleContainer;
