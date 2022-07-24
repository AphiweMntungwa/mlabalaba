import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Top from "./squares/Top";
import Navbar from "./Navbar";
import Header from "./Header";
import "./css/app.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="carrier">
          <Navbar />
          <Top />
        </div>
      </div>
    </Provider>
  );
}

export default App;
