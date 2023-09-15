const VerticalText = ({ text, top }) => {
    return (
        <div className={`text-[15px] font-medium tracking-[.1em] uppercase -rotate-90 absolute hidden md:inline-block ${
            top ? top : "top-[65%]"
        } lg:left-[78px] -left-[30px] origin-left`}>{ text }</div>
    )
}
export default VerticalText
