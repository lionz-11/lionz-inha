import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      width: 100vw;
      height: 100vh;
      background-color: ${(props) => props.theme.colors.backgroundBlue};
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1Pretendard-Bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  }
  
  * {
    font-family: 'Pretendard';
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
