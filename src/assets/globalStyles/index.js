// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalReset = createGlobalStyle`
  ${reset}

  input, select, button {
    outline: none;
  }

  button {
    cursor:  pointer;
    border:  none;
    padding: 0px;
  }
`;
