import VerticalText from "@/components/VerticalText"
import Card from "@/components/card/Card"

const BusinessSection = () => {
    const card_data = [
        {
            id: 1,
            title: "Business & Industry",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\n Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            categories: ["all industries", ">20 employers", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
            images: [
                "/img/slide-1.png",
                "/img/slide-2.jpeg"
            ]
        },
        {
            id: 2,
            title: "Institutional",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            categories: ["schools", "crèches", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
            images: [
                "/img/slide-2.jpeg",
                "/img/slide-1.png"
            ]
        }
    ]
    console.log(card_data)
    return (
        <div className="bg-primary-light w-full">
            <div className="w-full max-w-[1400px] mx-auto relative px-5 pt-[50px] md:pt-[146px] md:pb-[460px]">
                <VerticalText text={"our business lines"} />
                <div className="grid flex-wrap max-w-[1045px] w-full mx-auto">
                    {card_data.map((item, index) => {
                        return (
                            <Card
                                key={index + 1}
                                data={item}
                                reverse={(index + 1) % 2 === 0}
                            />
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}
export default BusinessSection
