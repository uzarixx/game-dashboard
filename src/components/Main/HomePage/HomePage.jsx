import React from "react";
import styles from 'styles/components/Main/HomePage/HomePage.module.scss'
import Head from "./Head";
import AutoSwiper from "./AutoSwiper";
import MostPopularGame from "./MostPopularGame";
import ReleasedGame from "./ReleasedGame";

function Main() {
    return (
        <>
            <Head/>
            <div className={styles.autoSwiper}>
                <AutoSwiper/>
            </div>
            <MostPopularGame/>
            <ReleasedGame/>
        </>
    );
}

export default Main;
