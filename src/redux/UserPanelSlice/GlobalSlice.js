import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    panelOpen: false,
    popupOpen: false,
    gameList: [],
    theme: 'light',
    userAuth: false
}

export const counterSlice = createSlice({
    name: 'userPanel',
    initialState,
    reducers: {
        setPanelOpen: (state, action) => {
            state.panelOpen = action.payload
        },
        setPopupOpen: (state, action) => {
            state.popupOpen = action.payload
        },
        setGameList: (state, action) => {
            state.gameList = action.payload
        },
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setUserAuth: (state, action) => {
            state.userAuth = action.payload
        }
    }
})

export const {setPanelOpen, setGameList, setTheme, setUserAuth, setPopupOpen} = counterSlice.actions


export const selectUserPanel = (state) => state.counterSlice.panelOpen
export const selectPopupPanel = (state) => state.counterSlice.popupOpen
export const selectTheme = (state) => state.counterSlice.theme
export const selectUserAuth = (state) => state.counterSlice.userAuth
export const selectGameList = (id) => (state) => state.counterSlice.gameList?.find(e => e.id === +id)
export const selectGameListMain = (state) => state.counterSlice.gameList


export default counterSlice.reducer