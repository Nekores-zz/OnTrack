import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDCYp1baBZusOIxfHhjO6FltwMBO7fTmHc",
  authDomain: "ontracktech-67c26.firebaseapp.com",
  projectId: "ontracktech-67c26",
});

const App = () => {
  const user = {};

  useEffect(() => {
    let date = new Date();
    if (!!window && !!navigator) {
      user["timeStamp"] = date.getTime();
      user["timezone"] = /\((.*)\)/.exec(date.toString())[1];
      user["browserName"] = browserName();
      user["userAgent"] = navigator.userAgent;
      user["referrer"] = document.referrer ? document.referrer : "None";
      user["viewport"] = window.innerWidth + " x " + window.innerHeight;
      user["screen_resolution"] =
        window.screen.width + " x " + window.screen.height;
      user["device"] =
        window.width <= "767"
          ? "Mobile Phone"
          : window.frames.innerWidth <= "991" &&
            window.frames.innerHeight >= "768"
          ? "Tablet"
          : "Desktop";

      var db = firebase.firestore();
      db.collection("users").add(user);
    }
  }, [window, navigator]);

  /* Browser Detection */
  const browserName = () => {
    if (
      (!!window.opr && !!window.opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0
    )
      return "Opera";
    else if (typeof InstallTrigger !== "undefined") return "Firefox";
    else if (
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof window.safari !== "undefined" &&
            window.safari.pushNotification)
      )
    )
      return "Safari";
    else if (/*@cc_on!@*/ false || !!document.documentMode)
      return "Microsoft Edge";
    else if (
      !!window.chrome &&
      (!!window.chrome.webstore || !!window.chrome.runtime)
    )
      return "Google chrome";
    else if (window.isChrome && navigator.userAgent.indexOf("Edg") != -1)
      return "Microsoft Egde";
    else return "Unknown";
  };
  return (
    <div className="App">
        <h1>This page is for DEMO</h1>
    </div>
  );
};

export default App;
