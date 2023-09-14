import CertifiedSlider from "@/components/CertifiedSlider"

const CertifiedSection = () => {
    return (
        <div className="max-w-[1204px] w-full pr-[20px] pl-[20px] mx-auto flex justify-between items-center flex-wrap">
            <div className="flex-shrink-0 lg:mr-[24px] lg:max-w-[28.7%] w-full">
                <h3 className="font-heading text-[35px] md:text-[40px] leading-[110%] lg:mb-0 mb-[40px]">Make a <span className="underline">difference</span>. We are certified.</h3>
            </div>
            <div className="lg:max-w-[59.2%] w-full flex items-center justify-start">
                <div className="swiper-button-left lg:mr-[30px] mr-[9px]"></div>
                <div className="lg:max-w-[535px] max-w-[100%] w-full lg:order-2 order-3 ml-[24px] lg:ml-0 overflow-hidden">
                    <CertifiedSlider />
                </div>
                <div className="swiper-button-right lg:ml-[30px] lg:order-3 order-2"></div>
            </div>
        </div>
    )
}

export default CertifiedSection
