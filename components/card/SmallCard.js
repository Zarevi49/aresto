'use client'
import { useState } from "react"
import Image from "next/image"

const SmallCard = ({
    title,
    imageSrc,
    description : propDescription
}) => {
    const [show_read_more, setReadMore] = useState(propDescription.length > 230);
    const [fullDescription] = useState(propDescription);
    const [displayDescription, setDisplayDescription] = useState(
        propDescription.length > 230 ?
            propDescription.substring(0, 230-3) + '...' :
            propDescription
    );

    const read_more = () => {
        setDisplayDescription(fullDescription);
        setReadMore(false);
    }

    return (
        <div className="sm-card text-center max-w-[335px] md:mx-2.5 mb-10 md:mb-0 rounded-[20px]">
            <div className="sm-card__image rounded-[20px] overflow-hidden h-[223.88px] flex items-center justify-center relative">
                <Image src={imageSrc} alt={title} layout="fill" className="object-cover" />
            </div>
            { (title || description) && (
                <div className="sm-card__content -mt-5 pt-16 pb-[20px] px-[28px] border-2 border-dark rounded-b-[20px] bg-white">
                    {title && (
                        <div className="sm-card__title">
                            <h3 className="text-[40px] font-heading font-normal text-dark leading-110 mb-6">{title}</h3>
                        </div>
                    )}
                    {propDescription && (
                        <div className="sm-card__description text-black ...">
                            <p>{displayDescription}</p>
                        </div>
                    )}
                    {show_read_more && (
                        <div className="underline cursor-pointer" onClick={read_more}>Read more</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SmallCard