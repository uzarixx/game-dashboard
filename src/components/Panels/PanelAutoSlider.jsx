import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "styles/components/Panels/SwiperPanel.css"
import {Autoplay} from "swiper";
import {StarRating} from 'react-star-rating-element';
import GameImgOne from 'assets/png/gameImg.png'
import GameImgTwo from 'assets/png/gameImgTwo.png'
import GameImgThree from 'assets/png/gameImgThree.png'
import styles from 'styles/components/Panels/UserPanel.module.scss'

const swiper = [
    {
        image: GameImgOne,
        title: 'Need for Speed',
        type: 'Racing',
        static: 4.5,
        description: 'Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.'
    },
    {
        image: GameImgTwo,
        title: 'Rainbow Sis Siege',
        type: 'shooter',
        static: 3.5,
        description: 'Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.'
    },
    {
        image: GameImgThree,
        title: 'The Crew 2',
        type: 'Racing',
        static: 5,
        description: 'Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.'
    },

]

function PanelSwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
                style={{minHeight: 460}}
            >
                {swiper.map((el, i) =>
                    <SwiperSlide className={styles.swiperPanel} key={i}>
                        <img src={el.image} alt=""/>
                        <div className={styles.gameBlockInfo}>
                            <h2>{el.title}</h2>
                            <p>{el.type}</p>
                        </div>
                        <div className={styles.rating}>
                            <p>{el.static}</p>
                            <StarRating
                                ratingValue={el.static}
                                starEmptyColor="#999999"
                                starSpacing={1}
                                starDimension={20}
                            />
                        </div>
                        <div className={styles.description}>
                            <p >{el.description}</p>
                        </div>
                        <button>
                            Download Now
                        </button>
                    </SwiperSlide>
                )}


            </Swiper>
        </>
    );
}


export default PanelSwiper;
