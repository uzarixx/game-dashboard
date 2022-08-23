import React from "react";
import styles from 'styles/components/Main/GamesPage/GamesPage.module.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectGameListMain} from "redux/UserPanelSlice/GlobalSlice";
import debounce from 'lodash.debounce'



function GamesPage() {
    const list = useSelector(selectGameListMain)
    const [search, setSearch] = React.useState('')
    const [searchDebounce, setSearchDebounce] = React.useState('')


    const updateSearchValue = React.useCallback(
        debounce((value) => {
            setSearch(value)
        }, 1500),
        [],
    );

    const onChangeInput = (event) => {
        setSearchDebounce(event.target.value)
        updateSearchValue(event.target.value)
    }


    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div className={styles.gamesPageWrapper}>
            <div className={styles.inputWrapper}>
                <p>Search game</p>
                <input type="text" value={searchDebounce} onChange={onChangeInput}/>
            </div>
            <div className={styles.gamesCardWrapper}>

                {list.filter(obj => obj.title.toLowerCase().includes(search.toLowerCase())).map((el, i) =>
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

