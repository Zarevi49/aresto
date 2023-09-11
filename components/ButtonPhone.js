function ButtonPhone({ text, link }) {
    // if (!link) {
    //     return null;
    // }

    return (
        <a href={`tel:${link}`} className="bg-blue-500 text-dark py-1.5 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-2 cursor-pointer hover:bg-primary-light hover:bg-ease-in-out duration-150 mx-1">T {text}</a>
    );
}

export default ButtonPhone;
