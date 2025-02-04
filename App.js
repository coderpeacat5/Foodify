import React from "react"
import ReactDOM from "react-dom/client"

const heading= React.createElement(
    "h1",
    {id: "heading"},
    "This is heading"
);

// JSX
const jsxHeading= <h1 id="heading2">Heading using JSX!</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
