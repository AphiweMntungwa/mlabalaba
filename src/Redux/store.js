import { configureStore } from "@reduxjs/toolkit";
import menu from "./menu";
import activeCow from "./activeCow";
import activePlayer from "./activePlayer";
import playingCows from "./playingCows";
import guns from "./guns";
import playStages from "./playStages"
import infobar from "./infobar";
import reset from './reset';
import cows from "./cows";

export const store = configureStore({
    reducer: {
        menu,
        activeCow,
        activePlayer,
        playingCows,
        guns,
        playStages,
        infobar,
        reset,
        cows
    }
})