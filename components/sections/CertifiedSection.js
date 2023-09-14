import CertifiedSlider from "@/components/CertifiedSlider"

const CertifiedSection = () => {
    return (
        <div className="w-[1204px] pr-[20px] pl-[20px] mx-auto flex justify-between items-center">
            <div className="flex-shrink-0 md:mr-[24px] md:max-w-[28.7%] w-full">
                <h3 className="font-heading text-[35px] md:text-[40px] leading-[110%] md:mb-0 mb-[40px]">Make a <span className="underline">difference</span>. We are certified.</h3>
            </div>
            <div className="md:max-w-[59.2%] w-full flex items-center justify-center">
                <div className="swiper-button-left md:mr-[30px]"></div>
                <CertifiedSlider />
                <div className="swiper-button-right md:ml-[30px]"></div>
            </div>
        </div>
    )
}

export default CertifiedSection
