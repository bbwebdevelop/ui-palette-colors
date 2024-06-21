import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(135deg, #ff7e5f, #feb47b);
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
`;