import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppFooter from "./components/AppFooter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AppFooter />, document.getElementById("footer"));

serviceWorker.unregister();
