import React from "react";
import styles from 'styles/components/Main/HomePage/MostPopularGame.module.scss'
import {bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix, bgNine, bgTen} from 'imports/imgImports'
import {ReactComponent as Star} from "assets/svg/star.svg";
import {Link} from "react-router-dom";

const list = [
    {img: bgOne, title: 'Sniper 2', rating: '8.6 / 10 Action-rpg', id: 0},
    {img: bgTwo, title: 'Motor Race', rating: '2.1 / 10 Action-rpg', id: 1},
    {img: bgThree, title: 'Witcher Hunt', rating: '9.9 / 10 Action-rpg', id: 2},
    {img: bgFour, title: 'Pubg war', rating: '2.4 / 10 Action-rpg', id: 3},
    {img: bgFive, title: 'Sniper 3', rating: '9.6 / 10 Action-rpg', id: 4},
    {img: bgSix, title: 'Tomb Rider', rating: '9.9 / 10 Action-rpg', id: 5},
    {img: bgNine, title: 'God Of War', rating: '7.6 / 10 Action-rpg', id: 6},
    {img: bgTen, title: 'Rocket League', rating: '8.6 / 10 Action-rpg', id: 7},
]

function MostPopularGame() {
    return (
        <div className={styles.mostPopularGame}>
            <h2>Most popular Game</h2>
            <div className={styles.gamesWrapper}>
                {list.map((el, i) =>
                    <Link to='/game' className={styles.gamesCards}>
                    <div className={styles.gamesCards} style={{backgroundImage: `url("${el.img}")`}} key={i}>
                        <p>{el.title}</p>
                        <span><Star/>{el.rating}</span>
                    </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default MostPopularGame;
