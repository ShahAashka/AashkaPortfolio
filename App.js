import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "HELLOoooooooo from React")
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(heading);