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

            <form className="flex flex-col w-full max-w-[520px]">
                <div className="mb-[9px]">
                    <select id="topic" className="w-full border-2 border-dark focus:border-dark rounded-full px-[21px] py-[5px] h-[44px] outline-none placeholder:text-dark text-dark font-normal text-[15px]">
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
                    <button type={"submit"} className={`bg-blue-500 text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-2 cursor-pointer hover:bg-primary-light bg-ease-in-out duration-300 inline-flex align-center bg-primary-light hover:bg-white`}>
                        Send
                            <svg width="17" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2.5">
                                <path d="M8.48212 1.12891L15.982 8.6288L8.48212 16.1287" stroke="#1D1D1D" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M15.982 8.62866H0.982239" stroke="#1D1D1D" stroke-width="1.5" stroke-miterlimit="10"/>
                            </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
