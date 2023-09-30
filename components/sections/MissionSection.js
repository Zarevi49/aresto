import VerticalText from "@/components/VerticalText"
import Image from "next/image"

const MissionSection = ({data}) => {
    const content_blocks = data.content && data.content?.blocks.length ? data.content.blocks : []
    return (
        <div className="w-full max-w-[1440px] mx-auto px-5 md:pt-[110px] pt-[58.5px] pb-[170px] md:pb-[84px] relative">
            {
                data.title_left && (
                    <VerticalText text={data.title_left} />
                )
            }
            {
                content_blocks.map((block) => {
                    if (block.type === "header" && block.data.text) {
                        const Tag = `h${block.data.level}`
                        return (
                            <div key={block.id} className="tw-full max-w-[830px] mx-auto md:mb-10 mb-[29px]">
                                <Tag className="font-heading md:text-[57.6px] text-[35px] font-medium leading-[120%] text-center" dangerouslySetInnerHTML={ {__html: block.data.text} }></Tag>
                            </div>
                        )
                    }
                    if (block.type === "paragraph" && block.data.text) {
                        return (
                            <div key={block.id} className="w-full max-w-[424px] mx-auto">
                                <p className="text-[15px] font-light text-center" dangerouslySetInnerHTML={ {__html: block.data.text} }></p>
                            </div>
                        )
                    }
                })
            }
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
