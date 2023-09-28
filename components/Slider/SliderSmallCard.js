// import Swiper core and required modules
"use client"
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SmallCard from "@/components/card/SmallCard"
import Button from "@/components/button/Button"

const SliderSmallCard = ({
    section_data,
    navigation,
    custom_class,
    loop,
}) => {
    const slides = section_data.cards
    return (
        <Swiper
            // install Swiper modules
            className={custom_class + " h-full"}
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={3.5}
            navigation={navigation}
            loop={loop}
            breakpoints={{
                320: {
                    slidesPerView: 1.3,
                },
                768: {
                    slidesPerView: 2.5,
                },
                1024: {
                    slidesPerView: 3.5,
                }
            }}
        >
            <SwiperSlide className="!h-auto">
                <div className="h-full rounded-[10px] md:rounded-[20px] border-[1.5px] border-dark bg-primary-light pt-[41px] pl-[34px] pr-[24px] pb-[41px]">
                    {
                        section_data.title && (
                            <h3 className="text-[40px] md:text-[72px] font-heading leading-[90%] md:mb-[20px] mb-[30px]">{section_data.title}</h3>
                        )
                    }
                    {
                        section_data.description && (
                            <p>{section_data.description}</p>
                        )
                    }
                    {
                        section_data.link && (
                            <div className="mt-[32px]">
                                <Button text={"Job offers"} link={section_data.link} showArrow={true} />
                            </div>
                        )
                    }
                </div>
            </SwiperSlide>
            {slides.length && slides.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SmallCard
                            key={index}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            show_read_btn={false}
                            mobile_small={true}
                        />
                    </SwiperSlide>
                    )
            })}
        </Swiper>
    )
}
export default SliderSmallCard
