import ContactForm from "@/components/form/ContactForm"
import VerticalText from "@/components/VerticalText"
import ContactInfo from "@/components/form/ContactInfo"
import Image from "next/image"
import React from "react"

const ContactFormSection = ({data}) => {
    return (
        <div id="contact" className="w-full max-w-[1440px] px-[20px] mx-auto mt-[170.77px] relative mb-[187px] md:mb-[234px]">
            {
                data.title_left && (
                    <VerticalText text={data.title_left} top={"top-[40%]"} />
                )
            }
            <div className="w-full max-w-[1163px] mx-auto flex flex-wrap md:flex-nowrap rounded-[20px] border-[1.5px] pt-[51px] md:pt-[60px] md:pr-[49px] md:pl-[66px] pb-[48px] md:pb-[26px]">

                <ContactInfo
                    data={data}
                />

                <ContactForm />

                <div className="absolute left-[60px] md:left-auto md:right-[34.9%] md:bottom-[-29.2%] bottom-[-16.2%]">
                    <Image src={"/img/spoons.svg"} alt={"fd"} width={162.59} height={169.99} />
                </div>

            </div>
        </div>
    )
}
export default ContactFormSection
