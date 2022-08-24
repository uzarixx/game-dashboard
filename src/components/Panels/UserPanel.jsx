import React, {useCallback} from "react";
import styles from 'styles/components/Panels/UserPanel.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    setPanelOpen,
    selectUserAuth,
    selectUserPanel,
    setPopupOpen,
    selectUserName
} from "redux/UserPanelSlice/GlobalSlice";
import UserImg from 'assets/png/user-img.png'
import {ReactComponent as Notification} from "assets/svg/bell.svg";
import {ReactComponent as User} from "assets/svg/user.svg";
import IcoOne from 'assets/png/gameMiniIcon.png'
import IcoTwo from 'assets/png/gameMiniIconTwo.png'
import IcoThree from 'assets/png/gameMiniIconThree.png'
import IcoFour from 'assets/png/gameMiniIconFour.png'
import PanelSwiper from "./PanelAutoSlider";

const list = [
    {img: IcoOne, game: 'The Witcher Hunt', type: 'War Battle'},
    {img: IcoTwo, game: 'Pubg War', type: 'War Battle'},
    {img: IcoThree, game: 'Ghost of Tsushima', type: 'War Battle'},
    {img: IcoFour, game: 'FreeFire', type: 'War Battle'},
]

const notification = [{info: 'Hello, you are registration, good luck :)'}]

function UserPanel() {
    const dispatch = useDispatch()
    const panel = useSelector(selectUserPanel)
    const isAuth = useSelector(selectUserAuth)
    const username = useSelector(selectUserName)
    const [notificationPanel, setNotificationPanel] = React.useState(false)
    const [notificationStatus, setNotificationStatus] = React.useState(false)
    const onClickNotification = useCallback(() => {
        setNotificationPanel(!notificationPanel)
    })
    const onClickBodyPanel = () => {
        if (notificationPanel) {
            return setNotificationPanel(false)
        }
    }
    const onClickLogin = () => {
        dispatch(setPopupOpen(true))
        dispatch(setPanelOpen(false))
    }
    React.useEffect(() => {
        if (notification.length >= 1) {
            setNotificationStatus(true)
        }
    }, [])
    return (
        <div className={`${styles.wrapperPanel}${panel ? ' ' + styles.wrapperPanelActive : ''}`}
             onClick={onClickBodyPanel}
             style={notificationPanel ? {cursor: "pointer"} : {cursor: "default"}}>
            {
                isAuth ? <div className={styles.panelHead}>
                    <div className={styles.userInfo}>
                        <img src={UserImg} alt="user-ico"/>
                        <p>{username}</p>
                    </div>
                    <div className={styles.notificationBlock}>
                        <span className={notificationStatus ? styles.notificationBlockStatus : ''}></span>
                        <Notification onClick={onClickNotification}/>
                        <div
                            className={`${styles.notificationPanel}${notificationPanel ? ' ' + styles.notificationPanelActive : ''}`}
                            onClick={(e) => e.stopPropagation()}>
                            {
                                notification.map((el, i) =>
                                    <div className={styles.notificationMessage} key={i}>
                                        {el.info}
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div> : <button className={styles.notAuthButton} onClick={onClickLogin}>Login <User/></button>
            }


            <div className={styles.panelLiveGame}>
                <p>Live Game</p>
                {
                    list.map((el, i) =>
                        <div className={styles.LiveGameCard} key={i}>
                            <img src={el.img} alt="img-game"/>
                            <div className={styles.gameInfo}>
                                <p>{el.game}</p>
                                <p>{el.type}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className={styles.panelSwiper}>
                <PanelSwiper/>
            </div>
        </div>
    );
}

export default UserPanel;
