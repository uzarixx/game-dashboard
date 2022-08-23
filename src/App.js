import React from "react";
import 'styles/config/_resets.scss'
import 'styles/config/root.scss'
import 'styles/other.scss'
import Main from "./components/Semantic/Main";
import Navigation from "./components/Semantic/Navigation";
import UserPanel from "./components/Panels/UserPanel";
import {useDispatch} from "react-redux";
import {setGameList} from "./redux/UserPanelSlice/GlobalSlice";
import {array} from 'imports/arrayImports'
import AuthorizationPopup from "./components/Popups/AuthorizationPopup";



function App() {
    const list = array
    const dispatch = useDispatch();
    React.useEffect(()=> {
        dispatch(setGameList(list))
    }, [])

    return (
        <div className='globalWrapper'>
            <AuthorizationPopup/>
            <Navigation/>
            <Main/>
            <UserPanel/>
        </div>
    );
}

export default App;
