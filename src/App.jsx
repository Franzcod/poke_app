import "./App.css";
import styled from "styled-components";
import { NikeCard } from "./components/Card/index.jsx";
import { Init } from "./components/Init/Init";

import { Route } from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={Init} />
      <Route exact path="/home" component={NikeCard} />
    </AppContainer>
  );
}

export default App;
