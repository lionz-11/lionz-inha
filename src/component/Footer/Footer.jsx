import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';
import Typography from '../Typography/Typography';

const Container = styled.div`
  width: 100%;
  max-width: 820px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
  position: fixed;
  bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  ${(props) => props.theme.flex.flexCenter};
  justify-content: space-between;
`;

const QuickLinkContainer = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: -1;
  ${(props) => props.theme.flex.flexCenter};
`;

const QuickLinkWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGray};
  z-index: 0;
  ${(props) => props.theme.flex.flexCenter};
`;

const Footer = () => (
  <Container>
    <Typography small style={{ cursor: 'pointer' }}>
      제안하기
    </Typography>
    <QuickLinkContainer>
      <QuickLinkWrapper href='https://www.instagram.com/likelion_inha/'>
        <FiInstagram size='21px' color='white' style={{ cursor: 'pointer' }} />
      </QuickLinkWrapper>
    </QuickLinkContainer>
    <Typography small>Designed by pakxe</Typography>
  </Container>
);

export default Footer;
