import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme?.colors?.font || '#FFFFFF'};
        line-height: 1.2;
        min-width: 360px;
        background-color: ${props => props.theme?.colors?.primaryBg || '#1F1F20'};
        ${props => props.theme?.animations?.transition ? `transition: ${props.theme.animations.transition};` : ''}
    }

    a {
        text-decoration: none;
        color: ${props => props.theme?.colors?.font || '#FFFFFF'};
        cursor: pointer;
    }
     
    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${props => props.theme?.colors?.font || '#FFFFFF'};
    }

    section {
        padding: 100px 0;
        @media ${props => props.theme?.media?.mobile || 'screen and (max-width: 576px)'} {
            padding: 80px 0;
        }
        ${props => props.theme?.animations?.transition ? `transition: ${props.theme.animations.transition};` : ''}
    }

    section:nth-of-type(odd) {
        background-color: ${props => props.theme?.colors?.primaryBg || '#1F1F20'};
    }

    section:nth-of-type(even) {
        background-color: ${props => props.theme?.colors?.secondaryBg || '#252527'};
    }
    
    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px;
    }
    
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
`;