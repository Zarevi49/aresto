import VerticalText from "@/components/VerticalText"
import SliderSmallCard from "@/components/SliderSmallCard"

const JobOffersSection = () => {
    const section_data = {
        title: "Join the team.",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
        button: {
            title: "job offers",
            link: "/job_offers"
        },
        cards: [
            {
                title: "local",
                image: {
                    src: "/img/main_banner.svg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut n"
            },
            {
                title: "eco-friendly",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
            },
            {
                title: "independant",
                image: {
                    src: "/img/image5.jpeg",
                    alt: "dsds"
                },
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
            },
        ]
    }
    return (
        <div className="relative mt-[130px] md:mt-[180px] px-5 pr-0 w-full max-w-[1440px]">
            <VerticalText text={"Job offers"} />
            <div className="max-w-[1300px] w-full overflow-visible md:ml-auto">
                <SliderSmallCard section_data={section_data} />
            </div>
        </div>
    )
}
export default JobOffersSection
