import Image from 'next/image'

const MainBanner = ({ type, src }) => {
    return (
        <div className={"rounded-[10px] md:rounded-[20px] overflow-hidden"}>
            {type === 'img' &&
                <Image
                    src={src}
                    alt="Main Banner"
                    width={2800}
                    height={1200}
                    className="w-full h-[320px] md:h-auto object-cover md:object-none"
                    priority
                />
            }
            {type === 'video' &&
                <video autoPlay muted loop src={src} width={"100%"}></video>
            }
        </div>
    )
}
export default MainBanner
