import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    panelOpen: false,
    gameList: []
}

export const counterSlice = createSlice({
    name: 'userPanel',
    initialState,
    reducers: {
        setPanelOpen: (state, action) => {
            state.panelOpen = action.payload
        },
        setGameList: (state, action) => {
            state.gameList = action.payload
        }
    }
})

export const {setPanelOpen, setGameList} = counterSlice.actions


export const selectUserPanel = (state) => state.counterSlice.panelOpen
export const selectGameList = (id) => (state) => state.counterSlice.gameList?.find(e => e.id === +id)
export const selectGameListMain = (state) => state.counterSlice.gameList


export default counterSlice.reducer