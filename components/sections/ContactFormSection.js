import ContactForm from "@/components/form/ContactForm"
import VerticalText from "@/components/VerticalText";

const ContactFormSection = () => {
    return (
        <div id="contact" className="w-full max-w-[1440px] px-[20px] mx-auto mt-[170.77px] relative mb-[187px] md:mb-[234px]">
            <VerticalText text={"contact"} top={"top-[40%]"} />
            <ContactForm />
        </div>
    )
}
export default ContactFormSection
