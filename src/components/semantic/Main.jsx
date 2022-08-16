import React from "react";
import styles from 'styles/components/semantic/Main.module.scss'
import HomePage from "../Main/HomePage/HomePage";
import GamesPage from "../Main/GamesPage/GamesPage";
import GameDetail from "../Main/GamesPage/GameDetail";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserPanel, setPanelOpen} from "redux/UserPanelSlice/UserSlice";

function Main() {
    const dispatch = useDispatch()
    const panel = useSelector(selectUserPanel)
    const onCloseUserPanel = () => {
        dispatch(setPanelOpen(false))
    }
    return (
        <main onClick={onCloseUserPanel} style={panel ? {cursor: "pointer"} : {cursor: "default"}}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/game' element={<GamesPage/>}/>
                <Route path='/game/:id' element={<GameDetail/>}/>
            </Routes>
        </main>
    );
}

export default Main;
