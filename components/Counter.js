function Counter({ value, text }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-4xl font-bold font-heading text-[75px] md:text-[100px] font-normal leading-110">
                {value}
            </div>
            <div className="font-lato text-xs font-normal leading-150 tracking-[1.3px] mt-2 uppercase">{text}</div>
        </div>
    )
}

export default Counter
