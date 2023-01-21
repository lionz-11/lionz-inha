import PropTypes from 'prop-types';
import styled from 'styled-components';

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
  ${(props) => props.theme.flex.flexCenterColumn};
`;

const BackColor = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;
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
