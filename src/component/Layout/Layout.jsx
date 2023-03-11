import PropTypes from 'prop-types';
import styled from 'styled-components';
import Margin from '../Margin/Margin';

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
  ${(props) => props.theme.flex.flexCenterColumn};

  ${({ size }) => size === 'small' && 'max-width: 852px'};
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
`;

const Layout = ({ children, size }) => (
  <Background>
    <Width size={size}>
      {children}
      <Margin height='304' />
    </Width>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
