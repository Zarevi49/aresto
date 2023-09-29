import MainBanner from "@/components/MainBanner"
import Image from "next/image"

const Block_banner = ({data}) => {
    return (
        <>
            <div className="w-full max-w-[1440px] mx-auto px-5">
                <MainBanner
                    type={data.enabled_video ? "video" : "img"}
                    src={`http://localhost:8055/assets/${data.enabled_video ? data.video.filename_disk : data.image}`}
                />
            </div>
            <div className="mt-[-22.5px]">
                <Image
                    src="/img/arrow_down.svg"
                    alt="arrow down"
                    width={45}
                    height={45}
                    priority
                />
            </div>
        </>
    )
}
export default Block_banner
