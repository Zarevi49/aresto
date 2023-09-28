import Card from "@/components/card/Card"
import VerticalText from "@/components/VerticalText"

const ServicesSection = ({data}) => {
    console.log(data)
    const card = {
        title: "Services",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
        images: [
            {
                src: "/img/services-1.png",
                alt: "slide"
            },
            {
                src: "/img/slide-1.png",
                alt: "slide"
            },
        ],
        button: {
            text: "kontakt",
            link: "/contact"
        }
    }
    return (
        <div className="relative w-full max-w-[1440px] px-5 mx-auto md:mt-[195px] mt-[155px]">
            <VerticalText text={"Services"} top={"top-[55%]"} />
            <div className="max-w-[927px] w-full mx-auto">
                {
                    data.cards.length && data.cards.map((card) => (
                        <Card data={card} key={card.id} />
                    ))
                }
            </div>
        </div>
    )
}
export default ServicesSection
