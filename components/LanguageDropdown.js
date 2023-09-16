function ButtonPhone({ text, link,  accent = false }) {

    return (
        <div className={` bg-blue-500 text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer bg-primary-light hover:bg-ease-in-out duration-300 ${accent ? 'bg-primary-light hover:bg-white' : 'bg-white'}`}>{text}</div>
    );
}

export default ButtonPhone;
