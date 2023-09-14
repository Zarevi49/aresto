// import Swiper core and required modules
"use client"
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image"

const Slider = ({images, navigation, pagination, slider_per_view, full_height, width, height, space_between, img_custom_class}) => {
    const slides = images
    const full_height_slider = full_height ? "h-full" : ""
    return (
        <Swiper
            // install Swiper modules
            className={full_height_slider}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={space_between}
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
                            src={item.src}
                            alt={item.alt}
                            width={width}
                            height={height}
                            className={`w-full h-auto ${full_height_slider} ${
                                full_height ? "object-cover" : ""
                            } ${img_custom_class}`}
                        />
                    </SwiperSlide>
                    )
            })}
        </Swiper>
    )
}
export default Slider
