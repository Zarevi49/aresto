import CustomSelect from "./CustomSelect"
import FormButton from '../button/FormButton'
import Image from "next/image"
import { useTranslation } from "next-i18next"
import {useState} from "react"
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
}
function ContactForm() {
    const { t } = useTranslation()
    const [choices, setChoices] = useState(t("select_options.option1"))
    const [email, setEmail] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [touched, setTouched] = useState(false)
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleBlur = () => {
        setTouched(true) // Mark input as interacted
        setIsValid(isValidEmail(email)) // Validate on blur
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // Send formData to the server for processing and email sending
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ choices, name, email, message }),
            })

            if (response.status === 200) {
                setChoices(t("select_options.option1"))
                setName("")
                setEmail("")
                setMessage("")
            } else {
                console.log(response)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <form className="flex flex-col items-start mt-[45px] md:mt-0 px-[15px] md:px-0 w-full md:max-w-[520px] md:w-1/2" onSubmit={handleSubmit}>
            <div className="mb-[9px] w-full">
                <CustomSelect
                    options={[t("select_options.option1"), t("select_options.option2")]}
                    onChange={(selected) => setChoices(selected)}
                />
            </div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder={t("name")}
                className={"w-full px-[24px] py-[7px] mb-[9px] border-[1.5px] border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]"}
            />
            <div className={"mb-[9px] w-full"}>
                <input
                    type="email"
                    value={email}
                    placeholder={t("email")}
                    className={"w-full px-[24px] py-[7px] border-[1.5px] border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]"}
                    onChange={handleEmailChange}
                    onBlur={handleBlur}
                />
                {
                    !isValid && touched &&
                    <p style={{ color: 'red' }} className={"mt-1"}>{t("errors.email")}</p>
                }
            </div>

            <textarea
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
                placeholder={t("message")}
                className="w-full px-[24px] py-[11px] border-[1.5px] border-dark rounded-[22px] outline-none placeholder:text-dark text-dark font-normal text-[15px] resize-none"
                rows={6}
            ></textarea>

            <FormButton
                type="submit"
                className="self-end bg-blue-500 text-dark py-[6px] pl-[22px] pr-2.5 mt-[22px] rounded-full text-[13px] font-normal font-lato font-medium leading-[15px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer hover:bg-primary-light bg-ease-in-out duration-300 inline-flex items-center align-between bg-primary-light hover:bg-white"
            >
                {t("send")}
                <Image src={"/img/right-arrow.svg"} alt={"send"} width={15} height={15} className="ml-3.5" />
            </FormButton>

        </form>
    )
}

export default ContactForm
