import Slider from "@/components/Slider"

const CardSlider = ({images, slider_per_view, autoplay}) => {
    return (
        <Slider
            images={images}
            // imageSrc={image5.jpeg}
            slider_per_view={slider_per_view}
            full_height={true}
            width={454}
            height={370}
            autoplay={autoplay}
        />
    )
}
export default CardSlider
