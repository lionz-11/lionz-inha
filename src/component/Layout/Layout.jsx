import PropTypes from 'prop-types';
import styled from 'styled-components';

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Background>
    <Width>{children}</Width>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
