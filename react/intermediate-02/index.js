import React from "https://esm.sh/react@19.2.0";
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client";

 

const chai = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", null, props.name,  props.des),
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
      React.createElement(chai, {name: 'saikiran', des: 'student'}),
    ],
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
