import React from "react";
import 'styles/config/_resets.scss'
import 'styles/config/root.scss'
import 'styles/other.scss'
import Main from "./components/semantic/Main";
import Navigation from "./components/semantic/Navigation";
import UserPanel from "./components/Panels/UserPanel";
import {useDispatch} from "react-redux";
import {setGameList} from "./redux/UserPanelSlice/UserSlice";
import {array} from 'imports/arrayImports'



function App() {
    const list = array
    const dispatch = useDispatch();
    React.useEffect(()=> {
        dispatch(setGameList(list))
    }, [])

    return (
        <div className='globalWrapper'>
            <Navigation/>
            <Main/>
            <UserPanel/>
        </div>
    );
}

export default App;
