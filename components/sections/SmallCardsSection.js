import Image from "next/image"
import SmallCard from "@/components/card/SmallCard";

const SmallCardsSection = () => {
    return (
        <div className="w-full max-w-[1105px] px-5 mx-auto w-full flex-column md:flex">
            <SmallCard
                title="local"
                imageSrc="/img/main_banner.svg"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren..."
            />
            <SmallCard
                title="eco-friendly"
                imageSrc="/img/image5.jpeg"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren..."
            />
            <SmallCard
                title="independant"
                imageSrc="/img/image5.jpeg"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren..."
            />
        </div>
    )
}
export default SmallCardsSection