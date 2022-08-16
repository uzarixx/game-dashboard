import React from "react";
import {StarRating} from "react-star-rating-element";
import styles from "styles/components/Main/HomePage/ReleasedGame.module.scss"
import imgOne from 'assets/png/ReleasedGameImg/bg-one.png'
import imgTwo from 'assets/png/ReleasedGameImg/bg-two.png'
import imgThree from 'assets/png/ReleasedGameImg/bg-three.png'
import imgFour from 'assets/png/ReleasedGameImg/bg-four.png'
import imgFive from 'assets/png/ReleasedGameImg/bg-five.png'
import imgSix from 'assets/png/ReleasedGameImg/bg-six.png'
import imgSeven from 'assets/png/ReleasedGameImg/bg-seven.png'

const list = [
    {img: imgOne, title: 'Ghost of Tsushima', type: 'war Battle', static: 4.5, id: 8},
    {img: imgTwo, title: 'Need for Speed', type: 'Racing', static: 3.2, id: 9},
    {img: imgThree, title: 'The Witcher Hunt', type: 'war Battle', static: 2.2, id: 10},
    {img: imgFour, title: 'Free Fire', type: 'war Battle', static: 4.9, id: 11},
    {img: imgFive, title: 'Need for Speed', type: 'Racing', static: 5, id: 12},
    {img: imgOne, title: 'Ghost of Tsushima', type: 'war Battle', static: 2, id: 13},
    {img: imgSix, title: 'Ghost of Tsushima', type: 'war Battle', static: 3, id: 14},
    {img: imgSeven, title: 'Ghost of Tsushima', type: 'war Battle', static: 1.2, id: 15},
    {img: imgOne, title: 'Ghost of Tsushima', type: 'war Battle', static: 2, id: 16},
    {img: imgSix, title: 'Ghost of Tsushima', type: 'war Battle', static: 3, id: 17},
    {img: imgSeven, title: 'Ghost of Tsushima', type: 'war Battle', static: 1.2, id: 18},
    {img: imgSeven, title: 'Ghost of Tsushima', type: 'war Battle', static: 1.2, id: 19},
]


function ReleasedGame() {


    return (
        <div className={styles.releasedGameWrapper}>
            <h2>New Released Games</h2>
            <div className={styles.cards}>
                {list.map((el, i) =>
                    <div className={styles.card} key={i}>
                        <div className={styles.left}><img src={el.img} alt="img-game-released"/></div>
                        <div className={styles.right}>
                            <h2>{el.title}</h2>
                            <p>{el.type}</p>
                            <span>{el.static}
                                <StarRating
                                    ratingValue={el.static}
                                    starEmptyColor="#999999"
                                    starSpacing={1}
                                    starDimension={20}
                                />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReleasedGame;