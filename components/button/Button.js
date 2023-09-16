function Button({ text, link, showArrow = false, accent = false}) {
    if (!link) {
        return null;
    }

    return (
        <a href={link} className={`bg-blue-500 text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer hover:bg-primary-light bg-ease-in-out duration-300 inline-flex align-center ${accent ? 'bg-primary-light hover:bg-white' : 'bg-white'}`}>
            {text}
            {showArrow && (
                <svg width="17" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2.5">
                    <path d="M8.48212 1.12891L15.982 8.6288L8.48212 16.1287" stroke="#1D1D1D" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M15.982 8.62866H0.982239" stroke="#1D1D1D" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
            )}
        </a>
    );
}

export default Button;
