import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "styles/components/Main/HomePage/AutoSwiper.scss"
import BackOne from 'assets/png/bg-four.png'
import BackTwo from 'assets/png/bg-two.png'
import BackThree from 'assets/png/bg-three.png'
import BackFive from 'assets/png/bg-five.png'
import BackSix from 'assets/png/bg-six.png'
import BackSeven from 'assets/png/bg-seven.png'

import {Autoplay} from "swiper";

const list = [
    {
        delay: 2500,
        array: [
            {name: 'The Forbidden Kingdom Adventure War', img: BackOne},
            {name: 'Updates in Valorant. We are waiting for you!', img: BackTwo},
            {name: 'Star Wars represents perfection', img: BackThree}
        ]
    },
    {
        delay: 3500,
        array: [
            {name: 'Guardians Galaxy represents perfection', img: BackFive},
            {name: 'Squid Game comeback, hurry to us', img: BackSix},
            {name: 'New season in warframe, represents', img: BackSeven}
        ]
    }

]

function AutoSwiper() {
    return (
        <div className='wrapper'>
            {
                list.map((el,i) =>
                    <Swiper
                        key={i}
                        spaceBetween={3}
                        centeredSlides={true}
                        autoplay={{
                            delay: el.delay,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            el.array.map((el, i) =>
                                <SwiperSlide key={i} style={{backgroundImage: `url("${el.img}")`}}>
                                    <p>
                                        {el.name}
                                    </p>
                                    <button>
                                        More Details
                                    </button>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                )
            }
        </div>
    );
}

export default AutoSwiper;
