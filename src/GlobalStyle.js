import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
}
body{
    font-family: 'DM Sans', sans-serif;
}
/*Reset CSS*/
a{
    color:inherit;
    text-decoration: none;
}
button,
input,
textarea{
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
}
button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active{
    box-shadow: none;
    outline: none;
}
ul,
ol,
li{
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
}
`;
