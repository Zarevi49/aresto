import Slider from "@/components/Slider"

const Carousel = () => {
    const images = [
        { src: "/img/label1.jpeg", alt: "Description 1" },
        { src: "/img/label2.jpeg", alt: "Description 2" },
        { src: "/img/label3.jpeg", alt: "Description 2" },
        { src: "/img/label1.jpeg", alt: "Description 1" },
        { src: "/img/label2.jpeg", alt: "Description 2" },
        { src: "/img/label3.jpeg", alt: "Description 2" },
    ]
    return (
        <div className="max-w-[690px]">
            <Slider
                images={images}
                slider_per_view={3}
                navigation={true}
                pagination={false}
                space_between={34}
                width={600}
                height={210}
                img_custom_class={"h-[70px] w-auto"}
            />
        </div>
    )
}

export default Carousel
