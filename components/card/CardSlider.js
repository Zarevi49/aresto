import Slider from "@/components/Slider"

const CardSlider = ({images, slider_per_view}) => {
    return (
        <Slider
            images={images}
            // imageSrc={image5.jpeg}
            slider_per_view={slider_per_view}
            height={true}
        />
    )
}
export default CardSlider
