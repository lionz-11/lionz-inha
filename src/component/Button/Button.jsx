import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 22px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.skyBlue};
  ${(props) => props.theme.font.buttonText}

  ${(props) =>
    props.small &&
    css`
      padding: 10px 20px;
      ${props.theme.font.contentText};
    `}
  
  ${(props) =>
    props.textButton &&
    css`
      padding: 0;
      background-color: transparent;
      ${props.theme.font.sideContentBold};
    `}
  
  ${(props) =>
    props.textButtonSmall &&
    css`
      padding: 0;
      background-color: transparent;
      ${props.theme.font.contentText};
    `}
  
  color: ${(props) => {
    switch (props.color) {
      case 'black':
        return `${props.theme.colors.black}`;
      case 'red':
        return `${props.theme.colors.red}`;
      case 'blue':
        return `${props.theme.colors.blue}`;
      case 'gray':
        return `${props.theme.colors.gray}`;
      case 'darkGray':
        return `${props.theme.colors.darkGray}`;
      default:
        return '';
    }
  }}
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
