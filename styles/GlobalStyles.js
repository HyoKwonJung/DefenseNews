import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
    }

    h1 {
        font-size: 4rem;
        text-align: center;
        margin: 20px 0;
    }

    h2 {
        font-size: 2rem;
        margin: 10px 0;
    }

    p {
        color: #555;
    }
`;

export default GlobalStyles;
