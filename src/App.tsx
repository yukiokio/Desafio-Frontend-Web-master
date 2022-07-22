import React from "react";
import { ThemeProvider } from "styled-components";
import standard from "./styles/themes/default";

import Feedback from "./pages/Feedback";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={standard}>
        <GlobalStyles />
        <Feedback />
      </ThemeProvider>
      {/* <div style={{ textAlign: "center" }}>
        <Display>Teste Display</Display>
        <Heading>Teste Heading L</Heading>
        <Heading level="M">Teste 3 (M)</Heading>
        <Heading level="S">Teste 4 (S)</Heading>
        <Heading level="XS">Teste 5 (XS)</Heading>
        <Heading level="SH">Teste 6 (SH)</Heading>
        <BodyMedium>Teste Paragraph</BodyMedium>
      </div> */}
    </React.Fragment>
  );
};

export default App;
