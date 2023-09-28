import Link from "next/link";
import Image from "next/image";

const Footer = ({footer}) => {
    return (
        <footer className="full px-5">
            <div className="w-full mx-auto max-w-[1400px] bg-primary pt-[58px] pb-[19px] md:px-8 md:pt-[50px] md:pb-8 rounded-t-[20px]">
                <div className="max-w-[1163px] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:gap-2.5 text-[15px] text-white mx-auto">
                    <div className="lg:mb-0 mb-[34px]">
                        <Image src={"/img/footer-logo.svg"} alt={"Footer logo"} width={148} height={48.94} />
                    </div>
                    <div className="mb-[26px] lg:mb-0 flex flex-col items-center text-center lg:items-start">
                        <p>Äresto</p>
                        {footer.address && (
                            <p className="md:max-w-[150px] text-left">{footer.address}</p>
                        )}
                    </div>
                    <div className="mb-4 lg:mb-0 flex flex-col items-center text-center lg:items-start">
                        {
                            footer.phone_number && (
                                <Link href={`tel:${footer.phone_number}`} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-0 hover:after:w-full transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">T {footer.phone_number}</Link>
                            )
                        }
                        {
                            footer.email && (
                                <Link href={`mailto:${footer.email}`} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-0 hover:after:w-full transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out">E {footer.email}</Link>
                            )
                        }
                    </div>
                    <div className="mb-[50px] lg:mb-0 flex flex-col items-center text-center lg:items-start">
                        {
                            footer.footer_page_links && footer.footer_page_links.map((item, index) => (
                                <Link href={item.page_link} className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-white after:h-[1px] after:w-full hover:after:w-0 transition-all duration-300 ease-in-out after:transition-all fter:transition-all hover:after:transition-all after:duration-300 hover:after:duration-300 after:ease-in-out hover:after:ease-in-out" key={index}>{item.page_title}</Link>
                            ))
                        }
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
