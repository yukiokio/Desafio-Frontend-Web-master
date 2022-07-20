import React from "react";
import { Heading } from "./components/typography";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div style={{ textAlign: "center" }}>
        <h1>Hello world!</h1>
        <Heading>Teste Avançado</Heading>
        <Heading level="M">Teste 3 (M)</Heading>
        <Heading level="S">Teste 4 (S)</Heading>
        <Heading level="XS">Teste 5 (XS)</Heading>
      </div>
    </React.Fragment>
  );
};

export default App;
