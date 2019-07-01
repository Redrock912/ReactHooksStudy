import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./useClick.js"


const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  // const input = useRef();
  // setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <h1 ref={title}>H43i</h1>
      {/* <input ref={input} placeholder="asdf" /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
