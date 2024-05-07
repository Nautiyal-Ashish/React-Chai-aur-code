import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ----------------------------
// function inside the main
function MyApp() {
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}
// ---------------------------

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// ------------------------------
// Creatting Element Syntax
const anotherUser = "Chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click Me to visit google",
  anotherElement
);
// --------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
