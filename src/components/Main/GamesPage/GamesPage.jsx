import React from "react";
import styles from 'styles/components/Main/GamesPage/GamesPage.module.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { selectGameListMain} from "../../../redux/UserPanelSlice/UserSlice";

function GamesPage() {
    const list = useSelector(selectGameListMain)

    React.useEffect(()=> {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className={styles.gamesPageWrapper} >
            <div className={styles.gamesCardWrapper}>
                {list.map((el, i) =>
                    <Link to={`/game/${el.id}`}>
                        <div className={styles.gamesCard} key={i}>
                            <img src={el.img} alt="game-img"/>
                            <p>Genre: {el.type}</p>
                            <h2>{el.title}</h2>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default GamesPage;

