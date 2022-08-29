import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
        lightMode: true
    },
    reducers: {
        darken: (state) => {
            state.darkMode = true
            state.lightMode = false
        },
        lighten(state) {
            state.darkMode = false
            state.lightMode = true
        }
    }
})

export const { darken, lighten } = themeSlice.actions
export default themeSlice.reducer;