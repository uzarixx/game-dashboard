import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./UserPanelSlice/GlobalSlice";

export const store = configureStore({
    reducer: {
        counterSlice: userReducer
    },
})