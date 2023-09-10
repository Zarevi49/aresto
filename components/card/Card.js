import CardSlider from "@/components/card/CardSlider"
import CardCategory from "@/components/card/CardCategory"

const Card = ({
    data,
    reverse
}) => {
    console.log(data)
    const reverse_padding = reverse ? "md:pt-[48px] md:pr-[46px] md:pb-[43px] md:pl-[57px] pt-[28.5px] pr-[16px] pb-[21px] pl-[24px]" : "md:pt-[36px] md:pr-[59px] md:pb-[36px] md:pl-[44px] pt-[28.5px] pr-[16px] pb-[21px] pl-[24px]"
    return (
        <div className={`bg-white overflow-hidden md:rounded-[20px] rounded-[10px] max-w-[927px] w-full border border-dark flex ${
            reverse ? "flex-row-reverse" : " justify-self-end"
        }`}>
            <div className="max-w-[454px] w-full h-full">
                <CardSlider
                    images={data.images}
                    slider_per_view={1}
                />
            </div>
            <div className={reverse_padding}>
                {data.title && (
                    <h3 className="font-heading md:text-[40px] text-[25px] leading-[110%] md:mb-[36px] mb-[5px]">
                        {data.title}
                    </h3>
                )}
                {data.description && (
                    <p className="whitespace-pre-line">
                        {data.description}
                    </p>
                )}
                {data.categories && (
                    <div className="flex flex-wrap mt-[16px]">
                        {data.categories?.map((item, index) => {
                            return (
                                <CardCategory title={item} key={index}/>
                            )}
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Card
