import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./UserPanelSlice/UserSlice";

export const store = configureStore({
    reducer: {
        counterSlice: userReducer
    },
})