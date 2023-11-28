import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
  box-sizing: border-box;
}

html, body {
  font-size: 16px;
}

hr{
    width: 100%;
    border-color:${(props) => props.theme.borderColor};
    border-style: solid;
    border-top-width: 0px;
}
`;

export default GlobalStyle;
