// import Swiper core and required modules
"use client"
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image"

const Slider = ({images, navigation, pagination, slider_per_view, height}) => {
    const slides = images
    const full_height = height ? "h-full" : ""
    return (
        <Swiper
            // install Swiper modules
            className={full_height}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={slider_per_view}
            navigation={navigation}
            pagination={{ clickable: true, enabled: pagination }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image
                            src={item}
                            alt="test"
                            width={454}
                            height={0}
                            className={`w-full h-auto ${full_height} ${
                                height ? "object-cover" : ""
                            }`}
                        />
                    </SwiperSlide>
                    )
            })}
        </Swiper>
    )
}
export default Slider
