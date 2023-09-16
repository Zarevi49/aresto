function ButtonPhone({ text, link }) {
    // if (!link) {
    //     return null;
    // }

    return (
        <a href={`tel:${link}`} className="bg-blue-500 bg-white text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer hover:bg-primary-light hover:bg-ease-in-out duration-300">T {text}</a>
    );
}

export default ButtonPhone;
