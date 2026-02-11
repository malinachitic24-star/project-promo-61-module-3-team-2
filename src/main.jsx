import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./components/App.jsx";
import MalinaApp from "./components/MalinaAppPrueba.jsx";
import {BrowserRouter} from "react-router-dom";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
   {/* <App /> */}
   { <MalinaApp></MalinaApp>}
   </BrowserRouter>
  </React.StrictMode>,
);
