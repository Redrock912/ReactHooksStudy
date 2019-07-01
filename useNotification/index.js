import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  // window 함수인 Notification이 있늕 ㅣ확인
  if (!("Notification" in window)) {
    return;
  }

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNotification = useNotification("Can u see  me ", {
    body: "asdfasdfasdf"
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Sasdf</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
