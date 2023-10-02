'use client'
import { useState } from "react"
import Image from "next/image"
import { useTranslation } from "next-i18next"

const SmallCard = ({
    title,
    image,
    description,
    show_read_btn = true,
    mobile_small = false
}) => {
    const { t } = useTranslation()
    const [show_read_more, setReadMore] = useState(description.length > 230 && show_read_btn)
    const [fullDescription] = useState(description)
    const [displayDescription, setDisplayDescription] = useState(
        description.length > 230 ?
            description.substring(0, 230-3) + '...' :
            description
    )

    const read_more = () => {
        setDisplayDescription(fullDescription)
        setReadMore(false)
    }

    const read_less = () => {
        setDisplayDescription(description.substring(0, 230-3) + '...')
        setReadMore(true)
    }

    return (
        <div className="sm-card text-center rounded-[20px]">
            <div className="sm-card__image rounded-[20px] overflow-hidden h-[223.88px] flex items-center justify-center relative">
                <Image src={`${process.env.IMAGE_SRC}${image}`} layout="fill" className="object-cover" alt={image} />
            </div>
            { (title || description) && (
                <div className={`sm-card__content -mt-5 md:pt-16 md:pb-[20px] md:px-[28px] border-[1.5px] border-dark rounded-b-[20px] bg-white ${ mobile_small ? "pt-[30px] pb-[30px] px-[10px]" : "pt-16 pb-[20px] px-[28px]" }`}>
                    {title && (
                        <div className="sm-card__title">
                            <h3 className={`md:text-[40px] font-heading font-normal text-dark leading-110 md:mb-6 ${mobile_small ? "mb-[10px] text-[30px]" : "md-6 text-[40px]"}`}>{title}</h3>
                        </div>
                    )}
                    {description && (
                        <div className="sm-card__description text-black ...">
                            <p>{displayDescription}</p>
                        </div>
                    )}
                    {
                        show_read_btn && description.length > 230 && (
                            show_read_more ? (
                                <div className="underline cursor-pointer" onClick={read_more}>{t("read_more")}</div>
                            ) : (
                                <div className="underline cursor-pointer" onClick={read_less}>{t("read_less")}</div>
                            )
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default SmallCard
