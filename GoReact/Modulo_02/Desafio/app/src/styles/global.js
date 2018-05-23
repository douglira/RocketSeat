import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #F5F5F5;
    font-family: 'sans-serif';
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;
