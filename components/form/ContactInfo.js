function ContactInfo({ title, address, phone, email }) {
    const words = title.split(' ');

    const lastWord = words.pop();

    return (
        <div className="flex flex-col w-full md:w-1/2 px-[36px] md:px-0">
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className="text-[65px] text-dark font-heading leading-90 mb-4 max-w-[271px]">
                    {words.join(' ')}
                    <span className="border-b-[3.5px] border-current inline-block">{lastWord}</span>
                </h2>
            </div>

            <div className="form-address text-[15px] leading-150 font-normal mt-[47px]">
                {address.map((line, index) => <p key={index}>{line}</p>)}
            </div>

            <address className="not-italic text-[15px] leading-150 font-normal mt-6 md:mt-[22px]">
                T <a href={`tel:${phone}`}>{phone}</a><br />
                E <a href={`mailto:${email}`}>{email}</a>
            </address>
        </div>
    );
}

export default ContactInfo;
