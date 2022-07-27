import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Top from "./squares/Top";
import Navbar from "./Navbar";
import Header from "./Header";
import { RedCarriers, BlackCarriers } from "./cows/Carriers";
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
        <div className="cow-carriers">
          <RedCarriers />
          <BlackCarriers />
        </div>
      </div>
    </Provider>
  );
}

export default App;
