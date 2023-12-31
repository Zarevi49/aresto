import Button from "@/components/button/Button";
import ButtonPhone from "@/components/button/ButtonPhone";
import LanguageDropdown from "@/components/LanguageDropdown";
import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <div className="header max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 pt-10 md:py-[24px] px-5">
            <div className="header__slogan font-heading flex items-center pl-[31px] md:block hidden">
                <span>Plus qu’un affaire <br/> de goût</span>
            </div>
            <div className="header__logo flex items-center justify-center order-2 mb-[39px] md:mb-0">
                <Link href="/">
                    <Image
                        src={"/img/logo.svg"}
                        alt={"Logo"}
                        width={148}
                        height={48.94}
                        className="w-[148px] h-[48.94px]"
                    />
                </Link>
            </div>
            <div className="header__btns flex gap-2 items-center justify-center md:justify-end order-1 md:order-2 md:mb-0 mb-[17px]">
                <Button link="/#contact" text="kontakt" />
                <ButtonPhone text="+352 26 17 73 1" />
                <LanguageDropdown text="De" accent={true}/>
            </div>
        </div>
    )
}
export default Header
