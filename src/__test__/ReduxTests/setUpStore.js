import { combineReducers, configureStore } from '@reduxjs/toolkit'
import playingCows from '../../Redux/playingCows'
import activePlayer from '../../Redux/activePlayer'


// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    playingCows,
    activePlayer
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}