import Button from "@/components/Button";

function ContactForm() {
    return (
        <div className="w-full max-w-[1163px] mx-auto flex flex-wrap md:flex-nowrap rounded-[20px] border-2 pt-[60px] pr-[49px] pb-[26px] pl-[66px]">
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className="text-[65px] text-dark font-heading leading-90 mb-4 max-w-[271px]">Leave a message</h2>
                <address className="not-italic mb-4">
                    éÄresto<br />
                    53, rue de la libération <br/>
                    L-3511 Dudelange<br />
                    <br/>
                    T +352 26 17 73 1<br />
                    E aresto@pt.lu
                </address>
            </div>

            <div className="flex flex-col w-full max-w-[520px]">
                <div className="mb-[9px]">
                    <select id="topic" className="w-full border-2 border-dark rounded-full px-[21px] py-[5px] h-[44px] placeholder:text-dark text-dark font-normal text-[15px]">
                        <option value="" disabled selected hidden>Choose a topic</option>
                        <option value="topic1">Topic 1</option>
                        <option value="topic2">Topic 2</option>
                        <option value="topic1">Topic 1</option>
                        <option value="topic2">Topic 2</option>
                    </select>
                </div>

                <div className="mb-[9px]">
                    <input type="text" id="name" placeholder="Name" className="w-full px-[25px] py-[7px] border-2 border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]" />
                </div>

                <div className="mb-[9px] text-dark">
                    <input type="email" id="email" placeholder="Email" className="w-full px-[25px] py-[7px] border-2 border-dark rounded-full outline-none placeholder:text-dark text-dark font-normal text-[15px] h-[44px]" />
                </div>

                <div className="mb-[22px]">
                    <textarea id="message" placeholder="Message" className="w-full px-[25px] py-[7px] border-2 border-dark rounded-[22px] outline-none placeholder:text-dark text-dark font-normal text-[15px]" rows="6"></textarea>
                </div>

                <div className="text-right">
                    <Button link="#" text="Send" showArrow={true} accent={true} />
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
