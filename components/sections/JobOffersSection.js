import VerticalText from "@/components/VerticalText"
import SliderSmallCard from "@/components/Slider/SliderSmallCard"
import Image from "next/image"

const JobOffersSection = ({data}) => {
    const section_data = {
        title: "Join the team.",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
        link: {
            title: "job offers",
            link: "/job_offers"
        },
        cards: [
            {
                title: "Service",
                image: {
                    src: "/img/main_banner.svg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
            {
                title: "Cuisine",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
            {
                title: "Management",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
            {
                title: "local",
                image: {
                    src: "/img/main_banner.svg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
            {
                title: "eco-friendly",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
            {
                title: "independant",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
            },
        ]
    }
    const cards = data ? data : section_data

    return (
        <div className="relative mt-[130px] md:mt-[180px] px-5 pr-0 pb-[173px] md:pb-[75px] w-full max-w-[1440px]">
            {
                data.title_left && (
                    <VerticalText text={data.title_left} top={"top-[50%]"} />
                )
            }
            <div className="max-w-[1300px] w-full overflow-visible md:ml-auto">
                <SliderSmallCard
                    section_data={cards}
                    navigation={{
                        enabled: true,
                        nextEl: '.swiper-jobs-right',
                        prevEl: '.swiper-jobs-left',
                    }}
                />
            </div>
            <div className="absolute -left-[30px] md:left-[5%] md:bottom-0 -bottom-[90px] z-40">
                <Image src={"/img/jobs_offers.svg"} alt={"fd"} width={360} height={240} className="w-[360px] h-[240px]" />
            </div>
            <div className="max-w-[1204px] px-5 mx-auto md:mt-[18px] w-full justify-end md:flex hidden">
                <div className="swiper-jobs-left swiper-arrow-left"></div>
                <div className="swiper-jobs-right swiper-arrow-right ml-[9px]"></div>
            </div>
        </div>
    )
}
export default JobOffersSection
