function ContactInfo({ data }) {
    return (
        <div className="flex flex-col w-full md:w-1/2 px-[36px] md:px-0">
            <div className="flex flex-col w-full md:w-1/2">
                {
                    data.title?.blocks.map((block) => {
                        if (block.type === "header" && block.data.text) {
                            return (
                                <h2 key={block.id} className="text-[65px] text-dark font-heading leading-90 mb-4 w-[271px]" dangerouslySetInnerHTML={ {__html: block.data.text} }>
                                    {/*{words.join(' ')}*/}
                                    {/*<span className="border-b-[3.5px] border-current inline-block">{lastWord}</span>*/}
                                </h2>
                            )
                        } else if (block.type === "paragraph" && block.data.text) {
                            return (
                                <p key={block.id} dangerouslySetInnerHTML={ {__html: block.data.text} }></p>
                            )
                        }
                    })
                }

            </div>
            {
                data.address && (
                    <div className="form-address text-[15px] leading-150 font-normal mt-[47px]">
                        {
                            data.address.blocks.length && data.address.blocks.map((block) => {
                                if (block.type === "paragraph" && block.data.text) {
                                    return (
                                        <p key={block.id}>{block.data.text}</p>
                                    )
                                }
                            })
                        }
                    </div>
                )
            }
            {
                data.contacts && (
                    <address className="not-italic text-[15px] leading-150 font-normal mt-6 md:mt-[22px]">
                        {
                            data.contacts.blocks.length && data.contacts.blocks.map((block) => {
                                if (block.type === "paragraph" && block.data.text) {
                                    return (
                                        <div key={block.id} dangerouslySetInnerHTML={ {__html: block.data.text} }></div>
                                    )
                                }
                            })
                        }
                    </address>
                )
            }
        </div>
    );
}

export default ContactInfo;
