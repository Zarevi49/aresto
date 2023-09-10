import MainBanner from "@/components/MainBanner"

const BannerSection = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-5">
            {/*https://www.w3schools.com/html/mov_bbb.mp4*/}
            <MainBanner type={"img"} src={"/img/main_banner.svg"} />
        </div>
    )
}
export default BannerSection
