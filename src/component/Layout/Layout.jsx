import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Margin from '../Margin/Margin';

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
  ${(props) => props.theme.flex.flexCenterColumn};

  ${({ size }) => size === 'small' && 'max-width: 852px'};
  ${({ hiddenOverflow }) =>
    hiddenOverflow === 'hidden' &&
    css`
      overflow: hidden;
    `};
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
`;

const Layout = ({ children, size, hiddenOverflow }) => (
  <Background>
    <Width size={size} hiddenOverflow={hiddenOverflow}>
      {children}
      {hiddenOverflow !== 'hidden' && <Margin height='304' />}
    </Width>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
