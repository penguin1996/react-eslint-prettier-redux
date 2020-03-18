import React, { Component } from "react";
import "./App.css";
import Count from './asy-Redux/CustomerComponent'

function App() {
  return (
  <Provider store={store}>
    <div className="App"> 
        <CountComponent/>
        <Component/>
    </div>
    </Provider>
  );
}

export default App;
