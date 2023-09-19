import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="full px-5">
            <div className="w-full mx-auto max-w-[1400px] bg-primary pt-[58px] pb-[19px] md:px-8 md:pt-[50px] md:pb-8 rounded-t-[20px]">
                <div className="max-w-[1163px] flex flex-col items-center md:items-start md:flex-row md:justify-between md:gap-2.5 text-[15px] text-white mx-auto">
                    <div className="md:mb-0 mb-[34px]">
                        <Image src={"/img/footer-logo.svg"} alt={"Footer logo"} width={148} height={48.94} />
                    </div>
                    <div className="mb-[26px] md:mb-0 flex flex-col items-center text-center md:items-start">
                        <p>Äresto</p>
                        <p>53, rue de la libération</p>
                        <p>L-3511 Dudelange</p>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col items-center text-center md:items-start">
                        <Link href={`tel:+352 26 17 73`} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-0 hover:after:w-full transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">T +352 26 17 73</Link>
                        <Link href={`mailto:aresto@pt.lu`} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-0 hover:after:w-full transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">E aresto@pt.lu</Link>
                    </div>
                    <div className="mb-[50px] md:mb-0 flex flex-col items-center text-center md:items-start">
                        <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-full hover:after:w-0 transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">Terms & Conditions</Link>
                        <Link href={"/privacy-policy"} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-full hover:after:w-0 transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">Privacy Policy</Link>
                        <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-full hover:after:w-0 transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">Business Permit</Link>
                    </div>
                    <div className="mb-4">
                        <Image src={"/img/conceptPartners.svg"} alt={"Concept Partners logo"} width={148} height={48.94} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
