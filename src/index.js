import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Provider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/kaddy">
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
