import React from "react";
import styles from 'styles/components/Main/FavoritesPage/FavoritesPage.module.scss'
import axios from "axios";

function FavoritesPage() {
    const [favorites, setFavorites] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const favoriteResponse = await axios.get('http://localhost:3003/favorites');
            setFavorites(favoriteResponse.data)
        }

        fetchData()
    }, [favorites])

    const deleteFavorite = (el) => {
        if (favorites.find((finded) => finded.id === el.id)) {
            axios.delete(`http://localhost:3003/favorites/${el.id}`)
        }
    }


    return (
        <div className={styles.favoritePageWrapper}>
            <p className={styles.titleFavorite}>{favorites.length < 1 ? 'Favorites page is empty': `Favorites page ${favorites.length}`}</p>
            <div className={styles.favoriteCardWrapper}>
                {favorites.map((el, i) =>
                    <div className={styles.favoriteCard} key={i}>
                        <img src={el.img} alt="game-img"/>
                        <p>Genre: {el.type}</p>
                        <h2>{el.title}</h2>
                        <span onClick={() => deleteFavorite(el)}>╳</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FavoritesPage;