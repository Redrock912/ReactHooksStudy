import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const useFullscreen = callback => {
  const element = useRef();

  const runCallBack = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozReqestFullScreen) {
        element.current.mozReqestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCallBack(true);
    }
  };

  const exitFull = () => {
    // when u exit, it's document!
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    runCallBack(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const callback = isFull => {
    console.log(isFull ? "We are fullscreen" : "we are weak and small...");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://tn.smilevideo.jp/smile?i=35100294.15402.L" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
