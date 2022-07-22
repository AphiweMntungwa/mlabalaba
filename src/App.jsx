import React from "react";
import Top from "./squares/Top";
import Navbar from "./Navbar";
import './css/app.scss'

function App() {
  return (
    <div className="app">
      <h1>Mlabalaba</h1>
      <div className="carrier">
        <Navbar />
        <Top />
      </div>
    </div>
  );
}

export default App;
