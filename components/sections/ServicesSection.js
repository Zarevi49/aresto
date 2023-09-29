import Card from "@/components/card/Card"
import VerticalText from "@/components/VerticalText"

const ServicesSection = ({data}) => {
    return (
        <div className="relative w-full max-w-[1440px] px-5 mx-auto md:mt-[195px] mt-[155px]">
            {
                data.title_left && (
                    <VerticalText text={data.title_left} top={"top-[55%]"} />
                )
            }
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
