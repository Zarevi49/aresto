import Slider from "@/components/Slider"

const Carousel = ({images}) => {
    // const images = [
    //     { src: "/img/label1.png", alt: "Description 1" },
    //     { src: "/img/label2.png", alt: "Description 2" },
    //     { src: "/img/label3.png", alt: "Description 2" },
    //     { src: "/img/label2.png", alt: "Description 2" },
    //     { src: "/img/label3.png", alt: "Description 2" },
    //     { src: "/img/label2.png", alt: "Description 2" },
    //     { src: "/img/label3.png", alt: "Description 2" },
    //     { src: "/img/label2.png", alt: "Description 2" },
    //     { src: "/img/label3.png", alt: "Description 2" },
    // ]
    return (
        <Slider
            images={images}
            slider_per_view={3}
            navigation={{
                enabled: true,
                nextEl: '.swiper-button-right',
                prevEl: '.swiper-button-left',
            }}
            pagination={false}
            space_between={0}
            width={600}
            height={210}
            loop={images.length >= 7}
            custom_class="swiper-nav"
            img_custom_class={"h-[70px] w-auto"}
            breakpoints={{
                320: {
                    slidesPerView: 1.5,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 3,
                }
            }}
        />
    )
}

export default Carousel
