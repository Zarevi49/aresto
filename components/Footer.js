const Footer = ({ link, phone, mail }) => {
    const footerSections = [
        {
            type: "image",
            src: "/img/footer-logo.svg",
            alt: "Logo",
        },
        {
            type: "address",
            lines: ["Äresto", "53, rue de la libération", "L-3511 Dudelange"]
        },
        {
            type: "contacts",
            items: [
                { href: `tel:${phone}`, text: phone },
                { href: `mailto:${mail}`, text: mail }
            ]
        },
        {
            type: "links",
            items: [
                { href: link, text: "Terms & Conditions" },
                { href: link, text: "Privacy Policy" },
                { href: link, text: "Business Permit" }
            ]
        },
        {
            type: "image",
            src: "/img/conceptPartners.svg",
            alt: "Partners"
        }
    ];

    return (
        <footer className="mx-auto w-full max-w-[1400px] bg-primary p-8 flex justify-between text-[15px] text-white rounded-t-[20px]">
            {footerSections.map((section, index) => {
                switch (section.type) {
                    case "image":
                        return (
                            <div key={index} className="mb-4">
                                <img src={section.src} alt={section.alt} className="w-[148px] h-[48.94px]" />
                            </div>
                        );
                    case "address":
                        return (
                            <div key={index} className="mb-4">
                                {section.lines.map((line, lineIndex) => (
                                    <p key={lineIndex}>{line}</p>
                                ))}
                            </div>
                        );
                    case "contacts":
                    case "links":
                        return (
                            <div key={index} className="mb-4 flex flex-col">
                                {section.items.map((item, itemIndex) => (
                                    <a key={itemIndex} href={item.href}>{item.text}</a>
                                ))}
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </footer>
    );
};

export default Footer;
