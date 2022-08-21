import React from "react";
import styles from 'styles/components/semantic/Navigation.module.scss'
import {ReactComponent as Home} from "assets/svg/home.svg";
import {ReactComponent as Game} from "assets/svg/game.svg";
import {ReactComponent as Chat} from "assets/svg/chat.svg";
import {ReactComponent as Favorites} from "assets/svg/favorite.svg";
import {ReactComponent as Settings} from "assets/svg/setting.svg";
import {ReactComponent as Exit} from "assets/svg/exit.svg";
import {ReactComponent as User} from "assets/svg/user.svg";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserPanel, selectTheme, setPanelOpen, setTheme, selectUserAuth} from "redux/UserPanelSlice/UserSlice";

const icons = [
    {icon: <Home/>, to: '/'},
    {icon: <Game/>, to: '/game'},
    {icon: <Chat/>, to: '/chat', deleted: true},
    {icon: <Favorites/>, to: '/favorites', deleted: true},
    {icon: <Settings/>, to: '/settings', deleted: true},

]

function Navigation() {
    const isAuth = useSelector(selectUserAuth)
    const dispatch = useDispatch()
    const panel = useSelector(selectUserPanel)
    const theme = useSelector(selectTheme)
    const location = useLocation();
    const onSetPanel = () => {
        dispatch(setPanelOpen(!panel))
    }

    const onClosePanel = () => {
        if (panel === true) {
            dispatch(setPanelOpen(false))
        }
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
            'input',
            'text-reverse'
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${currentTheme})`
            )
        })
        dispatch(setTheme(currentTheme))
    }, [theme])


    return (
        <nav onClick={onClosePanel}>
            <div className={styles.wrapper}>
                <div className={styles.button} onClick={onSetPanel}>
                    <span></span>
                    <span></span>
                    <span className={panel ? styles.buttonActive : ""}></span>
                </div>
                <div className={`${isAuth ? styles.iconsWrapper : styles.iconsWrapperActive}`}>
                    {
                        icons.map((el, i) =>
                            <Link
                                to={el.to}
                                key={i}
                                className={`${styles.icon} ${location.pathname === el.to ? " " + styles.iconActive : ''}`}
                                style={el.deleted && !isAuth ? {display: 'none'} : {display: 'flex'}}
                            >
                                {el.icon}
                            </Link>
                        )
                    }


                    <div className={styles.icon}>
                        {
                            isAuth
                                ?
                                <Exit/>
                                :
                                <User style={{width: '25'}}/>
                        }
                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navigation;
