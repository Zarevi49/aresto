import Slider from "@/components/Slider"

const CardSlider = ({images, slider_per_view}) => {
    return (
        <Slider
            images={images}
            // imageSrc={image5.jpeg}
            slider_per_view={slider_per_view}
            full_height={true}
            width={454}
            height={0}
        />
    )
}
export default CardSlider
