import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./useTitle.js"


const App = () => {
  const titleUpdater = useTitle("loading...");

  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
