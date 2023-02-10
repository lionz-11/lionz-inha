import styled from 'styled-components';
import Flex from '../Flex/Flex';

const Column = styled(Flex)`
  flex-direction: column;
  width: 100%;
  gap: 26px;
`;

const BarComponentContainer = ({ bars, renderProp }) => <Column>{bars.map((bar) => renderProp(bar))}</Column>;

export default BarComponentContainer;

// 간격 수정해서 다시 커밋
