import Button from "@/components/Button";
import ButtonPhone from "@/components/ButtonPhone";
import LanguageDropdown from "@/components/LanguageDropdown";

const Header = () => {
    return (
        <div className="header max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 pt-10 md:py-[24px] px-5">
            <div className="header__slogan font-heading flex items-center pl-[31px] md:block hidden">
                <span>Plus qu’un affaire <br/> de goût</span>
            </div>
            <div className="header__logo flex items-center justify-center order-2 mb-[39px] md:mb-0">
                <img className="w-[148px] h-[48.94px]" src="/img/logo.svg" alt="Logo" />
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
