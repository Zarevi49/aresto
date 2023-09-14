import SmallCard from "@/components/card/SmallCard";
import VerticalText from "@/components/VerticalText";

const SmallCardsSection = () => {
    const cards = [
        {
            title: "local",
            image: {
                src: "/img/main_banner.svg",
                alt: "dsds"
            },
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut n"
        },
        {
            title: "eco-friendly",
            image: {
                src: "/img/image5.jpeg",
                alt: "dsds"
            },
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
        },
        {
            title: "independant",
            image: {
                src: "/img/image5.jpeg",
                alt: "dsds"
            },
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
        },
    ]
    return (
        <div className="bg-gradient-yellow md:bg-gradient-primary-yellow w-full py-[48.83px] md:py-[89.83px] mt-[82.14px] md:mt-[107.14px] relative">
            <div className="w-full max-w-[1400px] mx-auto relative">
                <VerticalText text={"our values"} top={"top-[40%]"} />
                <div className="max-w-[1105px] px-5 mx-auto w-full flex-column md:flex">
                    {
                        cards.length && cards.map((item, index) => {
                            return (
                                <SmallCard
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default SmallCardsSection
