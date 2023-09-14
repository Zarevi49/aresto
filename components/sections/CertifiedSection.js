
import CertifiedSlider from "@/components/CertifiedSlider"

const CertifiedSection = ( {title} ) => {
    return (
        <div className="w-[1167px] mx-auto flex justify-between items-center">
            <div className="certified__title">
                <h3>{title}</h3>
            </div>
            <CertifiedSlider />
        </div>
    )
}

export default CertifiedSection