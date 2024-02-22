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
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d5cfbf;
    border-radius: 80px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin: 0;
  }
`;
