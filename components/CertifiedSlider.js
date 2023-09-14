import Slider from "@/components/Slider"

const Carousel = () => {
    const images = [
        { src: "/img/label1.png", alt: "Description 1" },
        { src: "/img/label2.png", alt: "Description 2" },
        { src: "/img/label3.png", alt: "Description 2" },
        { src: "/img/label2.png", alt: "Description 2" },
        { src: "/img/label3.png", alt: "Description 2" },
    ]
    return (
        <div className={"max-w-[535px] w-full"}>
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
                loop={true}
                custom_class="swiper-nav"
                img_custom_class={"h-[70px] w-auto"}
            />
        </div>
    )
}

export default Carousel
