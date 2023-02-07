import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';
import Flex from '../Flex/Flex';

const StyledTypo = styled(Typography)`
  color: ${(props) => (props.alert === 'red' ? props.theme.colors.pointRed : props.theme.colors.black)};
  font-size: ${(props) => (props.size === 'small' ? 32 : 40)}px;
`;

const TitleSet = ({ title, subtitle, size, alert }) => (
  <Flex flexCenter column align='baseline'>
    <StyledTypo pageTitle size={size} alert={alert}>
      {title}
    </StyledTypo>
    <Margin height={9} />
    <Typography contentText color='darkGray'>
      {subtitle}
    </Typography>
  </Flex>
);

export default TitleSet;
