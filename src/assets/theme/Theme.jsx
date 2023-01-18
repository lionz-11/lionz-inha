const colors = {
  black: '#000000',
  darkGray: '#7c7c7c',
  Gray: '#bfbfbf',
  lightGray: '#d9d9d9',
  white: '#ffffff',
  skyBlue: '#e3eaf0',
  red: '#e36675',
  backgroundBlue: '#fafbfd',
  blue: '#4a90e2',
  lightRed: 'rgba(231, 109, 123, 0.8)',
  yellow: '#fad77e',
  darkYellow: '#ecb834',
};

const shadow = {
  componentShadow: `
    box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.25);
  `,
  homeBoxShadow: `
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.25);
  `,
};

const font = {
  header: `
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.105em;
  `,
  semiHeader: `
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.105em;
  `,
  semiBold: `
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.185em;
  `,
  small: `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.185em;
  `,
  contentTitle: `
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.055em;
  `,
  contentText: `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
  `,
  sideContent: `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.095em;
  `,
  sideContentBold: `
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.055em;
  `,
  sideContentSmall: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  `,
  pageTitle: `
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.025em;
  `,
  buttonText: `
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.055em;
  `,
  name: `
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.185em;
  `,
};

const flex = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme = {
  colors,
  shadow,
  font,
  flex,
};

export default theme;
