import styled from 'styled-components';
import TitleSet from '../TitleSet/TitleSet';

const Container = styled.div`
  width: 100%;
  padding-left: 13px;
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  @media (max-width: 805px) {
    display: none;
  }
`;

const HeadLine = ({ src, mainTitle, subTitle }) => (
  <Container>
    <TitleSet mainTitle={mainTitle} subTitle={subTitle} />
    {src && <StyledImg src={src} alt='temp' />}
  </Container>
);

export default HeadLine;
