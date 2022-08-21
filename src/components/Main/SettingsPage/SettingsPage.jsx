import React from "react";
import styles from 'styles/components/Main/SettingsPage/SettingsPage.module.scss'
import {ReactComponent as Moon} from "assets/svg/moon.svg";
import {ReactComponent as Sun} from "assets/svg/sun.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, setTheme} from "redux/UserPanelSlice/UserSlice";

function SettingsPage() {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    const changeTheme = () => {
        const selectTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(setTheme(selectTheme))
        window.localStorage.setItem('theme', selectTheme)
    }
    const currentTheme = window.localStorage.getItem('theme');

    return (
        <div className={styles.settingsPageWrapper}>
              <span className={styles.themeButton} onClick={changeTheme} title={currentTheme === 'light' ? "Change theme to dark" : "Change theme to light"}>
                {
                    currentTheme === 'light' ? <Moon/> : <Sun className={styles.sunButton}/>
                }
                </span>
        </div>
    )
}

export default SettingsPage;