import VerticalText from "@/components/VerticalText"
import Card from "@/components/card/Card"
import Image from "next/image"

const BusinessSection = ({data}) => {
    const card_data = [
        {
            id: 1,
            title: "Business & Industry",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\n Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            categories: ["all industries", ">20 employers", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
            images: [
                {
                    src: "/img/slide-1.png",
                    alt: "slide"
                },
                {
                    src: "/img/slide-2.jpeg",
                    alt: "slide"
                },
            ],
            button: {
                link: "/contact",
                text: "Kontakt"
            }
        },
        {
            id: 2,
            title: "Institutional",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            categories: ["schools", "crèches", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
            images: [
                {
                    src: "/img/slide-2.jpeg",
                    alt: "slide"
                },
                {
                    src: "/img/slide-1.png",
                    alt: "slide"
                },
            ],
            button: {
                link: "/contact",
                text: "Kontakt"
            }
        }
    ]
    const cards = data.cards.length ? data.cards : card_data
    return (
        <div className="bg-primary-light md:bg-gradient-primary-light w-full relative">
            <div className="w-full max-w-[1440px] mx-auto relative px-5 pt-[50px] md:pt-[146px] md:pb-[0px] pb-[120px]">
                {
                    data.title_left && (
                        <VerticalText text={data.title_left} top={"top-[40%]"} />
                    )
                }
                <VerticalText text={"our business lines"} top={"top-[40%]"} />
                <div className="grid flex-wrap max-w-[1045px] w-full mx-auto">
                    {cards.map((item, index) => {
                        return (
                            <Card
                                key={index + 1}
                                data={item}
                                reverse={(index + 1) % 2 === 0}
                                mb={(index + 1) !== card_data.length ? "md:mb-[90px] mb-[50px]" : ""}
                                button={item.button}
                                length={110}
                                autoplay={index === 0}
                            />
                        )}
                    )}
                </div>
            </div>
            <div className="absolute right-[16px] z-10 md:right-[5%] md:hidden min-[1450px]:inline-block md:bottom-[20%] -bottom-[16px]">
                <Image src={"/img/Illustration.svg"} alt={"fd"} width={223} height={109} className="w-[176px] h-[91px] md:w-[223px] md:h-[109px]" />
            </div>
        </div>
    )
}
export default BusinessSection
