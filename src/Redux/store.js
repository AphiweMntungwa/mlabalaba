import { configureStore } from "@reduxjs/toolkit";
import menu from "./menu";
import activeCow from "./activeCow";

export const store = configureStore({
    reducer: {
        menu,
        activeCow
    }
})