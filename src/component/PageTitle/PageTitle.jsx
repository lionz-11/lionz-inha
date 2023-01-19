import styled from 'styled-components';
import Typography from '../Typography/Typography';

const PointColorText = styled(Typography)`
  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;
const PageTitle = ({ children }) => <PointColorText pageTitle>{children}</PointColorText>;

export default PageTitle;
