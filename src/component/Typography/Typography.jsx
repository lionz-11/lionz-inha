import styled from 'styled-components';

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};
  ${(props) => props.header && props.theme.font.header};
  ${(props) => props.semiHeader && props.theme.font.semiHeader};
  ${(props) => props.semiBold && props.theme.font.semiBold};
  ${(props) => props.small && props.theme.font.small};
  ${(props) => props.contentTitle && props.theme.font.contentTitle};
  ${(props) => props.contentText && props.theme.font.contentText};
  ${(props) => props.sideContent && props.theme.font.sideContent};
  ${(props) => props.sideContentBold && props.theme.font.sideContentBold};
  ${(props) => props.sideContentSmall && props.theme.font.sideContentSmall};
  ${(props) => props.pageTitle && props.theme.font.pageTitle};
  ${(props) => props.buttonText && props.theme.font.buttonText};
  ${(props) => props.tinyText && props.theme.font.tinyText};
  ${(props) => props.loginText && props.theme.font.loginText};
  ${(props) => props.calenderTitle && props.theme.font.calenderTitle};
`;

export default Typography;
