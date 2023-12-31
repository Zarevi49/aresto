import VerticalText from "@/components/VerticalText"
import Image from "next/image"

const MissionSection = () => {
    const props = {
        post: {
            title: "To serve <span>delicious, healthy</span> and <span>eco-friendly</span> food",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
    }
    return (
        <div className="w-full max-w-[1440px] mx-auto px-5 md:pt-[110px] pt-[58.5px] pb-[170px] md:pb-[84px] relative">
            <VerticalText text={"Our mission"} />
            <div className="tw-full max-w-[830px] mx-auto md:mb-10 mb-[29px]">
                <h1 className="font-heading md:text-[57.6px] text-[35px] font-medium leading-[120%] text-center" dangerouslySetInnerHTML={ {__html: props.post.title} }></h1>
            </div>
            <div className="w-full max-w-[424px] mx-auto">
                <p className="text-[15px] font-light text-center">{props.post.text}</p>
            </div>
            <div className="absolute bottom-0 md:left-[30px] lg:left-[70px] xl:left-[118px] left-[40px]">
                <Image
                    src="/img/mission.svg"
                    alt="arrow down"
                    width={320}
                    height={250}
                    className="md:w-[200px] xl:w-[320px] w-[170px] h-auto"
                />
            </div>
        </div>
    )
}
export default MissionSection
