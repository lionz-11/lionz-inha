import styled from 'styled-components';

const TempCom = styled.div`
  ${(props) => props.theme.font.header};
  color: ${(props) => props.theme.colors.red};
`;

const Home = () => <TempCom>home페이지 입니다</TempCom>;

export default Home;
