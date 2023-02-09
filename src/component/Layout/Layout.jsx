import PropTypes from 'prop-types';
import styled from 'styled-components';

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
  ${(props) => props.theme.flex.flexCenterColumn};

  @media (max-width: 1312px) {
    padding: 0 1rem;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
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
