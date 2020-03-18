import React, { Component } from "react";
import "./App.css";
import CustomerComponent from './asy-Redux/CustomerComponent'
import CountComponent from './react-Redux/CountComponent'

function App() {
  return (
  <Provider store={store}>
    <div className="App"> 
        <CountComponent/>
        <CustomerComponent/>
    </div>
    </Provider>
  );
}

export default App;
