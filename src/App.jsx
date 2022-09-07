import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Top from "./components/squares/Top";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Navbar/Header";
import { RedCarriers, BlackCarriers } from "./components/cows/Carriers";
import Stages from "./components/Infobar/Stages";
import HelperButtons from "./components/HelperNav/HelperButtons";
import "./css/app.scss";

function App() {
  const [press, switcher] = useState(false);
  const [run, runOnce] = useState(true);
  const [dark, setDark] = useState("");
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <Provider store={store}>
      <div
        className={`app ${press} ${dark}`}
        title="application"
        onClick={() => {
          run && setMusicPlaying(true);
          runOnce(false);
        }}
      >
        <Header />
        <Navbar setMusicPlaying={setMusicPlaying} />
        <div className="fold-body">
          <div className="carrier">
            <Top
              switcher={switcher}
              setDark={setDark}
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
            />
          </div>
          <div className="cow-carriers">
            <Stages />
            <RedCarriers />
            <BlackCarriers />
            <HelperButtons />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
