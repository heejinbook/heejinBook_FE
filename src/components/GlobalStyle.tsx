import { css, Global } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={styles} />;
}

export default GlobalStyle;

const styles = css`
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin: 0;
    height: calc(100vh - 60px);
    background-color: #fffdf6;
  }
`;
