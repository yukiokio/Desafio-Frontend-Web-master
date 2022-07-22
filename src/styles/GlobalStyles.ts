import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  html {
    scrollbar-width: thin;
    color: ${props => props.theme.colors["dark-high"]};
  }
  body {
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    color: ${props => props.theme.colors["dark-high"]};
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors["dark-high"]};
    transition: 0.2s;
    :hover {
    }
  }
  button {
    cursor: pointer;
  }
  .link {
    position: relative;
    :hover::after {
      width: 100%;
    }
    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      transition: 0.2s;
    }
  }
`;
