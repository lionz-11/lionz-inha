import styled from 'styled-components';
import ArrowButton from '../ArrowButton/ArrowButton';

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  justify-content: end;
  padding-top: 27px;
  padding-right: 20px;
`;

const ArrowButtonContainer = ({ text, onClick }) => (
  <Container>
    <ArrowButton onClick={onClick}>{text}</ArrowButton>
  </Container>
);

export default ArrowButtonContainer;
