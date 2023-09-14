import ContactForm from "@/components/ContactForm"
import VerticalText from "@/components/VerticalText";

const ContactFormSection = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto relative mb-2">
            <VerticalText text={"contact"} top={"top-[40%]"} />
            <ContactForm />
        </div>
    )
}
export default ContactFormSection