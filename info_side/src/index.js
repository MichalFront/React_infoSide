import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import App from "./App"


const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(<App/>);
// ReactDOM.render(<App/>, document.getElementById("root"))