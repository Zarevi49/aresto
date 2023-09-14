'use client'
import { useState } from "react";
import CardSlider from "@/components/card/CardSlider"
import CardCategory from "@/components/card/CardCategory"
import Button from "@/components/Button";

const Card = ({
    data,
    reverse,
    mb,
}) => {
    const reverse_padding = reverse ? "md:pt-[48px] md:pr-[46px] md:pb-[43px] md:pl-[57px] pt-[28.5px] pr-[16px] pb-[21px] pl-[24px]" : "md:pt-[36px] md:pr-[59px] md:pb-[36px] md:pl-[44px] pt-[28.5px] pr-[16px] pb-[21px] pl-[24px]"
    // const description = useState(data.description)
    const [show_read_more, setReadMore] = useState(true)
    const [description, setDescription] = useState(((data.description).length > 230) ?
        (((data.description).substring(0,230-3)) + '...') :
        data.description)
    const read_more = () => {
        setDescription(data.description)
        setReadMore(false)
    }
    return (
        <div className={`bg-white overflow-hidden md:rounded-[20px] rounded-[10px] max-w-[927px] w-full border border-dark flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : " justify-self-end"
        } ${mb}`}>
            <div className="md:max-w-[48.9%] w-full h-full">
                <CardSlider
                    images={data.images}
                    slider_per_view={1}
                />
            </div>
            <div className={reverse_padding}>
                {data.title && (
                    <h2 className="font-heading md:text-[40px] text-[25px] leading-[110%] md:mb-[36px] mb-[5px]">
                        {data.title}
                    </h2>
                )}
                {data.description && (
                    <div>
                        <p className="whitespace-pre-line">
                            { description }
                        </p>
                        {show_read_more && (data.description).length > 230 && (
                            <div className="underline cursor-pointer" onClick={read_more}>Read more</div>
                        )}
                    </div>
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
                {data.button && (
                    <div className="mt-5 md:mt-[23px]">
                        <Button link={data.button.link} text={data.button.text} showArrow={true} accent={true} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Card
