import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Container = styled.div`
  min-width: 1213px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
  position: fixed;
  top: 0;
  ${(props) => props.theme.flex.flexCenter}
`;

const RightWrapper = styled.div`
  width: 155px;
`;

const Header = () => (
  <Container>
    <Typography header>LIKE LION</Typography>
    <RightWrapper>right</RightWrapper>
  </Container>
);

export default Header;
