import PropTypes from 'prop-types';
import styled from 'styled-components';

const Width = styled.div`
  margin: 0 auto;
  min-width: 1312px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackColor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundBlue};
`;

const Layout = ({ children }) => (
  <BackColor>
    <Width>{children}</Width>
  </BackColor>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
