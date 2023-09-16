function ContactInfo({ title, address, phone, email }) {
    return (
        <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-[65px] text-dark font-heading leading-90 mb-4 max-w-[271px]">{title}</h2>

            <div className="form-address mb-4">
                {address.map((line, index) => <p key={index}>{line}</p>)}
            </div>

            <address className="not-italic mb-4">
                T: <a href={`tel:${phone}`}>{phone}</a><br />
                E: <a href={`mailto:${email}`}>{email}</a>
            </address>
        </div>
    );
}

export default ContactInfo;
