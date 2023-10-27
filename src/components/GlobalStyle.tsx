import { css, Global } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={styles} />;
}

export default GlobalStyle;

const styles = css`
  * {
    box-sizing: border-box;
  }

  /* @font-face {
    font-family: 'SUIT';
    src: url('/fonts/SUIT-Bold.ttf');
  } */

  body {
    margin: 0;
  }
`;
