import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { TerminalContextProvider } from "react-terminal";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Router>
    < TerminalContextProvider>
    <App />
    </TerminalContextProvider>
  </Router>,
  rootElement
);
