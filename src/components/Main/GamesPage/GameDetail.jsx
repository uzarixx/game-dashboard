import React from "react";
import styles from 'styles/components/Main/GamesPage/GameDetail.module.scss'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectGameList, selectUserAuth} from "redux/UserPanelSlice/GlobalSlice";
import {ReactComponent as Star} from "assets/svg/star.svg";
import axios from "axios";

function GameDetail() {
    const {id} = useParams()
    const item = useSelector(selectGameList(id))
    const isAuth = useSelector(selectUserAuth)

    const addFavorite = async (item) => {
        try {
            if (localStorage.getItem('token')) {
                const {data} = await axios.post('http://localhost:3003/favorites', item)
            }
        } catch (e) {
            console.log(e)
        }
    }


    if (!item) return <></>
    return (
        <div className={styles.gameDetailWrapper}>
            <div className={styles.gameDetailLeft}>
                <img src={item.img} alt="img-game"/>
            </div>
            <div className={styles.gameDetailRight}>
                <div className={styles.info}>
                    <h2>{item.title}</h2>
                    <p>{item.type}</p>
                    <span><Star/>{item.rating}</span>
                    <h3>System requirements:</h3>
                    <ul>
                        <li>Operating system: Windows 7 / 8 / 10</li>
                        <li>CPU: Intel Core 2 Duo E8500 or AMD Phenom II X3 720</li>
                        <li>GPU: GeForce GT 440 or AMD Radeon HD 5670</li>
                        <li>RAM: 4 GB</li>
                        <li>Disk space: 7 GB</li>
                    </ul>
                    <button>Download now</button>
                    {
                        isAuth ? <h4 onClick={() => addFavorite(item)}>Add to favorite "{item.title}"</h4> : null
                    }
                </div>

            </div>
        </div>
    )
}

export default GameDetail;

