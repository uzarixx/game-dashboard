import React from "react";
import styles from 'styles/components/Main/HomePage/HomePage.module.scss'

const list = [
    {name: 'Game'},
    {name: 'Live score'},
    {name: 'Statistics'},
    {name: 'Analitics'},
    {name: 'Forecasts'},
]


function Head() {
    return (
        <div className={styles.mainHead}>
            <ul>
                {list.map((el, i) =>
                    <li key={i}>
                        {el.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Head;
