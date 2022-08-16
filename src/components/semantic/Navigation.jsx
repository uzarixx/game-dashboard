import React from "react";
import styles from 'styles/components/semantic/Navigation.module.scss'
import {ReactComponent as Home} from "assets/svg/home.svg";
import {ReactComponent as Game} from "assets/svg/game.svg";
import {ReactComponent as Chat} from "assets/svg/chat.svg";
import {ReactComponent as Favorites} from "assets/svg/favorite.svg";
import {ReactComponent as Settings} from "assets/svg/setting.svg";
import {ReactComponent as Exit} from "assets/svg/exit.svg";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserPanel, setPanelOpen} from "redux/UserPanelSlice/UserSlice";


function Navigation() {
    const [theme, setTheme] = React.useState('dark')
    const dispatch = useDispatch()
    const panel = useSelector(selectUserPanel)
    const location = useLocation();
    const icons = [
        {icon: <Home/>, to: '/'},
        {icon: <Game/>, to: '/game'},
        {icon: <Chat/>, to: '/chat'},
        {icon: <Favorites/>, to: '/favorites'},
        {icon: <Settings/>, to: '/settings'},

    ]
    const onSetPanel = () => {
        dispatch(setPanelOpen(!panel))
    }

    const onClosePanel = () => {
        if (panel === true) {
            dispatch(setPanelOpen(false))
        }
    }

    const changeTheme = () => {
        const selectTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(selectTheme)
        window.localStorage.setItem('theme', selectTheme)
    }


    React.useEffect(() => {
        const root = document.querySelector(':root')
        const currentTheme = window.localStorage.getItem('theme') || theme;

        const components = [
            'body-background',
            'body-background-user',
            'text',
            'panel-background',
            'icon-color',
            'icon-vector-color',
            'icon-shadow-color',
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${currentTheme})`
            )
        })
        setTheme(currentTheme)
    }, [theme])


    return (
        <nav onClick={onClosePanel}>
            <div className={styles.wrapper}>
                <div className={styles.button} onClick={onSetPanel}>
                    <span></span>
                    <span></span>
                    <span className={panel ? styles.buttonActive : ""}></span>
                </div>
                <div className={styles.iconsWrapper}>
                    {
                        icons.map((el, i) =>
                            <Link
                                to={el.to}
                                key={i}
                                className={`${styles.icon} ${location.pathname === el.to ? " " + styles.iconActive : ''}`}>
                                {el.icon}
                            </Link>
                        )
                    }
                    <div className={styles.icon} onClick={changeTheme}>
                        <Exit/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
