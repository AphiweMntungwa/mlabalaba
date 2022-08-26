import { createSlice } from "@reduxjs/toolkit";

const infoBarSlice = createSlice({
    name: 'display',
    initialState: {
        text: 'Black Plays First'
    },
    reducers: {
        display: (state, { payload }) => {
            state.text = payload
        },
    }
})

export const { display } = infoBarSlice.actions;
export default infoBarSlice.reducer;