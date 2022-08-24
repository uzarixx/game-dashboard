import React from "react";
import 'styles/config/_resets.scss'
import 'styles/config/root.scss'
import 'styles/other.scss'
import Main from "./components/Semantic/Main";
import Navigation from "./components/Semantic/Navigation";
import UserPanel from "./components/Panels/UserPanel";
import {useDispatch} from "react-redux";
import {setGameList, setIsAdmin, setUserName} from "./redux/UserPanelSlice/GlobalSlice";
import {array} from 'imports/arrayImports'
import AuthorizationPopup from "./components/Popups/AuthorizationPopup";
import AuthService from "./services/AuthService";


function App() {
    const list = array
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setGameList(list))
    }, [])

    React.useEffect(() => {
        const user = async () => {
            try {
                const {data} = await AuthService.getMe()
                console.log(data)
                const isAdmin = data.roles
                const userName = data.username
                dispatch(setUserName(userName))
                if (String(isAdmin) === "ADMIN") {
                    return dispatch(setIsAdmin(true))
                }
            } catch (e) {
                console.log(e)
            }
        }
        user()
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
