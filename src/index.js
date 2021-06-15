import React from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext } from './Components/Firebase';
import './index.css';
import App from "./App";
//import  serviceWorker from "./serviceWorke


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
 </FirebaseContext.Provider>
 , document.getElementById("root")
);

//serviceWorker.unregister();
