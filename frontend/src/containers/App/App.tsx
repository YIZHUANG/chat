import React, { Suspense, lazy } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import LandingPage from "../LandingPage";
import Sidebar from "../../components/Nav/Sidebar";

const ChatRoom = lazy(() => import("../ChatRoom"));
const Editor = lazy(() => import("../../components/Inputs/Editor"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App__content">
          <Sidebar />
          <Suspense fallback={<div />}>
            <Editor />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/channal/:channalId" component={ChatRoom} />
              <Route component={LandingPage} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
