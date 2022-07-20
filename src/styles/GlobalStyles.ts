import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;
    --blue: #057dcd;
  }
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
    scrollbar-color: var(--black);
  }
  body {
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);
    :hover {
      color: var(--blue)
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
      background-color: var(--blue);
      transition: var(--transition);
    }
  }
`;
