import Image from "next/image"
const SmallCard = ({
    title,
    imageSrc,
    description
}) => {
    return (
        <div className="sm-card text-center max-w-[335px] md:mx-2.5">
            <div className="sm-card__image rounded-[20px] overflow-hidden h-[223.88px] flex items-center justify-center relative">
                <Image src={imageSrc} alt={title} layout="fill" className="object-cover" />
            </div>
            {title && (
                <div className="sm-card__title">
                    <h3 className="text-[40px]" >{title}</h3>
                </div>
            )}
            {description && (
                <div className="sm-card__description">
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

export default SmallCard