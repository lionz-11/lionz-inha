import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';

// 사이즈 조절을 위해 props로 전달받아 내부적으로 값 지정
const StyledTypo = styled(Typography)`
  font-size: ${(props) => (props.small ? 14 : 16)}px;
`;

const StyledArrow = styled(BsChevronRight)`
  margin-left: 2px;
  color: ${(props) => props.theme.colors.blue};
`;

const ArrowButton = ({ children, small, onClick }) => (
  <Flex onClick={onClick} flexCenter style={{ cursor: 'pointer' }}>
    <StyledTypo contentText color='blue' small={small}>
      {children}
    </StyledTypo>
    <StyledArrow size={small ? '14px' : '16px'} />
  </Flex>
);

export default ArrowButton;
