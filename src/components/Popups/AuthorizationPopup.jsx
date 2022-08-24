import React from "react";
import styles from "styles/components/Popups/AuthorizationPopup.module.scss"
import AuthService from "services/AuthService";
import {useDispatch, useSelector} from "react-redux";
import {selectPopupPanel, setIsAdmin, setPopupOpen, setUserAuth, setUserName} from "redux/UserPanelSlice/GlobalSlice";

function AuthorizationPopup() {

    const dispatch = useDispatch()
    const onSetPanel = useSelector(selectPopupPanel)
    const [goodAuth, setGoodAuth] = React.useState(false)
    const [typeAuth, setTypeAuth] = React.useState(false)
    const [authErr, setAuthErr] = React.useState(false)
    const [username, setusername] = React.useState('')
    const [password, setPassword] = React.useState('')
    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setUserAuth(true))
        }
    }, [])
    const loginError = () => {
        setTimeout(() => {
            setAuthErr(false)
        }, 4000)
    }

    if (goodAuth) {
        setTimeout(() => {
            setGoodAuth(false)
        }, 2500)
    }

    const onLogin = async () => {
        try {
            await localStorage.removeItem('token');
            const {data} = await AuthService.login(username, password);
            localStorage.setItem('token', data.token);
            dispatch(setUserName(username))
            dispatch(setPopupOpen(false));
            dispatch(setUserAuth(true));
            setGoodAuth(true)
            setusername('')
            setPassword('')
        } catch (e) {
            console.log(e)
            setAuthErr(true)
            loginError()
        }
    }
    const onRegistration = async () => {
        try {
            await localStorage.removeItem('token');
            const {data} = await AuthService.registration(username, password);
            console.log(data.token)
            localStorage.setItem('token', data.token);
            dispatch(setUserName(username))
            dispatch(setPopupOpen(false));
            dispatch(setUserAuth(true));
            setGoodAuth(true)
            setusername('')
            setPassword('')
        } catch (e) {
            console.log(e)
            setAuthErr(true)
            loginError()
        }
    }


    const onClickBody = () => {
        dispatch(setPopupOpen(false))
        setusername('')
        setPassword('')

    }
    const onSetTypeAuth = React.useCallback(() => {
        setTypeAuth(!typeAuth)
    })


    return (
        <>
            <div className={`${styles.authorizedMessage} ${goodAuth ? " " + styles.authorizedMessageActive : ''}`}>
                {typeAuth ? 'You are registration' : 'You are authorized'}
            </div>
            <div className={`${styles.authBody} ${onSetPanel ? '' : " " + styles.authBodyActive}`}
                 onClick={onClickBody}>
                <div className={styles.authWrapper} onClick={(e) => e.stopPropagation()}>
                    <p>Authorization</p>
                    <input type="email" placeholder={'Your username'} onChange={(e) => setusername(e.target.value)}
                           value={username}/>
                    <input type="password" placeholder={'Your password'} onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <p className={`${styles.authError} ${authErr ? " " + styles.activeError : ''}`}>{!typeAuth ? "The entered data is not correct" :
                        "Data does not fit"}</p>
                    <button onClick={typeAuth ? onRegistration : onLogin}>{typeAuth ? 'Registration' : 'Login'}</button>
                    <span onClick={onSetTypeAuth}>{!typeAuth ? 'Registration' : 'Authorization'}</span>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPopup;