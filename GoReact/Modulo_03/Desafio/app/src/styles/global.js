import { injectGlobal } from 'styled-components';

injectGlobal`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #8d70ff;
    font-family: 'sans-serif';
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;