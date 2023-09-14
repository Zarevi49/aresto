function ContactForm() {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Левая колонка */}
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Title</h2>
                <address className="not-italic mb-4">
                    éÄresto<br />
                    53, rue de la libération L-3511 Dudelange<br />
                    T +352 26 17 73 1<br />
                    E aresto@pt.lu
                </address>
            </div>

            {/* Правая колонка */}
            <div className="flex flex-col w-full md:w-1/2">
                <div className="mb-4">
                    <label htmlFor="topic" className="block mb-2">Choose a topic</label>
                    <select id="topic" className="w-full p-2 border rounded">
                        <option value="topic1">Topic 1</option>
                        <option value="topic2">Topic 2</option>
                        {/* Добавьте другие темы при необходимости */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input type="text" id="name" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
                </div>

                <button className="py-2 px-4 bg-blue-500 text-white rounded">Submit</button>
            </div>
        </div>
    );
}

export default ContactForm;
