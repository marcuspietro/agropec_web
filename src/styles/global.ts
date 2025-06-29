import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Montserrat', sans-serif;

    @media (max-width: 600px) {
      scrollbar-width: none;
  
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  img {
    display: flex;
    width: 100%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BRAND_MID};
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body, input, button, textarea {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;

    transition: color 0.4s;

    &:hover {
      text-decoration: none;
    }
    
    &:focus {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, strong, span {
    display: block;
    font-weight: 600;
  }
  
  button {
    border: 0;
    cursor: pointer;
  }

  pre {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    white-space: pre-line;
    word-break: break-word;
  }
`;