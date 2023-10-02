import SmallCard from "@/components/card/SmallCard"
import VerticalText from "@/components/VerticalText"

const SmallCardsSection = ({data}) => {
    const cards = data.cards.length ? data.cards : []
    return (
        <div className="bg-gradient-yellow md:bg-gradient-primary-yellow w-full py-[48.83px] md:py-[89.83px] mt-[82.14px] md:mt-[107.14px] relative">
            <div className="w-full max-w-[1440px] mx-auto relative">
                {
                    data.title_left && (
                        <VerticalText text={data.title_left} top={"top-[40%]"} />
                    )
                }
                <div className="max-w-[1105px] px-5 mx-auto w-full flex-wrap flex-column md:flex">
                    {
                        cards.map((item, index) => {
                            return (
                                <div className="max-w-[335px] w-full mx-auto md:mx-2.5 mb-10 md:mb-0" key={index}>
                                    <SmallCard
                                        key={index}
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default SmallCardsSection
