import Slider from "@/components/Slider"

const Carousel = () => {
    const images = [
        { src: "/img/label1.jpeg", alt: "Description 1", width: 200, height: 150 },
        { src: "/img/label2.jpeg", alt: "Description 2", width: 200, height: 150 },
        { src: "/img/label3.jpeg", alt: "Description 2", width: 200, height: 150 },
        { src: "/img/label1.jpeg", alt: "Description 1", width: 200, height: 150 },
        { src: "/img/label2.jpeg", alt: "Description 2", width: 200, height: 150 },
        { src: "/img/label3.jpeg", alt: "Description 2", width: 200, height: 150 },
    ]
    return (
        <div className="container">
            <Slider images={images} slider_per_view={3} navigation={true} pagination={false} />
        </div>
    )
}

export default Carousel
