import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif !important;
    background: #fff;
  }
`;
