import { createSlice } from "@reduxjs/toolkit";

const soundSlice = createSlice({
    name: 'changePlayStage',
    initialState: {
        sound: true,
        musicVolume: 0.2,
        onMusic: true
    },
    reducers: {
        toggleOnSFX(state) {
            state.sound = true;
        },
        toggleOffSFX(state) {
            state.sound = false;
        },
        volume(state, { payload }) {
            state.musicVolume = payload;
        },
        toggleOffMusic(state) {
            state.onMusic = false;
        },
        toggleOnMusic(state) {
            state.onMusic = true;
        }
    }
})

export const { toggleOnSFX, toggleOffSFX, volume, toggleOffMusic, toggleOnMusic } = soundSlice.actions
export default soundSlice.reducer;