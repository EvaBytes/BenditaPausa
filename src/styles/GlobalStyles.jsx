import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    background-color: #ffffff; /* Fondo blanco limpio */
    color: #000000; /* Texto principal en negro */
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #186471; /* Enlaces con color corporativo */
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0f4d54; /* Hover más oscuro */
  }

  h1, h2, h3 {
    font-weight: 600;
    color: #000000; /* Títulos en negro */
  }

  strong {
    font-weight: 700;
    color: #186471; /* Resaltar con color primario */
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  button {
    background-color: #1c6673;
    color: #ffffff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #17515b;
  }
`;