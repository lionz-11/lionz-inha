import styled from 'styled-components';
import Margin from '../../Margin/Margin';
import Typography from '../../Typography/Typography';

const MenuButtonWrapper = styled.div`
  width: 260px;
  height: 71px;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding-left: 16px;
  border-radius: 10px;
  margin-bottom: 1px;
  cursor: pointer;
  transition: 0.5s;
  ${(props) => props.theme.flex.flexCenterColumn};
  align-items: baseline;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.skyBlue};
    box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
  }
`;

const MenuButton = ({ title, subTitle, onClick }) => (
  <MenuButtonWrapper onClick={onClick}>
    <Typography loginText>{title}</Typography>
    <Margin height='4' />
    <Typography sideContentSmall color='darkGray'>
      {subTitle}
    </Typography>
  </MenuButtonWrapper>
);

export default MenuButton;
