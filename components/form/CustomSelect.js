"use client"
import React, { useState } from 'react'
import Image from "next/image"
const CustomSelect = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(options[0])

    const handleOptionClick = (option) => {
        setSelected(option)
        setIsOpen(false)
        onChange(option)
    }

    return (
        <div className="w-full border-[1.5px] border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]">
            <div
                className="selected-option px-[24px] py-[9px] flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selected}</span>
                <Image
                    src={"/img/down-arrow.svg"}
                    alt={"Toggle Dropdown"}
                    className={isOpen ? "arrow-rotate" : ""}
                    width={20}
                    height={12}
                />
            </div>

            <ul className={`options-list ${isOpen ? "open" : ""} absolute w-full bg-white relative`}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        className="option px-[24px] py-[7px] cursor-pointer hover:bg-primary-light bg-white"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomSelect
