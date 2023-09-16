"use client"
import React from 'react';
import CustomSelect from "./CustomSelect"
import ContactInfo from './ContactInfo'
import InputComponent from './InputComponent'
import TextareaComponent from './TextareaComponent'
import FormButton from '../button/FormButton'
import Image from "next/image"

function ContactForm() {
    return (
        <div className="w-full max-w-[1163px] mx-auto flex flex-wrap md:flex-nowrap rounded-[20px] border-[1.5px] pt-[60px] pr-[49px] pb-[48px] md:pb-[26px] pl-[66px]">

            <ContactInfo
                title="Leave a message"
                address={['éÄresto', '53, rue de la libération', 'L-3511 Dudelange']}
                phone="+352 26 17 73 1"
                email="aresto@pt.lu"
            />

            <form className="flex flex-col items-start w-full max-w-[520px] md:w-1/2">
                <div className="mb-[9px]">
                    <CustomSelect
                        options={['Option 1', 'Option 2', 'Option 3']}
                        onChange={(selected) => console.log(selected)}
                    />
                </div>

                <InputComponent
                    type="text"
                    placeholder="Name"
                    className="w-full px-[24px] py-[7px] mb-[9px] border-[1.5px] border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]"
                />

                <InputComponent
                    type="email"
                    placeholder="Email"
                    className="w-full px-[24px] py-[7px] mb-[9px] border-[1.5px] border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]"
                />

                <TextareaComponent
                    placeholder="Message"
                    className="w-full px-[24px] py-[11px] mb-[9px] border-[1.5px] border-dark rounded-[22px] outline-none placeholder:text-dark text-dark font-normal text-[15px] resize-none"
                    rows="6"
                />

                <FormButton
                    type="submit"
                    className="bg-blue-500 text-dark py-1 px-2.5 mb-[9px] rounded-full text-[13px] font-normal font-lato font-medium leading-150 tracking-[1.3px] uppercase border-[1.5px] cursor-pointer hover:bg-primary-light bg-ease-in-out duration-300 inline-flex items-center align-between bg-primary-light hover:bg-white"
                >
                    Send
                    <Image src={"/img/right-arrow.svg"} alt={"send"} width={15} height={15} className="" />
                </FormButton>

            </form>

            <div className="absolute right-[16px] md:right-[34.3%] md:bottom-[-26%] -bottom-[16px]">
                <Image src={"/img/spoons.svg"} alt={"fd"} width={162.59} height={169.99} className="" />
            </div>

        </div>
    );
}

export default ContactForm;
