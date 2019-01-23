import React from "react";
import ReactDOM from "react-dom";
import AppFooter from "./components/AppFooter";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AppFooter />, document.getElementById("footer"));

serviceWorker.unregister();
