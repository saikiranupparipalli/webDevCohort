import React from "https://esm.sh/react@19.2.0";
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client";

// import React from "https://esm.sh/react@19.0.0";
// import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";

const chai = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", null, "hello this is h2"),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {
      className: "container",
    },

    [
      React.createElement("h1", { key: "h1" }, "hey how are you"),
      React.createElement("p", { key: "p" }, "This is paragraph node"),
      React.createElement(chai, null, null),
    ],
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
