import React from "react";
import ReactDOMServer from "react-dom/server"

export default function App(){
    return React.createElement(
        'div',
        {style:{color: 'skyblue'}},
        [
            React.createElement('h1', {key: 'h1'}, 'Hello World!(from SSR)')
        ]
    )
}