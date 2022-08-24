import React from "react";
import styles from 'styles/components/Main/SettingsPage/SettingsPage.module.scss'
import {ReactComponent as Moon} from "assets/svg/moon.svg";
import {ReactComponent as Sun} from "assets/svg/sun.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAdmin, selectTheme, selectUserName, setIsAdmin, setTheme} from "redux/UserPanelSlice/GlobalSlice";
import AuthService from "../../../services/AuthService";

function SettingsPage() {
    const theme = useSelector(selectTheme)
    const [user, setUsers] = React.useState([])
    const dispatch = useDispatch()
    const isAdmin = useSelector(selectIsAdmin)
    const username = useSelector(selectUserName)

    const changeTheme = () => {
        const selectTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(setTheme(selectTheme))
        window.localStorage.setItem('theme', selectTheme)
    }
    const currentTheme = window.localStorage.getItem('theme');

    React.useEffect(() => {
        const getUsers = async () => {
            try {
                const userAdmin = await AuthService.getMe()
                const isAdmin = userAdmin.data.roles
                console.log(isAdmin)
                if (String(isAdmin) === "ADMIN") {
                    return dispatch(setIsAdmin(true))
                }
            } catch (e) {
                console.log(e)
            }
        }
        const users = async () => {
            try {
                const {data} = await AuthService.getUsers()
                setUsers([...data])
            } catch (e) {
                console.log(e)
            }
        }
        users()
        getUsers()
    }, [])

    return (
        <div className={styles.settingsPageWrapper}>
              <span className={styles.themeButton} onClick={changeTheme}
                    title={currentTheme === 'light' ? "Change theme to dark" : "Change theme to light"}>
                {
                    currentTheme === 'light' ? <Moon/> : <Sun className={styles.sunButton}/>
                }
                </span>
            {
                isAdmin
                    ?
                    <div className={styles.allUsersWrapper}>
                        <p>Hello Admin "{username}"</p><br/>
                        <br/>
                        Users in service:
                        <ul>
                            {user.map((el, i) =>
                                <li>
                                    {el.username}
                                </li>
                            )}
                        </ul>

                    </div>
                    :
                    null
            }
        </div>
    )
}

export default SettingsPage;