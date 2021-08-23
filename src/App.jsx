import "./App.css";
// import styled from "styled-components";

import { Init } from "./components/Init/Init";
import Footer from "./components/Footer/Footer.js";
import Nav from "./components/Nav/Nav.js";
import PageOptions from "./components/PageOptions/PageOptions";
import GamePage from "./components/Pages/Game/GamePage.js";
// src\components\Pages\Game\GamePage.js

import { Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home.js";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function App() {
  return (
    <>
      <Route exact path="/" component={Init} />
      <Route path="/" component={Nav} />
      <Route path="/" component={PageOptions} />

      <Route path="/home" component={Home} />
      <Route path="/game" component={GamePage} />
      <Route path="/" component={Footer} />
    </>
  );
}

export default App;
